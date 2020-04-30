<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row mar-top-md">
          <div class="col-lg-10 offset-lg-1">
            <h1>About me</h1>
            <p class="lead">
              I constantly push myself outside my comfort zone and intuively follow my curiosity. 
              I firmly believe that it leads to new doors and opens hearts. ❤️ Curiosity is about a mindset of 
              looking at the world in a playful and creative way. It taught me critical thinking and it leads 
              me to discovering and chasing my dreams.

              I'm a Campaigner type of guy.
              Self-leadership
              story about kicktrip and why i failed. what did i learn from it?
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
          </div>
        </div>
        <div class="row mar-top-lg">
          <div class="col-lg-5 col-md-12">
            <div class="page-content-image">
              <img src="~/assets/img/about/thomas-veit.jpg" alt="Thomas Veit" />
            </div>
          </div>
        </div>
        <div class="page-content mar-top-lg">
						<div class="row">
							<div class="col-lg-10">
								<h2>Things I like doing</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-3 col-md-6">
								<div class="studio-services">
									<h4>Branding</h4>
									<ul>
										<li>Branding Strategy</li>
										<li>Research</li>
										<li>Analytics</li>
										<li>Logotypes</li>
										<li>Brandmarks</li>
										<li>Lettering</li>
										<li>Visual Identity</li>
										<li>Brand Guidelines</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="studio-services">
									<h4>Print</h4>
									<ul>
										<li>Professional Binding</li>
										<li>Presentations</li>
										<li>Manuals</li>
										<li>Booklets</li>
										<li>Document Printing</li>
										<li>Book Printing</li>
										<li>Annuals</li>
										<li>Reports</li>
										<li>Print Management</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="studio-services">
									<h4>Typography</h4>
									<ul>
										<li>Custom Font Design</li>
										<li>Lettering</li>
										<li>Calligraphy</li>
										<li>Copywriting</li>
										<li>Font Guidelines</li>
										<li>Consulting Services</li>
										<li>Font Licensing</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="studio-services">
									<h4>Art Direction</h4>
									<ul>
										<li>Project Management</li>
										<li>Communications</li>
										<li>Content Strategy</li>
										<li>Copywriting</li>
										<li>Marketing Materials</li>
										<li>Creative Direction</li>
									</ul>
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
      title: "Thomas Veit | About",
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>

<style>

</style>
