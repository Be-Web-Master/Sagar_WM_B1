// day-09 switch case
// let userAge = 65;
// let userAgeMeassage = "";
// switch(true){
//     case userAge < 18:
//         userAgeMeassage = "under Age"
//         break;
//     case userAge >= 18 && userAge <= 60: 
//         userAgeMeassage += "adult ... "
//         break;
//      case userAge > 60: 
//         userAgeMeassage += "and senior"
//         break;   
//     default : console.log("ha bhai pta nahi he")
//         break;
// }

// do while 
let i=0;
let twoPowered =2**2;
// while (i<1) {
//     twoPowered = twoPowered ** 2
//     console.log(twoPowered)
//     i++;
//     console.log("hello")
// }
// console.log("bahar")

do{
    twoPowered = twoPowered ** 2
    console.log({twoPowered})
    i++;
    
}while(i<0);
    console.log("bahar")
// obj

    // let arr = [1,2,3,4,5,5]
// for(const num of arr)  console.log("hh"+num);

const obj = {
    a:1,
    b:4,
    a:4
}

for (const key in obj){
    console.log(key)
}
// snippet:///day-09-3.js