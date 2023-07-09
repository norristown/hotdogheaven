import './style.css';

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
    content.innerHTML = '';
    tabColor(tabMenu, tabHome, tabAbout)
    two.menuFunction()
})
tabAbout.addEventListener('click', () => {
    content.innerHTML = '';
    tabColor(tabAbout, tabHome, tabMenu)

})


function loadWebPage() {
    content.innerHTML = ''
    tabColor(tabHome, tabMenu, tabAbout)
    one.home()
}

loadWebPage()

function tabColor(tab, tab2, tab3) {
    tab.style.backgroundColor = '#FBAC4D'
    tab.style.color = '#6D184F'
    tab2.style.backgroundColor = '#6D184F'
    tab2.style.color = '#FBAC4D'
    tab3.style.backgroundColor = '#6D184F'
    tab3.style.color = '#FBAC4D'
}