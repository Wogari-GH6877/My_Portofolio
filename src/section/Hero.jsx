import React from 'react'
import Button from "../components/Button"
import { ArrowRight, ChevronDown, Download, Facebook, Github, Linkedin, Twitter } from 'lucide-react'
function Hero() {

  const skills=[
    "HTML", "CSS", "JavaScript", "React","TailWindCss","Boostrap","JQuery","EJS",
    "Node.js", "Express.js",  "Python", "FastApi", "Flask", "Java", "Spring Boot", "C++", "MySQL", "PostgreSQL", "MongoDB",  "REST API", "Git","GitHub", "Vercel", "Render"

  ]
  return (
    <section className='relative min-h-screen flex items-center overflow-x-hidden'>
      <div className='absolute inset-0'>
         <img src="/hero-bg.jpg" alt=" Hero img "
    className='w-full h-full object-cover opacity-40' />

    <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'>

    </div>
    </div>
     {/* Green dots */}

    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(30)].map((_,i)=>(
        <div key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60'
        style={{
          backgroundColor:"#20B2A6", 
          left:`${Math.random()*100}%`,
          top:`${Math.random()*100}%`,
          animation:`slow-drift ${15 + Math.random()*20}s ease-in-out  infinite`,
          animationDelay:`${Math.random()*5}s`

        }}/>

        
      ))}

    </div>
    {/* Content */}

    <div className='  container mx-auto px-6 pt-32 pb-20 relative z-10 space-y-16'>
      <div className='grid lg:grid-cols-2 items-center'>
        {/* left-column-text-content */}
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
               <span className='w-2 h-2 bg-primary roundend-full animate-pulse'/>Software Engineering Student * Full Stack Web Developer

            </span>
            {/* Heading  */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>crafting <span className='text-primary glow-text'>digital</span><br />
              experiences with <span className='font-serif italic font-normal text-white'>precision</span></h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
  Hi, I'm Wogari a passionate Software Engineering Student specializing in full-stack web development.
   I build responsive and scalable web applications using modern technologies like React, Node.js, and MongoDB. 
   I enjoy turning ideas into functional products, solving complex problems, 
   and continuously learning new tools to create efficient and user-friendly digital experiences.
</p>

            </div>

            {/* CTA */}

            <div className='flex flex-wrap mb-4 mt-7 gap-6 animate-fade-in animation-delay-300'>
              <a href="#contact"><Button size="lg">Contact Me <ArrowRight className='w-5 h-5'/></Button></a>
              <button>
                <span className='relative flex z-10 justify-center items-center gap-2'><Download className='w-5 h-5'/><a href="https://drive.google.com/file/d/11bXF8fdiqxd73PaIK-2997lUpOOJ9kk6/view?usp=sharing">Download CV</a> </span>
              </button>
            </div>
            {/* Social links */}
            <div className='flex items-center mb-10 gap-5 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow Me:</span>
              {[
                {icon:Github ,href:"https://github.com/Wogari-GH6877"},
                {icon:Twitter,href:"#"},
                {icon:Linkedin,href:"#"},
              ].map((social,idx)=>(
                <a key={idx}href={social.href} target="_blank" className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  {<social.icon className='w-5 h-5'/>}</a>
              ))}
            </div>
           
          </div>
        </div>
        {/* Right Column-profile Image */}

        <div className='relative animate-fade-in'>
          {/* Profile image */}
          <div className='relative max-w-md mx-auto'>
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-br
            from-primary/30 via-transparent to-primary/10 blur-2xl  animate-pulse'/>

            <div className='relative glass rounded-3xl p-3 glow-border'>
              <img src="/profile-photo.jpg" alt="Wogari " className='w-full aspect-[4/5] object-cover rounded-2xl'/>
              {/* Floating Badge */}

              <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                  <span className='text-sm font-md'>Available For Work</span>
                </div>
              </div>

              {/* status Badge */}

              <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                <div className='text-2xl font-bold text-primary'>2+</div>
                <div className='text-xs text-muted-foreground'>Years Exp.

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills section */}
      <div className='mt-20 animation-delay-600'>
        <p className='text-sm text-muted-foreground mb-6 text-center'>Technology that i work with </p>
        <div className='relative overflow-hidden'>
          <div className='flex animate-marquee'>
            {[...skills,...skills].map((skill,idx)=>(
              <div key={idx} className='flex-shrink-0 px-8 py-4'><span
              className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground'>{skill}</span></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in
      animation-delay-800'>
      <a href="#about"
      className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'
      >

        <span className='text-xs uppercase tracking-wider'>Scroll</span>
      <ChevronDown className='w-6 h-6 animate-bounce'/>

      </a>
      

    </div>
    </div>
    
    </section>
  )
}

export default Hero