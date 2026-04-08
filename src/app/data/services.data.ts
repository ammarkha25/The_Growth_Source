export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  image: string;
  color: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    icon: 'fa-globe',
    shortDescription: 'Blazing-fast, SEO-optimized websites that convert visitors into customers.',
    longDescription: `We build high-performance websites that are optimized for search engines and designed to convert. Our websites are built with modern technologies like Angular, React, and Next.js, ensuring fast load times, excellent user experience, and mobile responsiveness.

We focus on creating websites that not only look great but also drive business results. From e-commerce stores to corporate websites, we deliver solutions that engage your audience and generate leads.`,
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading Times',
      'Mobile-First Approach',
      'Conversion Optimization',
      'Analytics Integration',
      'Security & SSL',
      'Content Management System'
    ],
    technologies: [
      'Angular 18+',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: 'fa-laptop-code',
    shortDescription: 'Bespoke CRM, ERP & business applications tailored for your operations.',
    longDescription: `Transform your business operations with custom software solutions built specifically for your needs. We develop enterprise-grade applications including CRM systems, ERP platforms, and specialized business tools that streamline your workflows and boost productivity.

Our team specializes in creating scalable, secure applications that integrate seamlessly with your existing systems and grow alongside your business.`,
    features: [
      'Custom Development',
      'Enterprise Solutions',
      'API Integration',
      'Database Design',
      'User Management',
      'Real-time Analytics',
      'Scalability',
      'Data Security'
    ],
    technologies: [
      'C# / .NET',
      'Java',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'AWS / Azure'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'real-estate-network',
    title: 'Real Estate Network',
    icon: 'fa-building',
    shortDescription: 'Connect buyers and sellers with trusted agents for faster deals.',
    longDescription: `Our real estate platform connects buyers, sellers, and agents in a seamless ecosystem. We've built comprehensive real estate management systems that streamline property listings, agent management, transaction tracking, and client communication.

With advanced search capabilities, integrated mapping, and automated workflows, our solutions help real estate businesses expand their market reach and close deals faster.`,
    features: [
      'Property Listing Management',
      'Agent Portal',
      'Advanced Search',
      'Map Integration',
      'Client Management',
      'Transaction Tracking',
      'Document Management',
      'Lead Generation'
    ],
    technologies: [
      'Angular 18',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Maps API',
      'Firebase',
      'Stripe API'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'fa-bullhorn',
    shortDescription: 'Google Ads, Meta, SEO & content strategies that deliver ROI.',
    longDescription: `Grow your business through strategic digital marketing. We manage Google Ads, Meta advertising, SEO campaigns, and content strategies designed to reach your target audience and deliver measurable ROI.

Our data-driven approach ensures every marketing dollar is optimized for results. We track metrics, analyze performance, and continuously refine strategies to maximize your return on investment.`,
    features: [
      'Google Ads Management',
      'Meta Advertising',
      'SEO Optimization',
      'Content Strategy',
      'Email Marketing',
      'Social Media Marketing',
      'Analytics & Reporting',
      'Landing Page Optimization'
    ],
    technologies: [
      'Google Analytics',
      'Google Ads',
      'Meta Business Suite',
      'Semrush',
      'HubSpot',
      'Mailchimp',
      'Zapier'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    icon: 'fa-robot',
    shortDescription: 'Zapier, Make & custom bots to eliminate manual work.',
    longDescription: `Automate repetitive tasks and streamline your business processes. We use tools like Zapier and Make.com to create intelligent workflows that eliminate manual work, reduce errors, and save your team hours every week.

From lead nurturing to data synchronization to customer notifications, we design automation solutions that enhance efficiency and allow your team to focus on high-value activities.`,
    features: [
      'Workflow Automation',
      'Lead Nurturing',
      'Data Synchronization',
      'Email Automations',
      'Notification Systems',
      'Document Generation',
      'Invoice Automation',
      'Custom Bot Development'
    ],
    technologies: [
      'Zapier',
      'Make.com',
      'IFTTT',
      'Python',
      'Node.js',
      'Google Apps Script',
      'REST APIs'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: 'fa-cloud',
    shortDescription: 'AWS, Azure & Google Cloud infrastructure for scalability.',
    longDescription: `Scale your infrastructure with cloud solutions. We architect, deploy, and manage cloud infrastructure using AWS, Azure, and Google Cloud Platform. Our solutions ensure high availability, security, and cost optimization for your applications.

From serverless functions to containerized applications, we build cloud-native solutions that grow with your business while maintaining optimal performance and security.`,
    features: [
      'Cloud Architecture Design',
      'Server Setup & Management',
      'Containerization',
      'Serverless Functions',
      'Auto-Scaling',
      'Backup & Disaster Recovery',
      'Security & Compliance',
      'Cost Optimization'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CloudFormation',
      'CI/CD Pipelines'
    ],
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  },
  {
    id: 'ecommerce-systems',
    title: 'E-Commerce Systems',
    icon: 'fa-cart-shopping',
    shortDescription: 'Shopify, WooCommerce & custom stores with payment gateways.',
    longDescription: `Launch and scale your e-commerce business with powerful online store solutions. We build custom e-commerce platforms and manage Shopify, WooCommerce, and other platforms, complete with payment gateway integration, inventory management, and marketing automation.

Our e-commerce solutions are designed to maximize conversions, reduce cart abandonment, and streamline order fulfillment for sustained growth.`,
    features: [
      'Store Setup & Customization',
      'Product Management',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Management',
      'Shipping Integration',
      'Marketing Automation',
      'Analytics & Conversion Optimization'
    ],
    technologies: [
      'Shopify',
      'WooCommerce',
      'Magento',
      'Stripe',
      'PayPal',
      'Salesforce Commerce',
      'Node.js',
      'React'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab655c486?w=500&h=300&fit=crop',
    color: '#1F6FEB'
  }
];
