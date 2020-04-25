<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mar-top-lg offset-lg-1">
            <h1>About me</h1>
            <p class="lead">
              I constantly push myself outside my comfort zone and intuively follow my curiosity. I firmly believe that it leads to new doors and opens hearts. ❤️ Curiosity is about a mindset of looking at the world in a playful and creative way. It taught me critical thinking and it leads me to discovering and chasing my dreams.

I'm a Campaigner type of guy.
Self-leadership
story about kicktrip and why i failed. what did i learn from it?
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default {
  components: {
    Navigation,
    Footer
  },
  transition: "page"
}
</script>

<style>

</style>
