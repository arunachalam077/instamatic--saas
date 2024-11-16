"use client"
import appScreen from "../assets/images/product.avif";
import Image from 'next/image';
import {motion , useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]

  });

const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#000000] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">Our Product</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 ">Sit Back and Engage Let our platform automatically send your messages while you focus on other aspects of your business. Track the performance of your campaigns with real-time analytics.</p>
        </div>
        <div className="flex justify-center ">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        <Image src={appScreen}  ref={appImage} alt="app screen" className="mt-14 rounded-lg  w-auto" />
        </motion.div>
        </div>

      </div>

    </div>
  )
};
