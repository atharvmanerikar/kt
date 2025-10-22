import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import Work from './pages/Work'
import WhatWeDo from './pages/WhatWeDo'
import Contact from './pages/Contact'
import './styles.css'

// Page transition animation
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.98 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    scale: 0.98,
    transition: { 
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Child variants for staggered animations
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  // Add a class to the body when component mounts
  useEffect(() => {
    document.body.classList.add('page-loaded');
    
    // Set a timeout to remove the initial loading class
    const timer = setTimeout(() => {
      setIsFirstMount(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to handle page exit animation
  const handleExitComplete = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`app-root ${isFirstMount ? 'is-loading' : ''}`}>
      <Navbar />
      
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={handleExitComplete}
      >
        <motion.main
          key={location.pathname}
          className="page-content"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 100
          }}
        >
          <ScrollToTop />
          <div className="content-wrapper">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="page-content-inner"
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="who-we-are" element={<WhoWeAre />} />
                <Route path="work" element={<Work />} />
                <Route path="what-we-do" element={<WhatWeDo />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </div>
        </motion.main>
      </AnimatePresence>
      
      <motion.footer 
        className="site-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.5 }
        }}
      >
        <div className="container">
          <p>© {new Date().getFullYear()} Kaizen Technolabs. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
