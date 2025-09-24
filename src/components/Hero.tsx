import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center relative">
        <div className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    <img src={"/src/assets/face.png"} className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                藤井 幹太
                <span className="block text-3xl md:text-4xl text-blue-600 mt-2">
                エンジニア志望大学院生
                </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                フルスタックエンジニアとして、モダンな技術スタックを活用し、
                ユーザー体験を重視したWebアプリケーションの開発を行っています。
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
                <a href="https://github.com/kanta1129" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-slate-700 hover:text-blue-600">
                <Github size={24} />
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-slate-700 hover:text-blue-600">
                <Linkedin size={24} />
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 text-slate-700 hover:text-blue-600">
                <Mail size={24} />
                </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                onClick={scrollToAbout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                About Me
                </button>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl border border-blue-200">
                View Projects
                </button>
            </div>
            </div>
        </div>
        
        <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
        >
            <ArrowDown size={32} />
        </button>
        </section>
    );
    };

export default Hero;