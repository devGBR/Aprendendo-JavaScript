function calculadora(){
            var num1 = prompt("Digite o primeiro valor")
            num1 = parseFloat(num1)
               
            var num2 = prompt("Digite o segundo valor")
            num2 = parseFloat(num2)
            var ad = num1+num2
            var sub = num1-num2
            var mult = num1*num2
            var div = num1/num2

                document.write("<BR>Resultado = ", ad)
                document.write("<br>Resultado = ", sub)
                document.write("<br>Resultado = ", mult)
                document.write("<br>Resultado = ", div)
            }
 