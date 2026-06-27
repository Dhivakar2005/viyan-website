import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = "June 26, 2026";

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 pt-28 pb-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-primary/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-violet-accent/5 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-violet-primary dark:text-violet-accent hover:underline mb-8 font-medium group transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header Block */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
          <p>
            By accessing or using the Viyan website (viyan.in) and services, you agree to comply with and be bound by these Terms of Service.
          </p>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Intellectual Property
            </h2>
            <p>
              The design, codebase, content, and branding of this Site are owned by us. For custom development client projects, the intellectual property of the custom code transfers to the client upon full payment of project fees as outlined in the Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Service Delivery
            </h2>
            <p>
              All service deliverables, schedules, and costs are governed by individual client agreements. While we implement intelligent automations, Viyan is not responsible for the performance, reliability, or parameters of third-party AI APIs (such as OpenAI or Google Gemini).
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Limitation of Liability
            </h2>
            <p>
              Viyan and its operators will not be liable for any indirect, consequential, or special damages arising out of your use of the Site or services. Our maximum liability is restricted to the amount paid for the specific service in dispute.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India, and any disputes shall be settled exclusively in courts situated in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-8">
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Contact
            </h2>
            <p>
              For legal inquiries, contact us at:{" "}
              <a href="mailto:info@viyan.in" className="text-violet-primary dark:text-violet-accent hover:underline">
                info@viyan.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
