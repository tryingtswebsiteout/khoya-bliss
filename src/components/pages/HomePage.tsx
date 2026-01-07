// HPI 1.6-G
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Award, ShoppingBag, Star, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// --- Canonical Data Sources ---
const FEATURES_DATA = [
  {
    icon: Sparkles,
    title: 'Pure Khoya',
    description: 'Made with authentic milk solids for that rich, traditional taste',
  },
  {
    icon: Heart,
    title: 'Crafted with Love',
    description: 'Every batch is made with care and passion for perfection',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest ingredients make it into our ice cream',
  },
];

const PRODUCTS_DATA = [
  {
    id: 'family-pack',
    name: '1L Family Pack',
    price: '500 PKR',
    description: 'Perfect for home enjoyment',
    tag: 'Home Favorite',
    imageId: 'product-showcase' 
  },
  {
    id: 'bulk-pack',
    name: '10L Bulk Pack',
    price: '3,000 PKR',
    description: 'Ideal for events and celebrations',
    tag: 'Event Special',
    imageId: 'hero-ice-cream' // Reusing hero image for variety in the list
  }
];

// --- Utility Components ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle the transition class
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-1000 ease-out ${className || ''}`}>{children}</div>;
};

const ParallaxImage = ({ src, alt, className, speed = 0.5 }: { src: string, alt: string, className?: string, speed?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
                <Image src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
};

const StickySection = () => {
    return (
        <div className="relative w-full max-w-[120rem] mx-auto px-4 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="relative h-fit lg:sticky lg:top-32 self-start">
                    <AnimatedElement>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
                            <Image 
                                src="https://static.wixstatic.com/media/686a4f_dc26ac7efdc046729df9598e11a539d0~mv2.png?originWidth=768&originHeight=960" 
                                alt="Close-up of creamy Khoya ice cream texture" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                <span className="font-heading text-white text-5xl mb-2">Pure Indulgence</span>
                                <p className="text-white/90 font-paragraph text-lg">Hand-churned perfection in every scoop.</p>
                            </div>
                        </div>
                    </AnimatedElement>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-saffron/20 rounded-full blur-2xl" />
                    <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
                </div>

                <div className="flex flex-col gap-32 pt-10 lg:pt-0">
                    {PRODUCTS_DATA.map((product, index) => (
                        <div key={product.id} className="group">
                            <AnimatedElement delay={index * 200}>
                                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-secondary/20 hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary text-white px-6 py-3 rounded-bl-3xl font-heading text-xl">
                                        {product.tag}
                                    </div>
                                    
                                    <h3 className="font-heading text-5xl text-toasted-caramel mb-4">{product.name}</h3>
                                    <div className="flex items-baseline gap-4 mb-6">
                                        <span className="text-4xl font-bold text-primary">{product.price}</span>
                                        <span className="text-muted-foreground font-paragraph">per pack</span>
                                    </div>
                                    
                                    <p className="text-xl text-foreground/80 font-paragraph leading-relaxed mb-8">
                                        {product.description}. Experience the density and richness that only true Khoya can provide.
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Link to="/store" className="flex-1">
                                            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg font-paragraph shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                                Order This Batch <ShoppingBag className="ml-2 w-5 h-5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    ))}
                    
                    <AnimatedElement>
                        <div className="bg-saffron/10 rounded-[2.5rem] p-10 border-2 border-dashed border-saffron/30 text-center">
                            <h4 className="font-heading text-3xl text-toasted-caramel mb-4">Need More?</h4>
                            <p className="font-paragraph text-lg text-foreground mb-6">
                                Planning a massive wedding or corporate event? We handle bulk orders with special care.
                            </p>
                            <Link to="/contact">
                                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full h-12 px-8 font-paragraph text-lg">
                                    Contact for Wholesale
                                </Button>
                            </Link>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---

export default function HomePage() {
  // Custom cursor effect state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full bg-background min-h-screen overflow-clip selection:bg-saffron selection:text-white">
      <style>
        {`
          .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .text-stroke {
            -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          }
          .clip-drip {
            clip-path: path('M0,0 L100%,0 L100%,85% C90%,95% 85%,85% 80%,95% C70%,100% 60%,90% 50%,100% C40%,90% 30%,100% 20%,90% C10%,95% 5%,85% 0,90% Z');
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <ParallexImage 
                src="https://static.wixstatic.com/media/686a4f_25ae0db66d9c45e5b6a00cf5253699d2~mv2.png?originWidth=1920&originHeight=1024"
                alt="Panda Ice Cream Hero Background"
                className="w-full h-full"
                speed={0.3}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
                    <Star className="w-4 h-4 text-saffron fill-saffron" />
                    <span className="font-paragraph text-sm tracking-wider uppercase">Authentic Traditional Recipe</span>
                    <Star className="w-4 h-4 text-saffron fill-saffron" />
                </div>
                
                <h1 className="font-heading text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.8] text-white drop-shadow-2xl mb-6 mix-blend-overlay opacity-90">
                    Panda Ice Cream
                </h1>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-saffron mb-12 drop-shadow-lg">
                    A Taste of Tradition
                </h2>
                
                <p className="font-paragraph text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Indulge in the rich, creamy goodness of authentic Khoya ice cream. 
                    Every scoop is a journey back to the sweet nostalgia of home.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/store">
                        <Button className="h-16 px-10 rounded-full bg-primary hover:bg-saffron text-white text-xl font-paragraph transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(228,179,99,0.6)]">
                            Treat Yourself
                        </Button>
                    </Link>
                    <Link to="/our-story">
                        <Button variant="outline" className="h-16 px-10 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary text-xl font-paragraph bg-transparent transition-all duration-300">
                            Our Story
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <span className="font-paragraph text-sm uppercase tracking-widest">Scroll to Taste</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Introduction / Philosophy Section */}
      <section className="relative py-32 w-full max-w-[120rem] mx-auto px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
                <AnimatedElement>
                    <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden rotate-[-3deg] border-4 border-white shadow-2xl">
                        <Image 
                            src="https://static.wixstatic.com/media/686a4f_6abff257b9454e18a6824db21b9b22f8~mv2.png?originWidth=704&originHeight=960" 
                            alt="Spoonful of Khoya Ice Cream"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </AnimatedElement>
            </div>
            
            <div className="md:col-span-7 md:pl-12">
                <AnimatedElement delay={200}>
                    <h3 className="font-heading text-6xl md:text-8xl text-toasted-caramel mb-8">
                        The Art of <span className="text-primary">Khoya</span>
                    </h3>
                    <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-paragraph leading-relaxed">
                        <p>
                            Khoya isn't just an ingredient; it's the soul of South Asian desserts. 
                            Made by slowly simmering milk until it thickens into rich, granular solids, 
                            it brings a depth of flavor that regular cream simply cannot match.
                        </p>
                        <p>
                            At Khoya Bliss, we don't cut corners. We honor the tradition by using 
                            100% pure milk solids, creating a texture that is dense, granular, and 
                            impossibly creamy. It's not just ice cream; it's a celebration of heritage.
                        </p>
                    </div>
                    
                    <div className="mt-12 flex gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mb-3 text-saffron">
                                <Utensils className="w-8 h-8" />
                            </div>
                            <span className="font-heading text-xl text-toasted-caramel">Slow Cooked</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mb-3 text-saffron">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <span className="font-heading text-xl text-toasted-caramel">Pure Solids</span>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </div>
      </section>

      {/* Sticky Product Showcase (The Cascade) */}
      <section className="bg-secondary/10 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        
        <div className="text-center pt-32 pb-10">
            <AnimatedElement>
                <h2 className="font-heading text-6xl md:text-8xl text-primary mb-6">Order Your Batch</h2>
                <p className="font-paragraph text-xl text-foreground/70 max-w-2xl mx-auto">
                    Choose your perfect size. Whether it's a quiet evening or a grand celebration, we have the bliss you need.
                </p>
            </AnimatedElement>
        </div>

        <StickySection />
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Grid */}
      <section className="py-32 w-full max-w-[120rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES_DATA.map((feature, idx) => (
                <AnimatedElement key={idx} delay={idx * 150} className="h-full">
                    <div className="group h-full bg-white rounded-[3rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/20">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-saffron rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center mb-8 shadow-lg">
                            <feature.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="font-heading text-3xl text-toasted-caramel mb-4">{feature.title}</h3>
                        <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </AnimatedElement>
            ))}
        </div>
      </section>

      {/* Marquee / Social Proof */}
      <div className="w-full bg-toasted-caramel py-12 overflow-hidden -rotate-1 scale-105 shadow-2xl relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center mx-8">
                    <span className="font-heading text-5xl text-white/90">Pure Khoya Bliss</span>
                    <Star className="w-8 h-8 text-saffron ml-8 fill-saffron" />
                </div>
            ))}
        </div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `}</style>
      </div>

      {/* Final CTA Section */}
      <section className="relative py-40 w-full overflow-hidden">
        <div className="absolute inset-0">
            <Image 
                src="https://static.wixstatic.com/media/686a4f_1aef04ac099846ec89b92cfaac0baa7d~mv2.png?originWidth=1920&originHeight=1024"
                alt="Background Texture"
                className="w-full h-full object-cover opacity-10"
            />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
            <AnimatedElement>
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-[4rem] p-12 md:p-20 shadow-2xl border border-white/50">
                    <h2 className="font-heading text-6xl md:text-8xl text-primary mb-8">
                        Ready to Melt?
                    </h2>
                    <p className="font-paragraph text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto">
                        Join thousands of happy customers who have discovered the authentic taste of Khoya ice cream.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/store">
                            <Button className="h-16 px-12 rounded-full bg-primary hover:bg-saffron text-white text-xl font-paragraph shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                Order Now
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="h-16 px-12 rounded-full border-2 border-toasted-caramel text-toasted-caramel hover:bg-toasted-caramel hover:text-white text-xl font-paragraph bg-transparent transition-all duration-300">
                                Wholesale Inquiry
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedElement>
        </div>
      </section>
    </div>
  );
}