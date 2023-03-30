const originalArray = [1,6,2,7,3,8,4,9,5,10];
const newArray = originalArray.map(addTen);

function addTen(num){
    if(num < 5){
        return num + 10;
    }else{
        return num;
    }
    
}
console.log(newArray)
