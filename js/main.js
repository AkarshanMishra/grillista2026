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
  // Custom Indian Multi-Language Modal Handler
  const openLangBtn = document.getElementById('open-lang-modal-btn');
  const closeLangBtn = document.getElementById('close-lang-modal-btn');
  const langOverlay = document.getElementById('lang-modal-overlay');
  const langCards = document.querySelectorAll('.lang-card-item');

  if (openLangBtn && langOverlay) {
    openLangBtn.addEventListener('click', () => {
      langOverlay.classList.add('active');
    });
  }

  if (closeLangBtn && langOverlay) {
    closeLangBtn.addEventListener('click', () => {
      langOverlay.classList.remove('active');
    });
  }

  if (langOverlay) {
    langOverlay.addEventListener('click', (e) => {
      if (e.target === langOverlay) langOverlay.classList.remove('active');
    });
  }

  langCards.forEach(card => {
    card.addEventListener('click', () => {
      const lang = card.getAttribute('data-lang');
      const selectEl = document.querySelector('.goog-te-combo');
      if (selectEl) {
        selectEl.value = lang;
        selectEl.dispatchEvent(new Event('change'));
      } else {
        document.cookie = "googtrans=/en/" + lang + "; path=/;";
        document.cookie = "googtrans=/en/" + lang + "; path=/; domain=" + location.hostname;
        location.reload();
      }
      langOverlay.classList.remove('active');
    });
  });

  // Floating Side Action Dock Toggle
  const dockToggleBtn = document.getElementById('dock-toggle-btn');
  const sideDock = document.getElementById('side-action-dock');
  const dockIcon = document.getElementById('dock-toggle-icon');

  if (dockToggleBtn && sideDock) {
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

  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

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
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const icon = btn.querySelector('.faq-icon');

      const isOpen = answer.style.display === 'block';

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        answer.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Menu Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuGrid = document.querySelector('.menu-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const cards = menuGrid.querySelectorAll('.menu-card');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
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
