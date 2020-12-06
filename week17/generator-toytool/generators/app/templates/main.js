import HelloWorld from "./HelloWorld.vue"
import Vue from "Vue"


new Vue({
  render: h => h(HelloWorld)
}).$mount("#app")
