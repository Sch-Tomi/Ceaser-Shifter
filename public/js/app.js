var vue = new Vue({
    // We want to target the div with an id of 'events'
    el: '#events',

    data: {
        abc: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        chiperDict: [],
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
        },

        code: function() {
            let text = document.querySelector("#inputText").value;
            let decoded = ""

            for (let letter of text) {
                if (letter == " ") {
                    decoded += " "
                } else {
                    decoded += this.chiperDict[this.abc.indexOf(letter)]
                }
            }
            document.querySelector("#outputText").value = decoded;

        },

        decode: function() {
            let text = document.querySelector("#inputText").value;
            let encoded = ""

            for (let letter of text) {
                if (letter == " ") {
                    encoded += " "
                } else {
                    encoded += this.abc[this.chiperDict.indexOf(letter)]
                }
            }
            document.querySelector("#outputText").value = encoded;

        }
    }
});
