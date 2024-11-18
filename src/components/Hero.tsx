"use client"
import CursorImage from '../assets/images/cursor.png'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import MessageImage from '../assets/images/message.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">

     ``   <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl tracking-tighter text-center inline-flex bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-extrabold font-serif relative z-10 transition-all duration-300 ease-in-out hover:scale-105 hover:tracking-widetext-7xl sm:text-9xl tracking-tighter text-center inline-flex bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-extrabold font-serif relative z-10">
              Insta<br /> matic
            </h1>

            <motion.div className="absolute right-[478px] top-[108px] hidden sm:inline" drag dragSnapToOrigin>
              <Image src={CursorImage} alt="cursor" height={200} width={200} className="max-w-none" draggable="false" />
            </motion.div>
            <motion.div className="absolute left-[498px] top-[56px] hidden sm:inline" drag dragSnapToOrigin>
              <Image src={MessageImage} alt="cursor" height={200} width={200} className="max-w-none" draggable="false" />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Build and customize your own AI Assistant to automate customer support, sales, and much more. We are literally all you need to scale your Instagram Business...
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Book demo</button>
        </div>

      </div>
    </div>
  )
};
