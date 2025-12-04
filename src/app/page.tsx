"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Shirt,
  Eye,
  Users,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-background to-purple-950/30 animate-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted">AI-powered apps for everyday life</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Making everyday
            <br />
            life easier
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Smart apps that learn what you need and help you get it done.
            From meal planning to wardrobe management, we&apos;re simplifying the routines that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-background font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Explore our apps
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-foreground font-medium hover:bg-white/5 transition-all duration-300"
            >
              Our approach
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "Gather Kitchen",
      description: "Your intelligent meal planning and grocery companion. Order groceries, plan meals, generate shopping lists, auto manage your pantry, and generate allergy friendly recipes tailored to your preferences.",
      icon: ChefHat,
      status: "Beta",
      statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
      link: "https://gatherkitchen.app",
      gradient: "from-[#2F6B55]/30 to-emerald-500/20",
      iconColor: "text-emerald-400",
    },
    {
      name: "Gather Closet",
      description: "Smart wardrobe management with virtual try-on. Organize your clothing, get outfit suggestions, and visualize new pieces before you buy.",
      icon: Shirt,
      status: "Coming Soon",
      statusColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      link: null,
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
  ];

  return (
    <section id="products" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            Our Products
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Tools for everyday moments
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-2xl mx-auto">
            Each app is designed to simplify a specific aspect of daily life,
            powered by AI that learns and adapts to you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon;
            const CardWrapper = product.link ? motion.a : motion.div;

            return (
              <CardWrapper
                key={product.name}
                href={product.link || undefined}
                target={product.link ? "_blank" : undefined}
                rel={product.link ? "noopener noreferrer" : undefined}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative p-8 rounded-2xl bg-card border border-card-border overflow-hidden ${product.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Card gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-white/5 ${product.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-muted leading-relaxed mb-6">{product.description}</p>

                  {product.link && (
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <span>Try it now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    {
      icon: Sparkles,
      title: "Deeply Personal",
      description: "Our AI learns your preferences, habits, and needs to deliver recommendations that actually make sense for your life.",
    },
    {
      icon: Eye,
      title: "Smarter Over Time",
      description: "The more you use our apps, the better they understand you—creating experiences tailored specifically to you.",
    },
    {
      icon: Users,
      title: "Rewarding Engagement",
      description: "Your participation makes our platform better, and we believe in sharing that value back with you.",
    },
  ];

  return (
    <section id="philosophy" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-medium mb-4">
            Our Philosophy
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Understanding what you really want
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-2xl mx-auto">
            We&apos;re building AI that truly gets you—your tastes, your routines, your goals.
            Better insights mean better recommendations and real rewards for our community.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                variants={fadeInUp}
                className="text-center p-8"
              >
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted leading-relaxed">{principle.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-card border border-card-border"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">A better experience for everyone</h3>
            <p className="text-muted leading-relaxed">
              When we understand what people actually need, everyone wins. You get smarter
              recommendations and rewards, while helping shape products and services that
              better serve real people like you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold">Gather Labs</span>
          </div>

          <p className="text-muted text-sm">
            &copy; {currentYear} Gather Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Philosophy />
      <Footer />
    </main>
  );
}
