const element = document.querySelector('#element');

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black';
};

// type in your code here
element.addEventListener("mouseenter", () => toggleColor(true));
element.addEventListener("mouseleave", () => toggleColor(false));