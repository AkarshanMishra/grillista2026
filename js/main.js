/**
 * GRILLISTA - Main Application & Live CMS Dashboard JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
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

  // Big Single Testimonials Slideshow Auto-Play & Navigation
  let currentTestimonialIndex = 0;
  let testimonialTimer = null;

  window.showTestimonialSlide = function(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-slide-dot');
    if (!slides || slides.length === 0) return;

    if (index >= slides.length) currentTestimonialIndex = 0;
    else if (index < 0) currentTestimonialIndex = slides.length - 1;
    else currentTestimonialIndex = index;

    slides.forEach((slide, i) => {
      slide.style.display = (i === currentTestimonialIndex) ? 'block' : 'none';
    });

    if (dots && dots.length > 0) {
      dots.forEach((dot, i) => {
        if (i === currentTestimonialIndex) {
          dot.style.width = '32px';
          dot.style.background = '#FF9100';
        } else {
          dot.style.width = '10px';
          dot.style.background = 'rgba(0,0,0,0.2)';
        }
      });
    }
  };

  window.moveTestimonialSlide = function(step) {
    showTestimonialSlide(currentTestimonialIndex + step);
    resetTestimonialAutoPlay();
  };

  window.jumpToTestimonialSlide = function(index) {
    showTestimonialSlide(index);
    resetTestimonialAutoPlay();
  };

  function resetTestimonialAutoPlay() {
    if (testimonialTimer) clearInterval(testimonialTimer);
    testimonialTimer = setInterval(() => {
      if (document.querySelectorAll('.testimonial-slide').length > 0) {
        showTestimonialSlide(currentTestimonialIndex + 1);
      }
    }, 5000);
  }

  resetTestimonialAutoPlay();

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
  const calcModalOverlay = document.getElementById('calculator-modal-overlay');
  const calcModalClose = document.getElementById('calculator-modal-close');

  function openCalculatorModal() {
    if (calcModalOverlay) {
      calcModalOverlay.classList.add('active');
    }
  }

  function closeCalculatorModal() {
    if (calcModalOverlay) {
      calcModalOverlay.classList.remove('active');
    }
  }

  // Intercept all links/buttons pointing to #calculator or with trigger class
  document.addEventListener('click', (e) => {
    const calcTrigger = e.target.closest('a[href="#calculator"], .trigger-calculator-modal, #open-calculator-modal-btn');
    if (calcTrigger) {
      e.preventDefault();
      openCalculatorModal();
    }

    if (calcModalClose && calcModalClose.contains(e.target)) {
      closeCalculatorModal();
    }

    if (e.target.classList && e.target.classList.contains('pop-modal-apply-btn')) {
      closeCalculatorModal();
    }

    if (calcModalOverlay && e.target === calcModalOverlay) {
      closeCalculatorModal();
    }
  });

  // Popup Modal Range Slider Calculations
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

  function updatePopCalculator() {
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

  if (popOrdersSlider) popOrdersSlider.addEventListener('input', updatePopCalculator);
  if (popAovSlider) popAovSlider.addEventListener('input', updatePopCalculator);
  if (popRentSlider) popRentSlider.addEventListener('input', updatePopCalculator);

  updatePopCalculator();

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
    const R = 6371; // Radius of Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  }

  if (detectLocationBtn) {
    detectLocationBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
      }

      detectLocationBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Detecting your location...';
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          const distBarra = calculateDistanceKm(userLat, userLon, OUTLETS.barra.lat, OUTLETS.barra.lon);
          const distKakadeo = calculateDistanceKm(userLat, userLon, OUTLETS.kakadeo.lat, OUTLETS.kakadeo.lon);

          detectLocationBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Location Detected!';
          detectLocationBtn.style.background = '#15803D';
          detectLocationBtn.style.color = '#FFF';

          const nearest = parseFloat(distBarra) < parseFloat(distKakadeo) ? OUTLETS.barra.name : OUTLETS.kakadeo.name;
          const nearestDist = Math.min(distBarra, distKakadeo);

          if (locationStatusBadge) {
            locationStatusBadge.style.display = 'block';
            locationStatusBadge.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> Your Location: <strong>${nearest} is nearest to you (${nearestDist} km away)</strong>`;
          }

          if (distanceBarra) {
            distanceBarra.style.display = 'block';
            distanceBarra.innerHTML = `<i class="fa-solid fa-route"></i> ${distBarra} km away from your location`;
          }

          if (distanceKakadeo) {
            distanceKakadeo.style.display = 'block';
            distanceKakadeo.innerHTML = `<i class="fa-solid fa-route"></i> ${distKakadeo} km away from your location`;
          }
        },
        (error) => {
          detectLocationBtn.innerHTML = '<i class="fa-solid fa-crosshairs"></i> Detect My Location';
          alert('Unable to retrieve location. Please grant location permissions in your browser.');
        }
      );
    });
  }
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

  // Application Submission & Lead Storage
  if (franchiseForm) {
    franchiseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = franchiseForm.querySelectorAll('input, select');
      const name = inputs[0] ? inputs[0].value : 'Prospect';
      const phone = inputs[2] ? inputs[2].value : 'N/A';
      const location = inputs[3] ? inputs[3].value : 'Kanpur';
      const budget = inputs[4] ? inputs[4].value : '₹12 Lakh';

      // Save to localStorage leads
      const leads = JSON.parse(localStorage.getItem('grillista_leads') || '[]');
      
      function generateProspectusText(lead) {
        return `
================================================================================
GRILLISTA - THE ULTIMATE FOOD CHAIN
100% PURE VEGETARIAN CAFÉ & QSR FRANCHISE PROSPECTUS (INDIA 2026)
Powered & Incubated by RK Group of Industries (www.shreerkgroup.com)
================================================================================

EXECUTIVE CORPORATE OVERVIEW
----------------------------
Grillista is a fast-growing 100% vegetarian café brand offering hygienic, affordable,
and delicious food with a modern café experience. Backed by corporate systems, operational
expertise, and a long-term growth vision from RK Group of Industries, we offer a structured,
transparent, low-risk, and highly profitable franchise model across Pan-India (Tier-1, Tier-2, Tier-3 cities).

OFFICIAL CORPORATE HEAD OFFICE & CONTACTS
------------------------------------------
Head Office: 621/18, Block-W, Juhi Kala, VR Tower, Near Bharat Petroleum, Kanpur, UP
Franchise Enquiry Phone: +91 63868 18682
Official Email: grillistakanpur@gmail.com
Corporate Website: www.shreerkgroup.com

OPERATIONAL FLAGSHIP OUTLETS IN KANPUR
---------------------------------------
1. Barra Bypass Outlet (Kanpur): Premium Flagship Format with High-Capacity Seating, Dine-In & Dedicated Celebration Venue for Events & Functions.
2. Kakadev Outlet (Kanpur): Youth-Focused Experience Outlet with Gaming Zone, Pool Table, and High Delivery Volume.
3. Juhi Saket Nagar Outlet (Kanpur): Rooftop Celebration Outlet for Large Gatherings, Birthdays & Corporate Parties.

FRANCHISE INVESTMENT MODELS & COST BREAKDOWN
--------------------------------------------
1. MINI BISTRO MODEL (600+ sq ft)
   - Ideal for: High-footfall markets, colleges, residential areas
   - Machinery & Equipment: ₹5.5 Lakh
   - Raw Material (Initial): ₹2.5 Lakh
   - Franchise Fee: ₹3 Lakh
   - Branding & Launch: ₹0.5 Lakh
   - Layout Fee: ₹0.5 Lakh
   - TOTAL INVESTMENT: ₹12 Lakh (Interiors excluded)

2. CLASSIC LOUNGE MODEL (700 - 1000+ sq ft)
   - Ideal for: Premium locations, families, group dining
   - Machinery & Equipment: ₹7.5 Lakh
   - Raw Material (Initial): ₹3 Lakh
   - Franchise Fee: ₹4.5 Lakh
   - Branding & Launch: ₹0.5 Lakh
   - Layout Fee: ₹0.5 Lakh
   - TOTAL INVESTMENT: ₹16 Lakh (Interiors excluded)

ROYALTY & AGREEMENT TERMS
--------------------------
- Royalty Fee: 5% of gross monthly sales
- Royalty Grace Period: STARTS AFTER 6 MONTHS (To maximize early franchisee cashflow)
- Maintenance Fee: ₹5,000 / month
- Agreement Period: 5 Years (Renewable)

REVENUE & UNIT ECONOMICS
-------------------------
- Monthly Sales Potential: ₹6 - ₹12 Lakh
- Net Profit Margin: 20% - 25% (Up to 35% with optimized overheads)
- Multiple Revenue Streams: Dine-in, Takeaway, Online Delivery (Swiggy/Zomato), Events & Parties

360° FRANCHISE SUPPORT SYSTEM (BY RK GROUP)
--------------------------------------------
- Site Selection & Footfall Audit
- 3D Architectural Layout & Kitchen Planning
- Equipment & Vendor Finalization
- 10 Days Hands-on Staff Training & SOP Enforcement at HQ Outlet
- Hygiene & Quality Audits
- POS Billing & Automated Inventory Systems
- Centralized Digital Marketing (Social Media, Google Business, Paid Ads & Swiggy/Zomato Onboarding)

PROSPECTUS APPLICANT DETAILS
----------------------------
Applicant Name: ${lead.name || 'Valued Partner'}
Target Location: ${lead.city || 'India'}
WhatsApp Phone: ${lead.phone || 'N/A'}
Email Address: ${lead.email || 'N/A'}
Selected Model: ${lead.model || 'Mini Bistro / Classic Lounge'}
Investment Budget: ${lead.budget || 'N/A'}
Generated Date: ${new Date().toLocaleDateString()}

================================================================================
Thank you for exploring the Grillista Franchise Opportunity.
Together, let's build India's premier 100% Pure Veg Flame-Grilled Food Chain!
================================================================================
`;
      }

      leads.push({
        date: new Date().toLocaleDateString('en-IN'),
        name: name,
        phone: phone,
        location: location,
        budget: budget
      });
      localStorage.setItem('grillista_leads', JSON.stringify(leads));

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
});
