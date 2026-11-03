for (let num1 =2; num1 <=1000; num1++){
    let primo=true;
    for (let i= 2; i < num1; i++ ){
       if (num1 % i === 0){
        primo= false;
        break; }
    }
    if (primo ){
    console.log (num1);
    }
}    