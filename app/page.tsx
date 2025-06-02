"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, BookOpen, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import HeroSection from '@/components/home/hero-section'
import VideoCategories from '@/components/home/video-categories'
import LatestArticles from '@/components/home/latest-articles'
import JoinCommunity from '@/components/home/join-community'
import MeetAbhilash from '@/components/home/meet-abhilash'
import { motion } from 'framer-motion'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <VideoCategories />
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
              <span className="text-primary dark:text-white">Start Your Financial </span>
              <span className="text-accent">Journey Today</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-primary dark:bg-primary-light overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10">
                      <TrendingUp size={48} className="mb-4 text-accent" />
                      <h3 className="text-xl font-bold font-poppins mb-2">Beginner Friendly</h3>
                      <p className="text-sm text-gray-200">Start your investment journey with simple, easy-to-understand concepts in Kannada</p>
                      <Button variant="link" className="mt-4 text-accent hover:text-accent-light flex items-center">
                        Get Started <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-primary-light dark:bg-primary overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10">
                      <BookOpen size={48} className="mb-4 text-accent" />
                      <h3 className="text-xl font-bold font-poppins mb-2">Comprehensive Courses</h3>
                      <p className="text-sm text-gray-200">Structured learning paths to master stock market investing step by step</p>
                      <Button variant="link" className="mt-4 text-accent hover:text-accent-light flex items-center">
                        Browse Courses <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-primary dark:bg-primary-light overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10">
                      <Users size={48} className="mb-4 text-accent" />
                      <h3 className="text-xl font-bold font-poppins mb-2">Community Support</h3>
                      <p className="text-sm text-gray-200">Join thousands of Kannada investors learning and growing together</p>
                      <Button variant="link" className="mt-4 text-accent hover:text-accent-light flex items-center">
                        Join Community <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <LatestArticles />
      <JoinCommunity />
      <MeetAbhilash />
    </div>
  )
}