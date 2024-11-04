<script setup>
import MainPage from './components/BaseTemplate.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  
    <header class="header">
      
      <nav>
        <a href="#bio">Bio</a>
        <a href="#about">About</a>
        <!-- Add more links as needed -->
      </nav>
    </header>

    <MainPage />
    
       <!-- Social Icons -->
    <div class="social-icons">
      <a href="https://github.com/ZuriGarz">
        <FontAwesomeIcon :icon="faGithub" />
      </a>
      <a href="https://www.linkedin.com/in/valentino-jaya-lay-a913b5233/">
        <FontAwesomeIcon :icon="faLinkedin" />
      </a>
      <!-- <a href="#" target="_blank">
        <FontAwesomeIcon :icon="faTwitter" />
      </a> -->
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