
export default class Menu {
    constructor(name, text, price, img, className) {
        this.name = name;
        this.text = text;
        this.price = price;
        this.img = img

        this.element = document.createElement('div');
        this.element.className = className
        this.element.innerHTML = `<h3>${name}</h3>${text}<br>${price}<br><img src="${img}" height="50px" width="50px"<br>`;
    }

    menuFunction() {

        //hot dog icon
        const content = document.querySelector('.content')
        let img = require('./images/hot-dog.png')
        const hotDogIcon = document.createElement('img')
        hotDogIcon.style.height = '50px'
        hotDogIcon.style.width = '50px'
        hotDogIcon.src = img

        //Menu info 
        const menu = [
            {
                name: 'Menu',

            },
            {
                name: 'Hot Dog With No Bun',
                text: 'Straight to the point. All killer no filler.',
                price: '$1.99',
                img: img
            },
            {
                name: 'Hot Dog',
                text: 'Hot dog with no bun? You crazy?',
                price: '$2.49',
                img: img
            },
            {
                name: 'Two Dogs One Bun',
                text: 'For all you gluttonous degenerates.',
                price: '$4.49',
                img: img
            },
            {
                name: 'Coke',
                text: 'Not Pepsi.',
                price: '$.99',
                img: img
            },
            {
                name: 'Milkshake',
                text: 'Your choice of vanilla, chocolate, or strawberry.',
                price: '3.99',
                img: img
            }
        ]

        const one = new Menu(menu[1].name, menu[1].text, menu[1].price, menu[1].img, 'menu')
        const two = new Menu(menu[2].name, menu[2].text, menu[2].price, menu[2].img, 'menu')
        const three = new Menu(menu[3].name, menu[3].text, menu[3].price, menu[3].img, 'menu')
        const four = new Menu(menu[4].name, menu[4].text, menu[4].price, menu[4].img, 'menu')
        const five = new Menu(menu[5].name, menu[5].text, menu[5].price, menu[5].img, 'menu')
        content.appendChild(one.element)
        content.appendChild(two.element)
        content.appendChild(three.element)
        content.appendChild(four.element)
        content.appendChild(five.element)

    }



}