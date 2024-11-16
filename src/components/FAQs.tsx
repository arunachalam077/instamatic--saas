"use client"

import Image from 'next/image'
import Card01 from '@/assets/images/card-01.png'
import Card02 from '@/assets/images/card-02.png'
import Card03 from '@/assets/images/card-03.png'
import Spotlight, { SpotlightCard } from '../components/ui/cards'

export const FAQs = () => {
  const cards = [
    { image: Card01, title: "Arun" },
    { image: Card02, title: "Arun" },
    { image: Card03, title: "Arun" },
    { image: Card03, title: "Arun" },
    { image: Card02, title: "Arun" },
    { image: Card01, title: "Arun" },
  ];

  return (
    <main className="relative h-[650px] flex flex-col justify-center bg-gradient-to-b from-black via-[#5D2CA8] to-black py-[72px] overflow-hidden">
          <h2 className="text-center font-bold text-5xl text-white sm:text-6xl tracking-tighter">loved by customers</h2>
          <br />
      <div className="w-full max-w-none mx-auto px-4 md:px-6 py-24 flex items-center justify-start overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {[...cards, ...cards].map((card, index) => (
            <SpotlightCard key={index} className="mx-6 flex-shrink-0">
              <div className="relative h-full bg-slate-900 p-8 pb-10 rounded-[inherit] z-20 overflow-hidden" style={{width: '350px'}}>
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-[60%] h-[60%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"></div>
                    <Image className="inline-flex rounded-full" src={card.image} width={200} height={200} alt={`Card ${index + 1}`} />
                  </div>
                  <div className="grow mb-6">
                    <h2 className="text-2xl text-slate-200 font-bold mb-2">{card.title}</h2>
                    <p className="text-base text-slate-400">Quickly apply filters to refine your issues lists and create custom views.</p>
                  </div>
                  <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 text-base font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                    <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                      <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </main>
  )
};