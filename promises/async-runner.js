function async(gen) {                     // приймаємо генератор в якості аргумента

  const task = gen()                      // отримуємо ітератор з генератора

  let result = task.next()                // переходимо до першого yield

  (function step() {                      // визачаємо НВФВ для кожного кроку

    if (!result.done) {                   // якщо ітератор не завершений
      Promise.resolve(result.value)       // вирішуємо завдання
        .then(value => {
          result = task.next(value)       // повертаємо отримане значення
          step()                          // обробляємо наступний yield
        })
        .catch(error => {
          result = task.throw(error)      // якщо сталась помилка, кидаємо помилку
          step()                          // обробляємо наступний yiled
        })
    }

  }())
}

// ...

const fs = require('fs')

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

// Запускаємо завдання

run(function*() {
  const contents = yield readFile("async-runner.js")
  console.log(contents)
});
