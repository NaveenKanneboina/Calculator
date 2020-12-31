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

for(var i=10;i<=14;i++){
  document.getElementById(i).onclick = function() {
    if(a!=0 && operator== undefined){
      b=a;
      a=0;
      operator=this.value
      if(operator=="power"){
        document.getElementById("history").innerHTML = b;
        document.getElementById("demo").innerHTML = a;
      }
      else{
        document.getElementById("history").innerHTML = b + operator;
        document.getElementById("demo").innerHTML = a;
      }
    }
  }
}

document.getElementById("X").onclick = function(){
  a=0;
  document.getElementById("history").innerHTML = "";
  document.getElementById("demo").innerHTML = a;
}

document.getElementById("square").onclick = function(){
  if(a!= 0){
    a = a*a
    document.getElementById("demo").innerHTML = a ;
  }
}

document.getElementById("1/x").onclick = function(){
  if(a!= 0){
    a = 1/a
    document.getElementById("demo").innerHTML = a ;
  }
}

document.getElementById("=").onclick = function(){
  document.getElementById("history").innerHTML = "";
  switch(operator){
    case "+": 
    a=parseFloat(b)+parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "-": 
    a=parseFloat(b)-parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "*": 
    a=parseFloat(b)*parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "/": 
    a=parseFloat(b)/parseFloat(a);
    document.getElementById("demo").innerHTML =a 
    break;
    case "power":
    a=Math.pow(parseInt(b),parseInt(a));
    document.getElementById("demo").innerHTML =a 
    break;
}
operator=undefined;
}

