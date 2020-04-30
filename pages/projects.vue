<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 mar-top-md">
            <h1>Projects</h1>
            <p class="lead">
              Here are my awesome fucking projects!!!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mar-top-md">
              <div class="page-content-image">
                <nuxt-link to="/project/haeschcash" class="no-border">
                  <img
                    src="~/assets/img/haeschcaesh/iphone-haeschcaesh.png"
                    class="image-cover"
                    alt="HäschCash SavingsApp"
                  />
                  <img src="~/assets/img/haeschcaesh/background.jpg" alt="Background" />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mar-top-md">
              <div class="page-content-image">
                <nuxt-link to="/project/haeschcash" class="no-border">
                  <img
                    src="~/assets/img/haeschcaesh/iphone-haeschcaesh.png"
                    class="image-cover"
                    alt="HäschCash SavingsApp"
                  />
                  <img src="~/assets/img/haeschcaesh/background.jpg" alt="Background" />
                </nuxt-link>
              </div>
            </div>
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
  transition: "page",
  head () {
    return {
      title: "Thomas Veit | Projects",
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>

<style>

</style>
