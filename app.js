

// PRACTICE

const num5 = document.querySelector("#a")
console.log(a.innerHTML);
a.innerHTML="hello sir abdullah";












 //question no1
const names = document.querySelector("#names")
names.innerHTML
console.log(names);


const email=document.querySelector('#email');
console.log(email);

//question no2
function total() {
const num1 = +document.querySelector('.num1').value
const num2 = +document.querySelector('.num2').value
const operator = document.querySelector('.operator').value
const h3 = document.querySelector('.result')

switch (operator) {
    case("+"):
    h3.innerHTML=  "your answer is " + num1 + num2;
    break
    case("-"):
    h3.innerHTML= num1 - num2;
    break
    case("*"):
    h3.innerHTML= num1 * num2;
    break
    case("/"):
    h3.innerHTML= num1 / num2;
    break
    case("%"):
    h3.innerHTML= num1 % num2;
    break;
    default:
    h3.innerHTML="error"
}
}









// question no 3

function cal() {
    const  num1 = +document.querySelector("#num1").value
    const  num2 = +document.querySelector("#num2").value
    const  operator = document.querySelector("#operator").value
    const  calculate_result = document.querySelector("#result")
 console.log(num1);
 console.log(num2);
 console.log(operator);

switch (operator){
    case "+":
        calculate_result.innerHTML =  num1 + num2;
        break
        case "-":
        calculate_result.innerHTML =  num1 - num2;
        break
        case "*":
        calculate_result.innerHTML =  num1 * num2;
        break
        case "/":
        calculate_result.innerHTML =  num1 / num2;
        break
        case "%":
        calculate_result.innerHTML =  num1 % num2;
        break
        default:
        calculate_result.innerHTML="error";
}

}




























