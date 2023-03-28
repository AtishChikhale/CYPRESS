// Syncronous => Executing the code one by one known as syncronous
// Asyncronous => Executing the code in bunch known as asynchronous, 
//and whatever the request get first it shown in browser ex FB

// javascript => sync => but avoid compailation said its Asynchronous
// javascript => Async => When Ajax code added in javascript

// cypress => commands => Async
// cypress => execution => is always sync

// in cypress we can use js code, yes we will make it sync

// js as sync => execution or responce step by step gives

function add() {
  console.log(7 + 8);
}

function second() {
  console.log(8 + 8);
}
add();
second();

// js as asynchronous => by using setTimeout function we can made it asynchronously

function add1() {
  setTimeout(() => {
    console.log(4 + 4);
  }, 3000);
}

function second1() {
  console.log(9 + 9);
}

add1();
second1();
