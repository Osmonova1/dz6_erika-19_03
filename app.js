const obj = {
    height: 200,
    width: 300,
    title: "My block"
}

// Вариант №1
// const result = Math.pow(200,2);
// console.log(result);

// const result2 = Math.pow(300,2);
// console.log(result);



// Вариант №2
// const result = 200**2
// console.log(result);

// const result2 = 300**2
// console.log(result2);



// Вариант №3
// console.log(obj.height * obj.height);
// console.log(obj.width * obj.width);



function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  a = pow(200,2)

  console.log(a);
  

  function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  a = pow(300,2)

  console.log(a);
