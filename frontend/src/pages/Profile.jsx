// ProfilePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaUserEdit, FaBookmark, FaHeart, FaHistory, FaCog } from 'react-icons/fa';

const ProfilePage = () => {
  const { user } = useSelector(state => state.auth);

  const stats = [
    { label: 'Favorite Anime', value: '0', icon: FaHeart },
    { label: 'Bookmarks', value: '0', icon: FaBookmark },
    { label: 'Watch History', value: '0', icon: FaHistory }
  ];

  const menuItems = [
    { label: 'Edit Profile', icon: FaUserEdit },
    { label: 'Settings', icon: FaCog }
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xl font-semibold bg-red-600/20 p-6 rounded-lg"
        >
          You are not logged in!
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative group"
            >
              <img 
                src={user.image || 'default-profile-image.jpg'} 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-500/30
                         group-hover:border-red-500 transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100
                            flex items-center justify-center transition-opacity duration-300">
                <FaUserEdit className="text-2xl text-white" />
              </div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{user.username}</h1>
              <p className="text-gray-400 mb-4">{user.email}</p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-700/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    <stat.icon className="text-2xl text-red-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Content */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/30 rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
            <div className="text-gray-400 text-center py-8">
              No recent activity
            </div>
          </motion.div>

          {/* Favorite Anime */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/30 rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-4">Favorite Anime</h2>
            <div className="text-gray-400 text-center py-8">
              No favorites yet
            </div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="mt-8 flex flex-wrap gap-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 px-6 py-3 rounded-full
                         transition-colors duration-300"
            >
              <item.icon />
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
