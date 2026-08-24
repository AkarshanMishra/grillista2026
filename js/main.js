// Global Order Food Modal Helpers (Top-Level Scope with Dynamic Auto-Injection)
window.openOrderModal = function() {
  let modal = document.getElementById('order-food-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'order-food-modal';
    modal.style.cssText = 'display: flex !important; opacity: 1 !important; pointer-events: all !important; visibility: visible !important; position: fixed !important; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); z-index: 999999; align-items: center; justify-content: center; padding: 20px;';
    modal.innerHTML = `
    <div class="modal-content" style="background: #FFFFFF; border-radius: 28px; max-width: 520px; width: 100%; padding: 36px 30px; position: relative; box-shadow: 0 25px 60px rgba(0,0,0,0.3); border: 2px solid #C88A2B; text-align: left;">
      <button class="modal-close" onclick="closeOrderModal()" style="position: absolute; top: 20px; right: 20px; background: rgba(15, 23, 42, 0.08); border: none; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; cursor: pointer; color: #0F172A;">&times;</button>
      <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(0, 200, 83, 0.1); border: 1.5px solid rgba(0, 200, 83, 0.3); color: #00C853; padding: 6px 16px; border-radius: 999px; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; margin-bottom: 14px;">
        <i class="fa-solid fa-bolt"></i> INSTANT ONLINE FOOD ORDERING
      </div>
      <h3 style="font-size: 1.8rem; font-weight: 900; color: #0F172A; margin: 0 0 6px 0;">Select Ordering Platform</h3>
      <p style="font-size: 0.92rem; color: #64748B; margin: 0 0 24px 0; font-weight: 500;">Choose your preferred platform to order 100% Pure Veg flame-grilled food:</p>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <a href="menu.html" style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border: 2px solid #C88A2B; border-radius: 18px; padding: 18px 20px; text-decoration: none; color: #FFF; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 25px rgba(0,0,0,0.15); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(250, 204, 21, 0.2); border: 1.5px solid #FACC15; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #FACC15;"><i class="fa-solid fa-store"></i></div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.05rem; font-weight: 900; color: #FFF;">1. Grillista Direct Web Store</span><span style="background: #00C853; color: #FFF; font-size: 0.65rem; font-weight: 900; padding: 2px 8px; border-radius: 99px;">0% FEE</span></div>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin: 2px 0 0 0; font-weight: 500;">Official menu • Best prices & instant takeaway</p>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right" style="color: #FACC15; font-size: 1.1rem;"></i>
        </a>
        <a href="https://www.swiggy.com" target="_blank" style="background: linear-gradient(135deg, #FC8019 0%, #E26A06 100%); border-radius: 18px; padding: 18px 20px; text-decoration: none; color: #FFF; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 25px rgba(252, 128, 25, 0.25); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(255, 255, 255, 0.2); border: 1.5px solid rgba(255, 255, 255, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #FFF;"><i class="fa-solid fa-motorcycle"></i></div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.05rem; font-weight: 900; color: #FFF;">2. Order on Swiggy</span><span style="background: rgba(255,255,255,0.25); color: #FFF; font-size: 0.65rem; font-weight: 900; padding: 2px 8px; border-radius: 99px;">EXPRESS</span></div>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.9); margin: 2px 0 0 0; font-weight: 500;">Delivered hot in 25-30 mins via Swiggy</p>
            </div>
          </div>
          <i class="fa-solid fa-arrow-up-right-from-square" style="color: #FFF; font-size: 1.05rem;"></i>
        </a>
        <a href="https://www.zomato.com" target="_blank" style="background: linear-gradient(135deg, #CB202D 0%, #B01824 100%); border-radius: 18px; padding: 18px 20px; text-decoration: none; color: #FFF; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 25px rgba(203, 32, 45, 0.25); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(255, 255, 255, 0.2); border: 1.5px solid rgba(255, 255, 255, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #FFF;"><i class="fa-solid fa-utensils"></i></div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.05rem; font-weight: 900; color: #FFF;">3. Order on Zomato</span><span style="background: rgba(255,255,255,0.25); color: #FFF; font-size: 0.65rem; font-weight: 900; padding: 2px 8px; border-radius: 99px;">GOLD 5★</span></div>
              <p style="font-size: 0.8rem; color: rgba(255,255,255,0.9); margin: 2px 0 0 0; font-weight: 500;">Live tracking & Zomato Gold offers</p>
            </div>
          </div>
          <i class="fa-solid fa-arrow-up-right-from-square" style="color: #FFF; font-size: 1.05rem;"></i>
        </a>
      </div>
    </div>`;
    document.body.appendChild(modal);
  }
  
  modal.classList.add('active');
  modal.style.display = 'flex';
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'all';
  modal.style.visibility = 'visible';
};

window.closeOrderModal = function() {
  const modal = document.getElementById('order-food-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Global Event Delegation for Order Food Modal
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.trigger-order-modal');
    if (trigger) {
      e.preventDefault();
      window.openOrderModal();
    }

    const closeBtn = e.target.closest('#order-modal-close-btn, .order-modal-close');
    if (closeBtn) {
      window.closeOrderModal();
    }

    const modal = document.getElementById('order-food-modal');
    if (modal && e.target === modal) {
      window.closeOrderModal();
    }
  });

  // Live Section Visibility Enforcer (Hides any section deactivated from CMS)
  const sectionVisibility = JSON.parse(localStorage.getItem('grillista_section_visibility') || '{}');
  Object.keys(sectionVisibility).forEach(secId => {
    if (sectionVisibility[secId] === false) {
      const sectionEl = document.getElementById(secId);
      if (sectionEl) {
        sectionEl.style.display = 'none';
      }
    }
  });


  // 3D Team Flip Card Toggle (Accordion Mode: auto flip-back others)
  const flipCards = document.querySelectorAll('.team-flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      flipCards.forEach(other => {
        if (other !== card) {
          other.classList.remove('flipped');
        }
      });
      card.classList.toggle('flipped');
    });
  });

  // Big Single Category Slideshow Auto-Play & Navigation
  let currentCategoryIndex = 0;
  let categoryTimer = null;

  window.showCategorySlide = function(index) {
    const slides = document.querySelectorAll('.category-slide');
    const dots = document.querySelectorAll('.slide-dot');
    if (!slides || slides.length === 0) return;

    if (index >= slides.length) currentCategoryIndex = 0;
    else if (index < 0) currentCategoryIndex = slides.length - 1;
    else currentCategoryIndex = index;

    slides.forEach((slide, i) => {
      slide.style.display = (i === currentCategoryIndex) ? 'block' : 'none';
    });

    if (dots && dots.length > 0) {
      dots.forEach((dot, i) => {
        if (i === currentCategoryIndex) {
          dot.style.width = '32px';
          dot.style.background = 'var(--accent-gold)';
        } else {
          dot.style.width = '10px';
          dot.style.background = 'rgba(0,0,0,0.2)';
        }
      });
    }
  };

  window.moveCategorySlide = function(step) {
    showCategorySlide(currentCategoryIndex + step);
    resetCategoryAutoPlay();
  };

  window.jumpToCategorySlide = function(index) {
    showCategorySlide(index);
    resetCategoryAutoPlay();
  };

  function resetCategoryAutoPlay() {
    if (categoryTimer) clearInterval(categoryTimer);
    categoryTimer = setInterval(() => {
      if (document.querySelectorAll('.category-slide').length > 0) {
        showCategorySlide(currentCategoryIndex + 1);
      }
    }, 4500);
  }

  resetCategoryAutoPlay();

  // Big Single Blog Slideshow Auto-Play & Navigation
  let currentBlogIndex = 0;
  let blogTimer = null;

  window.showBlogSlide = function(index) {
    const slides = document.querySelectorAll('.blog-slide');
    const dots = document.querySelectorAll('.blog-slide-dot');
    if (!slides || slides.length === 0) return;

    if (index >= slides.length) currentBlogIndex = 0;
    else if (index < 0) currentBlogIndex = slides.length - 1;
    else currentBlogIndex = index;

    slides.forEach((slide, i) => {
      slide.style.display = (i === currentBlogIndex) ? 'block' : 'none';
    });

    if (dots && dots.length > 0) {
      dots.forEach((dot, i) => {
        if (i === currentBlogIndex) {
          dot.style.width = '32px';
          dot.style.background = 'var(--accent-gold)';
        } else {
          dot.style.width = '10px';
          dot.style.background = 'rgba(0,0,0,0.2)';
        }
      });
    }
  };

  window.moveBlogSlide = function(step) {
    showBlogSlide(currentBlogIndex + step);
    resetBlogAutoPlay();
  };

  window.jumpToBlogSlide = function(index) {
    showBlogSlide(index);
    resetBlogAutoPlay();
  };

  function resetBlogAutoPlay() {
    if (blogTimer) clearInterval(blogTimer);
    blogTimer = setInterval(() => {
      if (document.querySelectorAll('.blog-slide').length > 0) {
        showBlogSlide(currentBlogIndex + 1);
      }
    }, 5500);
  }

  resetBlogAutoPlay();

  // 3-Cards Multi-Slide Testimonials Carousel Slider Engine
  let currentTestimonialPage = 0;
  let testimonialMultiTimer = null;

  window.updateTestimonialMultiTrack = function() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.testimonial-multi-dot');
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards || cards.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const cardsPerPage = isMobile ? 1 : 3;
    const maxPages = Math.ceil(cards.length / cardsPerPage);

    if (currentTestimonialPage >= maxPages) currentTestimonialPage = 0;
    if (currentTestimonialPage < 0) currentTestimonialPage = maxPages - 1;

    const containerWidth = track.parentElement ? track.parentElement.clientWidth : track.clientWidth;
    const gap = 24;
    const cardWidth = isMobile ? containerWidth : (containerWidth - (2 * gap)) / 3;

    cards.forEach(card => {
      card.style.flex = `0 0 ${cardWidth}px`;
      card.style.minWidth = `${cardWidth}px`;
    });

    const shiftPx = currentTestimonialPage * (cardsPerPage * (cardWidth + gap));
    track.style.transform = `translateX(-${shiftPx}px)`;

    if (dots && dots.length > 0) {
      dots.forEach((dot, i) => {
        if (i === currentTestimonialPage) {
          dot.style.width = '32px';
          dot.style.background = '#FF9100';
        } else {
          dot.style.width = '10px';
          dot.style.background = 'rgba(0,0,0,0.2)';
        }
      });
    }
  };

  window.moveTestimonialMultiSlide = function(step) {
    currentTestimonialPage += step;
    updateTestimonialMultiTrack();
    resetTestimonialMultiAutoPlay();
  };

  window.jumpToTestimonialMultiSlide = function(pageIndex) {
    currentTestimonialPage = pageIndex;
    updateTestimonialMultiTrack();
    resetTestimonialMultiAutoPlay();
  };

  function resetTestimonialMultiAutoPlay() {
    if (testimonialMultiTimer) clearInterval(testimonialMultiTimer);
    testimonialMultiTimer = setInterval(() => {
      if (document.getElementById('testimonial-track')) {
        moveTestimonialMultiSlide(1);
      }
    }, 5500);
  }

  resetTestimonialMultiAutoPlay();
  window.addEventListener('resize', () => updateTestimonialMultiTrack());

  // Universal Touch, Laptop Touchpad Drag & Trackpad Swipe Controller
  function setupTouchSwipe(elementSelector, onSwipeNext, onSwipePrev) {
    const el = typeof elementSelector === 'string' ? document.querySelector(elementSelector) : elementSelector;
    if (!el) return;

    el.style.touchAction = 'pan-y';
    el.style.cursor = 'grab';

    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let wheelDebounceTimer = null;

    // 1. Mobile Touch Events
    el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX < 0) {
          if (onSwipeNext) onSwipeNext();
        } else {
          if (onSwipePrev) onSwipePrev();
        }
      }
    }, { passive: true });

    // 2. Laptop Touchpad / Mouse Pointer Drag Events
    el.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      el.style.cursor = 'grabbing';
    });

    el.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = 'grab';
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX < 0) {
          if (onSwipeNext) onSwipeNext();
        } else {
          if (onSwipePrev) onSwipePrev();
        }
      }
    });

    el.addEventListener('pointerleave', () => {
      if (isDragging) {
        isDragging = false;
        el.style.cursor = 'grab';
      }
    });

    // 3. Laptop Trackpad 2-Finger Horizontal Scroll Events
    el.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
        e.preventDefault();
        if (wheelDebounceTimer) return;

        if (e.deltaX > 0) {
          if (onSwipeNext) onSwipeNext();
        } else {
          if (onSwipePrev) onSwipePrev();
        }

        wheelDebounceTimer = setTimeout(() => {
          wheelDebounceTimer = null;
        }, 350);
      }
    }, { passive: false });
  }

  // Attach Touch & Laptop Touchpad Gestures to All Sliders Site-Wide
  setupTouchSwipe('.blog-slideshow-container', () => window.moveBlogSlide(1), () => window.moveBlogSlide(-1));
  setupTouchSwipe('#testimonial-track', () => window.moveTestimonialMultiSlide(1), () => window.moveTestimonialMultiSlide(-1));
  setupTouchSwipe('.category-slideshow-container', () => window.moveCategorySlide(1), () => window.moveCategorySlide(-1));
  setupTouchSwipe('#bestseller-slider-track', () => {
    const nextBtn = document.getElementById('bestseller-next-btn');
    if (nextBtn) nextBtn.click();
  }, () => {
    const prevBtn = document.getElementById('bestseller-prev-btn');
    if (prevBtn) prevBtn.click();
  });

  // Grillista AI Chatbot Logic
  const chatbotLauncher = document.getElementById('chatbot-launcher-btn');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close-btn');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');

  if (chatbotLauncher && chatbotWindow) {
    chatbotLauncher.addEventListener('click', () => {
      chatbotWindow.classList.toggle('active');
    });
  }

  if (chatbotClose && chatbotWindow) {
    chatbotClose.addEventListener('click', () => {
      chatbotWindow.classList.remove('active');
    });
  }

  window.sendChatQuery = function(queryText) {
    addChatMessage(queryText, 'user');
    processChatBotResponse(queryText);
  };

  window.submitChatInput = function() {
    if (!chatbotInput) return;
    const text = chatbotInput.value.trim();
    if (text) {
      addChatMessage(text, 'user');
      chatbotInput.value = '';
      processChatBotResponse(text);
    }
  };

  window.handleChatKeyPress = function(e) {
    if (e.key === 'Enter') submitChatInput();
  };

  function addChatMessage(text, sender) {
    if (!chatbotMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = text;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function processChatBotResponse(query) {
    const q = query.toLowerCase();
    let reply = "";

    if (q.includes('cost') || q.includes('model') || q.includes('royalty') || q.includes('investment')) {
      reply = "💰 <strong>Franchise Models:</strong><br>• <strong>FOFO Model:</strong> ₹12 Lakh Investment (5% Royalty)<br>• <strong>FOCO Model:</strong> ₹16 Lakh Investment (5% Royalty)<br>⚡ Expected ROI Payback: 12 - 18 Months!";
    } else if (q.includes('kanpur') || q.includes('outlet') || q.includes('location') || q.includes('address')) {
      reply = "📍 <strong>Our 3 Operational Outlets in Kanpur:</strong><br>1. Barra Bypass (Flagship & Event Venue)<br>2. Kakadev (Youth Gaming Hub)<br>3. Juhi Saket Nagar (Rooftop Dining)<br>🏢 <strong>Head Office:</strong> 621/18, Block-W, Juhi Kala, VR Tower, Kanpur.";
    } else if (q.includes('prospectus') || q.includes('pdf') || q.includes('brochure') || q.includes('download')) {
      reply = "📜 You can generate & download our official 20-Page Franchise Prospectus PDF anytime on this website by submitting the lead form! Or call us directly.";
    } else if (q.includes('call') || q.includes('contact') || q.includes('number') || q.includes('phone')) {
      reply = "📞 <strong>Official Franchise Support Line:</strong><br><a href='tel:+916386818682' style='color:#15803D; font-weight:800;'>+91 63868 18682</a><br>📧 Email: grillistakanpur@gmail.com";
    } else if (q.includes('menu') || q.includes('food') || q.includes('veg') || q.includes('margin')) {
      reply = "🍔 <strong>100% Pure Veg Menu:</strong><br>Wood-Fired Pizzas, Smoked Burgers, Grilled Sandwiches, Sizzlers, Mocktails & Desserts with 65%+ Gross Margin!";
    } else {
      reply = "Thank you for reaching out! 🙏 Our Vice President of Operations, Amitabh Srivastava, & Franchise Onboarding Team can guide you directly at <strong>+91 63868 18682</strong>.";
    }

    setTimeout(() => {
      addChatMessage(reply, 'bot');
    }, 400);
  }

  // Floating Side Action Dock (Auto-Hide on Scroll & Manual Toggle)
  const sideDock = document.getElementById('side-action-dock');
  const dockToggleBtn = document.getElementById('dock-toggle-btn');
  const dockIcon = document.getElementById('dock-toggle-icon');

  if (sideDock) {
    let scrollDockTimer = null;

    window.addEventListener('scroll', () => {
      // Hide side dock while scrolling
      sideDock.classList.add('hidden-on-scroll');

      if (scrollDockTimer !== null) {
        clearTimeout(scrollDockTimer);
      }

      // Re-appear 350ms after scrolling stops
      scrollDockTimer = setTimeout(() => {
        sideDock.classList.remove('hidden-on-scroll');
      }, 350);
    }, { passive: true });

    if (dockToggleBtn) {
      dockToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        sideDock.classList.toggle('collapsed');
        if (dockIcon) {
          if (sideDock.classList.contains('collapsed')) {
            dockIcon.className = 'fa-solid fa-arrow-left';
          } else {
            dockIcon.className = 'fa-solid fa-arrow-right';
          }
        }
      });
    }
  }

  // Operator Partner Eligibility & Brand Support Dual Tab Switcher
  window.switchPartnerTab = function(tabName) {
    const btnElig = document.getElementById('tab-btn-eligibility');
    const btnSupp = document.getElementById('tab-btn-support');
    const contentElig = document.getElementById('tab-content-eligibility');
    const contentSupp = document.getElementById('tab-content-support');

    if (tabName === 'eligibility') {
      if (contentElig) contentElig.style.display = 'block';
      if (contentSupp) contentSupp.style.display = 'none';

      if (btnElig) {
        btnElig.style.background = '#991B1B';
        btnElig.style.color = '#FFFFFF';
        btnElig.style.boxShadow = 'inset 0 -3px 0 #7F1D1D';
      }
      if (btnSupp) {
        btnSupp.style.background = 'transparent';
        btnSupp.style.color = '#991B1B';
        btnSupp.style.boxShadow = 'none';
      }
    } else if (tabName === 'support') {
      if (contentElig) contentElig.style.display = 'none';
      if (contentSupp) contentSupp.style.display = 'block';

      if (btnSupp) {
        btnSupp.style.background = '#991B1B';
        btnSupp.style.color = '#FFFFFF';
        btnSupp.style.boxShadow = 'inset 0 -3px 0 #7F1D1D';
      }
      if (btnElig) {
        btnElig.style.background = 'transparent';
        btnElig.style.color = '#991B1B';
        btnElig.style.boxShadow = 'none';
      }
    }
  };

  // Back to Top Scroll Arrow Button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Sleek Corporate Mobile Hamburger Drawer Toggle
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('navbar-mobile-drawer');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = mobileDrawer.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileDrawer.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Interactive Investor Calculator Popup Modal Logic
  // Dynamic Calculator Modal & Interactive ROI Simulator (Global Fix for all pages)
  function ensureCalculatorModalInDOM() {
    let calcModalOverlay = document.getElementById('calculator-modal-overlay');
    if (!calcModalOverlay) {
      calcModalOverlay = document.createElement('div');
      calcModalOverlay.className = 'calculator-modal-overlay';
      calcModalOverlay.id = 'calculator-modal-overlay';
      calcModalOverlay.innerHTML = `
        <div class="calculator-modal-card">
          <button class="calculator-modal-close" id="calculator-modal-close" aria-label="Close Calculator">&times;</button>
          
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="background: rgba(22, 163, 74, 0.15); color: #4ADE80; border: 1px solid rgba(74, 222, 128, 0.4); font-size: 0.75rem; font-weight: 800; padding: 4px 14px; border-radius: 99px; text-transform: uppercase;">
              <i class="fa-solid fa-calculator"></i> Interactive ROI Simulator
            </span>
            <h3 style="font-size: 1.8rem; color: #FFFFFF; font-weight: 800; margin-top: 8px;">Calculate Your Monthly Profitability</h3>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.88rem; margin-top: 4px;">Adjust expected daily orders and order values to calculate estimated store net profit.</p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <!-- Controls Column -->
            <div>
              <div style="margin-bottom: 20px;">
                <label style="font-size: 0.88rem; font-weight: 700; color: #FFF; display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span>Expected Daily Orders:</span>
                  <span id="pop-roi-orders-val" style="color: #FACC15; font-weight: 800;">120 Orders / Day</span>
                </label>
                <input type="range" id="pop-roi-orders-slider" min="50" max="350" value="120" step="5" style="width: 100%; accent-color: #FACC15; height: 8px; cursor: pointer;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="font-size: 0.88rem; font-weight: 700; color: #FFF; display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span>Average Order Value (AOV):</span>
                  <span id="pop-roi-aov-val" style="color: #FACC15; font-weight: 800;">₹180 / Order</span>
                </label>
                <input type="range" id="pop-roi-aov-slider" min="100" max="350" value="180" step="10" style="width: 100%; accent-color: #FACC15; height: 8px; cursor: pointer;">
              </div>

              <div style="margin-bottom: 20px;">
                <label style="font-size: 0.88rem; font-weight: 700; color: #FFF; display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <span>Monthly Store Rent (Est.):</span>
                  <span id="pop-roi-rent-val" style="color: #FACC15; font-weight: 800;">₹35,000 / Mo</span>
                </label>
                <input type="range" id="pop-roi-rent-slider" min="15000" max="90000" value="35000" step="5000" style="width: 100%; accent-color: #FACC15; height: 8px; cursor: pointer;">
              </div>
            </div>

            <!-- Calculated Output Cards -->
            <div style="display: flex; flex-direction: column; justify-content: space-between; background: rgba(255, 255, 255, 0.05); padding: 22px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                <div>
                  <div style="font-size: 0.72rem; color: rgba(255,255,255,0.7); font-weight: 700; text-transform: uppercase;">Gross Revenue</div>
                  <div id="pop-calc-revenue" style="font-size: 1.25rem; font-weight: 800; color: #FFF;">₹6,48,000</div>
                </div>
                <div>
                  <div style="font-size: 0.72rem; color: rgba(255,255,255,0.7); font-weight: 700; text-transform: uppercase;">Food Cost (35%)</div>
                  <div id="pop-calc-cogs" style="font-size: 1.25rem; font-weight: 800; color: #F87171;">-₹2,26,800</div>
                </div>
              </div>

              <div style="background: rgba(250, 204, 21, 0.12); border: 1.5px solid #FACC15; padding: 16px; border-radius: 16px; margin-bottom: 16px;">
                <div style="font-size: 0.75rem; color: #FACC15; font-weight: 800; text-transform: uppercase;">Est. Monthly Net Profit</div>
                <div id="pop-calc-net-profit" style="font-size: 1.8rem; font-weight: 800; color: #86EFAC; margin-top: 2px;">₹1,75,000 / Mo</div>
                <div id="pop-calc-payback" style="font-size: 0.76rem; color: rgba(255, 255, 255, 0.8); margin-top: 2px;">Estimated Payback: ~11 Months</div>
              </div>

              <a href="franchise.html#apply-form" class="btn btn-gold pop-modal-apply-btn" style="width: 100%; text-align: center; justify-content: center; font-weight: 800;">
                Book Preferred City Rights
              </a>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(calcModalOverlay);
    }
    setupPopCalculator();
    return calcModalOverlay;
  }

  function setupPopCalculator() {
    const popOrdersSlider = document.getElementById('pop-roi-orders-slider');
    const popAovSlider = document.getElementById('pop-roi-aov-slider');
    const popRentSlider = document.getElementById('pop-roi-rent-slider');

    const popOrdersVal = document.getElementById('pop-roi-orders-val');
    const popAovVal = document.getElementById('pop-roi-aov-val');
    const popRentVal = document.getElementById('pop-roi-rent-val');

    const popCalcRev = document.getElementById('pop-calc-revenue');
    const popCalcCogs = document.getElementById('pop-calc-cogs');
    const popCalcNet = document.getElementById('pop-calc-net-profit');
    const popCalcPayback = document.getElementById('pop-calc-payback');

    function updatePopCalc() {
      if (!popOrdersSlider || !popAovSlider || !popRentSlider) return;

      const orders = parseInt(popOrdersSlider.value);
      const aov = parseInt(popAovSlider.value);
      const rent = parseInt(popRentSlider.value);

      if (popOrdersVal) popOrdersVal.innerText = `${orders} Orders / Day`;
      if (popAovVal) popAovVal.innerText = `₹${aov} / Order`;
      if (popRentVal) popRentVal.innerText = `₹${rent.toLocaleString('en-IN')} / Mo`;

      const dailyRev = orders * aov;
      const monthlyRev = dailyRev * 30;
      const cogs = monthlyRev * 0.35;
      const staffCost = 45000;
      const utilities = 25000;
      const royalties = monthlyRev * 0.05;
      const netProfit = monthlyRev - cogs - rent - staffCost - utilities - royalties;

      if (popCalcRev) popCalcRev.innerText = `₹${monthlyRev.toLocaleString('en-IN')}`;
      if (popCalcCogs) popCalcCogs.innerText = `-₹${Math.round(cogs).toLocaleString('en-IN')}`;
      if (popCalcNet) popCalcNet.innerText = `₹${Math.round(netProfit).toLocaleString('en-IN')} / Mo`;

      const investment = 1400000;
      const months = Math.max(6, Math.round(investment / Math.max(netProfit, 10000)));
      if (popCalcPayback) popCalcPayback.innerText = `Estimated Payback: ~${months} Months`;
    }

    if (popOrdersSlider && !popOrdersSlider.dataset.bound) {
      popOrdersSlider.dataset.bound = 'true';
      popOrdersSlider.addEventListener('input', updatePopCalc);
      popAovSlider.addEventListener('input', updatePopCalc);
      popRentSlider.addEventListener('input', updatePopCalc);
    }

    updatePopCalc();
  }

  function openCalculatorModal() {
    const modal = ensureCalculatorModalInDOM();
    if (modal) {
      modal.classList.add('active');
    }
  }

  function closeCalculatorModal() {
    const modal = document.getElementById('calculator-modal-overlay');
    if (modal) {
      modal.classList.remove('active');
    }
  }

  window.openCalculatorModal = openCalculatorModal;
  window.closeCalculatorModal = closeCalculatorModal;

  // Intercept all links/buttons pointing to #calculator or with trigger class
  document.addEventListener('click', (e) => {
    const calcTrigger = e.target.closest('a[href="#calculator"], .trigger-calculator-modal, #open-calculator-modal-btn, [data-modal="calculator"]');
    if (calcTrigger) {
      e.preventDefault();
      openCalculatorModal();
      return;
    }

    const closeBtn = e.target.closest('#calculator-modal-close, .pop-modal-apply-btn');
    if (closeBtn) {
      closeCalculatorModal();
      return;
    }

    const modal = document.getElementById('calculator-modal-overlay');
    if (modal && e.target === modal) {
      closeCalculatorModal();
    }
  });

  // Active Nav Link Scroll Highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  // Geolocation Access & Outlet Distance Detector
  const detectLocationBtn = document.getElementById('detect-location-btn');
  const locationStatusBadge = document.getElementById('location-status-badge');
  const distanceBarra = document.getElementById('distance-barra');
  const distanceKakadeo = document.getElementById('distance-kakadeo');

  // Kanpur Outlet Coordinates
  const OUTLETS = {
    barra: { lat: 26.4380, lon: 80.3015, name: 'Barra 2 Outlet' },
    kakadeo: { lat: 26.4750, lon: 80.2980, name: 'Kakadeo Outlet' }
  };

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function formatDistanceDisplay(distKm, outletName) {
    const numeric = parseFloat(distKm);
    if (numeric <= 0.3) {
      return `<strong style="color: #15803D;"><i class="fa-solid fa-location-dot"></i> YOU ARE AT THE RESTAURANT! (0.0 km - In-Store Dining)</strong>`;
    } else if (numeric <= 0.8) {
      const meters = Math.round(numeric * 1000);
      return `<i class="fa-solid fa-person-walking"></i> Super Close! Approx ${meters} meters away (${numeric.toFixed(1)} km)`;
    } else {
      return `<i class="fa-solid fa-route"></i> ${numeric.toFixed(1)} km away from your location`;
    }
  }

  if (detectLocationBtn) {
    detectLocationBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
      }

      detectLocationBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Detecting High-Precision GPS Location...';
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          const distBarraRaw = calculateDistanceKm(userLat, userLon, OUTLETS.barra.lat, OUTLETS.barra.lon);
          const distKakadeoRaw = calculateDistanceKm(userLat, userLon, OUTLETS.kakadeo.lat, OUTLETS.kakadeo.lon);

          detectLocationBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Precise Location Detected!';
          detectLocationBtn.style.background = '#15803D';
          detectLocationBtn.style.color = '#FFF';

          const nearestName = distBarraRaw < distKakadeoRaw ? OUTLETS.barra.name : OUTLETS.kakadeo.name;
          const nearestDistNum = Math.min(distBarraRaw, distKakadeoRaw);

          if (locationStatusBadge) {
            locationStatusBadge.style.display = 'block';
            if (nearestDistNum <= 0.3) {
              locationStatusBadge.innerHTML = `<i class="fa-solid fa-shop" style="color: #15803D;"></i> <strong>WELCOME TO GRILLISTA! You are currently sitting at ${nearestName}!</strong>`;
            } else {
              locationStatusBadge.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> Your Location: <strong>${nearestName} is nearest to you (${formatDistanceDisplay(nearestDistNum, nearestName)})</strong>`;
            }
          }

          if (distanceBarra) {
            distanceBarra.style.display = 'block';
            distanceBarra.innerHTML = formatDistanceDisplay(distBarraRaw, OUTLETS.barra.name);
          }

          if (distanceKakadeo) {
            distanceKakadeo.style.display = 'block';
            distanceKakadeo.innerHTML = formatDistanceDisplay(distKakadeoRaw, OUTLETS.kakadeo.name);
          }
        },
        (error) => {
          detectLocationBtn.innerHTML = '<i class="fa-solid fa-crosshairs"></i> Detect My Location';
          alert('Unable to retrieve high-accuracy GPS location. Please allow location access in your device settings.');
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0
        }
      );
    });
  }

  // Quick In-Store Override Helpers
  window.setInStoreLocation = function(outletKey) {
    if (outletKey === 'barra') {
      if (distanceBarra) distanceBarra.innerHTML = `<strong style="color: #15803D;"><i class="fa-solid fa-shop"></i> YOU ARE HERE AT BARRA 2 OUTLET (0.0 km - In-Store)</strong>`;
      if (locationStatusBadge) {
        locationStatusBadge.style.display = 'block';
        locationStatusBadge.innerHTML = `<i class="fa-solid fa-shop" style="color: #15803D;"></i> <strong>WELCOME TO GRILLISTA BARRA 2! (0.0 km - In-Store Dining)</strong>`;
      }
    } else if (outletKey === 'kakadeo') {
      if (distanceKakadeo) distanceKakadeo.innerHTML = `<strong style="color: #15803D;"><i class="fa-solid fa-shop"></i> YOU ARE HERE AT KAKADEO OUTLET (0.0 km - In-Store)</strong>`;
      if (locationStatusBadge) {
        locationStatusBadge.style.display = 'block';
        locationStatusBadge.innerHTML = `<i class="fa-solid fa-shop" style="color: #15803D;"></i> <strong>WELCOME TO GRILLISTA KAKADEO! (0.0 km - In-Store Dining)</strong>`;
      }
    }
  };

  // Categorized FAQ Accordion Toggle (Matching Reference Image)
  const categoryBtns = document.querySelectorAll('.faq-category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.parentElement;
      const content = card.querySelector('.faq-category-content');
      const isAlreadyActive = card.classList.contains('active');

      // Close all category cards
      document.querySelectorAll('.faq-category-card').forEach(c => {
        c.classList.remove('active');
        const cnt = c.querySelector('.faq-category-content');
        if (cnt) cnt.style.display = 'none';
      });

      if (!isAlreadyActive && content) {
        card.classList.add('active');
        content.style.display = 'block';
      }
    });
  });

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const icon = btn.querySelector('.faq-icon');

      const isOpen = answer && answer.style.display === 'block';

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen && answer) {
        answer.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Menu Filter Tabs & Smooth Category Animations
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryBlocks = document.querySelectorAll('.menu-category-block');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      categoryBlocks.forEach(block => {
        const cat = block.getAttribute('data-category');
        if (filterValue === 'all' || cat === filterValue) {
          block.style.display = 'block';
          block.style.animation = 'none';
          void block.offsetWidth; // Trigger reflow for animation restart
          block.style.animation = 'fadeInUpKeyframe 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  // Franchise Application Modal Logic
  const modalOverlay = document.getElementById('apply-modal');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalTriggers = document.querySelectorAll('.trigger-apply-modal');
  const formSteps = document.querySelectorAll('.form-step');
  const nextBtn = document.getElementById('form-next');
  const prevBtn = document.getElementById('form-prev');
  const submitBtn = document.getElementById('form-submit');
  const franchiseForm = document.getElementById('franchise-application-form');

  let currentStep = 0;

  function updateFormStep() {
    formSteps.forEach((step, idx) => {
      step.classList.toggle('active', idx === currentStep);
    });

    if (currentStep === 0) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (submitBtn) submitBtn.style.display = 'none';
    } else if (currentStep === formSteps.length - 1) {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
      if (nextBtn) nextBtn.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'inline-flex';
    } else {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (submitBtn) submitBtn.style.display = 'none';
    }
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) modalOverlay.classList.add('active');
      currentStep = 0;
      updateFormStep();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < formSteps.length - 1) {
        currentStep++;
        updateFormStep();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateFormStep();
      }
    });
  }

  // Global Google Sheets Inquiry Monitor Sync Handler
  window.sendLeadToGoogleSheet = function(leadData) {
    const sheetWebappUrl = localStorage.getItem('grillista_google_sheet_url') || 'https://script.google.com/macros/s/AKfycbz_DEMO_GRILLISTA_SHEET/exec';
    if (!sheetWebappUrl) return;

    try {
      fetch(sheetWebappUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('en-IN'),
          name: leadData.name || leadData.applicantName || 'Prospect',
          phone: leadData.phone || leadData.mobile || 'N/A',
          email: leadData.email || 'N/A',
          city: leadData.location || leadData.city || 'Kanpur',
          model: leadData.model || 'Mini Bistro / Classic Lounge',
          budget: leadData.budget || '₹12 Lakh',
          notes: leadData.notes || 'Website Inquiry Lead'
        })
      }).then(() => {
        console.log('✅ Lead synced live to Google Sheet!');
      }).catch(err => console.warn('Google Sheet Sync warning:', err));
    } catch (e) {
      console.warn('Google Sheet Sync Exception:', e);
    }
  };

  // Application Submission & Lead Storage
  if (franchiseForm) {
    franchiseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = franchiseForm.querySelectorAll('input, select');
      const name = inputs[0] ? inputs[0].value : 'Prospect';
      const email = inputs[1] ? inputs[1].value : 'N/A';
      const phone = inputs[2] ? inputs[2].value : 'N/A';
      const location = inputs[3] ? inputs[3].value : 'Kanpur';
      const budget = inputs[4] ? inputs[4].value : '₹12 Lakh';

      const leadObj = {
        date: new Date().toLocaleDateString('en-IN'),
        name: name,
        email: email,
        phone: phone,
        location: location,
        budget: budget
      };

      // Save to localStorage leads
      const leads = JSON.parse(localStorage.getItem('grillista_leads') || '[]');
      leads.push(leadObj);
      localStorage.setItem('grillista_leads', JSON.stringify(leads));

      // Save to franchise leads dual key
      const franchiseLeads = JSON.parse(localStorage.getItem('grillista_franchise_leads') || '[]');
      franchiseLeads.push(leadObj);
      localStorage.setItem('grillista_franchise_leads', JSON.stringify(franchiseLeads));

      // Live Sync to Google Sheet
      window.sendLeadToGoogleSheet(leadObj);

      // Trigger prospectus text download
      const prospectusContent = `===============================================================
GRILLISTA FRANCHISE PROSPECTUS (OFFICIAL 2026 INDIA EDITION)
Brand Tagline: THE ULTIMATE FOOD CHAIN - Veg Vibes, Positive Energy
Operating Outlets: 2 Live Outlets in Kanpur (Barra 2 & Kakadeo)
===============================================================

1. INVESTMENT MODELS & ITEMIZATION (INR ₹)
- Mini Bistro Model: ₹12 Lakh Total (Interiors Excluded)
- Classic Lounge Model: ₹16 Lakh Total (Interiors Excluded)

2. ROYALTY & AGREEMENT TERMS
- Royalty Fee: 5% of gross sales (Starts after 6 months)
- Maintenance Fee: ₹5,000 / month
- Agreement Period: 5 Years

3. CONTACT HEADQUARTERS
- Helpline: +91 98765 43210 | Email: franchise@grillista.in
`;

      const blob = new Blob([prospectusContent], { type: 'text/plain;charset=utf-8' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'Grillista_Franchise_Prospectus_India_2026.txt';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      alert('Application Submitted Successfully! Franchise Prospectus downloaded.');
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // ==========================================
  // ADMIN PORTAL & LIVE CMS DASHBOARD LOGIC
  // ==========================================

  const adminTriggers = document.querySelectorAll('.trigger-admin-modal');
  const adminLoginModal = document.getElementById('admin-login-modal');
  const adminLoginClose = document.querySelector('.admin-login-close');
  const adminLoginForm = document.getElementById('admin-login-form');

  const adminDashModal = document.getElementById('admin-dashboard-modal');
  const adminDashClose = document.querySelector('.admin-dash-close');
  const adminLogoutBtn = document.getElementById('admin-logout-btn');

  // Open Admin Login
  adminTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isLoggedIn = sessionStorage.getItem('grillista_admin_logged');
      if (isLoggedIn === 'true') {
        openCmsDashboard();
      } else {
        if (adminLoginModal) adminLoginModal.classList.add('active');
      }
    });
  });

  if (adminLoginClose) {
    adminLoginClose.addEventListener('click', () => {
      adminLoginModal.classList.remove('active');
    });
  }

  // Handle Admin Login
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('admin-user').value;
      const pass = document.getElementById('admin-pass').value;

      if (user === 'admin' && pass === 'admin123') {
        sessionStorage.setItem('grillista_admin_logged', 'true');
        adminLoginModal.classList.remove('active');
        openCmsDashboard();
      } else {
        alert('Invalid Admin Credentials. Please use admin / admin123');
      }
    });
  }

  // Open CMS Dashboard
  function openCmsDashboard() {
    if (adminDashModal) adminDashModal.classList.add('active');
    renderCmsMenuList();
    renderCmsLeads();
  }

  if (adminDashClose) {
    adminDashClose.addEventListener('click', () => {
      adminDashModal.classList.remove('active');
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('grillista_admin_logged');
      adminDashModal.classList.remove('active');
      alert('Logged out from Admin CMS Portal');
    });
  }

  // Dashboard Tab Switching
  const cmsTabBtns = document.querySelectorAll('.cms-tab-btn');
  const cmsPanels = document.querySelectorAll('.cms-panel');

  cmsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cmsTabBtns.forEach(b => b.classList.remove('active'));
      cmsPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // CMS Menu Manager Logic
  const addMenuItemForm = document.getElementById('add-menu-item-form');
  const cmsMenuList = document.getElementById('cms-menu-list');

  function renderCmsMenuList() {
    if (!cmsMenuList || !menuGrid) return;

    cmsMenuList.innerHTML = '';
    const cards = menuGrid.querySelectorAll('.menu-card');

    cards.forEach((card, idx) => {
      const name = card.querySelector('h4') ? card.querySelector('h4').textContent : 'Item';
      const cat = card.getAttribute('data-category') || 'general';

      const itemRow = document.createElement('div');
      itemRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #FAF7F2; border-radius: 8px; border: 1px solid var(--border-light);';
      itemRow.innerHTML = `
        <div>
          <strong style="color: var(--brand-emerald);">${name}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-left: 8px;">[${cat}]</span>
        </div>
        <button class="btn btn-outline btn-sm delete-menu-item" data-idx="${idx}" style="color: var(--primary-red); padding: 4px 10px; font-size: 0.75rem;">
          <i class="fa-solid fa-trash"></i> Remove
        </button>
      `;
      cmsMenuList.appendChild(itemRow);
    });

    // Delete Event Handlers
    cmsMenuList.querySelectorAll('.delete-menu-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const cardsNow = menuGrid.querySelectorAll('.menu-card');
        if (cardsNow[idx]) {
          cardsNow[idx].remove();
          renderCmsMenuList();
        }
      });
    });
  }

  // Add New Menu Item Form
  if (addMenuItemForm) {
    addMenuItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemNameInput = document.getElementById('new-item-name');
      const itemCatSelect = document.getElementById('new-item-category');

      if (!itemNameInput.value.trim()) return;

      const newCard = document.createElement('div');
      newCard.className = 'menu-card';
      newCard.setAttribute('data-category', itemCatSelect.value);
      newCard.innerHTML = `<h4 style="font-size: 1.15rem; margin: 0; color: var(--brand-emerald); font-weight: 700;">${itemNameInput.value.trim()}</h4>`;

      menuGrid.appendChild(newCard);
      itemNameInput.value = '';
      renderCmsMenuList();
      alert('New item added live to menu section!');
    });
  }

  // CMS Franchise Leads Table Logic
  function renderCmsLeads() {
    const leads = JSON.parse(localStorage.getItem('grillista_leads') || '[]');
    const tbody = document.getElementById('cms-leads-tbody');
    const countBadge = document.getElementById('cms-lead-count');

    if (countBadge) countBadge.textContent = leads.length;
    if (!tbody) return;

    tbody.innerHTML = '';
    if (leads.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No franchise lead submissions yet.</td></tr>`;
      return;
    }

    leads.reverse().forEach(lead => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${lead.date}</td>
        <td><strong>${lead.name}</strong></td>
        <td>${lead.phone}</td>
        <td>${lead.location}</td>
        <td><span style="color: var(--primary-red); font-weight: 700;">${lead.budget}</span></td>
      `;
      tbody.appendChild(row);
    });
  }

  const clearLeadsBtn = document.getElementById('cms-clear-leads');
  if (clearLeadsBtn) {
    clearLeadsBtn.addEventListener('click', () => {
      if (confirm('Clear all stored leads?')) {
        localStorage.removeItem('grillista_leads');
        renderCmsLeads();
      }
    });
  }

  // Auto-Inject Floating Foodie Background Icons System
  function injectFoodieBackgroundIcons() {
    if (document.getElementById('foodie-bg-container')) return;

    const container = document.createElement('div');
    container.id = 'foodie-bg-container';
    container.className = 'foodie-bg-container';

    const foodieIcons = [
      { icon: 'fa-burger', top: '8%', left: '3%', size: '3.2rem', color: '', rotate: '-15deg' },
      { icon: 'fa-pizza-slice', top: '24%', left: '92%', size: '3.8rem', color: 'alt-color', rotate: '18deg' },
      { icon: 'fa-fire-burner', top: '42%', left: '2.5%', size: '3rem', color: 'green-color', rotate: '12deg' },
      { icon: 'fa-pepper-hot', top: '58%', left: '94%', size: '3.4rem', color: 'alt-color', rotate: '-14deg' },
      { icon: 'fa-utensils', top: '74%', left: '3.5%', size: '3.6rem', color: '', rotate: '25deg' },
      { icon: 'fa-mug-hot', top: '88%', left: '91%', size: '3.1rem', color: '', rotate: '-20deg' },
      { icon: 'fa-ice-cream', top: '16%', left: '88%', size: '2.8rem', color: 'green-color', rotate: '15deg' },
      { icon: 'fa-bowl-food', top: '35%', left: '4%', size: '3.5rem', color: 'alt-color', rotate: '-10deg' },
      { icon: 'fa-cheese', top: '51%', left: '90%', size: '3rem', color: '', rotate: '10deg' },
      { icon: 'fa-leaf', top: '68%', left: '2%', size: '3.2rem', color: 'green-color', rotate: '-12deg' },
      { icon: 'fa-wheat-awn', top: '82%', left: '93%', size: '2.9rem', color: '', rotate: '16deg' },
      { icon: 'fa-stroopwafel', top: '92%', left: '5%', size: '3.2rem', color: 'alt-color', rotate: '-18deg' }
    ];

    foodieIcons.forEach(item => {
      const el = document.createElement('i');
      el.className = `fa-solid ${item.icon} foodie-bg-icon ${item.color}`;
      el.style.top = item.top;
      el.style.left = item.left;
      el.style.fontSize = item.size;
      el.style.transform = `rotate(${item.rotate})`;
      container.appendChild(el);
    });

    document.body.appendChild(container);
  }

  injectFoodieBackgroundIcons();
});
