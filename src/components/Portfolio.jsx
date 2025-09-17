import React, { useState, useEffect } from 'react';

import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Briefcase, 
  Code, 
  GraduationCap,
  Award,
  ChevronDown,
  ExternalLink,
  Database,
  Palette,
  Monitor,
  Globe,
  Download
} from 'lucide-react';

// Import images
import profileImage from '../assets/images/profile.jpg';
import professionalPhoto from '../assets/images/professional.jpg';
import beautyProject from '../assets/images/beauty-salon.png';
import parkingProject from '../assets/images/parking-system.jpg';
import animationProject from '../assets/images/animation-video.jpg';
import heroBackground from '../assets/images/hero-bg.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Beauty Salon Management Website",
      description: "Comprehensive web application with appointment scheduling, service catalog, and staff coordination. Features responsive design with dynamic frontend and robust backend functionality.",
      technologies: ["React.js", "MongoDB", "PHP"],
      icon: <Globe className="w-6 h-6" />,
      image: beautyProject
    },
    {
      title: "Parking Management System",
      description: "Desktop application for parking facility management with real-time tracking, automated billing, and comprehensive reporting capabilities.",
      technologies: ["C#", "MySQL"],
      icon: <Monitor className="w-6 h-6" />,
      image: parkingProject
    },
    {
      title: "2D Animation Video Production",
      description: "Professional animated content creation with character design, scene composition, and audio synchronization for educational purposes.",
      technologies: ["Animaker"],
      icon: <Palette className="w-6 h-6" />,
      image: animationProject
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["C#", "JavaScript", "PHP", "HTML5", "CSS"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Web Technologies",
      items: ["React.js", "Node.js", "Responsive Design"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "SQL"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Design Tools",
      items: ["Adobe Photoshop", "Animaker", "UI/UX"],
      icon: <Palette className="w-6 h-6" />
    }
  ];

  const education = [
    {
      degree: "Higher National Diploma in Information Technology (HNDIT)",
      institution: "SLIATE Kurunegala",
      year: "2023 - Present",
      description: "Software development, database management, web technologies, system analysis"
    },
    {
      degree: "Diploma in Computer Graphic Designing",
      institution: "Adobe Photoshop Certification",
      year: "2022",
      description: "Digital design, image manipulation, visual composition"
    },
    {
      degree: "Diploma in English Language",
      institution: "SLEGA",
      year: "2022",
      description: "Professional English communication skills"
    },
    {
      degree: "G.C.E(AL) Examination",
      institution: "NK/Mahasen National School",
      year: "2021",
      description: "Technology Stream - Passed all subjects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pabasara Rathnamalala
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-300 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Pabasara Rathnamalala" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237C3AED;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='200' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='160' r='60' fill='white' opacity='0.9'/%3E%3Ccircle cx='200' cy='280' r='100' fill='white' opacity='0.9'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pabasara Rathnamalala
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Intern Software Engineer & HNDIT Student
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions through software development, 
              web technologies, and digital design. Currently pursuing HNDIT with hands-on 
              experience in full-stack development.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:rathnamalalapabasara@gmail.com" className="flex items-center space-x-2 hover:text-blue-400 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Mail className="w-5 h-5" />
                <span>rathnamalalapabasara@gmail.com</span>
              </a>
              <a href="tel:+94766668353" className="flex items-center space-x-2 hover:text-blue-400 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Phone className="w-5 h-5" />
                <span>+94 76 666 8353</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/sewmini812" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/pabasara-rathnamalala" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image Section */}
              <div className="relative">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="w-full h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src={professionalPhoto} 
                        alt="Professional photo of Pabasara Rathnamalala" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232563EB;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%237C3AED;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23DB2777;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='320' fill='url(%23grad2)'/%3E%3Ccircle cx='200' cy='120' r='40' fill='white' opacity='0.9'/%3E%3Crect x='120' y='180' width='160' height='80' rx='40' fill='white' opacity='0.9'/%3E%3Ctext x='200' y='280' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle' opacity='0.7'%3EProfessional Photo%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    
                    {/* Floating tech icons */}
                    <div className="absolute -top-4 -right-4 bg-blue-500 p-3 rounded-full shadow-lg animate-pulse">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-purple-500 p-3 rounded-full shadow-lg animate-bounce">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    As a current Higher National Diploma in Information Technology (HNDIT) student, 
                    I am expecting to complete my studies, including a 6-month training program, 
                    and secure a position in a development-centric environment upon graduation.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I am eager to apply the theoretical knowledge gained during the HNDIT program 
                    and the practical skills enhanced through hands-on experiences. I am seeking 
                    an opportunity that fosters professional growth and allows me to contribute 
                    to the dynamic field of Information Technology.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-gray-400 bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>9 Post, Walaliya, Walpaluwa, Ambanpola</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl backdrop-blur-sm border border-blue-400/20">
                      <h4 className="font-semibold text-blue-400 mb-4 flex items-center space-x-2">
                        <Globe className="w-5 h-5" />
                        <span>Languages</span>
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Sinhala (Native)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>English (Professional)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Tamil (Professional)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl backdrop-blur-sm border border-purple-400/20">
                      <h4 className="font-semibold text-purple-400 mb-4 flex items-center space-x-2">
                        <User className="w-5 h-5" />
                        <span>Soft Skills</span>
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Leadership</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Problem Solving</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Team Collaboration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <span>Time Management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                    {skillCategory.icon}
                  </div>
                  <h3 className="font-semibold">{skillCategory.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10 group">
                {/* Project Image */}
                <div className="mb-6 relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23334155'/%3E%3Ctext x='200' y='100' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-3">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss projects, 
                internships, or just want to connect!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-xl backdrop-blur-sm text-center border border-blue-400/20 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
                <a href="mailto:rathnamalalapabasara@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  rathnamalalapabasara@gmail.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-8 rounded-xl backdrop-blur-sm text-center border border-purple-400/20 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Phone</h3>
                <a href="tel:+94766668353" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +94 76 666 8353
                </a>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 p-8 rounded-xl backdrop-blur-sm text-center border border-pink-400/20 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Location</h3>
                <p className="text-gray-300">9 Post, Walaliya, Walpaluwa, Ambanpola</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/sewmini812" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/pabasara-rathnamalala" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/20 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Pabasara Rathnamalala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;