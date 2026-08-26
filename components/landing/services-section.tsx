"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Arrow, services } from './data';
import { CircleCheck } from 'lucide-react';

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section overflow-hidden" id="services">
      <div className="container">

        {/* HEADING: Slides in from the left */}
        <div className={`section-heading ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2>
            Our Capabilities
          </h2>
          <p>
            Engineered solutions for residential and commercial masonry.
          </p>
        </div>

        <div className={`service-grid ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {services.map((service, index) => (
            <article
              className="service-card flex flex-col"
              key={service.title}
              style={isVisible ? { animationDelay: `${index * 200 + 400}ms` } : {}}
            >
              <div className={`card-image grid gap-1 ${service.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {service.images.map((imgSrc, imgIndex) => (
                  <div key={imgIndex} className="relative overflow-hidden h-full w-full">
                    <img
                      src={imgSrc}
                      alt={`${service.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="tags">
                {service.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>

              <h3>{service.title}</h3>

              <div className='flex flex-col gap-4 my-4'>
                {service.subServices?.map((item, itemIndex) => (
                  <li key={itemIndex} className='list-none'>
                    <span className='flex gap-2 items-center font-bold'>
                      <CircleCheck size={15} /> {item.title}
                    </span>
                    {item.description && (
                      <p className='text-md! pl-6 text-gray-600'>{item.description}</p>
                    )}
                    {item.subItem && item.subItem.length > 0 && (
                      <div className='flex flex-col mt-1'>
                        {item.subItem.map((sub, subIndex) => (
                          <p key={subIndex} className='text-sm! pl-6 text-gray-500'>
                            - {sub.name}
                          </p>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </div>

              <a href="#contact" className="mt-auto">{service.link} <Arrow /></a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}