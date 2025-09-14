import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, FlaskConical } from 'lucide-react'; // Example icons

const programs = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Computer Science & AI',
    description: 'Pioneering the future of intelligent systems and software development.',
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into actionable insights for a data-driven world.',
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: 'Engineering & Robotics',
    description: 'Designing and building the next generation of smart machines and infrastructure.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Digital Arts & Media',
    description: 'Blending creativity with technology to shape immersive digital experiences.',
  },
];

const AcademicsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-background text-text min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden pt-40">
        <img
          src="https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Students collaborating in a modern classroom"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Ignite Your Future with Innovative Academics
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md">
            At Vidya University, we empower the next generation of innovators and leaders through cutting-edge programs and a dynamic learning environment.
          </p>
        </motion.div>
      </div>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Our Signature Programs
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
              <p className="text-textSecondary">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Learning Experience Section */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              A Transformative Learning Experience
            </h2>
            <p className="text-lg text-textSecondary mb-6">
              Beyond textbooks, Vidya University offers an immersive educational journey. Our expert faculty, state-of-the-art labs, and project-based learning approach ensure you gain practical skills and real-world experience.
            </p>
            <ul className="space-y-4 text-textSecondary">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Hands-on projects and industry collaborations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Mentorship from leading researchers and professionals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Flexible learning paths tailored to your ambitions.</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
            >
              Explore All Programs
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students working in a modern lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default AcademicsPage;
