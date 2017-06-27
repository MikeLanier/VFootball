import Vue from 'vue';
export const EventBus = new Vue();

/*
import { EventBus } from './event-bus.js';

export default {
  data: () => {
    clickCount: 0
  },

  methods: {
    emitGlobalClickEvent() {
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', this.clickCount);
    }
  }
}*/

/*
// Import the EventBus.
import { EventBus } from './event-bus.js';

// Listen for the i-got-clicked event and its payload.
EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
});*/