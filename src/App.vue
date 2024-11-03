<script setup>
import MainPage from './components/BaseTemplate.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  

    <MainPage />
    
       <!-- Social Icons -->
    <div class="social-icons">
      <a href="#" target="_blank">
        <FontAwesomeIcon :icon="faGithub" />
      </a>
      <a href="#" target="_blank">
        <FontAwesomeIcon :icon="faLinkedin" />
      </a>
      <a href="#" target="_blank">
        <FontAwesomeIcon :icon="faTwitter" />
      </a>
    </div>
    
    <!-- Contact Email -->
    <div class="contact-email">valentino43221@gmail.com</div>
  
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

</style>