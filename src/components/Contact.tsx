import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // フォーム送信の処理をここに実装
        console.log('Form submitted:', formData);
        alert('メッセージを送信しました。ありがとうございます！');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Contact
                </h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                お仕事のご依頼、ご質問、または一緒に働く機会について、
                お気軽にお問い合わせください。
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">
                    お問い合わせ
                    </h3>
                    <p className="text-slate-600 mb-8">
                    新しいプロジェクトや転職の機会について、
                    いつでもお気軽にご連絡ください。
                    48時間以内にお返事いたします。
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                        <div className="font-semibold text-slate-800">Email</div>
                        <div className="text-slate-600">tanaka.taro@example.com</div>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                        <div className="font-semibold text-slate-800">電話</div>
                        <div className="text-slate-600">090-1234-5678</div>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                        <div className="font-semibold text-slate-800">所在地</div>
                        <div className="text-slate-600">東京都, 日本</div>
                    </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-semibold text-slate-800 mb-4">SNS・ポートフォリオ</h4>
                    <div className="flex gap-4">
                    <a href="#" className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    </div>
                </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        お名前
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        メールアドレス
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    </div>

                    <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                        件名
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        メッセージ
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                    </div>

                    <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                    <Send size={20} />
                    メッセージを送信
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Contact;