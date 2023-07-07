import PageOne from './pageOne.js';

export default class PageTwo extends PageOne {
    constructor(a, b) {
        super(a, b);
    }

    menuFunction() {
        const menu = {
            first: 'Hot Dog With No Bun',
            second: 'Hot Dog With Bun',
            third: 'Two Dogs One Bun',
            fourth: 'Double Royal With Cheese',
            milkshakes: 'Milkshakes'
        }

        const menuDisplay = new PageTwo('className', 'Menu')
        const content = document.querySelector('.content')
        content.appendChild(menuDisplay.element)
        
        for (const [key, value] of Object.entries(menuDisplay)) {
            const hourInfo = new PageOne('hour-info', `${key[value]}`)
            hoursDiv.appendChild(hourInfo.element)
        }
    }
}