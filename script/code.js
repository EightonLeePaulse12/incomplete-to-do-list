// let names = ["Kamve","Jason","Mujahid"]

// console.log(names.filter(name =>{
//     console.log(name[1])
//     if(name[1] == "a"){
//         return name
//     }
// }))

// let newArray = [3,"Codi", 7]

// // console.log(newArray => typeof Number(reduce((a,b) => a + b)))

// let addition = newArray.filter(d=>{
//     return Number.isInteger(d)
// }).reduce((a,b) =>{
//     return a + b
// })
// console.log(addition)

const input = document.querySelector("#input");
const namesButton = document.querySelector("#addNames");
const display = document.querySelector("#display");
const list = document.querySelector(".list");

let array = [];

namesButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Input is Empty!");
  } else {
    array.push(input.value);
    array = [...new Set(array)];
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });

    input.value = "";
    console.log(array);
  }
});

display.addEventListener("click", () => {
  array.forEach((namesButton) => {
    let newList = (list.innerHTML += `  
        <div class="eachItem"> 
        <input type="checkbox" name="checkbox" id="myCheckbox">
        <li class="myList">${namesButton}</li>
        <button id="exit">X</button>
        </div> 
        `);
    array = [];

    localStorage.setItem("myList", JSON.stringify("array"));
  });

  checked();
});

function checked() {
  let checkbox = document.querySelector("#myCheckbox");
  let listt = document.querySelector(".myList");
  if (checkbox.checked) {
    listt.textContent += "\u0336";
  }
}

const exit = document.querySelector("#exit");

exit.addEventListener("click", () => {
  list.innerHTML = "";
});

// function takeOutDuplicates(array) {
//   array = [...new Set(array)];
// //   return array;
// }
