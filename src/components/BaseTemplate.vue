<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import bio from "./BIO.vue"
import project from "./Projects.vue"
import About from "./aboutMe.vue"
import Contact1 from "./contacts1.vue"


// Parallax effect 
const parallaxEffect = () => {
  const scrollPosition = window.scrollY;
  document.querySelectorAll('.parallax-section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    if (scrollPosition >= sectionTop - window.innerHeight && scrollPosition <= sectionBottom) {
      section.style.backgroundPositionY = `${(scrollPosition - sectionTop) * 0.1}px`;
    }
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', () => requestAnimationFrame(parallaxEffect));
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});
</script>

<template>
  <div>
    <section class="parallax-section parallax1" id="bio">
      <bio />
    </section>

    <section class="parallax-section parallax2" id="about">
      <About />
    </section>

    <section class="parallax-section parallax3" id="project">
      <project/>
    </section>

    <section>
      <Contact1/>
    </section>
  </div>
</template>

<style scoped>
.parallax-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
}
.main-container {
  margin-top: 60px; /* Offset to prevent header overlap */
}

.parallax1 {
  background-image: url('/background.jpg');
  height: auto;
}

.parallax2 {
  background-image: url('/path-to-image.jpg');
  height: auto;
    /* Allow this section to grow with content */
}

.parallax3 {
  background-image: url('/zf4z6utfezua1.jpg');
  height: auto;
}


</style>
