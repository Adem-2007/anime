import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import OnePieceLogo from '../../images/OnePice.png';

const Footer = () => {
    const footerLinks = {
        explore: [
            { name: 'Home', path: '/' },
            { name: 'Anime List', path: '/anime' },
            { name: 'Characters', path: '/characters' },
            { name: 'Genres', path: '/genres' }
        ],
        community: [
            { name: 'Discord Server', path: '#' },
            { name: 'GitHub', path: '#' },
            { name: 'Twitter', path: '#' },
            { name: 'Instagram', path: '#' }
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' }
        ]
    };

    const socialLinks = [
        { icon: FaDiscord, color: 'hover:text-indigo-500' },
        { icon: FaGithub, color: 'hover:text-gray-400' },
        { icon: FaTwitter, color: 'hover:text-blue-400' },
        { icon: FaInstagram, color: 'hover:text-pink-500' }
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90" />
            <div className="absolute inset-0 bg-[url('path/to/pattern.png')] opacity-5" />

            <div className="relative container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <Link to="/" className="flex items-center gap-3">
                            <img src={OnePieceLogo} alt="Logo" className="w-12 h-12 rounded-full" />
                            <span className="text-2xl font-bold font-abril">OnePiece</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Discover and explore your favorite anime characters and series in one place.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {footerLinks.explore.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Community Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Community</h3>
                        <ul className="space-y-2">
                            {footerLinks.community.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">Stay Updated</h3>
                        <p className="text-gray-400 text-sm">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition-colors duration-300"
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm flex items-center gap-1">
                            <span>© 2024 OnePiece. Made with</span>
                            <FaHeart className="text-red-500" />
                            <span>by Adem</span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex gap-6">
                            {footerLinks.legal.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 