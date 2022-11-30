//Первое задание

// let fun= document.querySelector('.btn')
// let a="Меня зовут Виктория."

// fun.onclick=() =>{
//     document.querySelector('.one').innerHTML=a;
// }

//Второе задание
let op;

function func() {
    let result;
    let num1= +Number(document.getElementById('num1').value)
    let num2= +Number(document.getElementById('num2').value)
    switch(op){
        case'+':
            result=num1+num2;
            break;
        case'-':
            result=num1-num2;
            break;
        case'*':
            result=num1*num2;
            break;
        case'/':
            result=num1/num2;
            break;
    }
    document.getElementById("result").innerHTML=result;
}
