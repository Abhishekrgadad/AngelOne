"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, SortDesc as SortDescending, Play, Clock, Bookmark, ThumbsUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const categories = [
  "All",
  "Stock Basics",
  "Technical Analysis",
  "Mutual Funds",
  "IPOs",
  "Banking",
  "Tax Planning",
  "Q&A Sessions",
  "Market News"
]

const videos = [
  {
    id: 1,
    title: "ಸ್ಟಾಕ್ ಮಾರ್ಕೆಟ್ ಬೇಸಿಕ್ಸ್: ಏನು? ಏಕೆ? ಹೇಗೆ?",
    description: "A beginner's guide to understanding what stocks are and how the market works in simple Kannada.",
    thumbnail: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg",
    category: "Stock Basics",
    views: "245K",
    date: "2 months ago",
    duration: "18:45"
  },
  {
    id: 2,
    title: "ಮ್ಯೂಚುವಲ್ ಫಂಡ್ ಎಸ್‌ಐಪಿ: ಹೊಸಬರಿಗೆ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ",
    description: "Complete guide to starting your mutual fund SIP journey with step by step instructions.",
    thumbnail: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg",
    category: "Mutual Funds",
    views: "189K",
    date: "1 month ago",
    duration: "22:12"
  },
  {
    id: 3,
    title: "ಟೆಕ್ನಿಕಲ್ ಅನಾಲಿಸಿಸ್: ಚಾರ್ಟ್ ಪ್ಯಾಟರ್ನ್‌ಗಳನ್ನು ಹೇಗೆ ಗುರುತಿಸುವುದು",
    description: "Learn how to identify chart patterns for better trading decisions.",
    thumbnail: "https://images.pexels.com/photos/7567538/pexels-photo-7567538.jpeg",
    category: "Technical Analysis",
    views: "120K",
    date: "2 weeks ago",
    duration: "26:31"
  },
  {
    id: 4,
    title: "ಐಪಿಓಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡುವುದು ಯಾವಾಗ ಒಳ್ಳೆಯದು?",
    description: "When is it good to invest in IPOs? Learn about evaluating new stock offerings.",
    thumbnail: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
    category: "IPOs",
    views: "95K",
    date: "3 weeks ago",
    duration: "19:28"
  },
  {
    id: 5,
    title: "ಬ್ಯಾಂಕಿಂಗ್ ಶೇರುಗಳು: 2025 ನಲ್ಲಿ ಹೂಡಿಕೆಗೆ ಒಳ್ಳೆಯವೇ?",
    description: "Analysis of banking sector stocks and their potential in the current market scenario.",
    thumbnail: "https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg",
    category: "Banking",
    views: "86K",
    date: "5 days ago",
    duration: "24:15"
  },
  {
    id: 6,
    title: "ಸೆಕ್ಷನ್ 80C ಟ್ಯಾಕ್ಸ್ ಸೇವಿಂಗ್ಸ್ ಕಂಪ್ಲೀಟ್ ಗೈಡ್",
    description: "Complete guide to Section 80C tax savings investments and strategies.",
    thumbnail: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
    category: "Tax Planning",
    views: "112K",
    date: "1 month ago",
    duration: "31:08"
  }
]

export default function YouTubePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("newest")
  
  const filteredVideos = videos.filter(video => {
    if (selectedCategory !== "All" && video.category !== selectedCategory) {
      return false
    }
    if (searchQuery && !video.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    return true
  })

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.id - a.id
    } else if (sortOrder === "oldest") {
      return a.id - b.id
    } else if (sortOrder === "popular") {
      return parseInt(b.views.replace("K", "000")) - parseInt(a.views.replace("K", "000"))
    }
    return 0
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
            <span className="text-primary dark:text-white">YouTube </span>
            <span className="text-accent">Video Library</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse our collection of educational videos to learn stock market investing and personal finance in Kannada
          </p>
        </motion.div>
        
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search videos..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <TabsList className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-full">
            {categories.map(category => (
              <TabsTrigger 
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {/* Video Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {sortedVideos.map((video) => (
            <motion.div key={video.id} variants={item}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video group cursor-pointer">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="default" 
                      size="icon" 
                      className="rounded-full bg-accent text-primary hover:bg-accent-light transition-transform duration-300 hover:scale-110"
                    >
                      <Play size={24} fill="currentColor" />
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-white border-none">
                      {video.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <ThumbsUp size={12} className="mr-1" />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary dark:text-white line-clamp-2 mb-2 font-poppins">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{video.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary dark:text-accent hover:text-primary-light dark:hover:text-accent-light p-0">
                      <Bookmark size={14} className="mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* No Results Message */}
        {sortedVideos.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <p className="text-gray-500 dark:text-gray-400 mb-4">No videos found matching your criteria.</p>
            <Button variant="outline" onClick={() => {setSearchQuery(""); setSelectedCategory("All")}}>
              Clear Filters
            </Button>
          </div>
        )}
        
        {/* Load More Button */}
        {sortedVideos.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
            >
              Load More Videos
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}