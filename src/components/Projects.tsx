import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    date: string;
    }

const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    technologies,
    imageUrl,
    githubUrl,
    demoUrl,
    date
    }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative overflow-hidden">
            <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6">
            <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <div className="flex items-center text-slate-500 text-sm">
                <Calendar size={14} className="mr-1" />
                {date}
            </div>
            </div>
            
            <p className="text-slate-600 mb-4 leading-relaxed">
            {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
                <span 
                key={tech}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                >
                {tech}
                </span>
            ))}
            </div>
            
            <div className="flex gap-3">
            {githubUrl && (
                <a 
                href={githubUrl}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                <Github size={18} />
                Code
                </a>
            )}
            {demoUrl && (
                <a 
                href={demoUrl}
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                <ExternalLink size={18} />
                Demo
                </a>
            )}
            </div>
        </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projects = [
        {
        title: 'Eコマースサイト',
        description: 'React、Node.js、MySQLを使用したフルスタックのEコマースプラットフォーム。ユーザー認証、商品管理、決済機能を実装。',
        technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'Tailwind CSS'],
        imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2024年3月'
        },
        {
        title: 'タスク管理アプリ',
        description: 'TypeScriptとReactを使用したタスク管理アプリケーション。ドラッグ&ドロップ機能とリアルタイム更新を実装。',
        technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2024年1月'
        },
        {
        title: 'チャットアプリケーション',
        description: 'リアルタイムチャット機能を持つWebアプリケーション。WebSocketを活用してスムーズなコミュニケーションを実現。',
        technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
        imageUrl: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2023年11月'
        },
        {
        title: 'レスポンシブWebサイト',
        description: '企業向けのレスポンシブWebサイト。SEO最適化とアクセシビリティを考慮した設計で高いパフォーマンスを実現。',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Webpack'],
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2023年9月'
        },
        {
        title: 'モバイルアプリ',
        description: 'React Nativeを使用したクロスプラットフォームモバイルアプリ。ネイティブ機能を活用したUX設計。',
        technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'AsyncStorage'],
        imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2023年7月'
        },
        {
        title: 'データ可視化ダッシュボード',
        description: 'D3.jsとPythonを使用したデータ分析・可視化プラットフォーム。複雑なデータを直感的に理解できるUI。',
        technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL', 'Docker'],
        imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        githubUrl: '#',
        demoUrl: '#',
        date: '2023年5月'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Projects
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                学習と実践を通じて開発したプロジェクトをご紹介します。
                それぞれ異なる技術スタックを使用し、実際のビジネス課題解決を意識して制作しました。
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                <Github size={20} />
                GitHub で他のプロジェクトを見る
                </a>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Projects;