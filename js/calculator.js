/**
 * GRILLISTA 2026 - Financial ROI & Profitability Calculator
 * Real-time dynamic simulator for franchise investors based on Indian Market metrics (INR ₹).
 * 
 * @module calculator
 * @author Grillista Engineering Team
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const sqftInput = document.getElementById('calc-sqft');
    const footfallInput = document.getElementById('calc-footfall');
    const ticketInput = document.getElementById('calc-ticket');

    const sqftVal = document.getElementById('val-sqft');
    const footfallVal = document.getElementById('val-footfall');
    const ticketVal = document.getElementById('val-ticket');

    // Output elements
    const monthlyRevenueEl = document.getElementById('res-revenue');
    const netProfitEl = document.getElementById('res-netprofit');
    const grossMarginEl = document.getElementById('res-grossmargin');
    const paybackMonthsEl = document.getElementById('res-payback');

    if (!sqftInput || !footfallInput || !ticketInput) return;

    /**
     * Format currency value in INR.
     * @param {number} val 
     * @returns {string}
     */
    function formatINR(val) {
      if (window.GRILLISTA_UTILS && typeof window.GRILLISTA_UTILS.formatINR === 'function') {
        return window.GRILLISTA_UTILS.formatINR(val);
      }
      return '₹' + Math.round(Number(val) || 0).toLocaleString('en-IN');
    }

    /**
     * Calculate and render financial projections.
     */
    function calculateROI() {
      const sqft = Math.max(100, parseInt(sqftInput.value, 10) || 200);
      const footfall = Math.max(10, parseInt(footfallInput.value, 10) || 50);
      const ticket = Math.max(50, parseInt(ticketInput.value, 10) || 170);

      // Update UI badge labels safely
      if (sqftVal) sqftVal.textContent = `${sqft.toLocaleString('en-IN')} sq ft`;
      if (footfallVal) footfallVal.textContent = `${footfall.toLocaleString('en-IN')} / day`;
      if (ticketVal) ticketVal.textContent = `₹${ticket.toLocaleString('en-IN')}`;

      // Financial Calculation Logic (INR ₹)
      // Daily Sales = Footfall * Average Ticket Size
      const dailySales = footfall * ticket;
      // Monthly Sales (30 operating days)
      const monthlyRevenue = dailySales * 30;

      // COGS (Cost of Goods Sold - Food cost approx 35%, Gross Margin is 65%)
      const grossProfit = monthlyRevenue * 0.65;

      // Estimated Capex based on store area (Avg ₹3,000 per sq ft for kitchen equipment, interiors & branding)
      const initialCapex = sqft * 3000;

      // Monthly Operating Costs (INR):
      // Rent approx ₹80 per sq ft per month
      const rentCost = sqft * 80;
      // Staff salary (approx 1 staff per 200 sqft, avg ₹16,000/month/staff, min 2 staff)
      const staffCount = Math.max(2, Math.ceil(sqft / 200));
      const laborCost = staffCount * 16000;
      // Royalty fee (5% after 6-month free period benchmark)
      const royaltyCost = monthlyRevenue * 0.05;
      // Utilities, Electricity & Sundry (approx 5% of revenue)
      const utilitiesCost = monthlyRevenue * 0.05;

      const totalOpEx = rentCost + laborCost + royaltyCost + utilitiesCost;

      // Monthly Net Profit (INR)
      const monthlyNetProfit = Math.max(0, grossProfit - totalOpEx);

      // Payback period in months
      const paybackMonths = monthlyNetProfit > 0 ? (initialCapex / monthlyNetProfit).toFixed(1) : 'N/A';

      // Format & Render Outputs safely with textContent (prevent XSS)
      if (monthlyRevenueEl) monthlyRevenueEl.textContent = formatINR(monthlyRevenue);
      if (netProfitEl) netProfitEl.textContent = formatINR(monthlyNetProfit);
      if (grossMarginEl) grossMarginEl.textContent = formatINR(grossProfit);
      if (paybackMonthsEl) paybackMonthsEl.textContent = paybackMonths !== 'N/A' ? `${paybackMonths} Months` : 'Est. > 36 Mos';
    }

    // Debounced or direct input listeners
    sqftInput.addEventListener('input', calculateROI);
    footfallInput.addEventListener('input', calculateROI);
    ticketInput.addEventListener('input', calculateROI);

    // Initial calculation on page load
    calculateROI();
  });
})();
