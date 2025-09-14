import { motion } from 'framer-motion';
import { Atom, BrainCircuit, Leaf, ShieldCheck } from 'lucide-react';

const researchAreas = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI & Robotics',
    description: 'Advancing machine learning, neural networks, and autonomous systems.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Sustainable Technologies',
    description: 'Innovating solutions for renewable energy, environmental conservation, and smart cities.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Cybersecurity & Privacy',
    description: 'Developing robust defenses against cyber threats and protecting digital information.',
  },
  {
    icon: <Atom className="h-8 w-8 text-primary" />,
    title: 'Quantum Computing',
    description: 'Exploring the frontiers of quantum mechanics for revolutionary computational power.',
  },
];

const ResearchPage = () => {
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
          src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Researchers in a modern lab"
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
            Pioneering the Future Through Groundbreaking Research
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Vidya University is at the forefront of discovery, driving innovation that addresses global challenges and shapes tomorrow's world.
          </p>
        </motion.div>
      </div>

      {/* Research Areas Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Our Core Research Areas
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-textSecondary">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Impact & Collaboration Section */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Driving Real-World Impact
            </h2>
            <p className="text-lg text-textSecondary mb-6">
              Our research extends beyond the lab, translating into tangible solutions that benefit society. We foster a collaborative environment, partnering with industry, government, and other academic institutions.
            </p>
            <ul className="space-y-4 text-textSecondary">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Cutting-edge facilities and advanced instrumentation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Interdisciplinary teams tackling complex problems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Opportunities for student involvement in research projects.</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
            >
              Explore Research Opportunities
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
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Scientific data visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default ResearchPage;
