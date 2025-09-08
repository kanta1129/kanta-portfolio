import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">田中 太郎</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                    フルスタックエンジニアとして、ユーザー体験を重視した
                    Webアプリケーションの開発を行っています。
                    新しい技術への挑戦と継続的な学習を大切にしています。
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <Github size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <Mail size={18} />
                    </a>
                </div>
                </div>

                <div>
                <h4 className="font-semibold mb-4">ナビゲーション</h4>
                <ul className="space-y-2">
                    <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
                    <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a></li>
                    <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a></li>
                    <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-4">スキル</h4>
                <ul className="space-y-2 text-slate-300">
                    <li>React / TypeScript</li>
                    <li>Node.js / Python</li>
                    <li>MySQL / PostgreSQL</li>
                    <li>AWS / Docker</li>
                    <li>Git / GitHub</li>
                </ul>
                </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-slate-400">
                    © {currentYear} 田中 太郎. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-slate-400">
                    <span>Made with</span>
                    <Heart size={16} className="text-red-500" />
                    <span>using React & Tailwind CSS</span>
                </div>
                <button 
                    onClick={scrollToTop}
                    className="text-slate-400 hover:text-white transition-colors"
                >
                    ↑ トップに戻る
                </button>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;