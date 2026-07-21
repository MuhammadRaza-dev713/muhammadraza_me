import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaLayerGroup,
    FaPlug,
    FaDocker,
    FaGitAlt,
    FaHandshake,
    FaLink,
    FaDatabase,
    FaBriefcase,
    FaGraduationCap,
} from "react-icons/fa";
import {
    SiGooglecloud,
    SiAmazonwebservices,
    SiGoogletagmanager,
    SiGoogleanalytics,
    SiMeta,
    SiHubspot,
    SiNextdotjs,
    SiPython,
    SiMailchimp,
} from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineAutoMode } from "react-icons/md";

const Skills = () => {

    const skillGroups = [
        {
            category: "Development",
            items: [
                { name: "Full-Stack Web Development", icon: <FaLayerGroup /> },
                { name: "React.js Development", icon: <FaReact /> },
                { name: "Next.js Development", icon: <SiNextdotjs /> },
                { name: "Node.js Backend", icon: <FaNodeJs /> },
            ],
        },
        {
            category: "Cloud & Deployment",
            items: [
                { name: "Python Backend", icon: <SiPython /> },
                { name: "AWS Deployment", icon: <SiAmazonwebservices /> },
                { name: "GCP Deployment", icon: <SiGooglecloud /> },
                { name: "Docker Containerization", icon: <FaDocker /> },
            ],
        },
        {
            category: "CRM & Marketing Automation",
            items: [
                { name: "GoHighLevel (GHL) CRM", icon: <FaHandshake /> },
                { name: "HubSpot CRM Integration", icon: <SiHubspot /> },
                { name: "Marketing Automation Workflows", icon: <MdOutlineAutoMode /> },
                { name: "Email & Funnel Automation", icon: <SiMailchimp /> },
            ],
        },
        {
            category: "Tracking & Analytics",
            items: [
                { name: "Conversion Tracking & Analytics", icon: <TbTargetArrow /> },
                { name: "Google Tag Manager (GTM)", icon: <SiGoogletagmanager /> },
                { name: "Google Analytics (GA4)", icon: <SiGoogleanalytics /> },
                { name: "Meta Conversions API (CAPI) & Ads Tracking", icon: <SiMeta /> },
            ],
        },
        {
            category: "Integration",
            items: [
                { name: "API Integration", icon: <FaPlug /> },
                { name: "Cross-Platform Integration", icon: <FaLink /> },
                { name: "Data Optimization", icon: <FaDatabase /> },
                { name: "Git & Version Control", icon: <FaGitAlt /> },
            ],
        },
    ];

    const experience = [
        {
            title: "Full-Stack & CRM Developer | Conversion Tracking Specialist",
            place: "WeTrackAds (on-site)",
            date: "2025 - 2026",
            City: "Islamabad, Pakistan"
        },
        {
            title: "Full Stack Developer",
            place: "Ivy Interactive Solutions (on-site)",
            date: "2024 - 2025",
            City: "Islamabad, Pakistan"
        },
        {
            title: "MERN Stack Developer",
            place: "SoftTechOdes Company (Remote)",
            date: "2023 - 2024",
            City: "New York, USA"
        },
        {
            title: "Frontend Developer",
            place: "B2Soft Company (Remote)",
            date: "2023 - 2023",
            City: "Lahore, Pakistan"
        },
        {
            title: "Internship React Developer",
            place: "Signup Solutions",
            date: "2023",
            City: "Islamabad, Pakistan"
        },
    ];

    const education = [
        {
            title: "Software Engineering",
            place: "Bachelor - National University of Modern Languages (NUML) Islamabad",
            date: "2022 - 2025",
            City: "Islamabad, Pakistan"
        },
        {
            title: "Intermediate",
            place: "Punjab Group Of Colleges",
            date: "2020 - 2022",
            City: "Islamabad, Pakistan"
        },
    ];
    return (
        <div className="flex flex-col w-full">
            {/* ----------------------------- */}
            {/* Skills Section */}
            <div className="bg-gray-100 py-16 sm:py-20 flex flex-col items-center px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
                        Skills
                    </h1>
                    <p className="text-gray-500 text-md md:text-lg mt-2">
                        My Technical Level & Expertise
                    </p>
                </div>

                {/* Skills Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 w-full max-w-6xl">
                    {skillGroups.map((group, gIdx) => (
                        <div
                            key={gIdx}
                            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 pb-6">
                                {group.category}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {group.items.map((item, iIdx) => (
                                    <div
                                        key={iIdx}
                                        className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <span className="text-orange-600 text-xl sm:text-2xl flex-shrink-0">
                                            {item.icon}
                                        </span>
                                        <h3 className="font-medium text-sm sm:text-base text-gray-600 leading-snug min-w-0 flex-1">
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ----------------------------- */}
            {/* Experience & Education Section */}
            <div className="w-full flex flex-col items-center py-16 sm:py-20 px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="font-bold text-3xl md:text-4xl text-gray-700">
                        Experience &amp; Education
                    </h1>
                    <p className="text-gray-400 text-md md:text-lg mt-2">My Personal Journey</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 w-full max-w-6xl">
                    {/* Experience Timeline */}
                    <div className="flex flex-col">
                        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
                            <FaBriefcase className="text-orange-600 text-xl sm:text-2xl" aria-hidden="true" />
                            Experience
                        </h2>
                        <div className="relative">
                            <div className="absolute left-4 sm:left-5 top-0 w-1 h-full bg-gray-300"></div>
                            <div className="flex flex-col gap-8">
                                {experience.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 sm:gap-6 relative">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-600 text-white text-sm sm:text-base z-10 flex-shrink-0">
                                            <FaBriefcase />
                                        </div>
                                        <div className="p-5 bg-white shadow-md rounded-2xl flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 hover:shadow-xl transition-shadow duration-300 min-w-0">
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-base sm:text-lg text-gray-700">{item.title}</h3>
                                                <p className="text-sm text-gray-500 break-words">{item.place}</p>
                                                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                                            </div>
                                            <div className="text-xs text-gray-400 whitespace-normal sm:whitespace-nowrap sm:pl-4 sm:pt-1 break-words">
                                                {item.City}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="flex flex-col">
                        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
                            <FaGraduationCap className="text-orange-600 text-xl sm:text-2xl" aria-hidden="true" />
                            Education
                        </h2>
                        <div className="relative">
                            <div className="absolute left-4 sm:left-5 top-0 w-1 h-full bg-gray-300"></div>
                            <div className="flex flex-col gap-8">
                                {education.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 sm:gap-6 relative">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-600 text-white text-sm sm:text-base z-10 flex-shrink-0">
                                            <FaGraduationCap />
                                        </div>
                                        <div className="p-5 bg-white shadow-md rounded-2xl flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 hover:shadow-xl transition-shadow duration-300 min-w-0">
                                            <div className="min-w-0">
                                                <h3 className="font-bold text-base sm:text-lg text-gray-700">{item.title}</h3>
                                                <p className="text-sm text-gray-500 break-words">{item.place}</p>
                                                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                                            </div>
                                            <div className="text-xs text-gray-400 whitespace-normal sm:whitespace-nowrap sm:pl-4 sm:pt-1 break-words">
                                                {item.City}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;
