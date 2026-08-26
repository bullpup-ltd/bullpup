'use client'

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, ShieldCheck, MessageSquare, CircleDollarSign, Hammer } from "lucide-react";

export function StatementSection() {
  const standards = [
    {
      title: 'Attention to Detail',
      description: 'Precision on every brick, every joint, every time.',
      icon: Target
    },
    {
      title: 'Built to Code',
      description: 'Strong, compliant work that lasts in Aussie conditions.',
      icon: ShieldCheck
    },
    {
      title: 'Clean & Communicative',
      description: 'Tidy sites and clear updates from start to finish.',
      icon: MessageSquare
    },
    {
      title: 'Honest Pricing',
      description: 'Upfront quotes. No surprises. Done right the first time.',
      icon: CircleDollarSign
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Restorations, renovations, new builds & block work built to last.',
      icon: Hammer
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="statement overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center container statement-inner">

        <div className={`${isVisible ? 'animate-fade-in-from-left' : 'opacity-0'} flex flex-col justify-center items-start h-full`}>
          <h2>THE BULLPUP STANDARD</h2>
        </div>

        <div className="flex flex-col gap-6">
          {standards.map((item, index) => {
            const Icon = item.icon; // Extract the icon component to render it

            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${isVisible ? 'animate-fade-in-from-right' : 'opacity-0'}`}
                // Dynamically stagger the entrance of each item by 150ms
                style={isVisible ? { animationDelay: `${index * 150}ms` } : {}}
              >
                {/* Icon Container */}
                <div className="mt-1 flex-shrink-0 text-[#e6b95c]">
                  <Icon size={24} />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-white m-0 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-1 m-0 text-sm!">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}