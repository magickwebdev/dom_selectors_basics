////////////////////////////
// Older way of selecting //
// elements from the DOM ///
////////////////////////////

const divOne = document.getElementById('div-one');

const allDivs = document.getElementsByClassName('card');

const allDivs = document.getElementsByTagName('div');

///////////////////////////
//// querySelector way ////
///////////////////////////

////// By id //////
const divOne = document.querySelector('#div-one');

const toggleHide = document.querySelector('#toggle-hide');

const toggleOrange = document.querySelector('#toggle-orange');

divOne.style.color = 'red';

toggleHide.addEventListener('click', function() {
  divOne.classList.toggle('hide');
});

toggleOrange.addEventListener('click', function() {
  divOne.classList.toggle('orange-text');
});

///// by element/tag name /////
// most likely not going to want to select elements by the element name as it is too general

const allDivs = document.querySelectorAll('div');

console.log(allDivs);

allDivs.forEach(function(div) {
  div.style.color = 'orange';
});

////// by class name //////
const divsWithCardClass = document.querySelectorAll('.card');

////////////////////
// why you would use id's for selecting these btns and how a
// class can do this but on separate pages or separate button classname
////////////////
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  btn.textContent = 'Button';
  btn.addEventListener('click', function() {
    divOne.classList.toggle('hide');
  });
});

console.log(divsWithCardClass);

divsWithCardClass.forEach(function(div) {
  div.addEventListener('click', function() {
    this.classList.toggle('orange-text');
  });
});
