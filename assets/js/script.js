function calcular(){
    var pv = document.getElementById("pv");
    var pc = document.getElementById("pc");
    
    var pv1 = Number(pv.value);
    var pc1 = Number(pc.value);
    
    var resultado = pv1 - pc1;
    var divicion = resultado / 2;
    var reinvercion = divicion + pc1;
    var ahorro = divicion / 2;
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.value = ("• La ganancia total generada es de: $" + resultado + " \n \n" +
     "• La re-invercion sera de: $" + reinvercion + " \n \n" +
     "• El ahorro para su cuenta personal es de: $" + ahorro + " \n \n" +
     "• El ahorro para su cuenta en comun es de: $" + ahorro + "");

}