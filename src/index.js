import './style.css';
import './images'
// import Icon from './hotdog_bg.jpg';


// Add the image to our existing div.

// const myIcon = new Image();


// myIcon.src = Icon;

// const content = document.querySelector('body')
// content.appendChild(myIcon);

// import PageOne from './pageOne.js';
// function component() {
//     const element = document.createElement('div');
//     element.textContent = new PageOne();
//     return element
// }

// content.appendChild(component())

import PageOne from './pageOne.js';
import PageTwo from './pageTwo.js'

const one = new PageOne
const two = new PageTwo

const tabHome = document.querySelector('.tab');
const tabMenu = document.querySelector('.menu');
const tabAbout = document.querySelector('.about');
const content = document.querySelector('.content')

tabHome.addEventListener('click', loadWebPage)
tabMenu.addEventListener('click', () => {
    console.log('menu click')
    content.innerHTML = '';
    two.menuFunction()
    

})

function loadWebPage() {
    content.innerHTML = ''
    one.home()
}

loadWebPage()