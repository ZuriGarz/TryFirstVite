<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import bio from "./BIO.vue"
import About from "./aboutMe.vue"

// Parallax effect
const parallaxEffect = () => {
  const scrollPosition = window.scrollY;
  document.querySelectorAll('.parallax-section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop - window.innerHeight && scrollPosition <= sectionTop + sectionHeight) {
      section.style.backgroundPositionY = `${(scrollPosition - sectionmiddle) * 0.5}px`;
    }
  });
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', parallaxEffect);
});

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect);
});
</script>

<template>
  <div>
    <section class="parallax-section parallax1">
      <bio />
      
    </section>

    <section class="parallax-section parallax2">
      <About />
      
    </section>

    <section class="parallax-section parallax3">
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

.parallax1 {
  background-image: url('C:\Git\VueJSProject\public\background.jpg');
}

.parallax2 {
  background-image: url('C:\Git\VueJSProject\public\zf4z6utfezua1.jpg');
}

.parallax3 {
  background-image: url('@/assets/background3.jpg');
}



/* Fade animations */
.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
</style>