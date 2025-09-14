import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import VideoModal from '@/components/VideoModal'; // Import the new VideoModal component

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoUrl = "https://admissions.vidyauniversity.edu.in/images/vidyauniversity.mp4";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen w-full bg-background text-text">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d27rr0cvu3qzk1.cloudfront.net/homePage-university/1747912041983_vidya-meerut-university.webp"
          alt="Vidya University Campus"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center max-w-5xl px-4"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Innovate. Inspire. Impact.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Welcome to Vidya University, where cutting-edge education meets a vibrant community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(158, 127, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 text-lg"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(56, 189, 248, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 px-10 py-4 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 text-lg"
            >
              <PlayCircle size={24} />
              Take a Virtual Tour
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">About Vidya University</h2>
            <p className="text-lg text-textSecondary mb-6">
              Vidya University is a beacon of innovation, dedicated to fostering intellectual curiosity, critical thinking, and a passion for lifelong learning. Our diverse community of scholars and students collaborates to push the boundaries of knowledge and create a positive impact on the world.
            </p>
            <p className="text-lg text-textSecondary mb-6">
              With state-of-the-art facilities, world-class faculty, and a curriculum designed for the future, we prepare our graduates to lead in an ever-evolving global landscape.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleUp}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Our Featured Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
              className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Computer Science & AI</h3>
              <p className="text-textSecondary mb-6">
                Dive into the world of artificial intelligence, machine learning, and advanced software development.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
              className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Data Science & Analytics</h3>
              <p className="text-textSecondary mb-6">
                Master the art of data interpretation, predictive modeling, and big data technologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleUp}
              className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Engineering & Robotics</h3>
              <p className="text-textSecondary mb-6">
                Build the future with hands-on experience in robotics, mechatronics, and advanced engineering.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-surface p-12 rounded-3xl shadow-2xl border border-border"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-textSecondary mb-8 max-w-2xl mx-auto">
            Join Vidya University and become part of a community that inspires innovation, fosters growth, and shapes leaders of tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(158, 127, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 text-lg"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoUrl}
      />
    </div>
  );
};

export default HomePage;
