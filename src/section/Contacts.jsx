import React, { useState } from 'react'
import { Mail,Phone,MapPin, SendIcon ,CheckCircle,AlertCircle} from 'lucide-react';
import Button from '../components/Button';
import emailjs from "@emailjs/browser"
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wogariararsa0968@gmail.com",
    href: "mailto:wogariararsa0968@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 968778471",
    href: "tel:+251 968778471",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ethiopia , Adama",
    href: "#",
  },
];
function Contacts() {

  const [FormData,setFormData]=useState(
    {
      name:"",
      email:"",
      message:""
    }
  )

  const [isLoading,setIsLoading]=useState(false);
  const [submitStatus,setSubmitStatus]=useState({
    type:null,
    message:""
  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({type:null,message:""})
    try {
      const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if(!serviceId || !templateId || !publicKey){
        throw new Error(
          "EmailJS configuration is missing. please check your environment varibale"
        )
      }
      await emailjs.send(serviceId,templateId,{
        name:FormData.name,
        email:FormData.email,
        message:FormData.message
      },publicKey);

      setSubmitStatus({
        type:"success",
        message:"1'Message sent successfully ! I'll get back to you soon"
      });

      setFormData({name:"",email:"",message:""});
       
    } catch (error) {

      console.error("EmailJs error",error);
      setSubmitStatus({
        type:"error",
        message:error.text || "Failed to send message .please try again later"
      })
      
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <section id="contact" className="py-8 md:py-16 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        {/* Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-full lg:max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/30 w-full animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={FormData.name}
                  onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={FormData.email}
                  onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                  required
                  placeholder="Your@email.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  value={FormData.message}
                  onChange={(e) => setFormData({ ...FormData, message: e.target.value })}
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                />
              </div>

              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info + Availability */}
          <div className="space-y-6 w-full animate-fade-in animation-delay-400">
            {/* Contact Info */}
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-6 md:p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;