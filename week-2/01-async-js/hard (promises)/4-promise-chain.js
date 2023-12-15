/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const promise1 = new Promise((resolve)=>{
        setTimeout(resolve,t*1000)
    })
    return promise1
}

function wait2(t) {
    const promise2 = new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
    return promise2;
}

function wait3(t) {
    const promise3 = new Promise((resolve) => {
      setTimeout(resolve, t * 1000);
    });
    return promise3;
}

async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    const promises = [await wait1(t1), await wait2(t2),await wait3(t3)]
    return Promise.all(promises).then(()=>{
        const endTime = Date.now()
        return endTime-startTime;
    })
}

// calculateTime(3,3,3).then((time)=>{
//     console.log(time);
// })

module.exports = calculateTime;
