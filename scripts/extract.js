const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('F:/wt/sinda/index.html', 'utf8');
const outDir = 'F:/wt/_sinda';

const cssMatch = html.match(
  /<style type="text\/css" data-vite-dev-id="\/home\/wuying\/workspace\/src\/index\.css">([\s\S]*?)<\/style>/
);
if (cssMatch) {
  fs.mkdirSync(path.join(outDir, 'public'), { recursive: true });
  fs.writeFileSync(path.join(outDir, 'public/tailwind.css'), cssMatch[1]);
  console.log('CSS extracted:', cssMatch[1].length);
}

function decodeContent(attr) {
  if (!attr) return null;
  try {
    return JSON.parse(decodeURIComponent(attr));
  } catch {
    return null;
  }
}

function extractImgData(line) {
  const m = line.match(/data-component-content="([^"]+)"/);
  if (!m) return null;
  const data = decodeContent(m[1]);
  if (data && data.src) return data;
  return null;
}

// Extract structured home page data from HTML sections
const sections = {
  hero: {
    title: 'Professional Digital Signage Solutions',
    subtitle: 'Integrated software and hardware for seamless information publishing',
    bgImage:
      'https://baas-api.wanwang.xin/toc/image/preview/modern-office-digital-signage-network-displays.jpg?w=1920&h=1080',
  },
  solutions: [
    {
      icon: 'play',
      title: 'Software Platform',
      desc: 'Intuitive content management system with powerful scheduling, remote control, and real-time monitoring capabilities.',
    },
    {
      icon: 'desktop',
      title: 'Hardware Devices',
      desc: 'Professional media players, digital signage displays, and advertising machines for every environment.',
    },
    {
      icon: 'headset',
      title: 'Technical Support',
      desc: 'Dedicated support team providing installation, training, and ongoing maintenance services.',
    },
  ],
  products: [
    {
      image: '/images/black-media-player-box-device.jpg',
      title: 'Media Player Box',
      desc: '4K Android media player with WiFi, multiple interfaces, perfect for digital signage applications.',
      link: '/products',
    },
    {
      image: '/images/commercial-digital-signage-display-screen.jpg',
      title: 'Digital Signage',
      desc: 'Professional LCD/LED displays for indoor and outdoor advertising, information display, and wayfinding.',
      link: '/products',
    },
    {
      image: '/images/floor-standing-advertising-machine-kiosk.jpg',
      title: 'Advertising Machine',
      desc: 'Floor-standing and wall-mounted advertising kiosks with touch interaction capabilities.',
      link: '/products',
    },
  ],
  stats: [
    { value: '500+', label: 'Deployments' },
    { value: '50+', label: 'Cities Covered' },
    { value: '10+', label: 'Years Experience' },
  ],
  partners: ['Partner Logo 1', 'Partner Logo 2', 'Partner Logo 3', 'Partner Logo 4'],
  cases: [
    {
      image: '/images/shopping-mall-retail-digital-signage.jpg',
      category: 'RETAIL',
      title: 'Shopping Mall Network',
      desc: 'Deployed 200+ displays across 5 shopping malls, increasing customer engagement by 40%.',
    },
    {
      image: '/images/corporate-office-building-lobby.jpg',
      category: 'CORPORATE',
      title: 'Corporate Headquarters',
      desc: 'Internal communication network with 50 displays for employee announcements and updates.',
    },
    {
      image: '/images/airport-transportation-terminal.jpg',
      category: 'TRANSPORTATION',
      title: 'Airport Information System',
      desc: 'Flight information and advertising displays throughout terminal improving passenger experience.',
    },
  ],
  cta: {
    title: 'Ready to Transform Your Communication?',
    desc: 'Contact our team today for a free consultation and discover how our digital signage solutions can elevate your business.',
    btn: 'Get Started Now',
    link: '/contact',
  },
};

const siteData = {
  brand: 'XINDA SOFTWARE',
  title: 'XINDA SOFTWARE - Professional Digital Signage Solutions',
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Cases', path: '/cases' },
    { name: 'News', path: '/news' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Contact', path: '/contact' },
  ],
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Cases', path: '/cases' },
    { name: 'Contact', path: '/contact' },
  ],
  contact: {
    address: 'Address: Building C, Unit 206, Xiangyun Garden, Nanshan District, Shenzhen',
    tel: 'Tel: +86 13138870755',
    email: 'Email: jerreryliu@gmail.com',
    hours: 'Hours: Mon-Fri 9:00-18:00',
  },
  footer: {
    desc: 'Professional digital signage solutions provider, offering integrated software and hardware platforms for seamless information publishing.',
    copyright: '© 2026 XINDA SOFTWARE. All rights reserved.',
  },
  home: sections,
};

fs.mkdirSync(path.join(outDir, 'src/data'), { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'src/data/site.js'),
  'export default ' + JSON.stringify(siteData, null, 2) + '\n'
);
console.log('Site data written');
