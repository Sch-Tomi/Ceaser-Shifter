var vue = new Vue({
    // We want to target the div with an id of 'events'
    el: '#events',

    data: {
        chiperDict: []
    },

    methods: {

        generate: function() {
            key = document.querySelector("#key").value;
            axios.get('/ceaser-shift', {
                    params: {
                        key: key
                    }
                })
                .then(function(response) {
                    this.vue.chiperDict = response.data.chiperDict
                    document.querySelector("#key").parentNode.className += " has-success"
                })
                .catch(function(error) {
                    document.querySelector("#key").parentNode.className += " has-error"
                    console.log(error);
                });
        }

    }
});
