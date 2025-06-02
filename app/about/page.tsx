"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Calendar, BookOpen, Users, TrendingUp, Youtube } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutPage() {
  const milestones = [
    {
      year: "2015",
      title: "Started Angel Investments",
      description: "Began creating educational content about stock market investing in Kannada"
    },
    {
      year: "2018",
      title: "Reached 10,000 YouTube Subscribers",
      description: "Created a community of dedicated learners following the channel"
    },
    {
      year: "2020",
      title: "Launched Online Courses",
      description: "Expanded educational offerings with comprehensive structured courses"
    },
    {
      year: "2022",
      title: "Achieved 50,000 Students",
      description: "Helped thousands of Kannadigas understand investing and personal finance"
    },
    {
      year: "2025",
      title: "Launched Angel Investments Platform",
      description: "Created a comprehensive platform for financial education in Kannada"
    }
  ]
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="/abhilash.png"
                alt="Abhilash - Financial Educator"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent/80 text-primary text-xs font-medium rounded">Stock Market Expert</span>
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs font-medium rounded">Certified Financial Planner</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins">Abhilash</h2>
                <p className="text-gray-200 mt-1">Founder, Angel Investments</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              <div>
                <span className="inline-block bg-accent/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">About Me</span>
                <h1 className="text-3xl md:text-4xl font-bold font-poppins leading-tight text-primary dark:text-white mb-6">
                  Helping Kannadigas Achieve <span className="text-accent">Financial Freedom</span>
                </h1>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Namaskara! I'm Abhilash, a passionate financial educator dedicated to making stock market investing and personal finance accessible to every Kannadiga.
                  </p>
                  <p>
                    With over a decade of experience in the Indian financial markets, I've made it my mission to demystify investing and help people from Karnataka build wealth through informed financial decisions.
                  </p>
                  <p>
                    What started as a small YouTube channel has now grown into a comprehensive platform serving thousands of Kannada-speaking investors across India and abroad.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">10+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">100K+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">YouTube Subs</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Videos Created</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-accent">50K+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Students</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              <span className="text-primary dark:text-white">My </span>
              <span className="text-accent">Story</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The journey from a personal investor to becoming Karnataka's trusted financial educator
            </p>
          </motion.div>
          
          <Tabs defaultValue="story" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="story">My Journey</TabsTrigger>
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="approach">Teaching Approach</TabsTrigger>
            </TabsList>
            
            <TabsContent value="story" className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                My journey began when I was working as a software engineer in Bangalore. Like many others, I had a steady income but little knowledge about how to grow my wealth. After losing money in my first few investments due to lack of proper guidance, I realized the importance of financial education.
              </p>
              <p>
                I spent years studying the stock market, taking courses, and learning from experts. As my own investments started showing results, friends and family began asking for advice. I noticed that while there was plenty of financial content in English and Hindi, there was very little quality education available in Kannada.
              </p>
              <p>
                This gap inspired me to start creating YouTube videos in Kannada, explaining investment concepts in simple terms. The response was overwhelming! People from across Karnataka and Kannada-speaking communities worldwide connected with the content, and the channel grew rapidly.
              </p>
              <p>
                Today, Angel Investments has evolved into a comprehensive financial education platform with courses, community groups, and personalized advisory services – all dedicated to helping Kannadigas achieve financial literacy and independence.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-4 italic my-8">
                "I believe financial knowledge should be accessible to everyone, regardless of their background or language. My goal is to empower every Kannadiga with the tools to secure their financial future."
              </blockquote>
            </TabsContent>
            
            <TabsContent value="mission" className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold font-poppins mb-3 text-primary dark:text-white">Our Mission</h3>
                <p>
                  To make financial literacy accessible to every Kannadiga and empower them with the knowledge, skills, and confidence to make informed investment decisions that lead to financial independence.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold font-poppins mb-3 text-primary dark:text-white">Our Vision</h3>
                <p>
                  To create a financially literate Karnataka where every individual has equal access to quality financial education in their native language, leading to greater economic prosperity and reduced wealth inequality.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold font-poppins mb-4 text-primary dark:text-white">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-primary dark:text-white mb-2">Simplicity</h4>
                    <p className="text-sm">Breaking down complex concepts into easy-to-understand language</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-primary dark:text-white mb-2">Integrity</h4>
                    <p className="text-sm">Providing honest, unbiased advice without hidden agendas</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-primary dark:text-white mb-2">Community</h4>
                    <p className="text-sm">Building a supportive network of Kannada investors</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="approach" className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                My teaching approach is centered around making financial education accessible, engaging, and practical for Kannada speakers from all walks of life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                      <BookOpen className="h-5 w-5 text-primary dark:text-accent" />
                    </div>
                    <h3 className="ml-3 font-medium text-primary dark:text-white">Learning in Layers</h3>
                  </div>
                  <p className="text-sm">
                    I structure content to build knowledge progressively, starting with fundamentals and gradually introducing advanced concepts, ensuring no one feels overwhelmed.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                      <TrendingUp className="h-5 w-5 text-primary dark:text-accent" />
                    </div>
                    <h3 className="ml-3 font-medium text-primary dark:text-white">Real-World Examples</h3>
                  </div>
                  <p className="text-sm">
                    I use practical, relatable examples from everyday life in Karnataka to illustrate investment concepts and make them easier to understand.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary dark:text-accent" />
                    </div>
                    <h3 className="ml-3 font-medium text-primary dark:text-white">Community Learning</h3>
                  </div>
                  <p className="text-sm">
                    I foster a supportive community where members learn from each other's experiences and questions, creating a collaborative learning environment.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                      <Youtube className="h-5 w-5 text-primary dark:text-accent" />
                    </div>
                    <h3 className="ml-3 font-medium text-primary dark:text-white">Visual Learning</h3>
                  </div>
                  <p className="text-sm">
                    I use charts, infographics, and real-time market demonstrations to make complex concepts visually digestible.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              <span className="text-primary dark:text-white">My </span>
              <span className="text-accent">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones in the evolution of Angel Investments
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-700 transform md:translate-x-[-1px]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 pb-8 md:pb-0">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-primary dark:bg-accent text-white dark:text-primary font-semibold rounded-full px-3 py-1 text-sm">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] md:left-1/2 md:transform md:translate-x-[-9px] top-0 bg-accent border-4 border-white dark:border-gray-900 w-5 h-5 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild
              className="bg-primary hover:bg-primary-light text-white dark:bg-accent dark:text-primary dark:hover:bg-accent-light"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}