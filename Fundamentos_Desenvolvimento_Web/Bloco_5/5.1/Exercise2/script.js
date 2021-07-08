document.querySelector('#header-container').style.background = 'forestgreen';
document.querySelector('.emergency-tasks').style.background = 'pink';
let hThreeFirstBackground = document.querySelectorAll('.emergency-tasks div h3')
for (let index = 0; index < hThreeFirstBackground.length;index += 1){
  hThreeFirstBackground[index].style.background = 'purple'
}
document.querySelector('.no-emergency-tasks').style.background = 'yellow'
let hThreeSecondBackground = document.querySelectorAll('.no-emergency-tasks div h3')
for (let index2 = 0; index2 < hThreeSecondBackground.length;index2 += 1){
  hThreeSecondBackground[index2].style.background = 'black'
}
document.querySelector('#footer-container').style.background = 'rgb(6, 65, 6)'

