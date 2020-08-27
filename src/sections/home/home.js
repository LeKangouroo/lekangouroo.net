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
    enableLinks: function() {

      const links = this.$refs.content.querySelectorAll(".s-home-message-link");

      for (let link of links)
      {
        link.classList.add("is-enabled");
      }
    },
    init: function() {

      const options = {
        stringsElement: ".s-home-message-content",
        cursorChar: "▮",
        typeSpeed: 15,
        onComplete: () => this.onTypingComplete()
      };

      this.enableAutoScroll();
      new Typed('.s-home-message', options);
    },
    onTypingComplete: function() {

      this.enableLinks();
      this.disableAutoScroll();
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
