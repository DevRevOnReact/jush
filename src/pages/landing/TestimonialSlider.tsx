"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Artifex created and fully functional astrology app for Telegram at a remarkably affordable cost. Their attention to detail, commitment to quality, and excellent communication made the entire process seamless and enjoyable."',
    author: "Kislicin Ian Vyacheslavovich",
    title: "Business Student",
  },
  {
    quote:
      '"As a startup, partnering with JunziTech Solutions was a game-changer for building our Fitness CRM. Their streamlined onboarding process and complimentary design services helped us get our product to clients with minimal resources."',
    author: "Nestor Limas",
    title: "Founder of Fitnest",
  },
  {
    quote:
      '"JunziTech Solutions is more than just a development service—they are a dependable partner dedicated to their clients’ success. Their expertise, adaptability, and professionalism set them apart as a development team you can trust."',
    author: "Eljan Naritsky",
    title: "Program Manager",
  },
  {
    quote:
      '"JunziTech Solutions delivered a dynamic and robust website framework that surpassed our expectations. Their affordability, exceptional quality, and strong communication skills made it clear we were collaborating with a true partner, not just a service provider."',
    author: "Boris",
    title: "Head of Engineering",
  },
  {
    quote:
      '"Their team provided a wireframe design at an unbeatable price. They demonstrated exceptional technical expertise, unparalleled quality, and outstanding communication every step of the way."',
    author: "Michael",
    title: "Entrepreneur",
  },
  {
    quote:
      '"Working with JunziTech Solutions was transformative. Their expertise in AI and machine learning delivered a cutting-edge solution that exceeded expectations. Their professionalism and innovation are unmatched."',
    author: "Xavier Bombaro",
    title: "ProTaxBot Founder",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (inView) {
      const interval = setInterval(nextSlide, 7000)
      return () => clearInterval(interval)
    }
  }, [inView, nextSlide]) 

  return (
    <div className="bg-white">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Quote mark */}
          <motion.div
            className="absolute -top-4 -left-4 text-5xl sm:text-[80px] text-[#E5E7EB] font-serif leading-none select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {'"'}
          </motion.div>

          {/* Testimonial content */}
          <div className="relative min-h-[240px] pl-4 sm:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-2xl sm:text-[40px] leading-[1.2] text-[#111827] font-light">
                  {testimonials[currentSlide].quote}
                </p>
                <div className="space-y-1">
                  <p className="text-base font-medium text-[#111827]">{testimonials[currentSlide].author}</p>
                  <p className="text-sm sm:text-base text-[#6B7280]">{testimonials[currentSlide].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 sm:mt-16 flex items-center justify-between sm:justify-start gap-4">
            <motion.button
              onClick={prevSlide}
              className="p-1 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300
                    ${index === currentSlide ? "bg-[#111827] w-4" : "bg-[#E5E7EB] w-1.5 hover:bg-[#D1D5DB]"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-1 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

