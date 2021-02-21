import Typed from "typed.js";
import events from "core/events.js";

const TYPED_CURSOR_CHAR = "▮";
const TYPED_SPEED = 15;

export default {

  template: "#home-section-template",
  data: () => ({

    intervalId: 0,
    isAnimationComplete: false,
    isAnimationSkipped: false,
    typedInstance: undefined
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

      const links = this.$refs.container.querySelectorAll(".s-home-message-link");

      for (let link of links)
      {
        link.classList.add("is-enabled");
      }
    },
    init: function() {

      const options = {
        stringsElement: ".s-home-message-container",
        cursorChar: TYPED_CURSOR_CHAR,
        typeSpeed: TYPED_SPEED,
        onComplete: () => this.onTypingComplete()
      };

      this.enableAutoScroll();
      this.typedInstance = new Typed(".s-home-message--typed", options);
    },
    onTypingComplete: function() {

      this.isAnimationComplete = true;
      this.enableLinks();
      this.disableAutoScroll();
    },
    skipAnimation: function() {

      this.typedInstance.stop();
      this.isAnimationSkipped = true;
      this.onTypingComplete();
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
