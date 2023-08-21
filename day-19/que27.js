// Generate and print numbers between 1 and 100 that are divisible by both 7 and 9.

function generateNum(start,end) {
    for(let i = start; i <= end; i++) {
       if(i%7==0 && i%9==0) console.log(i);
    }
}
generateNum(1,100)

