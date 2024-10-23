const promise = new Promise (( resolve, reject ) => {
    setTimeout(() => {
        resolve(new Date());
    }, 1000);
})

const main  = async () => {
    await promise.then((resolve) => {
        console.log(resolve);
    })
    await promise.catch((reject) => {
        console.error(reject);
    })
    console.log(await promise);
}
console.log(main());