const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
  input = document.getElementById("input");
  const item = document.createElement('li');
  item.innerHTML = input.value;
  document.getElementById("list").appendChild(item);
  input.innerHTML() = "";
});