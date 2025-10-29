import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992)

  const closeMenu = () => setOpen(false)

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992)
      if (window.innerWidth > 992) setOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255,255,255,0.98)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 20px rgba(0,123,255,0.1)'
    }}>
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 5%',
        maxWidth: 1400,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div className="logo-container" style={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <Link 
            to="/" 
            onClick={closeMenu} 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}kaizen-technolabs-logo.png`} 
              alt="Kaizen Technolabs" 
              className="logo-img" 
              style={{
                height: 40,
                width: 'auto',
                objectFit: 'contain',
                marginRight: 12
              }} 
            />
            <div className="logo-text" style={{
              fontWeight: 700,
              color: '#007BFF',
              letterSpacing: '-0.5px',
              fontSize: '1.2rem',
              whiteSpace: 'nowrap'
            }}>
              KAIZEN TECHNOLABS
            </div>
          </Link>
        </div>

        <ul 
          className={`nav-links ${open ? 'active' : ''}`} 
          style={{
            display: isMobile ? 'none' : 'flex',
            gap: 'clamp(1rem, 2vw, 2rem)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/who-we-are", label: "Who We Are" },
            { to: "/work", label: "Work" },
            { to: "/what-we-do", label: "What We Do" },
            { to: "/contact", label: "Let's Have Coffee Together" }
          ].map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => isActive ? 'active' : ''} 
                onClick={closeMenu}
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontWeight: 500,
                  position: 'relative',
                  padding: '0.5rem 0.25rem',
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease'
                }}
                activeStyle={{
                  color: '#007BFF',
                  fontWeight: 600
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button 
          id="menuToggle" 
          aria-label="Toggle menu" 
          className={`menu-toggle ${open ? 'active' : ''}`} 
          onClick={() => setOpen(!open)}
          style={{
            display: isMobile ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 40,
            height: 30,
            padding: '6px',
            background: open ? '#e6f0ff' : 'transparent',
            border: '2px solid #007BFF',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1001
          }}
        >
          <span style={{
            display: 'block',
            height: 3,
            width: '100%',
            background: '#007BFF',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            opacity: open ? 1 : 1
          }}></span>
          <span style={{
            display: 'block',
            height: 3,
            width: '100%',
            background: '#007BFF',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            opacity: open ? 0 : 1
          }}></span>
          <span style={{
            display: 'block',
            height: 3,
            width: '100%',
            background: '#007BFF',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            opacity: open ? 1 : 1
          }}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`mobile-menu-overlay ${open ? 'active' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: 999,
            opacity: open ? 1 : 0,
            visibility: open ? 'visible' : 'hidden',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setOpen(false)}
        >
          <div 
            className="mobile-menu-content"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '85%',
              maxWidth: 320,
              height: '100vh',
              background: '#fff',
              boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
              padding: '6rem 2rem 2rem',
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease',
              overflowY: 'auto',
              zIndex: 1000
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {[
                { to: "/", label: "Home" },
                { to: "/who-we-are", label: "Who We Are" },
                { to: "/work", label: "Work" },
                { to: "/what-we-do", label: "What We Do" },
                { to: "/contact", label: "Let's Have Coffee Together" }
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={() => {
                      closeMenu();
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      backgroundColor: 'transparent'
                    }}
                    activeStyle={{
                      color: '#007BFF',
                      backgroundColor: '#f0f7ff',
                      fontWeight: 600
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 993px) and (max-width: 1200px) {
          .container {
            padding: 1rem 4% !important;
          }
          .nav-links {
            gap: 1rem !important;
          }
          .logo-text {
            font-size: 1.1rem !important;
          }
        }
        
        @media (min-width: 1201px) {
          .container {
            padding: 1rem 5% !important;
          }
        }
        
        .nav-links a:hover {
          color: #007BFF !important;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #007BFF;
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
      `}</style>
    </header>
  )
}
