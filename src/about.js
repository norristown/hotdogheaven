import Home from './home.js';

export default class About extends Home {
    constructor(a, b) {
        super(a, b);
    }

    aboutFunction() {
        const header = new About('header', 'About')
        const content = document.querySelector('.content')
        content.appendChild(header.element)

        const blurb = `Here at Hot Dog Heaven, we are commited to one thing and one thing only: grilled hot dog perfection`
        const aboutBody = new About('body', blurb)
        content.appendChild(aboutBody.element)
    }
}