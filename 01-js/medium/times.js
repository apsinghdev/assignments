/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function calculateTime(n) {
    let sum = 0;
    // previously i was using date.getTime(), and it was giving me the same time for each start and end. why? because i was creating only one Date obj and was using it for both timestamp. so used seprate Date obj for each time timestamp to get the latest time 
    let startTime = new Date().getTime();
    console.log(startTime);
    for(i=1; i<=n; i++){
        sum = sum+i;
    }
    let endTime = new Date().getTime();
    console.log(endTime);
    let time = (endTime-startTime)/1000;
    return `${time} seconds`
}

console.log(calculateTime(10000000000));