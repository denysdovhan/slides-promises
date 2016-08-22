function async(gen) {                     // recieve generator as argument

  const task = gen()                      // get a iterator from generator

  let result = task.next()                // go to the first yield statement

  function step() {                      // define IIFE for each step

    if (!result.done) {                   // if there is work
      Promise.resolve(result.value)       // resolve the velue
        .then(value => {
          result = task.next(value)       // return value back in generator
          step()                          // go to the next yield statement
        })
        .catch(error => {
          console.log(error);
          result = task.throw(error)      // if there is an error, throw it
          step()                          // go to the next yiled statement
        })
    }

  }

  step()
}

// ...

const fs = require('fs')

// readFile should return promise
function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, contents) {
      if (err) {
        reject(err)
      } else {
        resolve(contents)
      }
    })
  })
}

// Run task

async(function *() {
  const contents = yield readFile(__filename)
  console.log(contents.toString())
});
