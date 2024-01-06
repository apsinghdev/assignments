// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

const time = () => {
    console.log(Date.now()/1000)
    setTimeout(time,1000);
};
time();