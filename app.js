new Vue({
    el: '#app',
    data: {
        title: 'Testing Vue',
        url: 'http://youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet() {
            return `Hey there ${this.title}`
        }
    }
})