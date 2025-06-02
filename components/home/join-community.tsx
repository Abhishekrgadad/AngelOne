"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Send, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function JoinCommunity() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            <span className="text-white">Join Our </span>
            <span className="text-accent">Financial Community</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with thousands of Kannada speakers learning about investments, sharing insights, and growing wealth together
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
              <Send size={32} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold font-poppins mb-3 text-primary dark:text-white">Telegram Community</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Get daily market updates, stock tips, and exclusive content directly on your phone
            </p>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Join Telegram Group
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center"
          >
            <div className="bg-green-50 dark:bg-green-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
              <MessageCircle size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold font-poppins mb-3 text-primary dark:text-white">WhatsApp Broadcast</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Receive important market insights and time-sensitive investment opportunities
            </p>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Join WhatsApp Channel
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-poppins mb-3">Our Community by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-accent">15K+</p>
                <p className="text-sm text-gray-300">Telegram Members</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-accent">8K+</p>
                <p className="text-sm text-gray-300">WhatsApp Subscribers</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-accent">100K+</p>
                <p className="text-sm text-gray-300">YouTube Subscribers</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-accent">45K+</p>
                <p className="text-sm text-gray-300">Monthly Learners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}