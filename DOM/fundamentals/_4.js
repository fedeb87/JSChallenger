const input = document.getElementById('input');
input.addEventListener('input', () => {
  // type in your code here
  const list = document.getElementById('list');
  const listItem = Array.from(list.children);
  
  listItem.forEach((item) => {
    !(item.innerHTML.includes(input.value)) 
      ? item.style.display='none' 
      : item.style.display=''
  });
});