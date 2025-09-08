import React from 'react';

interface SkillProps {
    name: string;
    level: number;
    color: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, color }) => {
    return (
        <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-slate-700">{name}</span>
            <span className="text-sm text-slate-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
            <div
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${color}`}
            style={{ width: `${level}%` }}
            ></div>
        </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const frontendSkills = [
        { name: 'React', level: 85, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Vue.js', level: 70, color: 'bg-green-500' },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 75, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-yellow-500' },
        { name: 'MySQL', level: 70, color: 'bg-blue-700' },
        { name: 'Express.js', level: 75, color: 'bg-gray-600' },
    ];

    const otherSkills = [
        { name: 'Git', level: 85, color: 'bg-red-500' },
        { name: 'Docker', level: 65, color: 'bg-blue-400' },
        { name: 'AWS', level: 60, color: 'bg-orange-400' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
    ];
    return (
        <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Technical Skills
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                継続的な学習を通じて習得した技術スキルと、それぞれの習熟度を示しています。
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Frontend
                </h3>
                <div>
                    {frontendSkills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                    ))}
                </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Backend
                </h3>
                <div>
                    {backendSkills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                    ))}
                </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Tools & Others
                </h3>
                <div>
                    {otherSkills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                    ))}
                </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    学習中の技術
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {['Next.js', 'GraphQL', 'Kubernetes', 'Go', 'Redis'].map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Skills;