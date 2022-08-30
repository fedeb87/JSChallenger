const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
  const fullname = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
  document.getElementById("fullName").value = fullname;
});