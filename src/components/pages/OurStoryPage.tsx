import { motion } from 'framer-motion';
import { Milk, Leaf, Users, Trophy } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function OurStoryPage() {
  const values = [
    {
      icon: Milk,
      title: 'Pure Ingredients',
      description: 'We use only the finest milk solids (Khoya) sourced from trusted local farms. No artificial flavors, no shortcuts—just pure, authentic taste.',
    },
    {
      icon: Leaf,
      title: 'Traditional Recipe',
      description: 'Our recipe has been passed down through generations, preserving the authentic taste of South Asian desserts that evoke childhood memories.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in supporting local communities and bringing people together through the joy of sharing delicious, traditional ice cream.',
    },
    {
      icon: Trophy,
      title: 'Quality Promise',
      description: 'Every batch is crafted with meticulous attention to detail, ensuring that each scoop delivers the perfect balance of richness and flavor.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-primary mb-6">
              Our Story
            </h1>
            <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
              Panda Ice Cream Factory was born from a simple desire: to bring back the authentic taste of traditional Khoya ice cream that our grandmothers used to make. In a world of artificial flavors and mass production, we wanted to create something real, something that would transport you back to simpler times.
            </p>
            <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
              Our journey began in a small kitchen, experimenting with recipes and techniques until we perfected the art of making ice cream with pure milk solids. Today, we're proud to serve thousands of customers who appreciate the difference that quality ingredients and traditional methods make.
            </p>
            <p className="font-paragraph text-lg text-foreground leading-relaxed">
              Every scoop of Panda Ice Cream is a celebration of heritage, craftsmanship, and the simple joy of indulging in something truly special.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://static.wixstatic.com/media/686a4f_5dd24b13cbe346e6b11e9ce4851c5863~mv2.png?originWidth=1152&originHeight=576"
                alt="Traditional Khoya ice cream making process"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-saffron rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-secondary/20 py-20">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
              What We Stand For
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving our customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary mb-4">
            The Khoya Bliss Difference
          </h2>
          <p className="font-paragraph text-lg text-foreground max-w-2xl mx-auto">
            What makes our ice cream truly special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://static.wixstatic.com/media/686a4f_3332a0527df248dfafd3c16b659f2434~mv2.png?originWidth=512&originHeight=512"
                  alt="Fresh milk being prepared for Khoya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl text-white">1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-3">
                  Premium Milk Selection
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  We start with the finest quality milk from trusted local farms, ensuring freshness and purity in every batch.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="relative lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://static.wixstatic.com/media/686a4f_9e983559d7e34f3ba111f16232ad685b~mv2.png?originWidth=512&originHeight=512"
                  alt="Traditional Khoya preparation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl text-white">2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-3">
                  Traditional Khoya Making
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  Using time-honored techniques, we slowly reduce the milk to create rich, authentic Khoya with concentrated flavor.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="relative lg:mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://static.wixstatic.com/media/686a4f_7c503527242e478fa005e5c0573eebf7~mv2.png?originWidth=512&originHeight=512"
                  alt="Final ice cream preparation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-heading text-2xl text-white">3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-3">
                  Artisanal Crafting
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  Each batch is carefully churned and frozen to perfection, creating the smooth, creamy texture you'll love.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-gradient-to-r from-primary to-saffron py-20">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-relaxed">
              "Every scoop is a journey back to the flavors of home, where tradition meets indulgence."
            </p>
            <p className="font-paragraph text-xl text-white/90">
              — The Khoya Bliss Family
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
