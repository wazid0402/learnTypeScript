function addNum(num1, num2){
    if(typeof num1 === number && typeof num2 === number){
       return num1 + num2;
    } else {
       return new Error("values are not number")
    }
  }

  let result = addNum("10", 20)
  console.log(result)
