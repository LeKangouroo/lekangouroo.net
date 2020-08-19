import Typed from "typed.js";
import events from "core/events";
import template from "./home.html";

export default {

  template,
  data: () => ({

    intervalId: 0
  }),
  methods: {

    disableAutoScroll: function() {

      window.clearInterval(this.intervalId);
      this.intervalId = 0;
    },
    enableAutoScroll: function() {

      this.intervalId = window.setInterval(() => this.$refs.content.scrollIntoView(false), 600);
    },
    init: function() {

      const options = {
        stringsElement: ".s-home-message-content",
        cursorChar: "▮",
        typeSpeed: 20,
        onComplete: () => this.disableAutoScroll()
      };

      this.enableAutoScroll();
      new Typed('.s-home-message', options);
    }
  },
  mounted()
  {
    console.log("home section mounted");
    events.notifyObservers("section:loaded");
    this.init();
  },
  destroyed()
  {
    console.log("home section destroyed");
    events.notifyObservers("section:destroyed");
  }
}
