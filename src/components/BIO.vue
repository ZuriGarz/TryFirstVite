<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'

const displayText = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const words = ['Full Stack Developer  ', 'Front End Developer  ', 'SOC  ', 'Freelancer  ']
const delta = ref(200)

const topLeft = ref(null)
const topRight = ref(null)
const bottomLeft = ref(null) 
const bottomRight = ref(null)

let ticker = null

const tick = () => {
  const i = loopNum.value % words.length
  const fullText = words[i]
  
  displayText.value = isDeleting.value
    ? fullText.substring(0, displayText.value.length - 1)
    : fullText.substring(0, displayText.value.length + 1)

  if (!isDeleting.value && displayText.value === fullText) {
    isDeleting.value = true
    delta.value = 100
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    loopNum.value++
    delta.value = 200
  }
}

onMounted(() => {
  ticker = setInterval(() => {
    tick()
  }, delta.value)
})

onUnmounted(() => {
  clearInterval(ticker)
})

// Configure motion for each pillar group
useMotion(topLeft, {
  initial: { y: -100, rotate: -45 },
  enter: { 
    y: 0,
    rotate: -45,
    transition: { duration: 800, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }
  }
})

useMotion(topRight, {
  initial: { y: -100, rotate: 45 },
  enter: {
    y: 0,
    rotate: 45,
    transition: { duration: 800, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }
  }
})

useMotion(bottomLeft, {
  initial: { y: 100, rotate: -45 },
  enter: {
    y: 0,
    rotate: -45,
    transition: { duration: 800, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }
  }
})

useMotion(bottomRight, {
  initial: { y: 100, rotate: 45 },
  enter: {
    y: 0,
    rotate: 45,
    transition: { duration: 800, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' }
  }
})
</script>

<template>
  <div class="container">
    <!-- Top pillars -->
    <div class="pillars top">
      <div class="pillar-group" ref="topLeft">
        <div class="pillar"></div>
        <div class="pillar"></div>
        <div class="pillar"></div>
      </div>
      <div class="pillar-group" ref="topRight">
        <div class="pillar"></div>
        <div class="pillar"></div>
        <div class="pillar"></div>
      </div>
    </div>

    <!-- Bottom pillars -->
    <div class="pillars bottom">
      <div class="pillar-group" ref="bottomLeft">
        <div class="pillar"></div>
        <div class="pillar"></div>
        <div class="pillar"></div>
      </div>
      <div class="pillar-group" ref="bottomRight">
        <div class="pillar"></div>
        <div class="pillar"></div>
        <div class="pillar"></div>
      </div>
    </div>

    <div class="card">
      <div class="content-wrapper">
        <div class="intro">
          <p>Welcome</p>
          <h1>Hello I am Valentino Jaya Lay From Indonesia</h1>
          <div class="typing-container">
            <span class="static-text">I'm a </span>
            <span class="dynamic-text">
              {{ displayText }}
              <span class="cursor"></span>
            </span>
          </div>
        </div>

        <div class="profile-image">
          <img src="C:\Git\TryFirstVite\public\profile.jpg" alt="Profile Image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  padding: 0 5%;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.pillars {
  position: absolute;
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  pointer-events: none;
  z-index: 2;
}

.pillars.top {
  top: 0;
}

.pillars.bottom {
  bottom: 0;
}

.pillar-group {
  display: flex;
  gap: 0.5rem;
}

.pillar {
  width: 10px;
  height: 200px;
  background-color: #4834d4;
  margin: 0 2px;
}

.typing-container {
  position: relative;
  display: inline-flex;
  font-size: 1.5rem;
  margin-top: 1rem;
  font-family: monospace;
}

.static-text {
  color: #fff;
  margin-right: 0.5rem;
}

.dynamic-text {
  position: relative;
  color: #4834d4;
  padding-right: 5px;
}

.cursor {
  position: absolute;
  right: -5px;
  width: 2px;
  height: 100%;
  background-color: #4834d4;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.card {
  background-color: rgba(0, 0, 0, 0.9); 
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  z-index: 1;
  opacity: 1;
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.intro {
    max-width: 50%;
}

.intro h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.intro p {
    margin: 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    color: #aaa;
}

.profile-image {
    max-width: 35%;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-image img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}
</style>