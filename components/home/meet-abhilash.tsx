"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MeetAbhilash() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src="/abhilash.png"
                alt="Abhilash - Financial Educator"
                fill
                className="object-cover object-center"
              />
              <div className="absolute -bottom-1 -right-1 -left-1 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-wider mb-1">Meet Your Guide</p>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins">Abhilash</h3>
                <p className="text-sm text-gray-200 mt-1">Financial Educator & Stock Market Expert</p>
              </div>
              
              {/* Achievement badges */}
              <div className="absolute top-6 right-6 bg-white dark:bg-gray-800 rounded-full py-1 px-3 flex items-center">
                <Award className="h-4 w-4 text-accent mr-1" />
                <span className="text-xs font-medium text-primary dark:text-white">Top Financial Educator</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                <span className="text-primary dark:text-white">Your Trusted Guide to </span>
                <span className="text-accent">Financial Freedom</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over 10 years of experience in the Indian stock market, Abhilash has helped thousands of Kannada speakers navigate their investment journey successfully.
                </p>
                <p>
                  As a certified financial planner and passionate educator, he breaks down complex financial concepts into simple, actionable advice in Kannada that anyone can understand.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic my-6">
                  "My mission is to make financial literacy accessible to every Kannadiga, helping them achieve financial independence through knowledge and smart investing."
                </blockquote>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-accent">10+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-accent">50K+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-accent">500+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Videos</span>
              </div>
            </div>
            
            <Button 
              asChild
              className="w-fit bg-primary hover:bg-primary-light text-white dark:bg-accent dark:text-primary dark:hover:bg-accent-light"
            >
              <Link href="/about">
                Learn More About Abhilash
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}