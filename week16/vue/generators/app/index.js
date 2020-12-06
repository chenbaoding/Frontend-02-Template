var Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // Next, add your custom code
    // this.option("babel") // This method adds support for a `--babel` flag
  }
  async initPackege() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      }
    ])
    const pkgJson = {
      "name": answers.appname,
      "version": "1.0.0",
      "description": "",
      "main": "generators/app/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
      },
      "dependencies": {
       
      },
    }

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson)
    this.npmInstall(['vue'], { 'save-dev': false });
    this.npmInstall(['webpack',"vue-loader","css-loader",
    "vue-style-loader","vue-template-compiler","copy-webpack-plugin"], { 'save-dev': true });
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      { title: answers.appname }
    )
    this.fs.copyTpl(
      this.templatePath("HelloWorld.vue"),
      this.destinationPath("src/HelloWorld.vue"),
    )
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js"),
    )
    this.fs.copyTpl(
      this.templatePath("main.js"),
      this.destinationPath("src/main.js"),
    )
  }
}
