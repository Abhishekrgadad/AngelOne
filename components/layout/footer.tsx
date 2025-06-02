import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#1B1F3B] text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-poppins font-bold">
              <span className="text-white">Angel</span>
              <span className="text-[#FFD700]">Investments</span>
            </h3>
            <p className="text-gray-300 font-open-sans text-sm max-w-xs">
              Empowering Kannadigas with financial knowledge and stock market expertise for a secure financial future.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">About</Link>
              </li>
              <li>
                <Link href="/youtube" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">YouTube</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Blog</Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Learn</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Services</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Resources</h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link href="/forum" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Q&A Forum</Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Free Courses</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Latest Articles</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Investment Calculators</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">Market Updates</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Join Our Newsletter</h3>
            <p className="text-gray-300 font-open-sans text-sm">Get the latest investment tips and market updates.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none bg-gray-800 border-gray-700 focus:ring-[#FFD700] text-white"
              />
              <Button type="submit" className="rounded-l-none bg-[#FFD700] hover:bg-[#e6c200] text-[#1B1F3B]">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-open-sans">
              © {new Date().getFullYear()} Angel Investments. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400 font-open-sans">
              <Link href="#" className="hover:text-[#FFD700] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#FFD700] transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-[#FFD700] transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}