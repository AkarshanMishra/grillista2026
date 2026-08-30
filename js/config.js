/**
 * GRILLISTA 2026 - Central Application Configuration
 * Single Source of Truth for Brand Data, Franchise Models, Outlets, and Contacts.
 * 
 * @module config
 * @author Grillista Engineering Team
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.GRILLISTA_CONFIG = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const config = {
    // Brand & Corporate Identity
    brand: {
      name: 'Grillista',
      tagline: 'The Ultimate Food Chain',
      category: '100% Pure Vegetarian QSR',
      foundedYear: 2021,
      customersServed: '10,000+',
      parentCompany: 'RK Group of Industries',
      parentWebsite: 'http://www.shreerkgroup.com',
      fssaiLicense: '100% Certified Pure Veg Kitchens',
    },

    // Leadership
    leadership: {
      managingDirector: {
        name: 'Mr. Rajesh Upadhyay',
        role: 'Managing Director, RK Group & Grillista',
        focus: 'Corporate Strategy, Nation-Wide QSR Expansion & Institutional Governance'
      },
      director: {
        name: 'Mrs. Shiva Upadhyay',
        role: 'Director, RK Group & Grillista',
        focus: 'Brand Governance, Operations Standardization & Partner Welfare'
      }
    },

    // Official Contact Channels
    contact: {
      phone: '+91 63868 18682',
      phoneRaw: '916386818682',
      whatsapp: 'https://wa.me/916386818682',
      email: 'grillistakanpur@gmail.com',
      headquarters: {
        address: '621/18, Block-W, Juhi Kala, VR Tower, Kanpur, Uttar Pradesh, India',
        pincode: '208014'
      }
    },

    // Live Operational Flagship Outlets
    outlets: {
      barra: {
        id: 'outlet-barra',
        name: 'Grillista Barra 2 Flagship',
        type: 'Dine-In Lounge & Drive-Thru',
        address: 'Main Bypass Road, Barra 2, Kanpur, UP',
        coords: { lat: 26.4384, lng: 80.3168 },
        timing: '11:00 AM – 11:30 PM',
        phone: '+91 63868 18682',
        mapsUrl: 'https://maps.google.com/?q=Grillista+Barra+2+Kanpur'
      },
      kakadeo: {
        id: 'outlet-kakadeo',
        name: 'Grillista Kakadeo Flagship',
        type: 'Youth Express Café Hub',
        address: 'Coaching Hub Market, Kakadeo, Kanpur, UP',
        coords: { lat: 26.4782, lng: 80.2986 },
        timing: '11:00 AM – 11:30 PM',
        phone: '+91 63868 18682',
        mapsUrl: 'https://maps.google.com/?q=Grillista+Kakadeo+Kanpur'
      }
    },

    // Official Franchise Models (Knowledge Base v1.0)
    franchiseModels: {
      express: {
        id: 'express',
        name: 'Grillista Express',
        tagline: 'Compact High-Volume Hub',
        minAreaSqFt: 200,
        investmentRange: '₹10 – ₹12 Lakh',
        breakdown: {
          equipment: 500000,
          interior: 300000,
          franchiseFee: 300000,
          stationery: 50000
        },
        projections: {
          dailyCustomers: 50,
          avgTicketINR: 170,
          dailySalesINR: 8500,
          monthlySalesINR: 255000,
          foodCostPercent: 30,
          foodCostINR: 76500,
          estimatedRentINR: 50000,
          staffCostINR: 40000,
          royaltyPercent: 5,
          royaltyFreeMonths: 6,
          projectedNetProfitINR: 45750
        }
      },
      bistro: {
        id: 'bistro',
        name: 'Grillista Bistro',
        tagline: 'Vibrant Youth Dining Café',
        minAreaSqFt: 600,
        investmentRange: '₹16 – ₹18 Lakh',
        breakdown: {
          equipment: 700000,
          interior: 900000,
          franchiseFee: 500000,
          stationery: 50000
        },
        projections: {
          dailyCustomers: 80,
          avgTicketINR: 170,
          dailySalesINR: 13600,
          monthlySalesINR: 408000,
          foodCostPercent: 30,
          foodCostINR: 122400,
          estimatedRentINR: 50000,
          staffCostINR: 40000,
          royaltyPercent: 5,
          royaltyFreeMonths: 6,
          projectedNetProfitINR: 145200
        }
      },
      signature: {
        id: 'signature',
        name: 'Grillista Signature',
        tagline: 'Flagship Experiential Dining Lounge',
        minAreaSqFt: 1000,
        investmentRange: '₹38 – ₹40 Lakh',
        breakdown: {
          equipment: 1000000,
          interior: 1500000,
          franchiseFee: 600000,
          stationery: 50000
        },
        projections: {
          dailyCustomers: 120,
          avgTicketINR: 170,
          dailySalesINR: 20400,
          monthlySalesINR: 612000,
          foodCostPercent: 30,
          foodCostINR: 183600,
          estimatedRentINR: 50000,
          staffCostINR: 40000,
          royaltyPercent: 5,
          royaltyFreeMonths: 6
        }
      }
    },

    // AI & Chatbot Endpoint Settings
    ai: {
      provider: 'Pollinations AI Free Tier (OpenAI Fallback)',
      endpoint: 'https://text.pollinations.ai/',
      model: 'openai',
      requestTimeoutMs: 4500,
      offlineFallbackEnabled: true
    },

    // Security & Form Limits
    security: {
      maxNameLength: 60,
      maxCityLength: 60,
      maxPhoneLength: 15,
      phoneRegex: /^[6-9]\d{9}$/,
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  };

  // Deep Freeze Configuration Object to prevent accidental runtime mutations
  function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object' && obj[prop] !== null && !Object.isFrozen(obj[prop])) {
        deepFreeze(obj[prop]);
      }
    });
    return Object.freeze(obj);
  }

  return deepFreeze(config);
}));
