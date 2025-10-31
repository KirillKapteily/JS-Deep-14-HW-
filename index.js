//1
const delayPromise1 = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    })
};

const promise12 = delayPromise1("1", 1000);
const promise22 = delayPromise1("2", 3000);
const promise32 = delayPromise1("3", 2000);
const promise42 = delayPromise1("4", 1000);
const promise52 = delayPromise1("5", 2200);


Promise.all([promise12, promise22, promise32, promise42, promise52])
    .then(val => console.log(val))
    .catch(err => console.log(err))

//2

const randomDelay = (text) => {
    let randomNumbers = [1000, 2000, 3000, 4000, 5000]
    let randomIndex = Math.floor(Math.random() * randomNumbers.length);
    let randomNumber = randomNumbers[randomIndex];

    return new Promise(resolve => {
        setTimeout(() => resolve(text), randomNumber);
    })
};
const p1 = randomDelay("1");
const p2 = randomDelay("2");
const p3 = randomDelay("3");
const p4 = randomDelay("4");
const p5 = randomDelay("5");


Promise.race([p1, p2, p3, p4, p5])
    .then(val => console.log(val))
    .catch(err => console.log(err))

