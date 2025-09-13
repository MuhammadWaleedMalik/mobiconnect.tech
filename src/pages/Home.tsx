import React, { useMemo, Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { websiteInfo } from '../data/website/info';
import { colors } from '../data/colors/theme';

const LazyImage = lazy(() => import('../components/LazyImage'));

// Import language files
import enHome from '../data/text/en/home.json';
import zhHome from '../data/text/zh/home.json';
import jaHome from '../data/text/ja/home.json';
import esHome from '../data/text/es/home.json';

const languageMap = {
  en: enHome,
  zh: zhHome,
  ja: jaHome,
  es: esHome,
};

// Define types for better type safety
type CardItem = {
  title?: string;
  description?: string;
  link?: string;
  tickItems?: string[];
};

type TestimonialItem = {
  name?: string;
  role?: string;
  quote?: string;
};

type PartnerItem = {
  name?: string;
  logo?: string;
  url?: string;
};

interface HomeContent {
  page1?: {
    title?: string;
    slogan?: string;
    links?: Array<{ text?: string; to?: string }>;
  };
  page2?: {
    title?: string;
    videoThumbnail?: string;
    videoUrl?: string;
  };
  page3?: {
    title?: string;
    description?: string;
  };
  page4?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page5?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page6?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page7?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page8?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page9?: {
    title?: string;
    description?: string;
    tickItems?: string[];
    link?: { text?: string; to?: string };
  };
  page10?: {
    title?: string;
    stats?: Array<{ number?: string; label?: string }>;
  };
  page11?: {
    title?: string;
    cards?: Array<{
      title?: string;
      description?: string;
    }>;
  };
  page12?: {
    title?: string;
    description?: string;
    link?: { text?: string; to?: string };
  };
  page13?: {
    title?: string;
    link?: { text?: string; to?: string };
  };
}

const processText = (text?: string): string => {
  if (!text) return '';
  return text
    .replace(/\{website\.name\}/g, websiteInfo?.name || '')
    .replace(/\{website\.slogan\}/g, websiteInfo?.slogan || '');
};

const Home: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const defaultContent = languageMap.en as HomeContent;
  const [showVideo, setShowVideo] = useState(false);

  const pageContent = useMemo(() => {
    return languageMap[currentLanguage?.code as keyof typeof languageMap] || defaultContent;
  }, [currentLanguage?.code]);

  const processedContent = useMemo(() => {
    return {
      page1: {
        title: processText(pageContent.page1?.title),
        slogan: processText(pageContent.page1?.slogan),
        links: pageContent.page1?.links || []
      },
      page2: {
        title: processText(pageContent.page2?.title),
        videoThumbnail: pageContent.page2?.videoThumbnail,
        videoUrl: pageContent.page2?.videoUrl
      },
      page3: {
        title: processText(pageContent.page3?.title),
        description: processText(pageContent.page3?.description)
      },
      page4: {
        title: processText(pageContent.page4?.title),
        description: processText(pageContent.page4?.description),
        tickItems: pageContent.page4?.tickItems || [],
        link: pageContent.page4?.link
      },
      page5: {
        title: processText(pageContent.page5?.title),
        description: processText(pageContent.page5?.description),
        tickItems: pageContent.page5?.tickItems || [],
        link: pageContent.page5?.link
      },
      page6: {
        title: processText(pageContent.page6?.title),
        description: processText(pageContent.page6?.description),
        tickItems: pageContent.page6?.tickItems || [],
        link: pageContent.page6?.link
      },
      page7: {
        title: processText(pageContent.page7?.title),
        description: processText(pageContent.page7?.description),
        tickItems: pageContent.page7?.tickItems || [],
        link: pageContent.page7?.link
      },
      page8: {
        title: processText(pageContent.page8?.title),
        description: processText(pageContent.page8?.description),
        tickItems: pageContent.page8?.tickItems || [],
        link: pageContent.page8?.link
      },
      page9: {
        title: processText(pageContent.page9?.title),
        description: processText(pageContent.page9?.description),
        tickItems: pageContent.page9?.tickItems || [],
        link: pageContent.page9?.link
      },
      page10: {
        title: processText(pageContent.page10?.title),
        stats: pageContent.page10?.stats || []
      },
      page11: {
        title: processText(pageContent.page11?.title),
        cards: pageContent.page11?.cards || []
      },
      page12: {
        title: processText(pageContent.page12?.title),
        description: processText(pageContent.page12?.description),
        link: pageContent.page12?.link
      },
      page13: {
        title: processText(pageContent.page13?.title),
        link: pageContent.page13?.link
      }
    };
  }, [pageContent]);

  // Media assets with proper alt texts
  const mediaAssets = {
    heroImage: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/684719e31e8905fd6f63b857_Ellipse%201%20(1).avif',
    page2VideoThumbnail: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/6878acf4b6028956a0c62eef_homehero1.avif',
    page2VideoUrl: 'https://www.youtube.com/embed/wK_SyDwbZjE',
    page3Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/684719e31e8905fd6f63b857_Ellipse%201%20(1)-p-800.avif',
    page4Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b04bafc1cdac8fc78ebd2_homeimage1.avif',
    page5Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b05271e2b6774791c1af9_homeimage2.avif',
    page6Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b05e85ba9773f3425a90e_homeimage3.avif',
    page7Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b06136f17ea2dccd9accc_homeimage4.avif',
    page8Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b064dc7a2e65a7b1f69c0_homeimage5.avif',
    page9Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b066ed83e0332eb9727c2_homeimage6.avif',
    page10Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/689b06956189eb0cedac5473_homeimage7.avif',
    page11Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/684c5c9a17433c0ceb067bd5_Home%20eclipse.avif',
    page12Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/68504bc4c66f74fc8019c137_Week%20Graph2.avif',
    page13Image: 'https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/684c69ab77b4951e18338ef2_Microsoft_Office_OneDrive_(2019%E2%80%93present)%201.avif'
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#25282B" }}>
   
      {/* Page 1 - Hero Section with Background Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center min-h-screen"
      >
        {/* Background Image */}
        <div className="absolute bg-black opacity-[0.8] z-0 overflow-hidden">
          <Suspense fallback={
            <div className="" />
          }>
            <LazyImage
              src={mediaAssets.heroImage}
              className=" object-contain z-10 w-full h-full"
              alt="Hero background"
            />
          </Suspense>
          <div className="" />
        </div>

        {/* Content */}
        <div className="relative z-0 w-full max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: colors.textPrimary }}
          >
            {processedContent.page1.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {processedContent.page1.slogan}
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {processedContent.page1.links?.map((link, idx) => (
              <Link
                key={idx}
                to={link.to || '#'}
                className="px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: idx === 0 ? "#0C4A51": "transparent", 
                  color: idx === 0 ? "white" : colors.primaryColor3,
                  border: idx === 1 ? `2px solid ${colors.primaryColor3}` : "none"
                }}
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Page 2 - Video Section with Play Button */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
        <div className="max-w-7xl mt-12 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-24 text-center" style={{ color: colors.textPrimary }}>
            {processedContent.page2.title}
          </h2>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              <>
                <Suspense fallback={
                  <div className="w-full h-96 bg-gray-300 animate-pulse" />
                }>
                  <LazyImage 
                    src={mediaAssets.page2VideoThumbnail}
                    alt="Video thumbnail"
                    className="w-full h-auto"
                  />
                </Suspense>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 transition-all hover:bg-black/10"
                >
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-all">
                    <svg className="w-12 h-12 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="#25282B"/>
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <div className="aspect-video">
                <iframe 
                  src={mediaAssets.page2VideoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Featured video"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Page 3 - Background Image with Centered Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-32 px-6 lg:px-8 flex items-center bg-black justify-center"
      >
        {/* Background Image */}
        <div className="absolute  z-10  opacity-[0.6] overflow-hidden">
          <Suspense fallback={
            <div className=" "/>
          }>
            <LazyImage
              src={mediaAssets.page3Image}
              className="  object-contain w-full h-full"
              alt="Background image"
            />
          </Suspense>
          <div className=""  />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {processedContent.page3.title}
          </h2>
          <p className="text-xl text-white/90">
            {processedContent.page3.description}
          </p>
        </div>
      </motion.section>

      {/* Page 4 - Image Left, Content Right */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
      <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page4Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page4.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page4.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page4.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page4.link && (
              <Link
                to={processedContent.page4.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: "#125E66", 
                  color: "white"
                }}
              >
                {processedContent.page4.link.text}
              </Link>
            )}
          </div>
        </div>
      </div>
      </motion.section>

      {/* Page 5 - Image Right, Content Left */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
     className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
    <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page5.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page5.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page5.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page5.link && (
              <Link
                to={processedContent.page5.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page5.link.text}
              </Link>
            )}
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl lg:order-2">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page5Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
      </div>
    </div>
      </motion.section>

      {/* Page 6 - Image Left, Content Right */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
            className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
      <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page6Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page6.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page6.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page6.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page6.link && (
              <Link
                to={processedContent.page6.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page6.link.text}
              </Link>
            )}
          </div>
        </div>
            </div>
      </motion.section>

      {/* Page 7 - Image Right, Content Left */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
      <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page7.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page7.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page7.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page7.link && (
              <Link
                to={processedContent.page7.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page7.link.text}
              </Link>
            )}
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl lg:order-2">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page7Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
        </div>
   </div>
      </motion.section>

      {/* Page 8 - Image Left, Content Right */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
           className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
      <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page8Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page8.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page8.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page8.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page8.link && (
              <Link
                to={processedContent.page8.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page8.link.text}
              </Link>
            )}
          </div>
        </div>
          </div>
      </motion.section>

      {/* Page 9 - Image Right, Content Left */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-20 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
      <div className='rounded-lg ' style={{backgroundColor: "#040B14"}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page9.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page9.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {processedContent.page9.tickItems?.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{ color: colors.primaryColor3 }} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: colors.textSecondary }}>{item}</span>
                </li>
              ))}
            </ul>
            
            {processedContent.page9.link && (
              <Link
                to={processedContent.page9.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page9.link.text}
              </Link>
            )}
          </div>
          
          {/* Right Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl lg:order-2">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page9Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
        </div>
        </div>
      </motion.section>

  
  
      {/* Page 11 - Cards Section (2 per row) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: colors.textPrimary }}>
            {processedContent.page11.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processedContent.page11.cards?.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <Suspense fallback={
                    <div className="w-full h-full bg-gray-300 animate-pulse" />
                  }>
                    <LazyImage 
                      src={mediaAssets[`page${11 + index}Image` as keyof typeof mediaAssets] || mediaAssets.page11Image}
                      alt={card.title || "Feature image"}
                      className="w-full h-full object-cover"
                    />
                  </Suspense>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.textPrimary }}>
                    {card.title} 
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Page 12 - Image Left, Content Right */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 px-6 lg:px-8"
        style={{ backgroundColor: "black" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Suspense fallback={
              <div className="w-full h-96 bg-gray-300 animate-pulse" />
            }>
              <LazyImage 
                src={mediaAssets.page12Image}
                alt="Feature image"
                className="w-full h-auto"
              />
            </Suspense>
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              {processedContent.page12.title}
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
              {processedContent.page12.description}
            </p>
            
            {processedContent.page12.link && (
              <Link
                to={processedContent.page12.link.to || '#'}
                className="inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ 
                  backgroundColor: colors.primaryColor3, 
                  color: "white"
                }}
              >
                {processedContent.page12.link.text}
              </Link>
            )}
          </div>
        </div>
      </motion.section>

      {/* Page 13 - Sign Up Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-40 px-20 lg:py-20 lg:px-20"
        style={{ backgroundColor: 'black'}}
      >
        <div className='rounded-lg px-20 lg:py-20 ' style={{backgroundColor: "#040B14"}}>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
            {processedContent.page13.title}
          </h2>
          
          {processedContent.page13.link && (
            <Link
              to={processedContent.page13.link.to || '/signup'}
              className="inline-block px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: colors.primaryColor3, 
                color: "white"
              }}
            >
              {processedContent.page13.link.text}
            </Link>
          )}
        </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;