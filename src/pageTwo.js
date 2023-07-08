import PageOne from './pageOne.js';

export default class PageTwo extends PageOne {
    constructor(a, b) {
        super(a, b);
    }

    menuFunction() {
        const menu = [
            'Hot Dog With No Bun',
            'Hot Dog With Bun',
            'Two Dogs One Bun',
            'Double Royal With Cheese',
            'Milkshakes'
        ]


        const menuHeader = new PageTwo('menu-header', 'Menu')
        const content = document.querySelector('.content')
        content.appendChild(menuHeader.element)
        for (let i = 0; i < menu.length; i++) {
            const menuBody = new PageTwo('menu-body', menu[i])
            content.appendChild(menuBody.element)
        }


    }


}