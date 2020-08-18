import Typed from "typed.js";
import events from "core/events";
import template from "./home.html";

export default {

  template,
  methods: {

    init: function() {

      const options = {
        stringsElement: ".s-home-message-content",
        cursorChar: "▮",
        typeSpeed: 20
      };

      const typed = new Typed('.s-home-message', options);
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
