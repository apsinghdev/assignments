let mystr = "";
mystr = mystr.toLowerCase();
let trimmedAr = mystr.match(/^[a-z]*$/ig);
// let strArr = mystr.split("");
console.log(trimmedAr.length);

/*

what i have to with this string 

1. turn the whole string into lowercase
2. extract only the charcters from that string
3. split each char into array
4. iterate using for loop.

*/ 