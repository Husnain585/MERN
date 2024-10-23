const promise = new Promise((resolve, reject) => {
    const a = 2;
    if (a%2==0){
        
        setTimeout(() => {
            resolve("even")
        }, 3000)
    }
    reject('The number is odd');
})
promise.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})

const promise1 = new Promise((resolve, reject) => {
    const a = 2;
    if (a%2==1){
        resolve('The number is even');
    }
    reject('The number is odd');
})
promise1.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})

