var a=0;
var b;
var operator;
var result;

for(var i=0;i<=9;i++){
  document.getElementById(i).onclick = function() {
    if(a==0){
      a=this.id
    }else{
      a=a+this.id
    }
    document.getElementById("demo").innerHTML = a;
    console.log(a)
  }
}

for(var i=10;i<=13;i++){
  document.getElementById(i).onclick = function() {
    b=a;
    a=0;
    operator=this.value
    document.getElementById("history").innerHTML = b + operator;
    document.getElementById("demo").innerHTML = a;
    console.log(operator)
  }
}

document.getElementById("X").onclick = function(){
  a=0;
  document.getElementById("history").innerHTML = "";
  document.getElementById("demo").innerHTML = a;
}

document.getElementById("=").onclick = function(){
  document.getElementById("history").innerHTML = "";
  switch(operator){
    case "+": 
    a=parseInt(b)+parseInt(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "-": 
    a=parseInt(b)-parseInt(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "*": 
    a=parseInt(b)*parseInt(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "/": 
    a=parseInt(b)/parseInt(a);
    document.getElementById("demo").innerHTML =a 
    break;
}
}
