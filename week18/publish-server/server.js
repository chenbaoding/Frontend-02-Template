let http = require("http")
let https = require("https")
let fs = require("fs")
let unzipper = require("unzipper")
let querystring = require("querystring")

//2、auth路由：接受code，用code+clinet_id+client_secret换token
function auth(request, response) {
  let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+$)/)[1])
  getToken(query.code, function (info) {
    console.log(info)
    response.write(
      `<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`
    )
    response.end()
  })
}

function getToken(code, callback) {
  let request = https.request(
    {
      hostname: "github.com",
      path: `/login/oauth/access_token?code=${code}?client_id=Iv1.73f6a40000cece08?client_secret=57e0a846c1605e2aa4d2ecab1c1730a25442ced6`,
      port: 443,
      method: "POST",
    },
    function (response) {
      let body = ""
      response.on("data", (chunk) => {
        body += chunk.toString()
      })
      response.on("end", (chunk) => {
        callback(querystring.parse(body))
      })
    }
  )
  request.end()
}

function getUser(token, callback) {
  let request = https.request(
    {
      hostname: "api.github.com",
      path: `/user`,
      port: 443,
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "yang-publish",
      },
    },
    function (response) {
      let body = ""
      response.on("data", (chunk) => {
        body += chunk.toString()
      })
      response.on("end", (chunk) => {
        callback(JSON.parse(body))
      })
    }
  )
  request.end()
}

//4、publush路由：用token获取用户信息，检查权限，接受发布

function publish(request, response) {
  let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+$)/)[1])
  getUser(query.token, (info) => {
    if (info.login === "yanggelinux") {
      request.pipe(unzipper.Extract({ path: "../server/public" }))
      request.on("end", function () {
        response.end("Success")
      })
    }
  })
}

http
  .createServer(function (request, response) {
    console.log("request.url", request.url)
    if (request.url.match(/^\/auth\?/)) {
      return auth(request, response)
    }
    if (request.url.match(/^\/publish\?/)) {
      return publish(request, response)
    }
    // let outFile = fs.createWriteStream("../server/public/index.html")
    // request.pipe(outFile)
    //request.pipe(unzipper.Extract({ path: "../server/public" }))
    // request.on("data", (chunk) => {
    //   outFile.write(chunk)
    // })
    // request.on("end", (chunk) => {
    //   outFile.end()
    //   response.end("Success")
    // })
  })
  .listen(8082)
