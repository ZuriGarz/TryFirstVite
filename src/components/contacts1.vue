<script setup>
// No additional setup needed for this component
</script>

<template>
  <div class="contact-container1">
    <h1 class="contact-heading">CONTACT</h1>
  </div>
  <div class="contact-divider"></div>
    <div>
    <div class="contact-content">
      <div class="contact-section">
        <h2 class="section-heading">MAIL</h2>
        <a href="mailto:Valentino43221@gmail.com" class="contact-link">
          <span class="arrow">↗</span>
          Valentino43221@gmail.com
        </a>
      </div>

      <div class="contact-section">
        <h2 class="section-heading">SOCIAL MEDIAS</h2>
        <div class="social-links">
          <a href="https://github.com/ZuriGarz" class="contact-link">
            <span class="arrow">↗</span>
            Linkedin
          </a>
          <a href="https://www.linkedin.com/in/valentino-jaya-lay-a913b5233/" class="contact-link">
            <span class="arrow">↗</span>
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container1 {
  color: white;
  padding: 4rem;
  padding-left: 4cm;
  display: flex;
  /* flex-direction: row; */

}

.contact-container {
  color: white;
  padding: 4rem 2rem;
  padding-left: 4cm;
  min-height: 100vh;
  display: flex;
  /* flex-direction: row; */
  
}

.contact-heading {
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.contact-divider {
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 1rem 0 3rem 0;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-section {
  flex: 1;
}

.section-heading {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.contact-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  transition: opacity 0.3s ease;
}

.contact-link:hover {
  opacity: 0.7;
}

.arrow {
  margin-right: 0.5rem;
  font-size: 1.2em;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-heading {
    font-size: 3rem;
  }
}
</style>