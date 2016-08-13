//
// 3 — Promise has state
//

// A promise can be pending waiting for a value, or resolved with a value.
// Once a promise resolves to a value, it will always remain at that value
// and never resolve again.

function Promise(fn) {
  let state = 'pending'
  let deferred
  let value

  // same logic for resolve() and then()
  function handle(onResolved) {
    if (state == 'pending') {
      deferred = onResolved
      return
    }
    onResolved(value)
  }

  function resolve(newValue) {
    state = 'resolved'
    value = newValue

    if (deferred) {
      handle(deferred)
    }
  }

  this.then = function (onResolved) {
    handle(onResolved)
  }

  fn(resolve)
}

// --- --- --- --- --- --- --- --- --- --- ---

// We are free to call then() and resolve()
// whenever they suit our purposes.

function doSomething(value) {
  return new Promise(resolve => {
    resolve(value)
  })
}

const promise = doSomething(27)

promise.then(res => console.log(res)) // 27
promise.then(res => console.log(res)) // 27
