const itemPrice1 = [100,200,300,400];
const gst1 = 18;

const calculateGstPrice = (item,gst) => {
    return item.map((val,i)=> val + val*gst/100 )
}
calculateGstPrice(itemPrice1,gst1);


const calculateGstPriceSum = (val,i,arr)=>{
    arr.reduce((a,val,i,arr)=>{
    return a+val
    },0)
}
calculateGstPriceSum(calculateGstPrice)









