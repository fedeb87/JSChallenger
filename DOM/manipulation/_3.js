// type in your code here
const div = document.createElement('div');
div.setAttribute('id', 'wrapper');
const target = document.getElementById('button');
target.after(div);
div.appendChild(target);

// expects button to be child of element with id 'wrapper'
const btn = document.querySelector('#wrapper button');

if(btn) {
  const handleClick = () => {
    btn.innerText = 'Thank you! ❤️'
  }
  btn.addEventListener('click', handleClick)
}