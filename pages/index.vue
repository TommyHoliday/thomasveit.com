<template>
  <main>
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mar-top-lg offset-lg-1">
            <h1 id="greeting"></h1>
            <p class="lead">
              My name is Thomas. I'm Swiss
              <a
                href="https://dribbble.com/TommyHoliday"
                target="_blank"
              >designer and maker</a>
              with a passion for clean and thoughtful products. Currently I'm creating experiences at
              <a
                href="https://www.axa.ch"
                target="_blank"
              >AXA</a> where I like to be involved in the whole product development lifecycle.
            </p>
            <p class="lead">
              I'm super curious and love side projects — I created a
              <a
                href="https://uxdesign.cc/kicktrip-my-journey-on-creating-a-social-app-for-travelers-3775f38419ab"
              >social app for travellers</a>
              and had the chance to work with Google. I built
              <a
                href="http://minimaluu.thomasveit.com/"
                target="_blank"
              >Wordpress themes</a>, a
              <a
                href="https://www.dropbox.com/sh/0826t9g2fqdoems/AADvOJN0GYK685xLHL0QLQcpa?dl=0"
                target="_blank"
              >magic mirror</a>, a
              prototype of a
              <a
                href="http://vr.sgkbintern.ch/"
                target="_blank"
              >virtual reality bank</a>, and a
              <a
                href="http://app.fcromanshorn.ch/"
                target="_blank"
              >mobile app for my football club</a>.
            </p>
            <div>
              Also, I'm interested in
              <vue-typed-js :strings="['John', 'James']" :shuffle="true">
                <h1>
                  Hey
                  <span class="typing"></span>
                </h1>
              </vue-typed-js>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="mar-top-md">
              <div class="page-content-image">
                <a href="project-haeschcash.html" class="no-border">
                  <img
                    src="~/assets/img/haeschcaesh/iphone-haeschcaesh.png"
                    class="image-cover"
                    alt="HäschCash SavingsApp"
                  />
                  <img src="~/assets/img/haeschcaesh/background.jpg" alt="Background" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="trigger"></div>
      <div id="target">
        <img src="~/assets/img/scrollmagic/plane.svg" alt="plane" id="plane" />
      </div>
      <div class="container">
        <div class="mar-top-lg">
          <div class="row">
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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";

Vue.use(VueTypedJs);

// Greeting Message
var greetingMessage = function() {
  var date = new Date();
  var hour = date.getHours();
  var element = document.getElementById("greeting");

  var greetings = {
    night: ["Good night!", "Buenos noches!", "Hi! Still awake?", "Welcome!"],
    morning: ["Good morning!", "Buenos dias!", "Grüezi!", "Welcome!"],
    afternoon: ["Good afternoon!", "Hola! Qué tal?", "Grüezi!", "Welcome!"],
    evening: ["Hi there!", "Buenas tardes!", "Good evening!", "Welcome!"]
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
  mounted: function() {
    greetingMessage();
  }
};
</script>

<style></style>
