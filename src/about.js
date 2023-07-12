

export default class About {
    constructor(name, text, pic, className) {
        this.name = name;
        this.text = text;
        this.pic = pic
        

        this.element = document.createElement('div')
        this.element.className = className;
        this.element.innerHTML = `
            <div>
                <h3>${name}</h3>
                <div>${text}</div>
            </div><br>
            <img class="dog-pics" src="${pic}">
            `
    }

    aboutFunction() {

        const content = document.querySelector('.content')
        //Pictures

        const header = this.createDiv('menu-header', `<img class="left" src="${this.createImg('hot-dog.png')}" height="50px" width="50px"><div>About Us</div><img class="right" src="${this.createImg('hot-dog.png')}" height="50px" width="50px">`)
        content.appendChild(header)

        const blurb = `Here at Hot Dog Heaven, we are commited to one thing and one thing only: grilled hot dog perfection. Please take a minute to get aquainted with our staff!`
        const aboutBody = this.createDiv('menu', blurb)
        content.appendChild(aboutBody)

        const staff = [
            {
                name: 'Spot',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla purus, placerat sit amet orci sed, consequat blandit ipsum. Aliquam sit amet odio nibh. Nulla nibh elit, posuere vitae nunc ac, viverra sodales sapien. Nulla auctor lacinia massa, sit amet imperdiet nulla tristique sit amet. Mauris mattis porttitor neque sed ultrices. Donec vel pulvinar eros. Mauris sed magna at odio tristique porttitor sit amet id velit. Nam tempor commodo sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eu lorem commodo, elementum ante vitae, tincidunt neque. Integer aliquet at urna vitae luctus. Vestibulum fermentum scelerisque convallis. Suspendisse vel ultrices urna, nec pharetra metus. Phasellus blandit sollicitudin lorem vitae blandit.',
                pic: this.createImg('owner.jpg')
            },
            {
                name: 'Skip',
                text: 'Curabitur sodales egestas laoreet. Integer aliquet, est a pulvinar tempor, dolor dui aliquam lorem, sit amet semper ipsum sapien non turpis. Donec aliquet ante erat, at pellentesque tellus imperdiet sed. Duis ultricies urna sed urna sollicitudin mattis. Integer semper a nunc ut luctus. Proin quis enim vel metus rhoncus vehicula. Suspendisse non sapien est. Vestibulum eu nisi sit amet arcu hendrerit porta. Suspendisse potenti. Suspendisse potenti.',
                pic: this.createImg('owner2.jpg')
            },
            {
                name: 'Sauron',
                text: 'Integer finibus dictum magna, interdum venenatis dui facilisis eget. Proin ligula dolor, condimentum nec dolor vitae, volutpat gravida justo. Sed et risus eget leo sollicitudin faucibus vel ac metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tristique justo sit amet faucibus cursus. Integer vulputate ligula nisl, vel finibus arcu faucibus non. Etiam egestas vitae nulla ac aliquet. Sed velit mi, blandit at neque at, dignissim mollis felis. ',
                pic: this.createImg('owner3.jpg')
            }
        ]

        const one = new About(staff[0].name, staff[0].text, staff[0].pic, 'about-us')
        content.appendChild(one.element)

        const two = new About(staff[1].name, staff[1].text, staff[1].pic, 'about-us')
        content.appendChild(two.element)

        const three = new About(staff[2].name, staff[2].text, staff[2].pic, 'about-us')
        content.appendChild(three.element)
    }


    createImg(imgPath) {
        let img = require(`./images/${imgPath}`)
        const picture = document.createElement('img')
        picture.style.height = '100px'
        picture.style.width = '100px'
        picture.src = img
        return img
    }

    createDiv(className, inner) {
        const element = document.createElement('div')
        element.className = className
        element.innerHTML = inner
        return element
    }
}