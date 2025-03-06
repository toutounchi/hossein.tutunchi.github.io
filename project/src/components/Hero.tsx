import { motion } from 'framer-motion';
import { useState } from 'react';
import CodeRain from './CodeRain';

export default function Hero() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 section-padding overflow-hidden">
      <CodeRain />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hossein Toutounchi
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer
          </p>
        </motion.div>
        <motion.a 
          href="#projects" 
          className="inline-block relative bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_20px_rgba(37,99,235,0.7)] overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 500);
          }}
        >
          <motion.span
            className="relative z-10"
            animate={isClicked ? { 
              color: ["#ffffff", "#a5f3fc", "#ffffff"],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            Browse Portfolio
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0, opacity: 0 }}
            animate={isClicked ? { 
              scale: [0, 1.5],
              opacity: [0.5, 0],
            } : {}}
            transition={{ duration: 0.5 }}
            style={{ borderRadius: '50%', x: '-50%', y: '-50%' }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}