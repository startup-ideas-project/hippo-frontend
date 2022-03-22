import React, { useRef, useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import emailjs from 'emailjs-com';

import { NewsletterForm } from './newsletter-form'

export function Hero({ title, subTitle, content1, content2, content3, illustration: Illustration }) {
  const scrollRevealRef = useRef([])
  const [emailReceived, setEmailReceived] = useState(false)

  useEffect(() => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal('.reveal', {
          duration: 6000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 2500,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <section className="text-center lg:w-full lg:py-20 lg:text-left">
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy bg-white pt-10 pb-16 lg:pt-16 lg:pr-20" style={{ minWidth: '600px' }}>
            <div className="mx-auto w-full max-w-3xl">
              <h1 ref={(el) => (scrollRevealRef.current[1] = el)} className="mt-0 mb-4 text-4xl font-bold md:text-5xl reveal" style={{color:'purple'}}>
                {title}
              </h1>
              <h1 ref={(el) => (scrollRevealRef.current[3] = el)} className="mt-0 mb-4 text-4xl font-bold md:text-5xl reveal"  style={{color:'#5850EC'}} >
                {subTitle}
              </h1>
              <br/>
              <p ref={(el) => (scrollRevealRef.current[3] = el)} className="prose prose-xl px-16 text-gray-500 md:px-0 reveal" >
                {content1}
              </p>
              <br/>
              <p ref={(el) => (scrollRevealRef.current[3] = el)} className="prose prose-xl px-16 text-gray-500 md:px-0 reveal" >
                {content2}
              </p>
              <br/>
              <p className="prose prose-xl px-16 text-gray-500 md:px-0 reveal" >
                {content3}
              </p>
              <br/>
            </div>
            <div ref={(el) => (scrollRevealRef.current[0] = el)}>
            <h4 style={{color:'red'}} className="reveal text-gray-500">
                Beta is coming in 4 weeks
            </h4>
              <NewsletterForm
                className="m-0 mt-8 max-w-md md:flex reveal"
                submitBtn="Get early access"
                onSubmit={(values) => {
                    emailjs.send('service_kjcd90a', 'template_yhqddaf', {
                        from_name: "landing page",
                        to_name: "hoang le",
                        message: values,
                    }, 'jNYbwsP9Nt_uBpl-c').then(_ => setEmailReceived(true))
                }}
              />
              
            </div>

          {emailReceived && 
          <div>
              <h4 style={{color:'green'}}>Congratulations! we got your email</h4>
          </div>
          }
          </div>

          <div className="relative -ml-6 -mr-6 py-10 lg:p-0">
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  )
}