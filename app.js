new Vue({
    el: '#app',
    data: {
        title: 'Testing'
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