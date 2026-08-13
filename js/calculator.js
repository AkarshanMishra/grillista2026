/* 
  GRILLISTA - Financial ROI & Profitability Calculator (Indian Market & INR ₹)
  Real-time slider math engine for Indian franchise investors
*/

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

  function formatINR(val) {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  }

  function calculateROI() {
    const sqft = parseInt(sqftInput.value);
    const footfall = parseInt(footfallInput.value);
    const ticket = parseInt(ticketInput.value);

    // Update UI badge labels
    sqftVal.textContent = `${sqft.toLocaleString()} sq ft`;
    footfallVal.textContent = `${footfall.toLocaleString()} / day`;
    ticketVal.textContent = `₹${ticket}`;

    // Financial Calculation Logic for Indian Market (INR ₹)
    // Daily Sales = Footfall * Ticket Size
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
    // Staff salary (approx 1 staff per 200 sqft, avg ₹16,000/month/staff)
    const staffCount = Math.max(3, Math.ceil(sqft / 200));
    const laborCost = staffCount * 16000;
    // Royalty fee 4% + Brand Marketing fee 2% = 6%
    const franchiseFees = monthlyRevenue * 0.06;
    // Utilities, Electricity & Sundry (approx 6% of revenue)
    const utilitiesCost = monthlyRevenue * 0.06;

    const totalOpEx = rentCost + laborCost + franchiseFees + utilitiesCost;

    // Monthly Net Profit (INR)
    const monthlyNetProfit = Math.max(0, grossProfit - totalOpEx);

    // Payback period in months
    const paybackMonths = monthlyNetProfit > 0 ? (initialCapex / monthlyNetProfit).toFixed(1) : 'N/A';

    // Format & Render Outputs
    monthlyRevenueEl.textContent = formatINR(monthlyRevenue);
    netProfitEl.textContent = formatINR(monthlyNetProfit);
    grossMarginEl.textContent = formatINR(grossProfit);
    paybackMonthsEl.textContent = paybackMonths !== 'N/A' ? `${paybackMonths} Months` : 'Est. > 36 Mos';
  }

  // Event Listeners for real-time sliders
  sqftInput.addEventListener('input', calculateROI);
  footfallInput.addEventListener('input', calculateROI);
  ticketInput.addEventListener('input', calculateROI);

  // Initial calculation on page load
  calculateROI();
});
