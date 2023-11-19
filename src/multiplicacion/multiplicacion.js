function multiplicacion(opc, num1, num2){
    switch(opc){
        case 1:
            if(opc === 1){
                return num1 * num2;
            }
        case 2:
            if(opc === 2){
                return Math.pow(num1, 2) + Math.pow(num2, 3);
            }
        case 3:
            if(opc === 3){
                return num1 * num2 / 2;
            }
        default:
            if(typeof num1 != "number" || typeof num2 != "number"){
                return "Los datos proporcionados no son validos"
            }
    }
}

module.exports = multiplicacion;