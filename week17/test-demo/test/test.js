var assert = require("assert")

import { add } from "../add.js"

describe("this is test", function () {
  it("1 + 2 = 3", function () {
    assert.equal(add(1, 2), 3)
  })
})
