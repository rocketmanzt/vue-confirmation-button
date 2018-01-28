// Made with love by Rohan Likhite

// JS
import Vue from 'vue'

// Components
import vueConfirmation from '../src/vue-confirmation-button.vue'

// VueJS Mount
const demo = new Vue({
  el: '.app',
  data: {
    app: {
      name: 'vue-confirmation-button-demo',
    },
    confirmed: false,
    customMessages: [
      'Custom Messages',
      'Can also be added',
      'How about a long string?',
      'That works too!',
      'What about Emoji?',
      'Yup! 🐒',
      'View Github Repo',
      'Ok!'
    ],
    reset: false,
    appliedMessages: [
      'Click to confirm',
      'Are your sure?',
      '✔',
    ],
  },
  components: {
    'vue-confirmation-button': vueConfirmation,
  },
  computed: {
  },
  methods: {
    finished() {
      this.confirmed = true
      if (this.appliedMessages == this.customMessages) {
        window.open('https://github.com/imRohan/vue-confirmation-button','_blank')
      }
    },
    resetDemo() {
      demo.$refs.confirmationButton.reset()
      this.confirmed = false
    },
    useCustomMessages() {
      this.appliedMessages = this.customMessages
      this.resetDemo()
    }
  },
})
