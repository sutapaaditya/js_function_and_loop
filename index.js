// function and loops

let greet = (name) => {
  console.log("Jai Shri Krishna ! " + name);
}

// execute / call

// greet("Anupam");
// greet("Sutapa");
// greet("Chandrima");

let add = (x, y) => {
  return x*y; 
}

let cup = add(5, 8);

// console.log(cup);

let temp_conv = (c) => {
  return (c*1.8)+32
}

let f = temp_conv(31);

// console.log(f.toFixed(2));

// for (let a=1; a<6; a++) {
//   greet("Sutapa");
//   greet("Anupam");
// }

let m = document.getElementById('main');

let addElement = (el, text, cl) => {
  let e = document.createElement(el);

  if (cl) {
   e.classList.add(cl);
  }

  e.textContent = text
  m.append(e);
}

addElement('h1', 'Periodic Table');

addElement('p', 'Hare Krishna !', 'red');

addElement('code', "console.log('Welcome')");

addElement('p', "chandrima", "u");



// console.log(e);
//
// console.log(m);



