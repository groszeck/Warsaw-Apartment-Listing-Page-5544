import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize } = FiIcons;

const VideoSection = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('virtualTour')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('videoDescription')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              <p className="text-white text-center py-20">
                Your browser does not support video playback.
              </p>
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Control Buttons */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-200 hover:scale-105"
                  >
                    <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-6 h-6" />
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-200 hover:scale-105"
                  >
                    <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="w-5 h-5" />
                  </button>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-200 hover:scale-105"
                >
                  <SafeIcon icon={FiMaximize} className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Play Button Overlay (when paused) */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <button
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 text-white transition-all duration-300 hover:scale-110 group"
                >
                  <SafeIcon icon={FiPlay} className="w-12 h-12 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;