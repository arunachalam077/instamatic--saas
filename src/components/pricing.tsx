'use client'

import { useState } from 'react'

interface PricingTabProps {
  popular?: boolean
  planName: string
  price: {
    monthly: number
  }
  planDescription: string
  features: string[]
}

export function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full `}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-black border border-white/30 shadow shadow-black/80">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-white/70 font-semibold mb-1">{props.planName}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/70 font-bold text-3xl">₹</span>
            <span className="text-white/50 font-bold text-4xl">{ props.price.monthly}</span>
            <span className="text-white/70 font-medium">/mo</span>
          </div>
          <div className="text-sm text-white/70 mb-5">{props.planDescription}</div>
          <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#5D2CA8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#5D2CA2] focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true)

  return (
    <div>

     

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

        {/* Pricing tab 1 */}
        <PricingTab
    
          planName="Starter Plan"
          price={{  monthly: 1499 }}
          planDescription="There are many variations available, but the majority have suffered."
          features={[
            'Automated Welcome Messages: Greet new followers instantly',
            'Quick FAQ Responses: Handle up to 10 FAQs automatically',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
          ]} />

        {/* Pricing tab 2 */}
        <PricingTab
        
          popular={true}
          planName="Pro Plan"
          price={{monthly: 1999 }}
          planDescription="Large brands, enterprises, and businesses with custom requirements."
          features={[
            'Unlimited Messages: Reach an unlimited number of users with no message cap.',
            ' Dedicated Account Manager: Personalized assistance to guide you every step of the way',
            'Excepteur sint occaecat cupidatat',
            'Officia deserunt mollit anim',
            'Predefined chunks as necessary',
          ]} />

        {/* Pricing tab 3 */}
        <PricingTab
         
          planName="Enterprise Plan
"
          price={ {monthly: 2499 }}
          planDescription="Growing brands, influencers, and small to medium-sized businesses"
          features={[
            
            'All Starter Plan Features: Plus advanced engagement tools',
            '10,000 Monthly Messages: More capacity to reach a larger audience',
            'User Segmentation: Send personalized messages based on user activity.',
            'Predefined chunks as necessary',
            'Free from repetition',
          ]} />

      </div>

    </div>
  )
}