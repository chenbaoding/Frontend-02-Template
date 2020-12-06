import { createElement } from "./framework.js"
import { Carousel } from "./Carousel.js"
import { Button } from "./Button.js"
import { List } from "./List.js"

let d = [
  {
    img:
      "https://static001.geekbang.org/resource/image/40/b1/40da5d89c59262711beaa206c48e67b1.jpg",
    url: "www.baidu.com",
    title: "大猫",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/50/fe/5022c19ab75d3b0215a276167a69b2fe.jpg",
    url: "www.baidu.com",
    title: "大大猫",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/a6/f1/a691e6b628ceb9d7c2ca9780126301f1.jpg",
    url: "www.baidu.com",
    title: "大大大猫",
  },
  {
    img:
      "https://static001.geekbang.org/resource/image/ee/1c/ee5415f97405929ec61a586991e2111c.jpg",
    url: "www.baidu.com",
    title: "大大大大猫",
  },
]

// let a = (
//   <Carousel
//     src={d}
//     onChange={(event) => console.log(event.detail.position)}
//     onClick={(event) => (window.location.href = event.detail.data.url)}
//   />
// )

// let a = <Button>content</Button>
let a = (
  <List data={d}>
    {(record) => (
      <div>
        <img src={record.img} />
        <a href={record.url}>{record.title}</a>
      </div>
    )}
  </List>
)

a.mountTo(document.body)
