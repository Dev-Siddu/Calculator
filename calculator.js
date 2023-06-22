const body = document.querySelector('body');
const table = document.querySelector('table');
let op = document.querySelector('#op');
let ans;

console.log(table)
table.addEventListener('click',(e)=>{
        let value = e.target.innerText;
        if( value == "CE"){
            op.value = "";
        }else if(value == '='){
            ans = eval(op.value);
            if(ans){
                op.value = ans;
            }else{
                op.value = "Input is incorrect";
            }
            
        }else if(value >= 0 && value <= 9 || value=='+' || value == '-' || value == '*' || value == '/'){
            op.value += value;
        }
});

body.addEventListener('keypress',keyboardKey);
body.addEventListener('keydown',backspace);

function keyboardKey(e){
    // console.log(e);
    // console.log(e.key);
    let eKey = e.key;

    switch(eKey){
        case '0' : 
        case '1' : 
        case '2' : 
        case '3' : 
        case '4' : 
        case '5' : 
        case '6' : 
        case '7' : 
        case '8' : 
        case '9' :  
        case '+' :
        case '-' :
        case '*' :
        case '/' : op.value += eKey;break;
        case 'Enter' : op.value = eval(op.value);break;
    }
}


function backspace(e){
    // console.log(e); console.log(e.key);
    if(e.key == 'Backspace'){
        // console.log("BackSpace Pressed",op.value);
        // console.log("length is ",strlength(op.value) );
        op.value = op.value.slice(0, strlength(op.value)-1);
    }
}

function strlength(str){
    let count = 0;
    for(let x in str){
        count++;
    }
    return count;
}


