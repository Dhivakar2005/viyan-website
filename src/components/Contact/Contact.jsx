import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm as useHookForm } from 'react-hook-form';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../utils/emailjs.config';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    lines: ['viyantechnologiesteam@gmail.com'],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    lines: ['+91 98765 43210', 'Mon–Fri, 9am–6pm IST'],
  },
];

const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useHookForm();

  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

  const messageValue = watch('message', '');

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      // Build the template params that match your EmailJS template variables
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        company: data.company || 'Not provided',
        service: data.service,
        budget: data.budget || 'Not specified',
        message: data.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: data.email,
        // Added compatibility variables based on EmailJS template screenshot:
        name: data.name,
        email: data.email,
        title: data.service,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus(null), 7000);
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-violet-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Contact Information ── */}
          <div className="lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 flex flex-col justify-center lg:h-full"
            >
              <div>
                <h2 className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3">
                  Get In Touch
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Let's Build Something{' '}
                  <span className="text-gradient">Amazing Together</span>
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Ready to transform your digital presence? Reach out to us for a free consultation
                  and let's discuss how we can help your business grow.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-wrap gap-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 min-w-[240px]">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      {item.lines.map((line) => (
                        <p key={line} className="text-slate-600 dark:text-slate-400 text-sm break-all sm:break-normal sm:whitespace-nowrap">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-slate-200 dark:border-slate-800 lg:h-full flex flex-col justify-between"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow ${
                        errors.name
                          ? 'border-red-400 dark:border-red-500'
                          : 'border-slate-300 dark:border-slate-700'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow ${
                        errors.email
                          ? 'border-red-400 dark:border-red-500'
                          : 'border-slate-300 dark:border-slate-700'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Service Required */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone <span className="text-slate-400 text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Please select a service' })}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow appearance-none cursor-pointer ${
                        errors.service
                          ? 'border-red-400 dark:border-red-500'
                          : 'border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="E-Commerce">E-Commerce Solution</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message with character counter */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <span
                      className={`text-xs ${
                        messageValue.length > MAX_MESSAGE_LENGTH * 0.9
                          ? 'text-amber-500'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {messageValue.length}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    maxLength={MAX_MESSAGE_LENGTH}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Please write at least 20 characters' },
                    })}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow resize-none ${
                      errors.message
                        ? 'border-red-400 dark:border-red-500'
                        : 'border-slate-300 dark:border-slate-700'
                    }`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-violet-primary hover:bg-violet-secondary text-white rounded-xl font-medium transition-all shadow-lg shadow-violet-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending your message…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm text-center flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={18} />
                    Message sent! We'll get back to you within 24 hours.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={18} />
                    Oops! Something went wrong. Please email us directly at{' '}
                    <a href="mailto:viyantechnologiesteam@gmail.com" className="underline font-medium">
                      viyantechnologiesteam@gmail.com
                    </a>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
