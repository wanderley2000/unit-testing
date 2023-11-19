function resta(num1, num2, num3) {
    if (typeof num1 != "number" || typeof num2 != "number" || typeof num3 != "number") {
      return "datos invalidos";
    }if(typeof num1 === "number" || typeof num2 === "number" || typeof num3 === "number"){
        return num1 - num2 - num3;
    }if(num1 === 10){
        return num1 - num2 - num3;
    }
}
  module.exports = resta;


