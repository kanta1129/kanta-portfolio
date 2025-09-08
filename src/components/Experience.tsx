import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

interface ExperienceItemProps {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    type: 'education' | 'work' | 'project';
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    location,
    period,
    description,
    type
}) => {
    const getTypeColor = () => {
        switch (type) {
        case 'education':
            return 'bg-blue-500';
        case 'work':
            return 'bg-green-500';
        case 'project':
            return 'bg-purple-500';
        default:
            return 'bg-gray-500';
        }
    };

    return (
        <div className="flex gap-6 group">
        <div className="flex flex-col items-center">
            <div className={`w-4 h-4 ${getTypeColor()} rounded-full mt-6 group-hover:scale-125 transition-transform duration-200`}></div>
            <div className="w-0.5 bg-gray-200 h-full mt-2"></div>
        </div>
        
        <div className="flex-1 pb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <div className="flex items-center text-slate-500 text-sm mt-2 md:mt-0">
                <Calendar size={14} className="mr-1" />
                {period}
                </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4 text-blue-600">
                <span className="font-semibold">{company}</span>
                <div className="flex items-center text-slate-500 text-sm">
                <MapPin size={14} className="mr-1" />
                {location}
                </div>
            </div>
            
            <ul className="space-y-2">
                {description.map((item, index) => (
                <li key={index} className="text-slate-600 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {item}
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const experiences = [
        {
        title: 'コンピューターサイエンス専攻',
        company: '○○大学 情報学部',
        location: '東京',
        period: '2021年4月 - 2025年3月（予定）',
        description: [
            'プログラミング基礎、データ構造とアルゴリズム、データベース設計を学習',
            'ソフトウェア工学、ネットワーク、セキュリティの知識を習得',
            'チーム開発プロジェクトでScrum手法を実践',
            'GPA 3.8/4.0を維持'
        ],
        type: 'education' as const
        },
        {
        title: 'フロントエンドエンジニア（インターン）',
        company: '株式会社テックスタートアップ',
        location: '東京',
        period: '2024年2月 - 2024年8月',
        description: [
            'ReactとTypeScriptを使用したWebアプリケーション開発',
            'レスポンシブデザインの実装とUX改善に貢献',
            'Git、GitHub を使用したチーム開発の実践',
            'コードレビューとテスト駆動開発の経験'
        ],
        type: 'work' as const
        },
        {
        title: 'ハッカソン優勝',
        company: '○○大学プログラミングコンテスト',
        location: '東京',
        period: '2023年12月',
        description: [
            '48時間でチーム4名でWebアプリケーションを開発',
            'React、Node.js、MySQLを使用した地域活性化アプリを制作',
            '審査員から技術的完成度とアイデアを高く評価される',
            'チームリーダーとしてプロジェクト管理を担当'
        ],
        type: 'project' as const
        },
        {
        title: 'プログラミング学習開始',
        company: 'オンライン学習プラットフォーム',
        location: 'オンライン',
        period: '2022年4月 - 継続中',
        description: [
            'HTML、CSS、JavaScriptから学習をスタート',
            'React、Vue.js等のモダンフレームワークを習得',
            'バックエンド技術（Node.js、Python）の学習',
            '継続的な技術キャッチアップを実践'
        ],
        type: 'education' as const
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Experience
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                学習経験と実践的な開発経験を通じて積み上げてきたスキルと実績をご紹介します。
                </p>
            </div>

            <div className="space-y-0">
                {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    取得資格・認定
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-slate-600">
                    <div className="font-semibold mb-1">基本情報技術者試験</div>
                    <div className="text-sm text-slate-500">2023年10月取得</div>
                    </div>
                    <div className="text-slate-600">
                    <div className="font-semibold mb-1">TOEIC 750点</div>
                    <div className="text-sm text-slate-500">2024年1月取得</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Experience;