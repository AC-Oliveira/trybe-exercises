const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = localStorage.getItem('backgroundColor');
body.style.color = localStorage.getItem('textColor');
const input = document.getElementById('firstInput');
const input2 = document.getElementById('secondInput');
input.addEventListener('keyup',function(xablau){
  if (xablau.key === 'Enter') {
    body.style.backgroundColor = input.value;
    localStorage.setItem('backgroundColor', body.style.backgroundColor);
  }
})
input2.addEventListener('keyup',function(xablau2){
  if (xablau2.key === 'Enter') {
    body.style.color = input2.value;
    localStorage.setItem('textColor', body.style.color);
  }
})