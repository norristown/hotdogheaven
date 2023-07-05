import './style.css';
// import Icon from './hotdog_bg.jpg';


// Add the image to our existing div.

// const myIcon = new Image();


// myIcon.src = Icon;

// const content = document.querySelector('body')
// content.appendChild(myIcon);

import PageOne from './pageOne';
function component() {
    const element = document.createElement('div');
    element.textContent = new PageOne();
    return element
}

document.body.appendChild(component())