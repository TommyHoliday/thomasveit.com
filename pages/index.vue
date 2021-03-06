<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 mar-top-md">
            <h1 id="greeting"></h1>
            <p class="lead">
              My name is Thomas. I'm Swiss
              <nuxt-link to="/projects">Designer and Maker</nuxt-link> with a passion for clean and thoughtful products.
              I push pixels, manage design systems and craft experiences
              <strike>for a bank</strike> at AXA.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mar-top-sm">
            <div class="page-content-image text-right">
              <img src="~/assets/img/about/thomas-veit.jpg" alt="Thomas Veit" />
              <span class="author">
                Me at a Gatsby motto party.
                <br />(Sorry, I don't always look that fancy)
              </span>
            </div>
          </div>
        </div>
        <div id="switchBlack" class="row">
          <div class="col-lg-8 offset-lg-2">
            <h3>My vibe</h3>
            <p>
              I’m a product designer and a curious generalist with over a decade of experience in UX/UI design and
              frontend development – mostly in the finance and insurance industry. I love to tackle complex problems
              in a human-centered fashion without loosing sight of business goals and technical feasability.
            </p>
            <p>
              Curiosity drives me and this is why I love side projects. I created
              <nuxt-link to="/">a social app for travellers</nuxt-link> and had the chance to work with Google. I also built
              <nuxt-link to="/">a magic mirror</nuxt-link>,
              a prototype of a
              <nuxt-link to="/">virtual reality bank</nuxt-link>,
              <nuxt-link to="/">a mobile app</nuxt-link> for my football club, and
              <nuxt-link to="/">some other stuff...</nuxt-link>
            </p>
            <p>
              Wanna drink a coffee?☕️
              <br />Talk with me about
              <vue-typed-js
                :strings="['your project.', 'business ideas.💡', 'your dreams and life goals.🌅', 'fintech and investing.💸', 'cats🐱and dogs🐶', 'books.📚', 'design.🎨', 'frontend development.📱', 'technology.', 'people and psychology.', 'leadership.', 'football. ⚽️', 'artificial intelligence. 🤖', 'remote working.', 'travelling and cultures. 🌴', 'personal growth. 🌱', 'entrepreneurship.', 'productive procrastination. 🐳', 'latin music 🕺🏽']"
                :shuffle="true"
                :typeSpeed="50"
                :backSpeed="40"
                :backDelay="2500"
                :loop="true"
                :fadeOut="false"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </p>
          </div>
        </div>
        <div class="row mar-top-sm">
          <div class="col-md-10 offset-md-1">
            <div class="content-quote">
              <p>
                I always wonder why birds stay in the same place when they can fly anywhere on the earth – then I ask myself the same
                question.
              </p>
              <span class="author">Harun Yahya</span>
            </div>
          </div>
        </div>
        <div class="row mar-top-sm">
          <div class="col-lg-8 offset-lg-2">
            <h3>Chasing dreams</h3>
            <p>
              I’m a free spirit and critical thinker who is always challenging the status quo – oh, and did
              i mention that I love travelling and learn from different cultures?! I’m currently in the transition of becoming a digital nomad
              to chase my dream of working indipendently from wherever I want. Fortunately, companies are more 
              and more recognizing the <a href="https://www.forbes.com/sites/laurelfarrer/2020/02/12/top-5-benefits-of-remote-work-for-companies/#6562796216c8" target="_blank">benefits of remote working</a> 
              and start investing into the future of work.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";
//import { TweenMax, TimelineMax } from 'gsap'

Vue.use(VueTypedJs);

// Greeting Message
var greetingMessage = function() {
  var date = new Date();
  var hour = date.getHours();
  var element = document.getElementById("greeting");

  var greetings = {
    night: [
      "Good night!",
      "Buenos noches!",
      "Hi! Still awake?",
      "Welcome!",
      "Huhu, still up or already up?"
    ],
    morning: [
      "Good morning!",
      "Buenos dias!",
      "Grüezi!",
      "Welcome!",
      "Hey, did you sleep well?"
    ],
    afternoon: [
      "Good afternoon!",
      "Hola! Qué tal?",
      "Grüezi!",
      "Welcome!",
      "Hey, how are you?"
    ],
    evening: [
      "Hi there!",
      "Buenas tardes!",
      "Good evening!",
      "Welcome!",
      "Hola, how was your day?"
    ]
  };

  var getText = function(length) {
    var minimum = 1;
    var maximum = length;
    return Math.floor(Math.random() * (maximum - minimum + 1));
  };

  var timeOfDay = "evening";

  if (hour >= 0 && hour <= 5) {
    timeOfDay = "night";
  } else if (hour >= 6 && hour <= 11) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour <= 17) {
    timeOfDay = "afternoon";
  }

  element.innerHTML =
    greetings[timeOfDay][getText(greetings[timeOfDay].length)];
};

export default {
  components: {
    Navigation,
    Footer
  },
  mounted() {
    // Greeting Message
    greetingMessage();

    // Scrollmagic
    const timeline = new TimelineMax();

    timeline
    .to('body', 1, {
      css: {
        backgroundColor: "#000"
      }    
    })
    .to('h1,h2,h3,h4,h5,h6,p', 1, {
      css: {
        color: "#fff"
      }
    })  

    const scene1 = this.$scrollmagic.scene({
      triggerElement: '#switchBlack',
      duration: "20%"
    })
    .setTween(timeline)
    .addIndicators();

    this.$scrollmagic.addScene(scene1);

  },
  transition: "page",
  head() {
    return {
      title: "Thomas Veit",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Product Design, UX, UI, Web, Mobile"
        }
      ]
    };
  }
};
</script>

<style scoped>
.typed-element {
  display: inline;
}
</style>
