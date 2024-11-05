<script setup>
import { ref } from 'vue'

const upcomingProjects = ref([
 
  {
    title: "Open to Collaborations",
    status: "Open",
    description: "I'm actively seeking opportunities to contribute to open-source projects or collaborate on innovative solutions.",
    technologies: ["Various Technologies"],
    timeline: "Ongoing"
  }
])

const skills = ref({
  programming: ["Laravel", "Python", "C#", "Java", "PHP"],
  web: ["HTML", "CSS", "JavaScript"],
  security: ["SIEM SOC", "Digital Forensics", "Reverse Engineering"],
  other: ["CCNA", "DBMS", "Scrum"]
})
</script>

<template>
  <div class="projects-container">
    <div class="content-wrapper">
      <div class="section-header">
        <h2 class="glowing-text">Projects & Skills</h2>
        <p class="subtitle">Building My Portfolio One Step at a Time</p>
      </div>

      <div class="message-card glass-card">
        <p>🚀 <span class="highlight-text">Hello! I'm currently at the beginning of my journey.</span></p>
        <p>While I'm building my project portfolio, I'm focusing on:</p>
        <ul>
          <li>Advancing my technical skills through structured learning</li>
          <li>Working on personal projects to apply my knowledge</li>
          <li>Seeking opportunities for practical experience</li>
        </ul>
      </div>

      <div class="upcoming-projects">
        <h3>Current & Upcoming Projects</h3>
        <div class="projects-grid">
          <div v-for="project in upcomingProjects" 
               :key="project.title" 
               class="project-card glass-card">
            <div class="project-header">
              <h4>{{ project.title }}</h4>
              <span :class="['status-badge', project.status.toLowerCase()]">
                {{ project.status }}
              </span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="timeline">{{ project.timeline }}</div>
          </div>
        </div>
      </div>

      <div class="skills-overview">
        <h3>Technical Expertise</h3>
        <div class="skills-grid">
          <div class="skill-category glass-card">
            <h4>Programming</h4>
            <div class="skill-tags">
              <span v-for="skill in skills.programming" 
                    :key="skill" 
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="skill-category glass-card">
            <h4>Web Development</h4>
            <div class="skill-tags">
              <span v-for="skill in skills.web" 
                    :key="skill" 
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="skill-category glass-card">
            <h4>Security</h4>
            <div class="skill-tags">
              <span v-for="skill in skills.security" 
                    :key="skill" 
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          <div class="skill-category glass-card">
            <h4>Other Skills</h4>
            <div class="skill-tags">
              <span v-for="skill in skills.other" 
                    :key="skill" 
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  min-height: 100vh;
  padding: 2rem;
  color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.glowing-text {
  font-size: 2.5rem;
  color: #6650fb;
  text-shadow: 0 0 10px rgba(72, 52, 212, 0.5);
  margin-bottom: 1rem;
}

.subtitle {
  color: #a8b2d1;
  font-size: 1.2rem;
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

.message-card {
  margin-bottom: 3rem;
  text-align: left;
}

.message-card ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.message-card li {
  margin-bottom: 0.5rem;
  position: relative;
}

.message-card li::before {
  content: "▹";
  position: absolute;
  left: -1.5rem;
  color: #6852f8;
}

.highlight-text {
  color: #735ff6;
  font-weight: 500;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.project-card {
  height: 100%;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.in {
  background: rgba(72, 52, 212, 0.2);
  color: #6a55f3;
}

.status-badge.planned {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.status-badge.open {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.project-description {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(72, 52, 212, 0.1);
  border-radius: 15px;
  font-size: 0.8rem;
}

.timeline {
  color: #a8b2d1;
  font-size: 0.9rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-category h4 {
  margin-bottom: 1rem;
  color: #8573ff;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.5rem 1rem;
  background: rgba(72, 52, 212, 0.1);
  border-radius: 15px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }

  .content-wrapper {
    padding: 1rem;
  }

  .glowing-text {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>