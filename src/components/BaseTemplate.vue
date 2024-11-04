<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import bio from "./BIO.vue"
import About from "./aboutMe.vue"

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

    <section class="parallax-section parallax2">
      <About />
    </section>

    <section class="parallax-section parallax3" id="about">
      <!-- Add more content if needed -->
    </section>

    <section class="parallax-section parallax4">
      <!-- Add more content if needed -->
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
}

.parallax2 {
  background-image: url('/path-to-image.jpg');
}

.parallax3 {
  background-image: url('/zf4z6utfezua1.jpg');
}

.parallax4 {
  background-image: url('');
}
</style>
