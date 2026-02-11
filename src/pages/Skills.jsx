
import React, { useState } from "react";

const Skills = () => {

    const qualifications = [
        {
            type: "Experience",
            title: "Full Stack Developer",
            place: "WeTrackAds (on-site)",
            date: "2025 - 2026",
            City: "Islamabad, Pakistan"
        },
        {
            type: "Experience",
            title: "Full Stack Developer",
            place: "Ivy Interactive Solutions (on-site)",
            date: "2024 - 2025",
            City: "Islamabad, Pakistan"
        },
        {
            type: "Experience",
            title: "MERN Stack Developer",
            place: "SoftTechOdes Company (Remote)",
            date: "2023 - 2024",
            City: "New York, USA"
        },
        {
            type: "Experience",
            title: "Frontend Developer",
            place: "B2Soft Company (Remote)",
            date: "2023 - 2023",
            City: "Lahore, Pakistan"
        },
        {
            type: "Experience",
            title: "Internship React Developer",
            place: "Signup Solutions",
            date: "2023",
            City: "Islamabad, Pakistan"
        },
        {
            type: "Education",
            title: "Software Engineering",
            place: "Bachelor - National University of Medern Languages (NUML) Islamabad",
            date: "2022 - 2025",
            City: "Islamabad, Pakistan"
        },
        {
            type: "Education",
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
            <div className="bg-gray-100 py-16 flex flex-col items-center px-4 sm:px-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-12 w-full max-w-5xl">
                    {/* Frontend Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-center text-xl font-semibold text-gray-700 pb-6">
                            Frontend
                        </h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">HTML / CSS</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">Tailwind CSS</h3>
                                <p className="text-gray-400 text-sm">Expert</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">JavaScript</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">Material UI</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center col-span-2">
                                <h3 className="font-semibold text-gray-600">
                                    React / Next.js / Angular
                                </h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center col-span-2">
                                <h3 className="font-semibold text-gray-600">API Integration</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                        </div>
                    </div>

                    {/* Backend Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-center text-xl font-semibold text-gray-700 pb-6">
                            Backend
                        </h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">Node.js</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">Express.js</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">MongoDB / PostGreSQL </h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="font-semibold text-gray-600">
                                    Python / Django
                                </h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                            <div className="flex flex-col items-center col-span-2">
                                <h3 className="font-semibold text-gray-600">Git / GitHub</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>

                            <div className="flex flex-col items-center col-span-2">
                                <h3 className="font-semibold text-gray-600">AWS/GCP/Azure</h3>
                                <p className="text-gray-400 text-sm">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------------------- */}
            {/* Qualification Section */}
            <div className="w-full flex flex-col items-center py-10 px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-700">Qualification</h1>
                    <p className="text-gray-400 text-md">My Personal Journey</p>
                </div>

                {/* Timeline */}
                <div className="relative w-full max-w-2xl">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-5 top-0 w-1 h-full bg-gray-300"></div>

                    {/* Items */}
                    <div className="flex flex-col gap-10">
                        {qualifications.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 sm:gap-6 relative">
                                {/* Circle marker */}
                                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold z-10">
                                    {item.type === "Education" ? "🎓" : "💼"}
                                </div>

                                {/* Card */}
                                <div className="p-5 bg-white shadow-md rounded-2xl flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-700">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.place}</p>
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
    );
};

export default Skills;
