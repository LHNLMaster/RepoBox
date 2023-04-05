const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

box1.addEventListener('click', () => {
  const color2 = box2.style.backgroundColor;
  box2.style.backgroundColor = box1.style.backgroundColor;
  box1.style.backgroundColor = color2;
});

box2.addEventListener('click', () => {
  const color3 = box3.style.backgroundColor;
  box3.style.backgroundColor = box2.style.backgroundColor;
  box2.style.backgroundColor = color3;
});

box3.addEventListener('click', () => {
  const color1 = box1.style.backgroundColor;
  box1.style.backgroundColor = box3.style.backgroundColor;
  box3.style.backgroundColor = color1;
});
