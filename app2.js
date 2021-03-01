new Vue({
    el: '#app',
    data: {
        title: 'Testing',
        coords: {
            x: 0,
            y: 0
        },
        name: 'wee'
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
        }
    }
})