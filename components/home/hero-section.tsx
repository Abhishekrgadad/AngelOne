"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, ChevronRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with subtle pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-accent/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              >
                ಕನ್ನಡದಲ್ಲಿ ಹೂಡಿಕೆ ತರಬೇತಿ
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-primary dark:text-white"
              >
                Master the <span className="text-accent">Stock Market</span> in Kannada
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 font-open-sans max-w-lg"
            >
              Join Abhilash, your trusted guide in financial literacy, and learn how to build wealth through smart investments in your native language.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light dark:bg-accent dark:text-primary dark:hover:bg-accent-light font-medium px-6"
              >
                Start Learning
                <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary font-medium px-6"
              >
                Watch Free Videos
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="flex items-center">
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-primary">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0Z" fill="currentColor" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">+10K</div>
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Students</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-accent text-primary">
                  <Award size={18} />
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Top Rated</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Featured Video */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <div className="relative w-full h-full bg-gray-800 rounded-xl overflow-hidden">
              {!isVideoPlaying ? (
                <>
                  <Image 
                    src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg" 
                    alt="Stock market education" 
                    className="object-cover"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                    <Button
                      onClick={() => setIsVideoPlaying(true)}
                      variant="outline"
                      size="icon"
                      className="w-16 h-16 rounded-full bg-white text-primary hover:scale-110 transition-transform duration-300"
                    >
                      <Play size={24} className="ml-1" fill="currentColor" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/iRE2QT9B5oI?si=zQH2xzt6MGyxlnK4"
                    title="YouTube video player"
                    allow='autoplay; encrypted-media'
                    
                    
                  ></iframe>

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/iRE2QT9B5oI?si=zQH2xzt6MGyxlnK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="0.05" 
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,58.7C672,64,768,64,864,64C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="text-primary dark:text-accent"
          ></path>
        </svg>
      </div>
    </section>
  )
}