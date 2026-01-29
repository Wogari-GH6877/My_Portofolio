import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'
const navLinks=[
    {href:"#about",label:"About"},
    {href:"#projects",label:"Projects"},
    {href:"#experience",label:"Experience"},
    {href:"#testimonials",label:"Testimonails"},

    
]
function Navbar() {

    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
    const [isScrolled,setIsScrolled]=useState(false);

    useEffect(()=>{

        const handleScroll = ()=>{
            setIsScrolled(window.scrollY>50);
        }
     window.addEventListener("scroll",handleScroll);
     return ()=>window.removeEventListener("scroll",handleScroll)
    },[]);

  return (
    
    <header className={`fixed left-0 top-0 right-0 transition-all duration-500 ${isScrolled ? "strong-glass py-3":"bg-transparent py-5"}  z-50`}>
        <nav className='container mx-auto px-6 flex items-center justify-between'>
            <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>WAK<span className='text-primary hover:text-foreground'>X</span></a>
            <div className='hidden md:flex items-center gap-1'>
                <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                    {
                        navLinks.map((link,index)=>(
                            <a href={link.href} key={index} 
                            className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full'>{link.label}</a>
                        ))
                    }
                </div>
            </div>

            {/* CTA Button */}
            <div className='hidden md:block'>
                <Button size="sm"><a href="#contact">Contact Me</a></Button>
            </div>

            {/* Mobile Menu Button */}
            <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen?<X size={24}/>:<Menu size={24}/>}
            </button>
        </nav>

        {isMobileMenuOpen && (<div className='md:hidden glass-strong animate-fade-in'>
            <div className='container mx-auto flex flex-col px-6 py-7 gap-4'>
{
                navLinks.map((link,index)=>(
                <a href={link.href} key={index} 
                    className='text-lg text-muted-foreground hover:text-foreground py-4'
                    onClick={()=>setIsMobileMenuOpen(false)}>{link.label}</a>
                ))
                }

                <a href="#contact"><Button  onClick={()=>setIsMobileMenuOpen(false)}>Contact Me</Button></a>
            </div>
        </div>)}
    </header>
  )
}

export default Navbar