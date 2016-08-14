const unhandled = new Map();

// якщо відхилення необроблене, додаємо його в мапу
process.on("unhandledRejection", (reason, promise) => {
    unhandled.set(promise, reason);
});

process.on("rejectionHandled", (promise) => {
    unhandled.delete(promise);
});

const handler = setInterval(() => {
    unhandled.forEach((reason, promise) => {
        console.log(reason.message ? reason.message : reason);
        // робимо щось, щоб обробити ці відхилення
        promise.catch((reason) =>
        	console.error(`Handled: ${reason}`))
    });
    unhandled.clear();

    if (i == 10) clearInterval(handler);
}, 2000);

let i = 0;

const producer = setInterval(() => {
	Promise.reject(`Promise ${i++}`);
	if (i == 10) clearInterval(producer);
}, 500);

