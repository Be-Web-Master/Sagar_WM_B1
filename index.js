function calculateTotalTicketPrice(ages) {
    let totalPrice = 0;

    for (let i = 0; i < ages.length; i++) {
        if (ages[i]<=8) {
            totalPrice+=5;
        }
       else if(ages[i]>=12 && ages[i]<=17) {
            totalPrice+=10;
        }
        else if(ages[i]>=18 && ages[i]<65) {
            totalPrice+=15;
        }
        else if(ages[i]>=65) {
            totalPrice+=8;
        }
        
    }

    return totalPrice
}
const arr = [1,1,8,15,30,65]

console.log(calculateTotalTicketPrice(arr));