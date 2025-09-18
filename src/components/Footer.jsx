import React from 'react';
import { Phone, Mail, MessageSquare, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';


const footerData = {
  brandName: "Maxigen",
  contact: {
    phone: "(084) 123 - 456 88",
    email: "contact@example.com",
    chat: "Live Chat",
  },
  socials: [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Youtube', icon: Youtube, url: '#' },
  ],
  linkColumns: [
    {
      title: 'Customer Service',
      links: [
        { text: 'Help Center', url: '#' },
        { text: 'My Account', url: '#' },
        { text: 'Track My Order', url: '#' },
        { text: 'Return Policy', url: '#' },
        { text: 'Gift Cards', url: '#' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { text: 'Company Info', url: '#' },
        { text: 'Press Releases', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Reviews', url: '#' },
        { text: 'Investor Relations', url: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Search', url: '#' },
        { text: 'Become a Reseller', url: '#' },
        { text: 'About Us', url: '#' },
        { text: 'Contact Us', url: '#' },
        { text: 'Terms of Service', url: '#' },
      ],
    },
    {
      title: 'Catalogs',
      links: [
        { text: 'Protein', url: '#' },
        { text: 'Performance', url: '#' },
        { text: 'Weight Management', url: '#' },
        { text: 'Vitamins & Health', url: '#' },
      ],
    },
  ],
  subscription: {
    title: "Get 10% off your first purchase",
    subtitle: "Sign up to receive our special offers.",
  },
  copyright: `Copyright © ${new Date().getFullYear()} Maxigen. All rights reserved.`,
  paymentMethods: ['VISA', 'MC', 'AMEX'],
};


const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 font-sans mt-10">
    
      <div className="mx-auto  px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-700 space-y-6 md:space-y-0">
          <div className="flex items-center">
             <h2 className="text-3xl font-bold text-white uppercase">{footerData.brandName}</h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-gray-400" />
              <span>{footerData.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-gray-400" />
              <span>{footerData.contact.email}</span>
            </div>
             <div className="flex items-center space-x-2">
              <MessageSquare size={18} className="text-gray-400" />
              <span>{footerData.contact.chat}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {footerData.socials.map((social) => (
              <a key={social.name} href={social.url} aria-label={social.name} className="text-gray-400 hover:text-white transition-colors">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.linkColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold text-white uppercase tracking-wider mb-4 text-sm">{column.title}</h3>
                <ul className="space-y-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.text}><a href={link.url} className="hover:text-white transition-colors">{link.text}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

    
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg text-green-400 uppercase">{footerData.subscription.title}</h3>
            <p className="mt-2 mb-4 text-sm">{footerData.subscription.subtitle}</p>
            <form>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button type="submit" className="bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      <div className="bg-black py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>{footerData.copyright}</p>
          <div className="flex items-center space-x-2">
            {footerData.paymentMethods.map((method) => (
              <div key={method} className="w-10 h-6 bg-gray-700 rounded-sm flex items-center justify-center text-white">{method}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

