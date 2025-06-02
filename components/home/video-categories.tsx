"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    title: "Stock Market Basics",
    description: "Learn the fundamentals of stock market investing in simple Kannada",
    icon: "📈",
    color: "from-blue-500 to-blue-600",
    count: "45+ videos"
  },
  {
    title: "Technical Analysis",
    description: "Master chart reading and technical indicators for better trades",
    icon: "📊",
    color: "from-green-500 to-green-600",
    count: "32+ videos"
  },
  {
    title: "Mutual Funds",
    description: "SIPs, fund selection, and long-term wealth creation strategies",
    icon: "💼",
    color: "from-purple-500 to-purple-600",
    count: "28+ videos"
  }
]

export default function VideoCategories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
          <span className="text-primary dark:text-white">Top Video </span>
          <span className="text-accent">Categories</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our most popular video collections organized by topic to help you master specific areas of investing
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <motion.div key={index} variants={item}>
            <Link href="/youtube">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-none">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold font-poppins mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-100 mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium bg-white/20 rounded-full px-3 py-1">
                        {category.count}
                      </span>
                      <ArrowRight size={16} className="animate-bounce-subtle" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-10">
        <Button 
          asChild
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary font-medium"
        >
          <Link href="/youtube">
            View All Categories
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </>
  )
}