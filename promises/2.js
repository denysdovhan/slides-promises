//
// 2 — Promise constructor
//

function Promise(fn) {
  let callback = null

  function resolve(value) {
    callback(value)
    // setTimeout(_ => callback(value), 0)
  }

  this.then = function (cb) {
    callback = cb
  }

  fn(resolve)
}

// --- --- --- --- --- --- --- --- --- --- ---


function doSomething (value) {
  return new Promise(resolve => {
    resolve(value)
  })
}

doSomething(27)
  .then(res => console.log(res))
