<template>
  <main>
    <Navigation />
    <div class="spacer">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 mar-top-lg text-center">
            <h1>#HäschCash – A Savings App for young people</h1>
            <p class="lead">
              With different saving methods and witty rules, the saver comes closer to his goal and can make
              a dream come true. The personal savings partner helps with tips and hints so that the user does
              not lose sight of the goal &mdash; with #HäschCash even saving is fun.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="mar-top-md">
              <div class="page-content-image">
                <img
                  src="~/assets/img/haeschcaesh/iphone-haeschcaesh.png"
                  class="image-cover"
                  alt="HäschCash SavingsApp"
                />
                <img src="~/assets/img/haeschcaesh/background.jpg" alt="Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="mar-top-lg">
          <div class="row">
            <div class="col-lg-6 col-md-10">
              <h4>My Role</h4>
              <p class="small">
                Research, Facilitating Workshops, User Flows, Information Architecture,
                Sketching, UI Design, Prototyping, Usability Testing
              </p>
            </div>
            <div class="col-lg-3 col-md-10">
              <h4>Client</h4>
              <p class="small">St. Galler Kantonalbank</p>
            </div>
            <div class="col-lg-3 col-md-10">
              <h4>Timeline</h4>
              <p class="small">Approx. 1 year until launch of the MVP</p>
            </div>
          </div>
        </div>
        <div>
          <div class="row mar-top-lg">
            <div class="col-lg-8 offset-lg-2">
              <div>
                <h3>The challenge</h3>
                <p>
                  Based on research papers from external consultancies, the management of St.&nbsp;Galler Kantonalbank (SGKB)
                  decided to invent
                  <strong>a service for young people to help them save money</strong>. The challenge to achieve this goal was to create
                  an engaging and playful end-to-end mobile experience for our customers. The high-level goals were:
                </p>

                <ul>
                  <li>Early customer retention</li>
                  <li>OS-agnostic (Web-App) that works within the existing banking app</li>
                  <li>The experience should be fun and engaging</li>
                </ul>
                <p>The core team consisted of a Project Manager, a Product Manager, two Developers, and me as UX/UI Designer.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mar-top-lg">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h3>My process</h3>
              <p>I'm a strong advocate of iterative development through early prototypes and testing.</p>
            </div>
          </div>
          <div class="row mar-top-sm">
            <div class="col-md-12">
              <div class="page-content-image">
                <img src="~/assets/img/haeschcaesh/process_haeshcash.png" alt="HäschCash Process" />
              </div>
            </div>
          </div>
        </div>
        <div class="mar-top-sm">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h3>Inspiration</h3>
              <p>
                The research reports of the external consulting firm showed that young customers have
                <strong>problems with saving</strong>
                and that most of them have
                <strong>no financial knowledge</strong>. An exciting finding was that
                <strong>
                  the average Swiss person is very
                  loyal to his bank
                </strong> and hardly ever changes relationships. In many cases, the parents create an account
                at a bank and the children then simply stay there, or the kids create an account as soon as they earn their first own
                money. So if we can attract young customers, they would potentially stay with our bank.
              </p>
              <p>
                I think it's crucial to have a deep understand of the topic before jumping into the ideation phase.
                To do so, I talked to experts in the field and asked loads of questions.
                Are there any other Savings App out there? What is the competition doing? Why are they not doing something similiar?
              </p>
            </div>
          </div>
        </div>
        <div class="mar-top-lg">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="content-quote">
                <p>Most young people have little or no financial knowledge before entering the world of work.</p>
                <span class="author">Research paper</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mar-top-sm">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h3>Ideation</h3>
              <p>
                After the first creative workshops with the core team and a few stakeholders, the first
                concrete sketches emerged which we wanted to follow up and work out. The basic idea was that the user can
                <strong>create a financial goal</strong> and then save for it with the help of various
                <strong>creative saving methods</strong>. Additionally,
                we wanted to develop some sort of
                <strong>coach</strong> who would lead the user through the app and would give
                <strong>financial advice</strong>.
              </p>
              <p>I created a first prototype that looked as followed:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

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
