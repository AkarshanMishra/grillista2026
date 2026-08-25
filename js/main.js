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

  // 2026 Hero Showcase Slideshow Controller
  let currentHeroSlideIndex = 0;
  let heroSlideTimer = null;
  const HERO_SLIDE_DURATION = 5500;

  window.showHeroSlide = function(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const bgSlides = document.querySelectorAll('.hero-bg-slide');
    const pills = document.querySelectorAll('.hero-indicator-pill');
    if (!slides || slides.length === 0) return;

    if (index >= slides.length) currentHeroSlideIndex = 0;
    else if (index < 0) currentHeroSlideIndex = slides.length - 1;
    else currentHeroSlideIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentHeroSlideIndex) {
        slide.classList.add('active');
        slide.style.display = 'block';
      } else {
        slide.classList.remove('active');
        slide.style.display = 'none';
      }
    });

    if (bgSlides && bgSlides.length > 0) {
      bgSlides.forEach((bg, i) => {
        if (i === currentHeroSlideIndex) {
          bg.classList.add('active');
        } else {
          bg.classList.remove('active');
        }
      });
    }

    const dots = document.querySelectorAll('.hero-dot');
    if (dots && dots.length > 0) {
      dots.forEach((dot, i) => {
        if (i === currentHeroSlideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    if (pills && pills.length > 0) {
      pills.forEach((pill, i) => {
        if (i === currentHeroSlideIndex) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    }
  };

  window.moveHeroSlide = function(step) {
    showHeroSlide(currentHeroSlideIndex + step);
    resetHeroAutoPlay();
  };

  window.jumpToHeroSlide = function(index) {
    showHeroSlide(index);
    resetHeroAutoPlay();
  };

  function resetHeroAutoPlay() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
      const slides = document.querySelectorAll('.hero-slide');
      if (slides && slides.length > 0) {
        showHeroSlide(currentHeroSlideIndex + 1);
      }
    }, HERO_SLIDE_DURATION);
  }

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      if (heroSlideTimer) clearInterval(heroSlideTimer);
    });
    heroSection.addEventListener('mouseleave', () => {
      resetHeroAutoPlay();
    });
  }

  resetHeroAutoPlay();

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
  setupTouchSwipe('#hero', () => window.moveHeroSlide(1), () => window.moveHeroSlide(-1));
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

  // Open Interactive Inline Quick Inquiry Form inside Chatbot
  window.startChatInquiryForm = function() {
    const formHtml = `
      <div class="chat-inquiry-card">
        <div style="font-weight: 800; font-size: 0.92rem; color: #0F172A; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-file-signature" style="color: #FACC15;"></i> Quick Franchise Inquiry Form
        </div>
        <p style="font-size: 0.78rem; color: #64748B; margin: 0 0 10px 0;">Fill this 30-second form to reserve your territory & receive our full 2026 Prospectus:</p>
        
        <form onsubmit="submitChatInquiry(event)">
          <div style="margin-bottom: 8px;">
            <input type="text" id="chat-lead-name" placeholder="Your Full Name *" required style="width: 100%; padding: 8px 12px; font-size: 0.84rem; border: 1.5px solid #CBD5E1; border-radius: 8px; outline: none; box-sizing: border-box;">
          </div>
          <div style="margin-bottom: 8px;">
            <input type="tel" id="chat-lead-phone" placeholder="WhatsApp Number *" required style="width: 100%; padding: 8px 12px; font-size: 0.84rem; border: 1.5px solid #CBD5E1; border-radius: 8px; outline: none; box-sizing: border-box;">
          </div>
          <div style="margin-bottom: 8px;">
            <input type="text" id="chat-lead-city" placeholder="Target City / State *" required style="width: 100%; padding: 8px 12px; font-size: 0.84rem; border: 1.5px solid #CBD5E1; border-radius: 8px; outline: none; box-sizing: border-box;">
          </div>
          <div style="margin-bottom: 12px;">
            <select id="chat-lead-model" style="width: 100%; padding: 8px 12px; font-size: 0.84rem; border: 1.5px solid #CBD5E1; border-radius: 8px; outline: none; background: #FFF; box-sizing: border-box;">
              <option value="Smart Bistro (₹12-14L)">Smart Bistro (₹12–14 Lakh)</option>
              <option value="Express Kiosk (₹8-10L)">Express Kiosk (₹8–10 Lakh)</option>
              <option value="Signature Lounge (₹16-18L)">Signature Lounge (₹16–18 Lakh)</option>
              <option value="Multi-Unit / Master">Multi-Unit / Master Franchise</option>
            </select>
          </div>
          <button type="submit" style="width: 100%; padding: 10px; background: #15803D; color: #FFF; font-weight: 800; font-size: 0.88rem; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 14px rgba(21,128,61,0.3); transition: all 0.2s ease;">
            <i class="fa-solid fa-paper-plane"></i> Submit Franchise Inquiry
          </button>
        </form>
      </div>
    `;
    addChatMessage(formHtml, 'bot');
  };

  window.submitChatInquiry = function(e) {
    if (e) e.preventDefault();
    const nameEl = document.getElementById('chat-lead-name');
    const phoneEl = document.getElementById('chat-lead-phone');
    const cityEl = document.getElementById('chat-lead-city');
    const modelEl = document.getElementById('chat-lead-model');

    const name = nameEl ? nameEl.value.trim() : '';
    const phone = phoneEl ? phoneEl.value.trim() : '';
    const city = cityEl ? cityEl.value.trim() : '';
    const model = modelEl ? modelEl.value : 'Smart Bistro';

    if (!name || !phone) return;

    // Save lead to local storage
    const existingLeads = JSON.parse(localStorage.getItem('grillista_leads') || '[]');
    existingLeads.unshift({
      name,
      phone,
      city,
      model,
      date: new Date().toLocaleString(),
      source: 'AI Chatbot Inquiry Form'
    });
    localStorage.setItem('grillista_leads', JSON.stringify(existingLeads));

    // Bot Response Confirmation
    const successReply = `
      <div style="background: rgba(34, 197, 94, 0.12); border: 1.5px solid #22C55E; border-radius: 14px; padding: 14px; color: #14532D;">
        <div style="font-weight: 900; font-size: 0.95rem; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; color: #15803D;">
          <i class="fa-solid fa-circle-check"></i> Inquiry Successfully Registered!
        </div>
        <p style="font-size: 0.82rem; margin: 0 0 10px 0; line-height: 1.45;">
          Thank you <strong>${name}</strong>! Your inquiry for <strong>${city} (${model})</strong> has been received by our Onboarding Director.
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
          <a href="https://wa.me/916386818682?text=${encodeURIComponent('Hi Grillista, I submitted an inquiry for ' + city + ' (' + model + '). My name is ' + name)}" target="_blank" style="background: #25D366; color: #FFF; font-weight: 800; font-size: 0.8rem; padding: 8px 12px; border-radius: 8px; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <i class="fa-brands fa-whatsapp"></i> Chat with Director on WhatsApp
          </a>
          <a href="tel:+916386818682" style="background: #0F172A; color: #FACC15; font-weight: 800; font-size: 0.8rem; padding: 8px 12px; border-radius: 8px; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <i class="fa-solid fa-phone"></i> Call HQ: +91 63868 18682
          </a>
        </div>
      </div>
    `;
    addChatMessage(successReply, 'bot');
  };

  // Free Conversational AI API Integration with Local Knowledge Fallback
  async function processChatBotResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('inquiry') || q.includes('form') || q.includes('apply') || q.includes('book') || q.includes('register') || q.includes('join') || q.includes('partner')) {
      startChatInquiryForm();
      return;
    }

    // Show Typing Indicator
    const typingId = 'chat-typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = typingId;
    typingDiv.className = 'chat-msg bot';
    typingDiv.style.cssText = 'color: #FACC15; display: inline-flex; align-items: center; gap: 8px; font-size: 0.82rem;';
    typingDiv.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="color: #FACC15;"></i> Grillista AI is analyzing...';
    if (chatbotMessages) {
      chatbotMessages.appendChild(typingDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    const removeTypingIndicator = () => {
      const el = document.getElementById(typingId);
      if (el) el.remove();
    };

    const systemPrompt = `You are the official 'Grillista Franchise AI Assistant'.
Your role is to welcome potential franchise partners and help them explore the Grillista franchise opportunity in a professional, friendly, and conversational way.

INTERACTION RULES:
- Be conversational, not robotic.
- Do not ask for all personal information at the beginning.
- Ask one relevant question at a time.
- Remember information provided earlier in the conversation.
- Adapt the next question according to the user's answer.
- If the user asks about investment, explain the relevant model first.
- If the user has a property, collect location and property details for preliminary evaluation.
- If the user does not have a property, focus on city, budget and preferred format.
- Never guarantee profit, ROI, sales, customers or payback.
- Never invent franchise fees, agreement terms, territory rights or discounts.
- If information is unavailable, clearly say that it needs confirmation from the Grillista franchise team.
- When the prospect appears qualified, summarize their requirements and offer to connect them with the franchise team.
- Keep the conversation focused on becoming or managing a Grillista franchise.
- Support English, Hindi (हिन्दी) and Hinglish naturally.
- Maintain a premium, confident and helpful brand tone.

OFFICIAL KNOWLEDGE BASE v1.0:
1. BRAND PROFILE:
- Founded: 2021 in Kanpur.
- 1st Company Outlet: Kakadeo, Kanpur (2021).
- 2nd Company Outlet: Barra, Kanpur (2024).
- Customers Served: 10,000+ across company-owned flagships.
- Parent Backbone: RK Group of Industries (Managing Director: Mr. Rajesh Upadhyay, Director: Mrs. Shiva Upadhyay).
- Mission: Distinctive dining destination, contemporary comfort cuisine, memorable moments, 100% Pure Veg zero contamination.

2. FRANCHISE MODELS & INVESTMENTS:
• Model 1 - Grillista Express (Compact): ~200 sq ft | Total: ₹10–12 Lakh
  - Breakdown: Equipment ₹5L, Interior ₹3L, Franchise Fee ₹3L, Stationery ₹50,000.
  - Projections: ~50 customers/day @ ₹170 avg bill = ₹8,500 daily sales (₹2,55,000/mo). Food Cost (30%) ₹76,500, Rent ₹50,000, Staff ₹40,000, Royalty (5% after 6 mos free) ₹12,750, Projected Net Profit: ₹45,750/mo.
• Model 2 - Grillista Bistro (Mid-Size): ~600 sq ft | Total: ₹16–18 Lakh
  - Breakdown: Equipment ₹7L, Interior ₹9L, Franchise Fee ₹5L, Stationery ₹50,000.
  - Projections: ~80 customers/day @ ₹170 avg bill = ₹13,600 daily sales (₹4,08,000/mo). Food Cost (30%) ₹1,22,400, Rent ₹50,000, Staff ₹40,000, Royalty (5% after 6 mos free) ₹20,400, Projected Net Profit: ₹1,45,200/mo.
• Model 3 - Grillista Signature (Full Dining): ~1,000 sq ft | Total: ₹38–40 Lakh
  - Breakdown: Equipment ₹10L, Interior ₹15L, Franchise Fee ₹6L, Stationery ₹50,000.
  - Projections: ~120 customers/day @ ₹170 avg bill = ₹20,400 daily sales (₹6,12,000/mo). Food Cost (30%) ₹1,83,600, Rent ₹50,000, Staff ₹40,000, Royalty (5% after 6 mos free) ₹30,600.

3. ROYALTY & FINANCIAL TERMS:
- Royalty is FREE for the first 6 months, then 5% of monthly sales.
- NO Profit/Sales/Customer Guarantees: All financial figures are illustrative business projections based on operational assumptions.

4. SITE & LOCATION EVALUATION:
- Parameters: Minimum frontage, dedicated parking, expected footfall density, catchment population demographics, rent-to-sales threshold, competition analysis.
- Every proposed site is subject to formal evaluation and Grillista company approval.

5. SUPPORT ECOSYSTEM:
- Pre-Opening: Site evaluation, store layout & 3D design, kitchen planning, equipment procurement, staff hiring, comprehensive recipe/SOP training, grand launch marketing.
- Post-Opening: Regular performance reviews, ongoing operational guidance, periodic quality audits, centralized marketing campaigns, continuous menu refinement.

6. CONTACT INFO:
- Call / WhatsApp: +91 63868 18682 | Email: grillistakanpur@gmail.com
- Head Office: 621/18, Block-W, Juhi Kala, VR Tower, Kanpur, UP.`;

    let finalReply = "";

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      const apiUrl = `https://text.pollinations.ai/${encodeURIComponent(systemPrompt + "\n\nUser Message: " + query)}?model=openai`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const aiText = await response.text();
        if (aiText && aiText.trim().length > 15) {
          let formattedText = aiText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n•/g, '<br>•')
            .replace(/\n-/g, '<br>•');
          
          finalReply = formattedText;
        }
      }
    } catch (err) {
      console.log('AI API offline or timed out, switching to conversational local knowledge engine:', err.message);
    }

    if (!finalReply) {
      finalReply = getStructuredKnowledgeResponse(q);
    }

    removeTypingIndicator();
    addChatMessage(finalReply, 'bot');
  }

  function getStructuredKnowledgeResponse(q) {
    // Numbered options or specific intent matchers
    if (q.includes('1.') || q.includes('investment & roi') || q.includes('investment') || q.includes('roi')) {
      return "💰 <strong>Investment & ROI Overview:</strong><br><br>" +
             "We offer 3 structured, high-margin franchise models:<br><br>" +
             "• <strong>1. Grillista Express:</strong> ₹10–12 Lakh (~200 sq ft) | Projected Net: ~₹45,750/mo<br>" +
             "• <strong>2. Grillista Bistro:</strong> ₹16–18 Lakh (~600 sq ft) | Projected Net: ~₹1,45,200/mo<br>" +
             "• <strong>3. Grillista Signature:</strong> ₹38–40 Lakh (~1,000 sq ft) | Grand experiential lounge<br><br>" +
             "⚡ <strong>Special Benefit:</strong> <strong>0% Royalty for the first 6 months</strong> (5% thereafter).<br>" +
             "📊 <em>Note: Figures are illustrative projections based on operational benchmarks.</em><br><br>" +
             "👉 <em>Which budget bracket or model matches your plans best?</em><br><br>" +
             "<div style='display:flex; flex-direction:column; gap:6px;'>" +
             "<button class='chat-quick-btn' onclick=\"sendChatQuery('Tell me about Express model')\">🏪 Express (₹10–12L)</button>" +
             "<button class='chat-quick-btn' onclick=\"sendChatQuery('Tell me about Bistro model')\">☕ Bistro (₹16–18L)</button>" +
             "<button class='chat-quick-btn' onclick=\"sendChatQuery('Tell me about Signature model')\">👑 Signature (₹38–40L)</button>" +
             "</div>";
    }

    if (q.includes('2.') || q.includes('franchise models') || q.includes('model')) {
      return "🏪 <strong>Grillista Franchise Formats:</strong><br><br>" +
             "• <strong>Grillista Express (~200 sq ft | ₹10–12L):</strong> Compact footprint optimized for high-volume takeaway and delivery hubs.<br><br>" +
             "• <strong>Grillista Bistro (~600 sq ft | ₹16–18L):</strong> Mid-sized vibrant café with comfortable dine-in seating and youth appeal.<br><br>" +
             "• <strong>Grillista Signature (~1,000 sq ft | ₹38–40L):</strong> Flagship large dining destination with complete live flame-grill experience.<br><br>" +
             "👉 <em>Do you have a specific property in mind, or are you exploring options based on your budget?</em>";
    }

    if (q.includes('3.') || q.includes('location evaluation') || q.includes('location') || q.includes('site') || q.includes('property')) {
      return "📍 <strong>Location & Site Evaluation:</strong><br><br>" +
             "To ensure the success of every outlet, Grillista conducts a professional site assessment focusing on:<br><br>" +
             "• <strong>Road Frontage & Visibility:</strong> Prime main road or high-street presence<br>" +
             "• <strong>Dedicated Parking:</strong> Convenient 2-wheeler and 4-wheeler access<br>" +
             "• <strong>Footfall & Demographics:</strong> High student, youth, and family density<br>" +
             "• <strong>Rent-to-Sales Feasibility:</strong> Healthy operational cost ratio<br><br>" +
             "👉 <em>Which city are you planning for, and do you already have a property space ready?</em>";
    }

    if (q.includes('4.') || q.includes('become a partner') || q.includes('partner') || q.includes('apply') || q.includes('join')) {
      startChatInquiryForm();
      return "🤝 <strong>Ready to Partner with Grillista?</strong><br>Please share your details in the quick inquiry form below and our Onboarding Team will connect with you directly.";
    }

    if (q.includes('5.') || q.includes('franchise process') || q.includes('process') || q.includes('roadmap') || q.includes('steps')) {
      return "📋 <strong>Simple 4-Step Franchise Journey:</strong><br><br>" +
             "1. <strong>Discovery & Alignment:</strong> Discuss budget, target city, and select the ideal format.<br>" +
             "2. <strong>Site Evaluation:</strong> Grillista team evaluates and approves your proposed location.<br>" +
             "3. <strong>Turnkey 3D Store Setup:</strong> Architecture, commercial equipment procurement, and comprehensive staff/chef SOP training.<br>" +
             "4. <strong>Grand Launch:</strong> High-impact local marketing, influencer campaigns, and opening day buzz!<br><br>" +
             "👉 <em>Would you like to check territory availability in your preferred city?</em>";
    }

    if (q.includes('6.') || q.includes('ask a question') || q.includes('question') || q.includes('doubt')) {
      return "❓ <strong>I'm here to answer any questions!</strong><br><br>" +
             "You can ask about:<br>" +
             "• Total setup cost and fee breakdown<br>" +
             "• 100% Pure Veg charcoal menu and kitchen operations<br>" +
             "• Staff hiring and recipe training support<br>" +
             "• Live Kanpur flagship outlets (Kakadeo & Barra)<br><br>" +
             "👉 <em>What would you like to know more about?</em>";
    }

    // 2. Royalty terms
    if (q.includes('royalty') || q.includes('commission') || q.includes('share') || q.includes('percentage')) {
      return "👑 <strong>Official Grillista Royalty Policy:</strong><br><br>" +
             "• <strong>First 6 Months:</strong> <strong>0% Royalty (FREE)</strong> to accelerate your store stabilization and launch cashflows.<br>" +
             "• <strong>From 7th Month Onwards:</strong> Flat <strong>5% Monthly Royalty</strong> on gross sales.<br>" +
             "• <strong>Hidden Fees:</strong> Zero hidden corporate surcharges.<br><br>" +
             "<button class='chat-quick-btn chat-quick-btn-highlight' onclick='startChatInquiryForm()'>📝 Speak to Franchise Advisor</button>";
    }

    // 3. Guarantee, Profit & ROI safety queries
    if (q.includes('guarantee') || q.includes('pakka') || q.includes('loss') || q.includes('fail') || q.includes('refund') || q.includes('compensation') || q.includes('risk')) {
      return "🛡️ <strong>Grillista Transparency & Risk Policy:</strong><br><br>" +
             "• <strong>Illustrative Projections:</strong> Sales, customer counts, and profit margins (35% net) shown in models are business estimates based on operational assumptions, not fixed guarantees.<br>" +
             "• <strong>Proven System:</strong> Grillista operates 2 thriving company-owned Kanpur outlets (Kakadeo & Barra) serving 10,000+ customers to de-risk the model before expanding.<br>" +
             "• <strong>Full Operational Backing:</strong> End-to-end guidance from RK Group of Industries ensures 100% turnkey setup, staff SOP training, and marketing support.<br><br>" +
             "📞 <em>For contractual & territory terms, connect directly with our legal & onboarding team at +91 63868 18682.</em>";
    }

    // 4. Space, Property & Location Evaluation
    if (q.includes('space') || q.includes('sq ft') || q.includes('sqft') || q.includes('area') || q.includes('property') || q.includes('location') || q.includes('site') || q.includes('jagah') || q.includes('frontage') || q.includes('parking') || q.includes('rent')) {
      return "📍 <strong>Property Requirements & Site Evaluation:</strong><br><br>" +
             "• <strong>Express:</strong> ~200 sq ft | <strong>Bistro:</strong> ~600 sq ft | <strong>Signature:</strong> ~1,000 sq ft<br>" +
             "• <strong>Evaluation Parameters:</strong> Road frontage, dedicated parking, footfall density, catchment demographics, rent-to-sales ratio, and competitor audit.<br>" +
             "• <strong>Site Approval:</strong> Every proposed location goes through Grillista's professional site audit prior to agreement.<br><br>" +
             "👉 <em>Already have a property? Share your city, area, and frontage for a free site feasibility check!</em><br><br>" +
             "<button class='chat-quick-btn chat-quick-btn-highlight' onclick='startChatInquiryForm()'>📍 Submit Property for Evaluation</button>";
    }

    // 5. Pre-Opening & Post-Opening Support
    if (q.includes('support') || q.includes('help') || q.includes('training') || q.includes('staff') || q.includes('opening') || q.includes('setup') || q.includes('turnkey') || q.includes('audit') || q.includes('marketing')) {
      return "🛠️ <strong>360° End-to-End Franchise Support:</strong><br><br>" +
             "<strong>1. Pre-Opening Support:</strong><br>" +
             "• Site audit & territory protection • 3D architectural store layout & kitchen design • Commercial equipment procurement • Staff recruitment & master chef SOP training • Grand launch marketing campaigns.<br><br>" +
             "<strong>2. Post-Opening Support:</strong><br>" +
             "• Ongoing operational guidance • Periodic quality & hygiene audits • Centralized social media & Zomato/Swiggy campaigns • Continuous seasonal menu upgrades.<br><br>" +
             "🛡️ <em>Backed 100% by RK Group of Industries!</em>";
    }

    // 6. Menu & 100% Pure Veg
    if (q.includes('menu') || q.includes('food') || q.includes('veg') || q.includes('burger') || q.includes('pizza') || q.includes('item') || q.includes('taste') || q.includes('recipe') || q.includes('khana')) {
      return "🍔 <strong>100% Pure Vegetarian Contemporary Menu:</strong><br><br>" +
             "• <strong>Flame-Grilled Charcoal Burgers:</strong> Paneer Tikka, Makhani Burst, Crispy Crunch Burgers<br>" +
             "• <strong>Artisan Pizzas & Wraps:</strong> Wood-fired style crusts, Tandoori Soya Wraps<br>" +
             "• <strong>Sides & Fries:</strong> Peri-Peri Loaded Fries, Cheese Corn Nuggets<br>" +
             "• <strong>Beverages:</strong> Thick Cold Coffees, Mocktails & Positive Energy Shakes<br><br>" +
             "🌿 <strong>Zero Cross-Contamination:</strong> 100% pure veg standardized spice blends with <strong>65%+ Gross Margins</strong>.";
    }

    // 7. Leadership, Corporate Backing & History
    if (q.includes('founder') || q.includes('owner') || q.includes('director') || q.includes('rajesh') || q.includes('shiva') || q.includes('rk group') || q.includes('history') || q.includes('who') || q.includes('about')) {
      return "👑 <strong>Executive Leadership & Brand Heritage:</strong><br><br>" +
             "• <strong>Founded:</strong> 2021 in Kanpur (1st outlet in Kakadeo, 2nd outlet in Barra in 2024).<br>" +
             "• <strong>Corporate Parent:</strong> RK Group of Industries (<a href='http://www.shreerkgroup.com' target='_blank' style='color:#FACC15; font-weight:800;'>www.shreerkgroup.com</a>).<br>" +
             "• <strong>Managing Director:</strong> <strong>Mr. Rajesh Upadhyay</strong> (Strategic expansion & institutional backing).<br>" +
             "• <strong>Director:</strong> <strong>Mrs. Shiva Upadhyay</strong> (Brand governance & franchise partner excellence).<br>" +
             "• <strong>Validation:</strong> 10,000+ happy customers served across company flagships before expanding through franchising.";
    }

    // 8. Live Outlets & Kanpur
    if (q.includes('kanpur') || q.includes('outlet') || q.includes('store') || q.includes('where') || q.includes('address') || q.includes('city') || q.includes('kahan')) {
      return "📍 <strong>Live Flagship Operational Outlets:</strong><br><br>" +
             "1. <strong>Barra Flagship:</strong> Main Bypass Road, Barra 2, Kanpur <em>(Dine-In Lounge & Takeaway)</em><br>" +
             "2. <strong>Kakadeo Flagship:</strong> Coaching Hub Market, Kakadeo, Kanpur <em>(Youth Express Hub)</em><br><br>" +
             "🏢 <strong>Corporate Headquarters:</strong><br>" +
             "621/18, Block-W, Juhi Kala, VR Tower, Kanpur, UP.<br>" +
             "🚀 <em>Currently inviting franchise applications across UP, Delhi-NCR & Pan-India!</em><br><br>" +
             "<button class='chat-quick-btn chat-quick-btn-highlight' onclick='startChatInquiryForm()'>📍 Check City Availability</button>";
    }

    // 9. Contact & Application
    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('call') || q.includes('whatsapp') || q.includes('email') || q.includes('apply') || q.includes('how to') || q.includes('kaise')) {
      return "📞 <strong>Official Grillista Franchise Helpdesk:</strong><br><br>" +
             "• <strong>Phone / WhatsApp:</strong> <a href='tel:+916386818682' style='color:#FACC15; font-weight:800; text-decoration:underline;'>+91 63868 18682</a><br>" +
             "• <strong>Official Email:</strong> grillistakanpur@gmail.com<br>" +
             "• <strong>Franchise Steps:</strong> 1) Discussion & Model selection ➡️ 2) Site evaluation ➡️ 3) Agreement & 3D Setup ➡️ 4) Grand Launch.<br><br>" +
             "<button class='chat-quick-btn chat-quick-btn-highlight' onclick='startChatInquiryForm()'>📝 Fill 30-Second Inquiry Form</button>";
    }

    // Default Fallback
    return "Namaste! 🙏 I am your <strong>Grillista Franchise AI Advisor</strong>. I can assist you with:<br><br>" +
           "• 💰 <strong>3 Franchise Models:</strong> Express (₹10–12L), Bistro (₹16–18L), Signature (₹38–40L)<br>" +
           "• 👑 <strong>Royalty Terms:</strong> 0% for first 6 months, then 5%<br>" +
           "• 📍 <strong>Site & Property Requirements:</strong> 200 to 1,000 sq ft<br>" +
           "• 🛠️ <strong>Turnkey Setup:</strong> End-to-end design, equipment & training<br><br>" +
           "👉 <em>How can I assist your business plans today?</em><br><br>" +
           "<div style='display:flex; flex-direction:column; gap:6px;'>" +
           "<button class='chat-quick-btn chat-quick-btn-highlight' onclick='startChatInquiryForm()'>📝 Apply for Franchise</button>" +
           "<a href='https://wa.me/916386818682?text=Hi%20Grillista,%20I%20want%20to%20know%20about%20franchise%20models' target='_blank' class='chat-quick-btn' style='text-align:center; text-decoration:none; background:#25D366; color:#FFF; font-weight:800;'><i class='fa-brands fa-whatsapp'></i> Chat on WhatsApp</a>" +
           "</div>";
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

  // Sleek Corporate Mobile Hamburger Drawer Toggle (Global Fail-Safe)
  window.toggleMobileNavbar = function(e) {
    if (e) e.stopPropagation();
    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const mobileDrawer = document.getElementById('navbar-mobile-drawer');
    if (mobileDrawer) {
      mobileDrawer.classList.toggle('active');
      if (mobileBtn) {
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.className = mobileDrawer.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
      }
    }
  };

  function initMobileNavbar() {
    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const mobileDrawer = document.getElementById('navbar-mobile-drawer');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.onclick = window.toggleMobileNavbar;

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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavbar);
  } else {
    initMobileNavbar();
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

  // Dynamic Cool Navbar Scroll Shrink & Glass Glow Effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }
});
