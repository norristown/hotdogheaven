export default class Home {
    constructor(className, divContent) {

        if (typeof divContent === "undefined") { this.div = this.home() }
        this.className = className;
        this.div = divContent;

        this.element = document.createElement('div');
        this.element.className = className;
        this.element.innerHTML = divContent;
    }

    home() {
        let image1 = require('./images/cute_hotdog.jpg')
        const cuteHotDog = document.createElement('img')
        cuteHotDog.style.height = '200px'
        cuteHotDog.style.width = '200px'
        cuteHotDog.src = image1

        let image2 = require('./images/dog_quote.jpg')
        const handsomeDog = document.createElement('img')
        handsomeDog.classList.add('spot-pic')
        handsomeDog.src = image2

        const blurbContent = `<blockquote>"Hot Dog Heaven is the best in hot dog flavor! 
            I come by at least three times a week and I would actually come more, 
            but I must exhbit some kind of self-control! HOT DOG HEAVEN NUMBER ONE!"</blockquote>`

        const title = new Home('banner-text', 'Hot Dog Heaven')
        const est = new Home('est', 'Established 1990')
        const blurb = new Home('description', blurbContent)
        const img = new Home('hot-dog', `<img src="${image1}" height="200px" width="200px" alt="cute hot dog" class="hot-dog">`)
        const dogImg = new Home('spot', `-Spot<img src ="${image2}" alt="handsome dog" class="spot-pic">`)

        const content = document.querySelector('.content');
        for (let i = 0; i < 4; i++) {
            const divContainer = new Home(`container-${[i + 1]}`, '')
            content.appendChild(divContainer.element)
        }

        const header = document.querySelector('.container-1')
        const middle = document.querySelector('.container-2')
        const end = document.querySelector('.container-3')
        const hoursDiv = document.querySelector('.container-4')
        hoursDiv.innerHTML = `<div class="hours-header"><strong>Hours</strong></div>`
        header.appendChild(img.element)
        header.appendChild(title.element)
        header.appendChild(est.element)


        middle.appendChild(blurb.element)
        end.appendChild(dogImg.element)

        const hours = {
            'Sunday': '12pm - 12am',
            'Monday': '12pm - 12am',
            'Tuesday': '12pm - 12am',
            'Wednesday': '12pm - 12am',
            'Thursday': '12pm - 12am',
            'Friday': '12pm - 12am',
            'Saturday': '12pm - 12am'
        }

        const location = `<strong>Location: 123 Hot Dog Heaven Road, Norristown USA 10101</strong>`
        const locationDiv = new Home('location', location)
        content.appendChild(locationDiv.element)


        for (const [key, value] of Object.entries(hours)) {
            const hourInfo = new Home('hour-info', `${key}: ${value}`)
            hoursDiv.appendChild(hourInfo.element)
        }
    }
}