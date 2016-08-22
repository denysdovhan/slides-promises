//
// 6 — Unexpected errors
//

// Previous example just pass resolved values down the line.
// But what if it'd be Promise too? It whould be resolved.

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

    // which handler should be used
    const handlerCallback = state == 'resolved' ? handler.onResolved : handler.onRejected;

    // if handlerCallback isn't present, then pass value next
    if (!handlerCallback) {
      if (state == 'resolved') {
        handler.resolve(value)
      } else {
        handler.reject(value)
      }
      return
    }

    let next = null;
    try {
      next = handlerCallback(value)
    } catch (e) {
      handler.reject(e)
      return
    }

    handler.resolve(next)
  }

  // reject function
  function reject(reason) {
    state = 'rejected'
    value = reason

    if (deferred) {
      handle(deferred)
    }
  }

  function resolve(newValue) {
    try {
      if (newValue && typeof newValue.then == 'function') {
        newValue.then(resolve, reject)
        return
      }

      state = 'resolved'
      value = newValue

      if (deferred) {
        handle(deferred)
      }
    } catch (e) { reject(e) }
  }

  this.then = function (onResolved, onRejected) {
    return new Promise((resolve, reject) => {
      handle({ onResolved, onRejected, resolve, reject })
    })
  }

  this.catch = function (onRejected) {
    this.then(null, onRejected);
  }

  fn(resolve, reject)
}

// --- --- --- --- --- --- --- --- --- --- ---

function doSomething(value) {
  return new Promise((resolve, reject) => {
    if (value > 0) {
      resolve(value)
    } else {
      reject(value)
    }
  })
}

doSomething(-1)
  .then(
    value => {
      console.log(`Result: ${value}`)
    },
    error => {
      console.error(`Error: ${error}`)
      return 'recovered!';
    }
  )
  .then(
    value => console.log(`Result: ${value}`),
    error => console.error(`Error: ${error}`)
  )
