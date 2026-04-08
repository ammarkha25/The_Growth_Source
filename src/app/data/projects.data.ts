export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'mayur-agro',
    title: 'Mayur Agro Agency',
    category: 'Agro Business',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQTh2P-4IXt28QMWxWcP3v1kO9vtMtvq4Mg&s',
    badge: '+250% Growth',
    description: 'Website + digital system to improve customer reach and increase local sales.',
    longDescription: 'Mayur Agro Agency needed a modern web presence to connect with regional farmers and suppliers. We built a comprehensive website with product catalog, inventory management, and lead generation system to boost their visibility and sales.',
    challenge: 'Limited online presence, manual sales process, no digital marketing strategy, difficulty reaching target audience',
    solution: 'Built responsive website, implemented inventory management system, created digital marketing campaigns, established social media presence',
    results: [
      'Increased monthly leads by 250%',
      'Reduced manual work by 80%',
      'Expanded reach to 5 new districts',
      'Generated ₹25 lakhs in additional revenue'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    link: 'https://vaishufullstackdeveloper.github.io/agro_agency_website/',
    testimonial: {
      quote: 'TGS transformed our business from local to regional. Our website gets 500+ visitors daily now.',
      author: 'Mayur Patel',
      role: 'Director, Mayur Agro',
      image: 'https://picsum.photos/id/64/64/64'
    }
  },
  {
    id: 'grampanchayat-village',
    title: 'Grampanchayat Village',
    category: 'Government',
    image: 'images/gram.jpeg',
    badge: 'Smart System',
    description: 'Digital platform to manage village services and improve communication.',
    longDescription: 'A government Grampanchayat needed a digital solution to streamline village administration, manage resident services, and improve communication between officials and villagers. We created a comprehensive village management system.',
    challenge: 'Manual record keeping, poor communication, inefficient service delivery, no digital infrastructure',
    solution: 'Built digital platform for service management, resident portal, official dashboard, automated notifications',
    results: [
      'Reduced documentation time by 90%',
      'Improved citizen satisfaction score to 4.8/5',
      'Served 2,000+ residents digitally',
      'Set model for 15 other villages'
    ],
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: 'https://vaishufullstackdeveloper.github.io/GP_live_webside/',
    testimonial: {
      quote: 'This system became a benchmark for village administration. Highly recommended.',
      author: 'Rajesh Gupta',
      role: 'Sarpanch, Grampanchayat',
      image: 'https://picsum.photos/id/201/64/64'
    }
  },
  {
    id: 'taj-decoration',
    title: 'Taj Decoration',
    category: 'Event Business',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_pCOey6-wgp4LH5n8eLZX2i7lx7kW0rc8A&s',
    badge: 'Event Growth',
    description: 'Portfolio website + booking system for event decoration services.',
    longDescription: 'Taj Decoration is a premium event decoration company. We created a portfolio website showcasing their work and implemented an online booking system to streamline project inquiries and bookings.',
    challenge: 'Limited online visibility, manual inquiry handling, no portfolio showcase, booking process was cumbersome',
    solution: 'Built portfolio website with gallery, implemented automated booking system, integrated payment gateway, created inquiry management system',
    results: [
      'Increased bookings by 180%',
      'Reduced inquiry response time from 48h to instant',
      'Saved 15 hours per week on administrative work',
      'Expanded service area coverage by 3x'
    ],
    technologies: ['Angular', 'Stripe', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://saimfsd.github.io/Tajdecoration/',
    testimonial: {
      quote: 'The booking system changed our business overnight. We went from 2-3 projects per month to 8-10.',
      author: 'Isha Mehta',
      role: 'Founder, Taj Decoration',
      image: 'https://picsum.photos/id/251/64/64'
    }
  },
  {
    id: 'jain-aluminium',
    title: 'Jain Aluminium',
    category: 'Manufacturing',
    image: 'https://www.poojasales.in/blog/wp-content/uploads/2021/10/Aluminium-Windows-and-Doors.jpg',
    badge: 'Local Brand Boost',
    description: 'Business website showcasing services and generating local leads.',
    longDescription: 'Jain Aluminium manufactures premium aluminum windows and doors. We created a professional business website to showcase their products, services, and expertise while generating qualified local leads.',
    challenge: 'No online presence, relying only on referrals, inability to showcase product quality, no lead generation system',
    solution: 'Built professional website with product gallery, service descriptions, testimonials, and contact forms for lead generation',
    results: [
      'Generated 50+ qualified leads monthly',
      'Increased brand credibility with local architects',
      'Achieved #1 ranking for local keywords',
      'Created 2x revenue stream from online inquiries'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Nodemailer'],
    link: 'https://saimfsd.github.io/jainAluminium/',
    testimonial: {
      quote: 'The website put us on the map. Architects now specifically request us for their projects.',
      author: 'Ramesh Jain',
      role: 'Director, Jain Aluminium',
      image: 'https://picsum.photos/id/101/64/64'
    }
  },
  {
    id: 'skytech-solutions',
    title: 'SkyTech Solutions',
    category: 'Software Startup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9aMpCd8J5dPQz9w8xR4M0h3N3zN8j0jK9Qw&s',
    badge: 'Scaling SaaS',
    description: 'Cloud-based SaaS platform for project management with automation.',
    longDescription: 'SkyTech Solutions needed a complete SaaS platform rebuild to scale their project management tool. We migrated their monolithic application to a modern microservices architecture with enhanced features and performance.',
    challenge: 'Monolithic architecture limiting scalability, outdated UI/UX, poor performance, team collaboration issues',
    solution: 'Rebuilt as cloud-native microservices, redesigned interface, implemented real-time collaboration, optimized database performance',
    results: [
      'Reduced load time from 8s to 1.2s',
      'Increased concurrent users from 100 to 10,000',
      'Cut infrastructure costs by 40%',
      'Achieved 99.9% uptime SLA'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
    testimonial: {
      quote: 'The transformation allowed us to serve enterprise clients. Revenue increased 5x in one year.',
      author: 'Vikram Singh',
      role: 'CEO, SkyTech Solutions',
      image: 'https://picsum.photos/id/301/64/64'
    }
  },
  {
    id: 'ecommerce-empire',
    title: 'ECommerce Empire',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    badge: '300% ROI',
    description: 'Multi-channel e-commerce platform with AI-powered recommendations.',
    longDescription: 'A fashion retailer needed to expand beyond physical stores. We built a comprehensive e-commerce platform with inventory management, multi-channel selling, and AI-powered product recommendations.',
    challenge: 'Inventory scattered across stores, no online sales channel, customer insights lacking, high operational costs',
    solution: 'Unified e-commerce platform, integrated inventory across channels, implemented ML recommendations, automated fulfillment',
    results: [
      '₹2 crores in first-year online revenue',
      'Inventory shrinkage reduced by 60%',
      'Customer lifetime value increased 3x',
      'Expansion to 3 new product categories'
    ],
    technologies: ['Next.js', 'Shopify API', 'Python ML', 'AWS', 'PostgreSQL', 'Stripe'],
    testimonial: {
      quote: 'Online channel now accounts for 40% of our revenue. Best investment we made.',
      author: 'Priya Kapoor',
      role: 'CEO, Fashion House',
      image: 'https://picsum.photos/id/401/64/64'
    }
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Mobile App',
    category: 'Healthcare Technology',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800',
    badge: 'Impact: 50K Users',
    description: 'Telemedicine platform connecting patients with doctors instantly.',
    longDescription: 'A healthcare startup needed a mobile app connecting patients with qualified doctors for remote consultations. We built a HIPAA-compliant telemedicine platform with appointment scheduling, video consultations, and prescription management.',
    challenge: 'Healthcare regulations, patient privacy, doctor availability coordination, payment processing complexity',
    solution: 'Built HIPAA-compliant app, integrated video calling, automated scheduling, secure payment processing, EMR integration',
    results: [
      '50,000+ active users in 6 months',
      '98% patient satisfaction rating',
      '200+ doctors on platform',
      '₹50 lakhs monthly revenue'
    ],
    technologies: ['React Native', 'Node.js', 'Firebase', 'WebRTC', 'Stripe', 'AWS'],
    testimonial: {
      quote: 'This app made healthcare accessible to our rural patients. Lives have been changed.',
      author: 'Dr. Anand Sharma',
      role: 'Founder, MediConnect',
      image: 'https://picsum.photos/id/501/64/64'
    }
  }
];
