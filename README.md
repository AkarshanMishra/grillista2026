# 🔥 GRILLISTA 2026 - Official Web & Franchise Platform

> **100% Pure Vegetarian QSR (Quick Service Restaurant) Franchise Platform & Direct Ordering Portal.**  
> Incubated and Operated under **RK Group of Industries** (*[www.shreerkgroup.com](http://www.shreerkgroup.com)*).

---

## 📋 Table of Contents
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Directory & File Structure](#-directory--file-structure)
- [Configuration Guide (`js/config.js`)](#-configuration-guide-jsconfigjs)
- [Security & Sanitization Standards](#-security--sanitization-standards)
- [Responsive Design System](#-responsive-design-system)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Deployment Guide](#-deployment-guide)
- [Developer Contribution Guidelines](#-developer-contribution-guidelines)

---

## ⚡ Architecture & Tech Stack

This platform is engineered for **maximum performance, zero build-step overhead, and bank-grade security**:

- **Core Frontend:** Pure Semantic HTML5 & Modern Modular CSS3
- **Scripting:** Modern ECMAScript (ES6+) with Universal Module Definition (UMD)
- **3D Graphics:** Three.js WebGL for interactive levitating brand medallion (`js/hero3d.js`)
- **Iconography:** FontAwesome 6 (Loaded via CDN)
- **Zero Build Dependency:** No node_modules, webpack, or complex bundlers required. Instant load times and 100/100 Lighthouse performance potential.

---

## 📁 Directory & File Structure

```text
├── index.html            # Main brand landing page, models overview, video reel showcase
├── about.html            # Corporate heritage, vision & Executive Leadership cards
├── franchise.html        # Comprehensive franchise blueprint, models (Express, Bistro, Signature), FAQ
├── menu.html             # 100% pure veg food catalogue with live direct ordering links
├── locator.html          # High-precision GPS store finder with Kanpur flagship geofencing
├── gallery.html          # Interactive media gallery, reels & YouTube video player
├── privacy.html          # Privacy Policy & data protection documentation
├── terms.html            # Terms & Conditions for franchise investors and visitors
│
├── js/
│   ├── config.js         # Central Single Source of Truth (Brand, Contacts, Models, Outlets, AI)
│   ├── utils.js          # Security utilities: XSS escaping, HTML sanitization, validators, formatting
│   ├── main.js           # UI logic, AI Assistant engine, lead capture, modal managers
│   ├── calculator.js     # Real-time ROI & financial simulator engine
│   └── hero3d.js         # Three.js 3D interactive floating brand medallion
│
├── css/
│   └── styles.css        # Complete design system, color tokens, animations & responsive engine
│
└── assets/
    └── images/           # High-resolution optimized brand assets and images
```

---

## ⚙️ Configuration Guide (`js/config.js`)

All brand settings, contact numbers, outlet coordinates, and franchise financial models are centralized inside [`js/config.js`](file:///c:/Users/Akarshan%20mishra1207/OneDrive/Desktop/new%20grillista/js/config.js).

The configuration object is **deep-frozen** (`Object.freeze`) at runtime to prevent accidental mutations.

### Modifying Contact Info
```javascript
// js/config.js
contact: {
  phone: '+91 63868 18682',
  phoneRaw: '916386818682',
  whatsapp: 'https://wa.me/916386818682',
  email: 'grillistakanpur@gmail.com',
  headquarters: {
    address: '621/18, Block-W, Juhi Kala, VR Tower, Kanpur, UP, India',
    pincode: '208014'
  }
}
```

### Adding New Outlets
```javascript
// js/config.js
outlets: {
  barra: {
    id: 'outlet-barra',
    name: 'Grillista Barra 2 Flagship',
    type: 'Dine-In Lounge & Drive-Thru',
    coords: { lat: 26.4384, lng: 80.3168 },
    phone: '+91 63868 18682'
  },
  // Add new outlet here
}
```

---

## 🛡️ Security & Sanitization Standards

The codebase adheres to strict frontend security standards:

1. **XSS (Cross-Site Scripting) Elimination**:
   - User inputs rendered in chatbot messages or lead confirmations are sanitized using `GRILLISTA_UTILS.escapeHTML()` or inserted via `.textContent`.
   - Dynamic bot responses are filtered through `GRILLISTA_UTILS.sanitizeHTML()` to strip unsafe `<script>`, `onload`, `onerror`, and `javascript:` URIs.
2. **Reverse Tabnabbing Protection**:
   - Every external hyperlink (`target="_blank"`) is secured with `rel="noopener noreferrer"` to prevent malicious window navigation attacks.
3. **Form & Data Validation**:
   - Phone numbers are validated against official Indian mobile telecom regex (`/^[6-9]\d{9}$/`).
   - String inputs are trimmed, sanitized against non-printable ASCII control characters, and capped to safe character lengths.
4. **Safe Local Storage**:
   - `GRILLISTA_UTILS.safeStorage` wraps `localStorage` in exception handling to prevent crashes in private browsing mode or when storage quotas are exceeded.

---

## 📱 Responsive Design System

The layout is powered by a **Universal All-Device & Mobile Responsiveness Engine** in [`css/styles.css`](file:///c:/Users/Akarshan%20mishra1207/OneDrive/Desktop/new%20grillista/css/styles.css):

- **Desktops & Large Displays (`> 1200px`)**: Full-width split navigation with centered circular emblem logo and multi-column grid layouts.
- **Tablets (`769px - 1024px`)**: Fluid container padding, clamp-scaled headings, and flexible card containers.
- **Smartphones (`<= 768px`)**: Single-column automatic layout stacking for calculators, models, and forms.
- **Compact Phones (`<= 480px` & `<= 360px`)**:
  - Touch target sizes guaranteed at $\ge 44\text{px}$.
  - Chatbot expands into a mobile bottom sheet (`100vw`, `80vh`).
  - Executive Leadership cards adapt smoothly with flexible heights and circular portrait scaling.
  - Financial tables feature momentum horizontal touch scrolling (`-webkit-overflow-scrolling: touch`).

---

## 🚀 Getting Started & Local Development

### Prerequisites
Any modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge). No Node.js or compiler required!

### Running Locally
You can serve the directory using any lightweight local HTTP server:

#### Option 1: Python HTTP Server (Built-in)
```bash
# Python 3
python -m http.server 8080
```
Then navigate to: `http://localhost:8080`

#### Option 2: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

#### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 Deployment Guide

### Deploying to GitHub Pages
1. Push changes to the `main` branch of `https://github.com/AkarshanMishra/grillista2026`.
2. Go to **Settings > Pages** in your GitHub repository.
3. Select **Deploy from a branch**, choose `main` / `/ (root)`, and click **Save**.

### Deploying to Netlify / Vercel
Simply import the repository into Netlify or Vercel with default settings (Publish directory: `.`).

---

## 🤝 Developer Contribution Guidelines

1. **Keep it Vanilla & Fast**: Avoid importing heavy JavaScript frameworks or unnecessary dependencies.
2. **Centralize Data**: Never hardcode phone numbers, email addresses, or outlet information in multiple files—always reference `GRILLISTA_CONFIG`.
3. **Always Sanitize**: Use `GRILLISTA_UTILS.escapeHTML()` for user-generated strings before rendering into the DOM.
4. **Test Responsiveness**: Always verify changes on desktop (1440px), tablet (768px), and mobile (375px / 320px).

---

© 2026 **Grillista Franchise Systems Pvt Ltd** | **RK Group of Industries**
