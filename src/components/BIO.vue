<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const topLeft = ref(null)
const topRight = ref(null)
const bottomLeft = ref(null)
const bottomRight = ref(null)

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

        <div  v-motion-slide-right class="card">
            <div class="content-wrapper">
                <div class="intro">
                    <p>Welcome</p>
                    <h1>Hello I am Valentino Jaya Lay From Indonesia</h1>
                </div>
                
                <div class="profile-image">
                    <img src="C:\Git\VueJSProject\public\profile.jpg" alt="Profile Image">
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

.card {
    
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 1200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

</style>