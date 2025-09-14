import { motion } from 'framer-motion';
import { Users, Dumbbell, Utensils, CalendarDays } from 'lucide-react';

const lifeAspects = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Student Organizations',
    description: 'Join over 100 clubs and societies, from academic to cultural and recreational.',
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: 'Athletics & Recreation',
    description: 'Stay active with intramural sports, fitness centers, and varsity teams.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: 'Dining & Housing',
    description: 'Enjoy diverse dining options and comfortable on-campus living experiences.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Events & Traditions',
    description: 'Participate in vibrant campus events, festivals, and long-standing traditions.',
  },
];

const CampusLifePage = () => {
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
          src="https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Students enjoying campus life"
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
            Experience a Vibrant Campus Life
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Beyond academics, Vidya University offers a rich and diverse campus experience where you can grow, connect, and thrive.
          </p>
        </motion.div>
      </div>

      {/* Aspects of Campus Life Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Discover Your Community
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {lifeAspects.map((aspect, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                {aspect.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{aspect.title}</h3>
              <p className="text-textSecondary">{aspect.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Student Support & Well-being Section */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students relaxing on campus"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Support for Your Success
            </h2>
            <p className="text-lg text-textSecondary mb-6">
              Vidya University is committed to your holistic well-being. We offer a range of support services to ensure you thrive academically, personally, and professionally.
            </p>
            <ul className="space-y-4 text-textSecondary">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Academic advising and tutoring services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Counseling and wellness programs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Career development and internship opportunities.</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300"
            >
              Explore Student Services
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default CampusLifePage;
