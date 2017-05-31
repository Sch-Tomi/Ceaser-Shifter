new Vue({
// We want to target the div with an id of 'events'
  el: '#events',

  methods: {

      generate: function () {
          key = document.querySelector("#key").value;
          console.log(key )
      }

  }
});
