import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react'
const projects = [
  {
    title: "Gemini Clone (AI Chat Application)",
    description:
      "An AI-powered chat application built using the Google Gemini API, featuring intelligent responses, persistent search history, and a modern, user-friendly interface for seamless interaction.",
    image: "/projects/gemini-clone.png",
    tags: ["React", "JavaScript", "Google Gemini API", "CSS"],
    link: "mygeminiclone-2025-vdq5.vercel.app",
    github: "https://github.com/Wogari-GH6877/My_Gemini_clone_2025",
  },
  {
    title: "MERN Authentication System",
    description:
      "A secure full-stack authentication system with user signup, login, email verification, password reset functionality, and automated email notifications, built using the MERN stack.",
    image: "/projects/mern-auth.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://mern-auth-zeta-olive.vercel.app/",
    github: "https://github.com/Wogari-GH6877/MERN_AUTH",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired web application displaying movies across multiple categories, with detailed views including reviews and descriptions when users interact with movie cards.",
    image: "/projects/netflix-clone.png",
    tags: ["React", "JavaScript", "API Integration", "CSS"],
    link: "https://netflix-clone-2025-dun.vercel.app",
    github: "https://github.com/Wogari-GH6877/Netflix-Clone-2025",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "An interactive Tic-Tac-Toe game allowing users to play against the computer or another player, featuring dynamic game logic and responsive UI built with React.",
    image: "/projects/tic-tac-toe.png",
    tags: ["React", "JavaScript", "Game Logic"],
    link: "https://tic-tac-toe-ivory-three-20.vercel.app",
    github: "https://github.com/Wogari-GH6877/tic-tac-toe",
  },
  {
    title: "Christian Mission Collection Web App",
    description:
      "A full-stack MERN web application designed to digitize data collection during gospel missions, charity events, and community programs, with admin reports and CSV export functionality.",
    image: "/projects/mission-collection.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
    github: "https://github.com/Wogari-GH6877/Christians_Mission_Web_App",
  },
];

function Projects() {
  return (
    <section id="projects"className='py-28 relative overflow-hidden'>
      {/* Bg-glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'/>
      <div className='absolute top-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
      <div className='container mx-auto px-6 relative z-10'>

        {/* Section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Project that 
            <span className='font-serif italic font-normal text-white'> make an impact</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>my recent project from starch to innovation that real-world problem</p>
        </div>
        {/* Project Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project,idx)=>(
            <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
            style={{animationDelay: `${(idx + 1)*100}ms`}}>
              {/* image */}
              <div className='relative overflow-hidden aspect-vedio'>
                <img src={project.image} 
                alt={project.title}
                 className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                 style={{animationDelay: `${(idx + 1)*100}ms`}}/>
                 <div className='absolute inset-0 '/>
                 {/* Overlay Links */}
                 <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transtion-opacity duration-300'>
                   <a target="_blank" href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transtion-all'>
                    <ArrowUpRight className='w-5 h-5'/>

                   </a>
                   <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transtion-all '>
                    <Github target="_blank" className='w-5 h-5'/>
                   </a>
                 </div>

              </div>
              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary  transition-colors'>{project.title}</h3>
                  <ArrowUpRight
                  className='w-5 h-5 text-muted-foreground group-hover:text-primary 
                  group-hover:translate-x-1 group-hover:translate-y-1 transition
                  '/>
                </div>
                <p className='text-muted-foreground  text-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>{project.tags.map((tag,tagIdx)=>(
                  <span key={tagIdx}className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary trnasition-all duration-300'>{tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
          {/* Veiw All CTA */}

          <div className=' text-center mt-12 animate-fade-in animation-delay-300 flex justity-center mx-auto gap-2 items-center 
          px-2 py-1.5 border border-border/50 hover:bg-primary/20 rounded-full'>
            View All Projects

            <ArrowUpRight className='w-6 h-6'/>
          </div>
        </div>

        </div>
        </section>
  )
}

export default Projects