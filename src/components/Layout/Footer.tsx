import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Import all language files statically
import enFooter from './en/footer.json';
import jaFooter from './ja/footer.json';
import zhFooter from './zh/footer.json';
import esFooter from './es/footer.json';
import { websiteInfo } from '../../data/website/info';

// Create a language map
const languageMap = {
  en: enFooter,
  ja: jaFooter,
  zh: zhFooter,
  es: esFooter
};

interface FooterContent {
  brand: {
    nameAlt: string;
    slogan: string;
  };
  sections: {
    title: string;
    links: {
      path: string;
      label: string;
    }[];
  }[];
  social: {
    links: {
      name: string;
      link: string;
    }[];
  };
  copyright: {
    text: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
}

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // Get page content directly from languageMap, default to English if not found
  const pageContent: FooterContent = languageMap[currentLanguage.code as keyof typeof languageMap] || languageMap.en;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black 
       text-white py-6"
       style={{zIndex :99}}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Contact Info */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/path/to/logo.png" alt={pageContent.brand.nameAlt} className="h-8" />
            <span className="text-lg font-bold">{websiteInfo.name}</span>
          </div>
          <p className="text-sm">7918 Jones Branch Drive, Suite 416<br />McLean, VA 22102 USA</p>
          <p className="text-sm mt-2">+1 (571) 895-4641</p>
          <div className="mt-4 h-24  flex relative">
            <img src="https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/6758c3c79914eca37e02a5d1_aicpa-soc-logo-p-500.webp" alt="AICPA SOC 2" className="h-full object-contain w-full inline-block mr-2" />
            <img src="https://cdn.prod.website-files.com/5e5fd23006075b7087ffe4f8/6758c74aaeab2a497dcbcb0b_e61bb37db6a3cf1452d1f9d31417f718-p-500.avif" alt="Best of Show IBC 2024" className="h-full w-full object-contain inline-block " />
          </div>
        </div>

        {/* Company Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            {pageContent.sections[0].links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-sm hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            {pageContent.sections[1].links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-sm hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            {pageContent.sections[2].links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-sm hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Foundation Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Foundation</h3>
          <ul className="space-y-1">
            {pageContent.sections[3].links.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-sm hover:underline">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">{pageContent.copyright.text} 2025 {websiteInfo.name} Corp. All rights reserved.</p>
      
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="text-sm hover:underline">{pageContent.copyright.privacy}</Link>
          <Link to="/terms" className="text-sm hover:underline">{pageContent.copyright.terms}</Link>
          <Link to="/cookies" className="text-sm hover:underline">{pageContent.copyright.cookies}</Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;