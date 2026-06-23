export const personalInfo = {
  name: "Kushal R",
  shortName: "Kushal",
  initials: "KR",
  roles: [
    "Frontend Developer",
    "Odoo Techno-Functional Intern",
    "Freelance Web Developer",
    "BCA Final Year Student",
  ],
  location: "Mysuru, Karnataka, India",
  email: "kushalshetty0508@gmail.com",
  phone: "+91 77952 67355",
  github: "https://github.com/kushal0508",
  linkedin: "https://www.linkedin.com/in/kushal-r-0256a631b/",
  resume: "https://drive.google.com/your-resume-link",
  about:
    "I am Kushal R, a final-year BCA student at Amrita Vishwa Vidyapeetham, Mysuru Campus, with practical experience in Odoo ERP, website customization, and frontend development. I have worked on live business projects, ERP systems, and static websites, focusing on building practical digital solutions.",
  aboutExtended:
    "I am passionate about technology, problem-solving, and continuously improving my skills while preparing for MCA.",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amrita Vishwa Vidyapeetham, Mysuru",
      period: "Final Year",
      description:
        "Foundation in programming, data structures, database management, and web development. Currently in final year.",
    },
  ],
  experience: {
    company: "Amcap Business Consulting Pvt Ltd",
    role: "Odoo Techno-Functional Intern",
    period: "Apr 2025 \u2013 Jun 2025",
    location: "India",
    summary:
      "Worked on Odoo ERP website customization and implementation for live business projects.",
    contributions: [
      "Worked on Odoo ERP website customization and implementation for live business projects",
      "Contributed to requirement gathering and website configuration",
      "Assisted in business workflow setup and deployment-related tasks",
    ],
    technologies: [
      "Odoo ERP",
      "Python",
      "Docker",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
  },
  skills: {
    frontend: {
      label: "Frontend",
      icon: "Layout",
      items: [
        { name: "HTML", level: 90, icon: "FileCode" },
        { name: "CSS", level: 85, icon: "Palette" },
        { name: "JavaScript", level: 75, icon: "Code2" },
        { name: "Bootstrap", level: 85, icon: "Grid3X3" },
        { name: "Responsive Design", level: 85, icon: "Smartphone" },
      ],
    },
    programming: {
      label: "Programming",
      icon: "Code",
      items: [
        { name: "Python", level: 70, icon: "Code2" },
        { name: "Java", level: 65, icon: "Code2" },
        { name: "JavaScript", level: 75, icon: "FileType" },
      ],
    },
    tools: {
      label: "Tools & Platforms",
      icon: "Wrench",
      items: [
        { name: "Git & GitHub", level: 80, icon: "GitBranch" },
        { name: "Docker", level: 70, icon: "Container" },
        { name: "Netlify", level: 80, icon: "Cloud" },
        { name: "Odoo ERP", level: 80, icon: "Database" },
      ],
    },
    other: {
      label: "Other Skills",
      icon: "Palette",
      items: [
        { name: "Digital Marketing", level: 70, icon: "TrendingUp" },
        { name: "Meta Ads", level: 65, icon: "Target" },
        { name: "Responsive Web Design", level: 85, icon: "Layout" },
      ],
    },
  },
  projects: [
    {
      title: "WerWoods",
      description:
        "Perfume e-commerce website developed using Odoo ERP with product catalog and checkout features.",
      tags: ["Odoo ERP", "E-commerce", "Web Customization"],
      category: "E-commerce",
      gradient: "from-amber-500/20 to-rose-500/20",
      link: "https://werwoods.com",
    },
    {
      title: "Nutrition & Diet Management System",
      description:
        "ERP-based internal product for health workflow and management, featuring diet planning and tracking modules.",
      tags: ["Odoo ERP", "Healthcare", "Workflow"],
      category: "ERP",
      gradient: "from-emerald-500/20 to-cyan-500/20",
    },
    {
      title: "VIBHAV Bangalore Cake House",
      description:
        "Static bakery website built and hosted online with responsive design and product showcase.",
      tags: ["HTML", "CSS", "Netlify", "Static Site"],
      category: "Web",
      gradient: "from-orange-500/20 to-pink-500/20",
      link: "https://spectacular-sprinkles-e27bcb.netlify.app",
    },
    {
      title: "Marmabindhu",
      description:
        "Healthcare appointment booking website with doctor scheduling and patient management.",
      tags: ["Healthcare", "Booking System", "Web"],
      category: "Healthcare",
      gradient: "from-blue-500/20 to-violet-500/20",
    },
    {
      title: "ScrapTech",
      description:
        "Recycling services platform with pickup scheduling and vendor management features.",
      tags: ["Recycling", "Platform", "Web"],
      category: "Sustainability",
      gradient: "from-green-500/20 to-teal-500/20",
    },
  ],
  achievements: [
    "Completed internship in Odoo ERP development for live business projects",
    "Built and deployed multiple responsive websites on Netlify",
    "Practical experience in requirement gathering and business workflow setup",
    "Strong foundation in programming and web technologies",
  ],
  journey: [
    {
      year: "BCA",
      title: "Started the Journey",
      description:
        "Began with Bachelor of Computer Applications at Amrita Vishwa Vidyapeetham, building foundations in programming and web development.",
    },
    {
      year: "Internship",
      title: "Odoo Techno-Functional Intern",
      description:
        "Joined Amcap Business Consulting, working on real-world ERP implementations, website customization, and Docker deployments.",
    },
    {
      year: "Now",
      title: "Building Practical Solutions",
      description:
        "Currently in final year of BCA, working on freelance web projects and preparing for MCA.",
    },
  ],
};

export type PersonalInfo = typeof personalInfo;
