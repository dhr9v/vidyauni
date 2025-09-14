import { motion } from 'framer-motion';
import { CalendarDays, FileText, Handshake, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Submit Application',
    description: 'Complete our online application form with your personal and academic details.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Meet Deadlines',
    description: 'Ensure all required documents are submitted before the specified deadlines.',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: 'Interview & Review',
    description: 'Qualified candidates may be invited for an interview or portfolio review.',
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: 'Financial Aid',
    description: 'Explore scholarship and financial aid opportunities to support your studies.',
  },
];

const AdmissionsPage = () => {
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
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Diverse students walking on campus"
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
            Your Journey Starts Here
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Discover how to join Vidya University and become part of a vibrant community dedicated to innovation and excellence.
          </p>
        </motion.div>
      </div>

      {/* How to Apply Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Simple Steps to Apply
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-textSecondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 text-lg"
          >
            Start Your Application
          </motion.button>
        </motion.div>
      </section>

      {/* Key Information Section */}
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
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Student studying in a library"
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
              Important Dates & Requirements
            </h2>
            <p className="text-lg text-textSecondary mb-6">
              We encourage prospective students to review our admission requirements and application deadlines carefully. Our admissions team is here to guide you through every step.
            </p>
            <div className="space-y-4 text-textSecondary">
              <h3 className="text-xl font-semibold text-white">Undergraduate Admissions</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Application Deadline: January 15th</li>
                <li>Decision Notification: March 15th</li>
                <li>Required: High school transcripts, standardized test scores (optional), personal essay.</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6">Graduate Admissions</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Application Deadline: February 1st</li>
                <li>Decision Notification: April 1st</li>
                <li>Required: Bachelor's degree, GRE scores (program-specific), letters of recommendation, statement of purpose.</li>
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-secondary text-white font-semibold rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300"
            >
              View All Requirements
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default AdmissionsPage;
