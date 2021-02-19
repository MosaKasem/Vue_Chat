new Vue({
    el: '#app',
    data: {
        title: 'Testing Vue',
        wage: 10,
        name: `Write your name`,
        url: 'http://youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet() {
            return `Hey there ${this.title}`
        },
        changeWage(amount) { this.wage += amount }
    }
})