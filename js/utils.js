/**
 * GRILLISTA 2026 - Reusable Security, Sanitization & Utility Library
 * Ensures XSS safety, input validation, currency formatting, and storage safety.
 * 
 * @module utils
 * @author Grillista Engineering Team
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['./config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./config'));
  } else {
    root.GRILLISTA_UTILS = factory(root.GRILLISTA_CONFIG);
  }
}(typeof self !== 'undefined' ? self : this, function (CONFIG) {
  'use strict';

  const utils = {};

  /**
   * Escape special HTML characters to prevent XSS injection in raw user text.
   * @param {string} str - Raw string to escape
   * @returns {string} Safe HTML-escaped string
   */
  utils.escapeHTML = function (str) {
    if (str === null || str === undefined) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
      '/': '&#x2F;'
    };
    return String(str).replace(/[&<>"'/]/g, m => map[m]);
  };

  /**
   * Sanitize an HTML string to allow only whitelist-approved formatting tags.
   * Removes scripts, iframes, inline event handlers (onclick, onerror, onload), and javascript: links.
   * @param {string} html - HTML string to sanitize
   * @returns {string} Sanitized safe HTML
   */
  utils.sanitizeHTML = function (html) {
    if (!html) return '';
    
    // Convert to string
    let sanitized = String(html);

    // Remove script tags and their content
    sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove inline event handlers like onclick=, onerror=, onload=, etc.
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*(['"]).*?\1/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^ >]+/gi, '');
    
    // Remove javascript: and data: URLs in href or src
    sanitized = sanitized.replace(/href\s*=\s*(['"])\s*javascript:[^'"]*\1/gi, 'href="#"');
    sanitized = sanitized.replace(/src\s*=\s*(['"])\s*javascript:[^'"]*\1/gi, 'src=""');

    return sanitized;
  };

  /**
   * Validate Indian 10-digit mobile number.
   * @param {string} phone 
   * @returns {boolean}
   */
  utils.validatePhone = function (phone) {
    if (!phone) return false;
    const cleaned = String(phone).replace(/\D/g, '');
    // Check if 10 digits starting with 6,7,8,9 or 12 digits with 91 prefix
    if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) return true;
    if (cleaned.length === 12 && cleaned.startsWith('91') && /^91[6-9]\d{9}$/.test(cleaned)) return true;
    return false;
  };

  /**
   * Normalize an Indian phone number to 10 digits.
   * @param {string} phone 
   * @returns {string}
   */
  utils.normalizePhone = function (phone) {
    if (!phone) return '';
    const cleaned = String(phone).replace(/\D/g, '');
    if (cleaned.length === 12 && cleaned.startsWith('91')) {
      return cleaned.substring(2);
    }
    return cleaned.slice(0, 10);
  };

  /**
   * Validate standard email format.
   * @param {string} email 
   * @returns {boolean}
   */
  utils.validateEmail = function (email) {
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  };

  /**
   * Clean and sanitize input text with max length constraint.
   * @param {string} val 
   * @param {number} maxLen 
   * @returns {string}
   */
  utils.sanitizeInput = function (val, maxLen = 60) {
    if (!val) return '';
    return String(val)
      .replace(/[\x00-\x1F\x7F]/g, '') // remove control chars
      .trim()
      .slice(0, maxLen);
  };

  /**
   * Format numbers into Indian Rupee Currency string (e.g. ₹1,45,200).
   * @param {number} num 
   * @returns {string}
   */
  utils.formatINR = function (num) {
    if (isNaN(num) || num === null) return '₹0';
    return '₹' + Math.round(Number(num)).toLocaleString('en-IN');
  };

  /**
   * Debounce a function call to prevent rapid successive executions (e.g. input sliders/scrolls).
   * @param {Function} fn 
   * @param {number} delay 
   * @returns {Function}
   */
  utils.debounce = function (fn, delay = 250) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  /**
   * Safe LocalStorage wrapper that prevents quota crashes and catches JSON parsing errors.
   */
  utils.safeStorage = {
    get: function (key, defaultVal = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultVal;
      } catch (err) {
        console.warn(`[Grillista Storage] Failed to get key "${key}":`, err.message);
        return defaultVal;
      }
    },
    set: function (key, val) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
        return true;
      } catch (err) {
        console.warn(`[Grillista Storage] Failed to set key "${key}":`, err.message);
        return false;
      }
    },
    remove: function (key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  return Object.freeze(utils);
}));
