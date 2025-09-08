import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                About Me
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                コンピューターサイエンスを学び、実践的な開発経験を通じて成長してきました。
                新しい技術への学習意欲が高く、チームワークを重視して開発に取り組んでいます。
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                    技術への情熱
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    大学でコンピューターサイエンスを学び、プログラミングの楽しさを発見しました。
                    特にWebアプリケーション開発に興味を持ち、フロントエンドからバックエンドまで
                    幅広い技術スタックの習得に努めています。
                </p>
                <p className="text-slate-600 leading-relaxed">
                    ユーザー体験を重視し、パフォーマンスと保守性を両立させたコードの実装を心がけています。
                    継続的な学習を通じて、常に最新の技術トレンドをキャッチアップしています。
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-slate-600">完成プロジェクト</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-slate-600">習得技術</div>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Frontend</h4>
                    <p className="text-sm text-slate-600">React, Vue.js, TypeScript</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Backend</h4>
                    <p className="text-sm text-slate-600">Node.js, Python, MySQL</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Web Tech</h4>
                    <p className="text-sm text-slate-600">HTML5, CSS3, Sass</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                    <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Mobile</h4>
                    <p className="text-sm text-slate-600">React Native, Flutter</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default About;