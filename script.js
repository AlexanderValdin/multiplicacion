// se crea la función factorial
const factorial=(num)=>{
  if ( num < 0) {
    return -1;
  }
  else if (num==0) {
    return 1;
  }
  else {
    return (num*factorial(num-1));
  }
}
// función multiplicar

const multiplicar=()=> {
  var userinput = parseInt(prompt('Ingrese un número mayor que 0'));
  for (let i= 1; i<=userinput;i++) {
    let mult = i*userinput
    console.log(` ${i} x ${userinput} = ${mult}`);
  }
  for (let i= 1; i<=userinput;i++) {
    console.log(`Factorial de ${i} es: ${factorial(i)}`);
  }
}
multiplicar();
