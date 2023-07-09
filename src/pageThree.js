import PageOne from './pageOne.js';

export default class PageThree extends PageOne {
    constructor(a, b) {
        super(a, b);
    }

    menuFunction() {
        const about = [
            'Hot Dog With No Bun',
            'Hot Dog With Bun',
            'Two Dogs One Bun',
            'Double Royal With Cheese',
            'Milkshakes'
        ]


        const menuHeader = new PageThree('menu-header', 'Menu')
        const content = document.querySelector('.content')
        content.appendChild(menuHeader.element)
        for (let i = 0; i < menu.length; i++) {
            const menuBody = new PageThree('menu-body', menu[i])
            content.appendChild(menuBody.element)
        }


    }


}