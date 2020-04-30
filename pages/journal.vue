<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 mar-top-md">
            <h1>Journal</h1>
            <p class="lead">
              Whoop Whooop my journal...
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
  transition: "page",
  head () {
    return {
      title: "Thomas Veit | Journal",
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>

<style>

</style>
