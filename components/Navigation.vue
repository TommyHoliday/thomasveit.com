<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="logo">
            <nuxt-link to="/" class="logo-type">
              Thomas Veit <img src="~/assets/img/thomas-veit-logo.svg" alt="Thomas Veit Logo" />
            </nuxt-link>
          </div>
          <nav>
            <ul>
              <li>
                <nuxt-link to="/" class="navi-link">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects" class="navi-link">Projects</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/journal" class="navi-link">Journal</nuxt-link>
              </li>
            </ul>
          </nav>
          <span id="nav-toggle" class="nav-toggle">Menu</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
var navBar = function() {
  // show and hide navigation
  var lastScroll = 0;
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll >= header.offsetHeight) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
    lastScroll = currentScroll;
  });

  // Toggle Responsive Menu
  const navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", () => {
    navToggle.innerHTML = "Menu";
    header.classList.toggle("nav-responsive");
    if (header.classList.contains("nav-responsive")) {
      navToggle.innerHTML = "Close";
    }
  });

  // Close Overlay when clicking on a link
  const navLinks = document.getElementsByClassName("navi-link");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      header.classList.remove("nav-responsive");
      navToggle.innerHTML = "Menu";
    });
  }
};

export default {
  name: "Navigation",
  mounted: function() {
    navBar();
  }
};
</script>