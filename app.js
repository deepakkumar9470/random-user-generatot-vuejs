var app = Vue.createApp({
    data () {
        return {
            firstName  : 'Deepak Kumar',
            lastName  : ' Chouhan',
            email :  'dk397787@gmail.com',
            age  : 25,
            gender:  'male',
            pic  : 'https://randomuser.me/api/portraits/med/men/60.jpg',
        }
    },


    methods :{

       async getUser() {
             const res = await fetch('https://randomuser.me/api')
             const {results} = await res.json()
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.age = results[0].age,
            this.gender = results[0].gender,
            this.pic = results[0].picture.medium
        }

    }
})

app.mount('#app')