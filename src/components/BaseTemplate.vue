<script setup>
    
    import { Parallax } from "@react-spring/parallax";
import bio from "./BIO.vue"; // Import component
    import About from "./aboutMe.vue"; // Import component
</script>

<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Digital Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    </head>
    
    <body>
        
        <section  >
            <bio/>
        </section>
    
        <section  >
            <About/>
        </section>


    
    </body>
    
    </html>
</template>



<style scoped>

</style>
