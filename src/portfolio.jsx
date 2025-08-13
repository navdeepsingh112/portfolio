import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code, Database, Server, Smartphone, Globe, Award, Calendar, MapPin, User, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'leadership', 'awards'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = {
        'Programming Languages': ['C++', 'Python', 'C', 'C#', 'PHP', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
        'Machine Learning': ['PyTorch', 'scikit-learn', 'OpenCV', 'NLTK', 'Natural Language Processing'],
        'Development Tools': ['Git', 'Linux/Unix', 'Distributed Systems', 'TCP/IP'],
        'Web Technologies': ['React.js', 'Next.js', 'Node.js', 'AngularJS'],
        'Mobile Development': ['Flutter', 'Dart'],
        'Databases': ['SQL', 'MongoDB', 'Firebase'],
        'DevOps / Cloud Platforms': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Terraform']
    };

    const experiences = [
        {
            title: "SDE(Software Development Engineer) Intern",
            company: "Siemens EDA",
            location: "Noida, India",
            duration: "June 2025 - August 2025",
            achievements: [
                "Automated generation of 10,000+ lines of SystemVerilog and protocol trees from spec documents",
                "Developed a recursive information extraction pipeline outperforming traditional RAG approaches for 15+ use cases",
                "Trained a transformer-based model to flag protocol anomalies across 50K+ transaction logs with timestamp precision"
            ]
        },
        {
            title: "Project Trainee",
            company: "Centre for Artificial Intelligence and Robotics (CAIR) - DRDO",
            location: "Bengaluru, India",
            duration: "June 2024 - August 2024",
            achievements: [
                "Optimized image segmentation pipeline with temporal aggregation, improving accuracy by 4%",
                "Improved system performance by 4x (5 fps to 20 fps) while reducing memory usage by 42% using Python and C++"
            ]
        },
        {
            title: "Student Research Intern",
            company: "Thapar Institute of Engineering and Technology",
            location: "Patiala, India",
            duration: "January 2024 - Present",
            achievements: [
                "Engineered a timetable scheduling system using Genetic Algorithms that reduced scheduling conflicts by 30%",
                "Engineered optimization algorithms operating on Linux systems for academic scheduling with machine learning"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Connect Broadband",
            location: "Chandigarh, India",
            duration: "June 2023 - August 2023",
            achievements: [
                "Wrote and optimized 200+ SQL queries and procedures in SSMS to support scalable C# services in a .NET environment",
                "Resolved 5+ API bugs in customer dashboard, resulting in reduced query volume and improved performance"
            ]
        }
    ];

    const projects = [
        {
            title: "LUNAR - ML-Based Lunar Surface Navigation System",
            tech: "Python, React, Three.js, YOLOv5, U-Net",
            date: "August 2024",
            link: "https://rover.sidhusahab.com",
            achievements: [
                "Processed lunar surface data using decentralized computing environments with Unix/Linux systems",
                "Designed reinforcement learning algorithms for path planning with 85% accuracy in obstacle avoidance",
                "Created scalable data processing pipelines for spectral and optical data analysis"
            ]
        },
        {
            title: "Feedback Application System",
            tech: "Python, PHP, SQL, C++",
            date: "September 2023 - September 2024",
            link: "https://www.algorise.xyz/",
            achievements: [
                "Led development of a cross-platform application handling 10,000+ daily requests via TCP/IP protocols",
                "Created a role-based access system supporting multiple user roles across 5 different access levels"
            ]
        }
    ];

    const awards = [
        {
            title: "Presidential Recognition",
            description: "Honored by the President of India on 1st National Space Day",
            date: "August 2024"
        },
        {
            title: "National Winner",
            description: "Bharatiya Antariksh Hackathon by ISRO",
            date: "August 2024"
        },
        {
            title: "Innovation Award",
            description: "First place in GDSC TIET Internal Hackathon",
            date: "January 2024"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Navdeep Singh
                        </h1>
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Awards'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`transition-colors duration-300 hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
                <div className="text-center z-10 px-6 max-w-4xl mx-auto">
                    <div className="animate-fade-in">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                            Navdeep Singh Sidhu
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                            Software Developer & AI Researcher
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
                            <div className="flex items-center text-gray-300">
                                <Phone className="w-5 h-5 mr-2" />
                                +91-9412467412
                            </div>
                            <div className="flex items-center text-gray-300">
                                <Mail className="w-5 h-5 mr-2" />
                                sidhusahabb@gmail.com
                            </div>
                        </div>
                        <div className="flex justify-center space-x-6 mb-12">
                            <a href="https://github.com/navdeepsingh112" className="bg-gray-800/50 p-4 rounded-full hover:bg-cyan-600 transition-colors duration-300">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/navdeep-singh-sidhu-a38087253/" className="bg-gray-800/50 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://codeforces.com/profile/sidhu_sahab" className="bg-gray-800/50 p-4 rounded-full hover:bg-orange-600 transition-colors duration-300">
                                <Code className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/30">
                            <p className="text-lg mb-2">CodeForces Rating</p>
                            <p className="text-3xl font-bold text-cyan-400">1514</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => scrollToSection('about')}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ChevronDown className="w-8 h-8 text-cyan-400" />
                </button>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm a passionate software developer and AI researcher currently pursuing my Bachelor's in Computer Science Engineering at Thapar Institute of Engineering and Technology. With experience at prestigious organizations like Siemens EDA and DRDO, I specialize in machine learning, software development, and system optimization. My work spans from developing AI-powered navigation systems to optimizing large-scale enterprise applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-6 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-cyan-600/20 p-3 rounded-full">
                                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-cyan-400 mb-2">
                                            Thapar Institute of Engineering and Technology, Patiala
                                        </h3>
                                        <p className="text-gray-300 mb-2">B.E. in Computer Science and Engineering</p>
                                        <p className="text-gray-400">Expected 2026</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-cyan-400">9.30</p>
                                    <p className="text-gray-400">CGPA</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-600/20 p-3 rounded-full">
                                        <GraduationCap className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                                            Army Public School Roorkee
                                        </h3>
                                        <p className="text-gray-300 mb-2">CBSE - PCM (Physics, Chemistry, Mathematics)</p>
                                        <p className="text-gray-400">2021</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-blue-400">96.33%</p>
                                    <p className="text-gray-400">Percentage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                                        <div className="bg-cyan-600/20 p-3 rounded-full">
                                            <Briefcase className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                                            <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                                            <div className="flex items-center text-gray-400 text-sm">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {exp.duration}
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-300 flex items-start">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <a href={project.link} className="bg-cyan-600/20 p-2 rounded-full hover:bg-cyan-600/40 transition-colors duration-300">
                                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                                    </a>
                                </div>
                                <p className="text-gray-400 mb-4 text-sm">{project.tech}</p>
                                <p className="text-gray-500 mb-4 text-sm">{project.date}</p>
                                <ul className="space-y-2">
                                    {project.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-300 flex items-start text-sm">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, skillList], index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    {category.includes('Programming') && <Code className="w-6 h-6 text-cyan-400 mr-3" />}
                                    {category.includes('Database') && <Database className="w-6 h-6 text-green-400 mr-3" />}
                                    {category.includes('DevOps') && <Server className="w-6 h-6 text-orange-400 mr-3" />}
                                    {category.includes('Mobile') && <Smartphone className="w-6 h-6 text-purple-400 mr-3" />}
                                    {category.includes('Web') && <Globe className="w-6 h-6 text-blue-400 mr-3" />}
                                    {!category.includes('Programming') && !category.includes('Database') && !category.includes('DevOps') && !category.includes('Mobile') && !category.includes('Web') && <User className="w-6 h-6 text-pink-400 mr-3" />}
                                    <h3 className="text-lg font-semibold text-white">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, i) => (
                                        <span key={i} className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30 hover:bg-cyan-600/20 transition-colors duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" className="py-20 px-6 bg-gray-900/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Leadership Experience
                    </h2>
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
                        <div className="flex items-start space-x-4 mb-6">
                            <div className="bg-cyan-600/20 p-3 rounded-full">
                                <User className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-cyan-400 mb-2">Technical Lead</h3>
                                        <p className="text-gray-300">Microsoft Learn Student Chapter, TIET</p>
                                    </div>
                                    <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
                                        May 2023 - Present
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="text-gray-300 flex items-start">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Led a team of 15 developers through the development lifecycle of Makeathon 6 platform using Python and Java
                                    </li>
                                    <li className="text-gray-300 flex items-start">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Managed technical infrastructure for hackathon with 2000+ participants on cloud-based computing systems
                                    </li>
                                    <li className="text-gray-300 flex items-start">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        Mentored junior developers in machine learning, information retrieval, and version control practices
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Awards & Recognition
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                                <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-yellow-400" />
                                </div>
                                <h3 className="text-lg font-bold text-yellow-400 mb-2">{award.title}</h3>
                                <p className="text-gray-300 mb-3 text-sm">{award.description}</p>
                                <p className="text-gray-400 text-sm">{award.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Always open to discussing new opportunities and innovative projects
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="mailto:sidhusahabb@gmail.com" className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-full text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            Get In Touch
                        </a>
                        <a href="https://github.com/navdeepsingh112" className="border border-gray-600 px-8 py-4 rounded-full text-gray-300 font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center">
                            <Github className="w-5 h-5 mr-2" />
                            View GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-gray-900 text-center">
                <p className="text-gray-400">
                    © 2024 Navdeep Singh Sidhu. Built with React & Tailwind CSS.
                </p>
            </footer>
        </div>
    );
};

export default Portfolio;