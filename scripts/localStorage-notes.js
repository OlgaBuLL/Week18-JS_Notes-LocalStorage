const form = document.querySelector("form");
const input = document.querySelector(".text");
const list = document.querySelector(".list");
// const deleteBtn = document.querySelector(".delete");

let array = [];

let createLi = (note) => {
  let li = document.createElement("li");
  li.textContent = note;
  list.appendChild(li);
  li.onclick = () => {
    createBtn(li);
  };
};

function createBtn(li) {
  let button = document.createElement("button");
  button.textContent = " X ";
  li.appendChild(button);
  button.onclick = () => {
    list.removeChild(li);
  };
  li.onclick = () => {
    deleteBtn(li, button);
  };
}

function deleteBtn(li, button) {
  li.removeChild(button);
  li.onclick = () => {
    createBtn(li);
  };
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  array.push(input.value);
  localStorage.setItem("item", array);
  createLi(input.value);
  input.value = "";
});

array.forEach((element) => {
  createLi(element);
});

// function del() {
//   list.removeChild(li);
// }

// let array = localStorage.getItem("item")
//   ? JSON.parse(localStorage.getItem("item"))
//   : [];
// localStorage.setItem("item", JSON.stringify(array));

// const storage = JSON.parse(localStorage.getItem("item"));
// console.log(storage);

// let createLi = (note) => {
//   let li = document.createElement("li");
//   li.textContent = note;
//   list.append(li);
// };

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   array.push(input.value);
//   console.log(input.value);
//   console.log(array);
//   localStorage.setItem("item", JSON.stringify(array));
//   createLi(input.value);
//   input.value = "";
// });

// storage.forEach((element) => {
//   createLi(element);
// });
