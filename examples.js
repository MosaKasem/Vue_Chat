new Vue({
    el: '#app',
    data: {
        title: 'Testing',
        coords: {
            x: 0,
            y: 0
        },
        name: 'wee',
        wage: 10,
        name: `Write your name`,
        url: 'http://youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        logEvent(e) {
            console.log('e: ', e);
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e) {
            this.name = e.target.value
        },
        greet() {
            return `Hey there ${this.title}`
        },
        changeWage(amount) { this.wage += amount }
    }
})