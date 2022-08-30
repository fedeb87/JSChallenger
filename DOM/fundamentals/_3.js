const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
  const currentValue = parseInt(document.getElementById('button').innerHTML);
  document.getElementById('button').innerHTML= currentValue + parseInt(1);
});