// Older way of selecting elements from the DOM
// const divOne = document.getElementById('div-one');

// divOne.style.color = 'red';

// const cards = document.getElementsByClassName('card');

// const allDivs = document.getElementsByTagName('div');

// console.log(cards);
// console.log(allDivs);

///////////////////////////
//// querySelector way ////
///////////////////////////

////// Selecting Elements By id //////
// const divOne = document.querySelector('#div-one');
// const h2InDivTwo = document.querySelector('#div-two h2');

const hideBtn = document.querySelector('#toggle-hide');
const orangeBtn = document.querySelector('#toggle-orange');

// hideBtn.addEventListener('click', function() {
//   divOne.classList.toggle('hide');
// });

// h2InDivTwo.addEventListener('click', function() {
//   divOne.classList.toggle('orange-text');
// });

//// Selecting Elements by class names ////
const divsWithClassCard = document.querySelectorAll('.card');

const h2InCardClass = document.querySelectorAll('.card h2');
// divsWithClassCard.forEach(function(card) {
//   card.style.color = 'purple';
// });

const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     h2InCardClass.forEach(function(h2) {
//       h2.style.color = 'red';
//     });
//   });
// });

hideBtn.addEventListener('click', function() {
  h2InCardClass.forEach(function(h2) {
    h2.classList.toggle('hide');
  });
});

orangeBtn.addEventListener('click', function() {
  document.querySelectorAll('.card p').forEach(function(paragraph) {
    paragraph.classList.toggle('orange-text');
  });
});

// divsWithClassCard.style.color = 'purple';

console.log(h2InCardClass);
