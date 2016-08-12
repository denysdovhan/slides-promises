//
// 3 — then() always return a Promise
//


function Promise(fn) {
  let state = 'pending'
  let deferred = null
  let value

  // same logic for resolve() and then()
  function handle(handler) {
    if (state == 'pending') {
      deferred = handler
      return
    }

    // if onResolved isn't present, then pass value to the next then()
    if (!handler.onResolved) {
      handler.resolve(value)
      return
    }

    // the second promise receives the return value of the first promise
    const next = handler.onResolved(value)
    handler.resolve(next)
  }

  function resolve(newValue) {
    state = 'resolved'
    value = newValue

    if (deferred) {
      handle(deferred)
    }
  }

  this.then = function (onResolved) {
    return new Promise(resolve => {
      handle({
        onResolved,
        resolve
      })
    })
  }

  fn(resolve)
}

// --- --- --- --- --- --- --- --- --- --- ---


function doSomething(value) {
  return new Promise(resolve => {
    resolve(value)
  })
}

doSomething(0)
  .then()
  .then(res => [res])
  // add some values
  .then(res => res.concat(1))
  .then(res => res.concat(2))
  .then(res => res.concat(3))
  .then(res => res.concat(4))
  // output result
  .then(res => console.log(res)) // []
  // nothing was passed next
  .then(res => console.log(res)) // undefined
