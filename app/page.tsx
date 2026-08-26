import { AboutSection } from '@/components/landing/about-section'
import { ContactSection } from '@/components/landing/contact-section'
import { GallerySection } from '@/components/landing/gallery-section'
import { HeroSection } from '@/components/landing/hero-section'
import { ServicesSection } from '@/components/landing/services-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { StatementSection } from '@/components/landing/statement-section'
import fs from 'fs'
import path from 'path'



export default function Page() {
  const othersDirectory = path.join(process.cwd(), 'public/others');
  let dynamicGalleryImages: string[] = [];
  try {
    const fileNames = fs.readdirSync(othersDirectory);
    dynamicGalleryImages = fileNames
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => `/others/${file}`);

  } catch (error) {
    console.error("Could not read 'others' directory. Make sure it exists!", error);
  }
  return <main className="site-shell">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <GallerySection dynamicImages={dynamicGalleryImages} />
    <StatementSection />
    <ContactSection />
    <SiteFooter />
  </main>
}
