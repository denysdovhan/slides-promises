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

const promise = doSomething(27)

promise.then(res => console.log(res)) // 27
