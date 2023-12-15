/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const promise = new Promise((resolve)=>{
        setTimeout(resolve,milliseconds);
        
    })
    return promise;
}
// sleep(6000).then(()=>{
//     console.log("ho gya")
// })
module.exports = sleep;
