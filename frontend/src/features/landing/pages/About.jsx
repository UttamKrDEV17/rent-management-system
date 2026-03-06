import React from "react";
import aboutImg from "../../../assets/about.png";
import { Eye, Rocket, Smartphone, Zap } from "lucide-react";
import {Link} from "react-router-dom"

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="@container">
        <div className="p-4 md:p-8">
          <div
            className="relative flex min-h-112.5 md:min-h-150 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center"
            data-alt="Modern glass skyscraper architecture against blue sky"
            style={{
              backgroundImage: `linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)),url(${aboutImg})`,
            }}
          >
            <div className="max-w-3xl flex flex-col gap-4">
              <span className="inline-block self-center px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                Established 2026
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                Redefining Property Management
              </h1>
              <p className="text-slate-200 text-base md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                We're on a mission to simplify the complex world of real estate
                operations with smart technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket className="text-primary mb-4 mx-auto" size={48} />
          <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight mb-6">
            Our Mission
          </h2>
          <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed italic font-primary">
            "To create a seamless experience for landlords and tenants through
            automation, transparency, and accessible technology."
          </p>
        </div>
      </section>
      {/* Why Sangrah section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-navy text-3xl font-bold mb-4">Why Sangrah?</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* card1 */}
            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Eye className="text-primary group-hover:text-white" size={30} />

              </div>
              <h3 className="text-navy text-xl font-bold mb-3">Transparency</h3>
              <p className="text-slate-600 leading-relaxed">
                Full visibility into utility tracking and rent schedules. No
                hidden fees, no surprises for tenants or owners.
              </p>
            </div>
            {/* card2 */}
            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Zap className="text-primary group-hover:text-white" size={30} />
              </div>
              <h3 className="text-navy text-xl font-bold mb-3">Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">
                Automated rent increases and payment processing saves hours of
                manual administrative work every month.
              </p>
            </div>
            {/* card3 */}
            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Smartphone className="text-primary group-hover:text-white" size={30} />
              </div>
              <h3 className="text-navy text-xl font-bold mb-3">
                Accessibility
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A mobile-first portal designed for the modern user. Manage your
                home or your portfolio from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-100">
          <h2 className="text-navy text-3xl font-bold mb-6">
            Ready to transform your properties?
          </h2>
          <Link to="/signup/owner" className="bg-primary hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg inline-block text-center shadow-lg transition-all active:scale-95">
            Start Your Free Trial
          </Link>
          <p className="mt-6 text-slate-500 text-sm">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
