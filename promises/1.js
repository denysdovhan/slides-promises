//
// 1 — Naiive implementation of Promise
//

function doSomething(value) {
  return {
    then: function (callback) {
      callback(value)
    }
  }
}

// --- --- --- --- --- --- --- --- --- --- ---

doSomething(27)
  .then(res => console.log(res)) // 27
