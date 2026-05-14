import React from "react";
import {
  FaChartLine, FaShieldAlt, FaUsers, FaArrowUp,
  FaBriefcase, FaChartPie, FaStar, FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

const TICKER_ITEMS = [
  "📈 NIFTY 50 +1.2%", "📊 BANK NIFTY +0.8%", "💹 SENSEX +1.5%",
  "🔥 RELIANCE +2.1%", "⚡ TCS +1.8%", "🚀 INFOSYS +1.3%",
  "💎 HDFC BANK +0.9%", "📈 ICICI BANK +1.6%", "🌟 WIPRO +2.4%",
  "📊 BAJAJ FINANCE +1.1%", "💹 MARUTI +0.7%", "🔥 ADANI PORTS +1.9%",
];

const services = [
  {
    title: "Intraday Stock Recommendations",
    desc: "Daily equity-cash calls for traders who believe in generating monthly income through day trading. Low Risk, High Accuracy, High Profits.",
    image: "https://appreciatewealth.com/blog/wp-content/uploads/2025/02/Intraday-Trading.jpg",
  },
  {
    title: "Delivery Stock Recommendations",
    desc: "Short/Medium/Long term recommendations for investors who believe in wealth creation over time.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Review",
    desc: "Get your portfolio reviewed from experts to know the right time to exit or continue holding positions.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

const serviceTypes = [
  { title: "Equity", icon: <FaChartLine />, desc: "Cash market trading calls" },
  { title: "Derivative", icon: <FaBriefcase />, desc: "F&O strategies & options" },
  { title: "Index", icon: <FaChartPie />, desc: "Nifty & Bank Nifty calls" },
];

const stats = [
  { number: "5000+", label: "Happy Clients" },
  { number: "95%", label: "Accuracy Rate" },
  { number: "8+", label: "Years Experience" },
  { number: "₹50Cr+", label: "Client Profits" },
];

const tickerText = TICKER_ITEMS.join("   •   ");

export default function Home({ onNavigate }) {
  return (
    <div className="bg-[#08111f] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop"
            alt="banner"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #08111f, rgba(8,17,31,0.6), #08111f)'}} />
        </div>

        {/* Orbs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-[#00d4ff]/15 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#42b2bd]/10 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px]"
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center w-full max-w-7xl mx-auto">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
              <FaStar className="text-[#00d4ff] text-xs" />
              <span className="text-[#00d4ff] text-sm font-medium">SEBI Registered Research Analyst</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
              Smart Trading <br />
              <span className="gradient-text">Research Solutions</span>
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">
              Trade Nexus provides high-accuracy recommendations in Equity,
              Derivatives, and Index Options — backed by expert analysis.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <button
                onClick={() => onNavigate("contact")}
                className="btn-primary relative bg-gradient-to-r from-[#00d4ff] to-[#42b2bd] hover:from-[#42b2bd] hover:to-[#00d4ff] transition-all duration-300 px-8 py-4 rounded-full font-bold text-black shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              >
                Get Started Free
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="btn-secondary border border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-300 px-8 py-4 rounded-full font-bold text-[#00d4ff]"
              >
                Learn More
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex gap-6 mt-12 flex-wrap">
              {[{ v: "5000+", l: "Clients" }, { v: "95%", l: "Accuracy" }, { v: "8+ Yrs", l: "Experience" }].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-extrabold text-[#00d4ff]">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#00d4ff] blur-[120px] opacity-20 rounded-full" />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#42b2bd] blur-[80px] opacity-30 rounded-full" />

            <div className="relative rounded-3xl overflow-hidden border border-[#00d4ff]/30 shadow-[0_0_60px_rgba(0,212,255,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop"
                alt="trading"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/70 to-transparent" />
            </div>

            {/* Floating profit card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden sm:block absolute bottom-8 left-8 bg-[#0d1b2d]/95 backdrop-blur-md p-5 rounded-2xl border border-[#00d4ff]/30 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                  <FaArrowUp className="text-[#00d4ff] text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Profit Growth</h3>
                  <p className="text-sm text-[#00d4ff]">+127% YoY</p>
                </div>
              </div>
            </motion.div>

            {/* Floating clients card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="hidden sm:block absolute top-8 right-8 bg-[#0d1b2d]/95 backdrop-blur-md p-4 rounded-2xl border border-[#42b2bd]/30 shadow-xl"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00d4ff]">5000+</p>
                <p className="text-xs text-gray-400">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-strip">
        <span className="ticker-content">
          {tickerText}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{tickerText}
        </span>
      </div>

      {/* STATS BAR */}
      <section className="py-16 px-6 lg:px-20 bg-[#0a1525]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="stat-card"
            >
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* WHO ARE WE */}
      <section className="py-24 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="home-image-container"
          >
            <div className="image-glow" />
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="who are we"
              className="home-section-img"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-heading">Who Are We?</h2>
            <div className="space-y-5 mt-8">
              {[
                "Trade Nexus is a financial market research company generating intraday and delivery calls in Stock cash and F&O in NSE & BSE.",
                "Our calling facility ensures instant message delivery without any loss of time, so clients get sufficient time to execute trades for maximum profits.",
                "We provide recommendations in Equity, Equity Derivatives and Index Options with authentic advice, support & service.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-[#00d4ff] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg leading-8">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* MARKET ANALYTICS BANNER */}
      <section className="py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto rounded-[40px] border border-[#00d4ff]/20 p-10 relative overflow-hidden" style={{background: 'linear-gradient(to right, rgba(0,212,255,0.1), rgba(66,178,189,0.08), rgba(0,212,255,0.1))'}}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_70%)]" />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#00d4ff]">Market Growth Analytics</h2>
              <p className="text-gray-300 mt-5 text-lg max-w-2xl leading-8">
                Live market trend analysis with powerful research-backed trading strategies and smart investment planning.
              </p>
              <button
                onClick={() => onNavigate("services")}
                className="mt-6 bg-[#00d4ff]/10 border border-[#00d4ff]/40 hover:bg-[#00d4ff]/20 transition-all px-6 py-3 rounded-full text-[#00d4ff] font-semibold"
              >
                Explore Services →
              </button>
            </div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <FaChartLine className="text-[160px] text-[#00d4ff] drop-shadow-[0_0_30px_rgba(0,212,255,0.6)]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a1525]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">What We Provide</h2>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Expert research-backed recommendations tailored to your trading style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="service-card-home bg-[#0d1b2d] rounded-3xl overflow-hidden border border-[#00d4ff]/15 shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2d] to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-7 text-sm">{item.desc}</p>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="mt-5 text-[#00d4ff] text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {serviceTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="service-type-card bg-[#0d1b2d] p-12 rounded-3xl text-center border border-[#00d4ff]/15 relative"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#42b2bd]/10 border border-[#00d4ff]/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  <span className="text-4xl text-[#00d4ff]">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT US */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a1525]">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-heading">About Us</h2>
            <div className="space-y-5 mt-8">
              <p className="text-gray-300 text-lg leading-9">
                Trade Nexus is a financial market research and consulting company. We generate intraday as well as delivery calls in Stock cash and F&O in NSE & BSE, Commodities including bullions, metals & commodities traded in MCX and NCDEX.
              </p>
              <p className="text-gray-300 text-lg leading-9">
                Our calling facility ensures instant message delivery without any delay so clients can execute their trades efficiently and fetch maximum profits.
              </p>
            </div>
            <button
              onClick={() => onNavigate("about")}
              className="mt-8 bg-gradient-to-r from-[#00d4ff] to-[#42b2bd] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all"
            >
              Read More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="home-image-container"
          >
            <div className="image-glow" />
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              className="home-section-img"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mx-auto">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Good Risk Reward Ratio",
                desc: "Good strategy with good Risk reward ratio (min 1:2 RR ratio). We ensure every call is backed by solid analysis.",
              },
              {
                icon: <FaUsers />,
                title: "Risk Less, Gain More",
                desc: "No need to risk big to gain big. With good RR ratio you can always risk less to gain big — our proven approach.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="reason-card bg-[#0d1b2d] p-10 rounded-3xl border border-[#00d4ff]/15"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#42b2bd]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,212,255,0.15)]">
                  <span className="text-3xl text-[#00d4ff]">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-8">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a1525]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-red-500/20 rounded-[40px] p-10" style={{background: 'linear-gradient(to right, rgba(239,68,68,0.06), rgba(249,115,22,0.06))'}}
          >
            <h2 className="text-3xl font-bold text-red-400 mb-8 flex items-center gap-3">
              ⚠️ Important Notice
            </h2>
            <div className="space-y-5 text-gray-300 leading-9 text-base">
              {[
                "[1] SEBI Registration Number: INH200004826.",
                "[2] Official website: www.tradenexus.com",
                "[3] We Do Not Offer Any Assured / Guaranteed / Profit Sharing / Demat Account / Broking Services / Portfolio Management Services.",
                "[4] We accept payments only in registered BANK ACCOUNT.",
                "[5] Investing In The Market Is Subject To Market Risk. Read all disclaimer and T&C carefully before investing.",
              ].map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <p className="text-[#00d4ff] font-semibold mt-4">
                🎉 We are happy to announce that our company has undergone a rebranding initiative and changed its name from Finnovest Advisory to Trade Nexus effective from 24th Aug 2023.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#00d4ff]/10 to-[#42b2bd]/10 border border-[#00d4ff]/25 rounded-[40px] p-8 sm:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Start <span className="gradient-text">Trading Smart?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-8">
              Join 5000+ traders who trust Trade Nexus for expert market recommendations.
            </p>
            <div className="flex gap-5 justify-center flex-wrap">
              <button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-[#00d4ff] to-[#42b2bd] text-black font-bold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all"
              >
                Get Started Today
              </button>
              <button
                onClick={() => onNavigate("pricing")}
                className="border border-[#00d4ff]/50 text-[#00d4ff] font-bold px-10 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all"
              >
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
