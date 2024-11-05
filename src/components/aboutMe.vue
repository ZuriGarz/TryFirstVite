<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// Previous script content remains the same
const skills = [
    'Laravel', 'Python Programming', 'C#', 'Java', 'HTML', 'CSS', 'Javascript', 'PHP' ,
    'R Programming', 'DBMS', 'SIEM SOC', 'Digital Forensics', 'Reverse Engineering',
    'CCNA', 'Scrum'
]

const experiences = ref([
    {
        title: 'Innovation Team Intern',
        company: 'Theta Edge Berhad',
        period: 'July 2023 - Nov 2023',
        highlights: [
            'Intern in the innovation team focusing on PHP programming and design',
            'Successfully executed the initial launch of the Pilgrim Pro project'
        ]
    }
])

const education = ref([
    {
        degree: 'Bachelor of Computer Science',
        specialization: 'Cybersecurity',
        school: 'Asia Pacific University',
        period: '2021 - 2025',
        achievements: [
            'CCNA: Switching, Routing, and Wireless Essentials',
            'ELITE SECURITY OPERATIONS LAB (ESOL) by Techforte',
            'PICOCTF competition participant'
        ]
    },
    {
        degree: 'Highschool',
        specialization: '',
        school: 'Sekolah Victory Plus',
        period: '2018 - 2021',
        achievements: []
    }
])

const certifications = ref([
    {
        name: 'CCNA: Switching, Routing, and Wireless Essentials',
        issuer: 'Cisco',
        date: 'January 31, 2023'
    },
    {
        name: 'ELITE SECURITY OPERATIONS LAB (ESOL)',
        issuer: 'Techforte',
        date: 'June 2023'
    }
])

// Animation for skills
const currentSkillIndex = ref(0)
const displayedSkill = ref(skills[0])

onMounted(() => {
    setInterval(() => {
        currentSkillIndex.value = (currentSkillIndex.value + 1) % skills.length
        displayedSkill.value = skills[currentSkillIndex.value]
    }, 2000)
})
// Fade in/out animation
const isVisible = ref(false)
const aboutContentRef = ref(null)

useIntersectionObserver(aboutContentRef, ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting
})

</script>

<template>
    <div class="about-container">
        <div class="about-content">
            <div class="about-content" :class="{ 'fade-in': isVisible, 'fade-out': !isVisible }" ref="aboutContentRef">
                <div class="profile-section">
                    <div class="profile-section">
                        <div class="profile-header">
                            <h2 class="glowing-text">About Me</h2>
                            <div class="tag-line">Cybersecurity Student & Full Stack Developer</div>
                        </div>

                        <div class="summary glass-card">
                            <p>I am an undergraduate student pursuing a Bachelor of Computer Science at Asia Pacific
                                University, specializing in Cybersecurity. With a strong foundation in programming
                                languages
                                and experience in practical projects, I excel in communication and teamwork. My
                                adaptability
                                and problem-solving skills make me an effective contributor in project-driven
                                environments.</p>
                        </div>

                        <div class="education-section">
                            <h3 class="section-title">Education</h3>
                            <div v-for="edu in education" :key="edu.degree" class="education-card glass-card">
                                <div class="edu-header">
                                    <h4>{{ edu.degree }}</h4>
                                    <span class="period highlight-text">{{ edu.period }}</span>
                                </div>
                                <div class="school highlight-text">{{ edu.school }}</div>
                                <div v-if="edu.specialization" class="specialization">
                                    Specialization: {{ edu.specialization }}
                                </div>
                                <ul class="achievements" v-if="edu.achievements && edu.achievements.length > 0">
                                    <li v-for="achievement in edu.achievements" :key="achievement">
                                        {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        

                        <div class="experience-section">
                            <h3 class="section-title">Experience</h3>
                            <div v-for="exp in experiences" :key="exp.title" class="experience-card glass-card">
                                <div class="exp-header">
                                    <h4>{{ exp.title }}</h4>
                                    <span class="period highlight-text">{{ exp.period }}</span>
                                </div>
                                <div class="company highlight-text">{{ exp.company }}</div>
                                <ul class="highlights">
                                    <li v-for="highlight in exp.highlights" :key="highlight">
                                        {{ highlight }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="certifications-section">
                            <h3 class="section-title">Certifications & Training</h3>
                            <div class="certifications-container">
                                <div v-for="cert in certifications" :key="cert.name"
                                    class="certification-card glass-card">
                                    <h4>{{ cert.name }}</h4>
                                    <div class="cert-details">
                                        <span class="issuer highlight-text">{{ cert.issuer }}</span>
                                        <span class="date">{{ cert.date }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #000428 0%, #022c51 100%);
    color: white;
}

.about-content {
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    border-radius: 20px;
    background: rgba(15, 23, 42, 0.8);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}

.profile-header {
    margin-bottom: 3rem;
    text-align: center;
}

.glowing-text {
    font-size: 2rem;
    color: #4834d4;
    text-shadow: 0 0 10px rgba(72, 52, 212, 0.5);
    margin-bottom: 1rem;
    font-weight: 700;
}

.tag-line {
    font-size: 1.4rem;
    color: #a8b2d1;
    font-weight: 300;
    letter-spacing: 1px;
}

.section-title {
    color: #4834d4;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 5px rgba(72, 52, 212, 0.3);
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.highlight-text {
    color: #4834d4;
    font-weight: 200;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.skill-tag {
    padding: 0.7rem 1.2rem;
    background: rgba(72, 52, 212, 0.1);
    border: 1px solid #4834d4;
    border-radius: 25px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: default;
}

.skill-tag.active {
    background: #4834d4;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(72, 52, 212, 0.5);
}

.edu-header,
.exp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.edu-header h4,
.exp-header h4 {
    font-size: 1.2rem;
    color: #fff;
}

.period {
    font-size: 0.9rem;
}

.achievements,
.highlights {
    list-style-type: none;
    padding-left: 1.5rem;
    margin-top: 1rem;
}

.achievements li,
.highlights li {
    margin-bottom: 0.5rem;
    position: relative;
    line-height: 1.6;
}

.achievements li::before,
.highlights li::before {
    content: "▹";
    position: absolute;
    left: -1.5rem;
    color: #4834d4;
}

.certifications-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.cert-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .about-container {
        padding: 1rem;
    }

    .about-content {
        padding: 1.5rem;
    }

    .glowing-text {
        font-size: 0.5rem;
    }

    .exp-header,
    .edu-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .certifications-container {
        grid-template-columns: 1fr;
    }
}

/* Subtle animation for cards on scroll */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.glass-card {
    animation: fadeInUp 0.6s ease-out forwards;
}



/* Fade in/out animation */
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