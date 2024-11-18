import Link from 'next/link'
import LogoImage from '../assets/icons/logo.svg'
import MenuIcon from '../assets/icons/menu.svg'
import { FAQs } from './FAQs'
import BotIcon from '../assets/icons/bot-icon.svg' // Import your bot icon

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black mx-auto">
          <div className="py-4 flex items-center justify-between">
            
          <div className="relative flex items-center">
              <BotIcon className="w-9 h-9 mr-2 insta-x-bot-icon" />
              <div className='insta-x-bot-text'>Instamatic</div>
            </div>
            <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
              <MenuIcon className="text-white" />
            </div>
            
            <nav className='text-white gap-6 items-center hidden sm:flex flex-1 justify-center'>
              <Link href="/features" className='text-opacity-60 text-white hover:text-opacity-100 transition'>
                Features
              </Link>
              <Link href="/FAQs" className='text-opacity-60 text-white hover:text-opacity-100 transition'>
                Testimonials
              </Link>
              <Link href="/case-studies" className='text-opacity-60 text-white hover:text-opacity-100 transition'>
                Case Studies
              </Link>
              <Link href="/pricing" className='text-opacity-60 text-white hover:text-opacity-100 transition'>
                Pricing
              </Link>
              <Link href="/contact" className='text-opacity-60 text-white hover:text-opacity-100 transition'>
                Contact
              </Link>
            </nav>
            
            <div className="hidden sm:flex gap-4 ml-auto">
              <button className='bg-white py-2 px-4 rounded-lg text-black'>Log in</button>
              <button className='bg-white py-2 px-4 rounded-lg text-black'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
