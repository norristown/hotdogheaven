import './style.css';
import Home from './home.js';
import Menu from './menu.js'
import About from './about.js';

const one = new Home
const two = new Menu
const three = new About

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
    three.aboutFunction()
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