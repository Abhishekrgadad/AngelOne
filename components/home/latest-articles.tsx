"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const articles = [
  {
    title: "SIPs vs Lump Sum: Which is Better for Kannada Investors?",
    excerpt: "A detailed comparison to help you decide the best investment strategy based on your financial goals.",
    image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg",
    date: "Apr 12, 2025",
    category: "Mutual Funds",
    readTime: "5 min read"
  },
  {
    title: "Understanding Stock Market Corrections: What Kannada Investors Should Know",
    excerpt: "Learn why market corrections happen and how you can prepare your portfolio for these inevitable events.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    date: "Apr 8, 2025",
    category: "Stock Market",
    readTime: "8 min read"
  },
  {
    title: "Tax-Saving Investment Options for Salaried Professionals",
    excerpt: "Explore the best tax-saving investment vehicles that can help you reduce your tax burden while growing wealth.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    date: "Apr 2, 2025",
    category: "Tax Planning",
    readTime: "6 min read"
  }
]

export default function LatestArticles() {
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
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            <span className="text-primary dark:text-white">Latest </span>
            <span className="text-accent">Articles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest insights on investing, market trends, and financial planning
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={item}>
              <Link href="/blog">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-none">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      fill
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent border-none">
                        {article.category}
                      </Badge>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-poppins mb-2 text-primary dark:text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {article.readTime}
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
            className="bg-primary hover:bg-primary-light text-white dark:bg-accent dark:text-primary dark:hover:bg-accent-light"
          >
            <Link href="/blog">
              Read All Articles
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}