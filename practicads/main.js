var valor1,valor2,res,h3

h3=document.getElementById("res")

function suma(){
    valor1= parseFloat(document.getElementById("vl1").value)
    valor2= parseFloat(document.getElementById("vl2").value)

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("vl1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("vl2").focus()
          return
        }
        
    }

    var resultado=valor1+valor2
    
    h3.innerHTML=resultado
}

function resta(){
    valor1= parseFloat(document.getElementById("vl1").value)
    valor2= parseFloat(document.getElementById("vl2").value)

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("vl1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("vl2").focus()
            return
        }
    }

    var resultado=valor1-valor2
    
    h3.innerHTML=resultado
}

function multiplicaion(){
    valor1= parseFloat(document.getElementById("vl1").value)
    valor2= parseFloat(document.getElementById("vl2").value)

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("vl1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("vl2").focus()
            return
        }
    }

    var resultado=valor1*valor2
    
    h3.innerHTML=resultado
}

function divicion(){
    valor1= parseFloat(document.getElementById("vl1").value)
    valor2= parseFloat(document.getElementById("vl2").value)

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="El valor 1 no es valido"
            document.getElementById("vl1").focus()
        }else{
            h3.innerHTML="El valor 2 no es valido"
            document.getElementById("vl2").focus()
            return
        }
    }

    var resultado=valor1/valor2
    
    h3.innerHTML=resultado
}