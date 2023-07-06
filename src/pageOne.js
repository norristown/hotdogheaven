export default class PageOne {
    constructor(className, divContent) {

        if (typeof divContent === "undefined") { this.div = this.pageOneFunction() }
        this.className = className;
        this.div = divContent;

        this.element = document.createElement('div');
        this.element.className = className;
        this.element.innerHTML = divContent;
    }

    pageOneFunction() {
        const testClass = 'container'
        const testContent = 'Hot Dog Heaven'
        const blurbClass = 'description'
        const blurbContent = `"Hot Dog Heaven is the best in hot dog flavor! 
    I come by at least three times a week and I would actually come more, 
    but I must exhbit some kind of self-control! HOT DOG HEAVEN NUMBER ONE!"`
        const cuteHotDogSrc = `<img src="src/cute_hotdog.jpg" class="hot-dog" alt="cute hot dog" width="200" height="200">`;
        const cuteHotDogClassName = 'hot-dog'

        const spotClass = 'spot'
        const spotSrc = `-Spot<img src ="src/dog_quote.jpg" alt="handsome dog" class="spot-pic">`

        const title = new PageOne(testClass, testContent)
        const blurb = new PageOne(blurbClass, blurbContent)
        const img = new PageOne(cuteHotDogClassName, cuteHotDogSrc)
        const dogImg = new PageOne(spotClass, spotSrc)

        const content = document.querySelector('.content');
        for (let i = 0; i < 4; i++) {
            const divContainer = new PageOne(`container-${[i + 1]}`, '')
            content.appendChild(divContainer.element)
        }

        const header = document.querySelector('.container-1')
        const middle = document.querySelector('.container-2')
        const end = document.querySelector('.container-3')
        const hoursDiv = document.querySelector('.container-4')
        hoursDiv.innerHTML = `<div class="hours-header">Hours</div>`

        header.appendChild(img.element)
        header.appendChild(title.element)
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

        const location = 'Location: 123 Hot Dog Heaven Road, Norristown USA 10101'
        const locationDiv = new PageOne('location', location)
        content.appendChild(locationDiv.element)


        for (const [key, value] of Object.entries(hours)) {
            const hourInfo = new PageOne('hour-info', `${key}: ${value}`)
            hoursDiv.appendChild(hourInfo.element)
        }
    }
}