import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
          <p>
            Viyan is committed to protecting your personal data. This policy outlines how we handle information in connection with our website development and AI integration services.
          </p>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Information Collection & Use
            </h2>
            <p>
              We collect information you provide directly through contact or inquiry forms (such as name, email, phone, and project specifications) solely to communicate with you and deliver requested services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              AI Integrations & Data Safety
            </h2>
            <p>
              For custom AI and automation systems we build:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Data routed to third-party AI APIs uses encrypted endpoints.</li>
              <li>We do not sell or leverage client data for external purposes.</li>
              <li>APIs are configured to opt-out of foundational model training pipelines.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Data Security & Sharing
            </h2>
            <p>
              We employ standard industry measures to safeguard your information. We do not sell or rent personal information to third parties, sharing data only when required by law or with hosting/service vendors assisting in operations.
            </p>
          </section>

          <section className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-8">
            <h2 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
              Contact
            </h2>
            <p>
              For any questions regarding your data, contact us at:{" "}
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

export default PrivacyPolicy;
