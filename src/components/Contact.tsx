
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Mail, Building, Clock, DollarSign } from 'lucide-react';
import EnhancedButton from './EnhancedButton';
import { functions } from '@/integrations/firebase/client';
import { httpsCallable } from 'firebase/functions';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Submitting form with data:', data);

    try {
      // Call Firebase Cloud Function
      console.log('Calling Firebase function sendEmail...');
      const sendEmail = httpsCallable(functions, 'sendEmail');
      const result = await sendEmail({
        name: data.name,
        email: data.email,
        industry: data.industry,
        message: data.message,
        source: 'contact-form'
      });

      if (result.data) {
        console.log('Email sent successfully:', result);
        setIsSuccess(true);
        reset(); // Clear form
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-6 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get Your Industry Solution</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-3">
            Ready to transform your business with custom AI solutions and expert talent tailored to your industry? Whether you need domain specialists, AI automation, or both—we deliver integrated solutions that drive growth.
          </p>
          <p className="text-sm text-muted-foreground">
            Contact us at <a href="mailto:martin@hiapply.co" className="text-accent hover:underline">martin@hiapply.co</a>
          </p>
        </div>

        <div className="glass p-8 md:p-10 rounded-2xl animate-fade-up shadow-lg">
          {isSuccess ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-muted-foreground">Your message has been sent. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <input {...register('name', { required: true })} placeholder="Name" className="w-full bg-secondary/20 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200" />
                  {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="w-full">
                  <input {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email" className="w-full bg-secondary/20 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200" />
                  {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>
              </div>
              <div>
                <select {...register('industry', { required: true })} className="w-full bg-secondary/20 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200">
                  <option value="">Select Your Industry</option>
                  <option value="healthcare">Healthcare & Medical</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="legal">Legal Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="education">Education</option>
                  <option value="technology">Technology</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && <span className="text-red-500 text-sm">Please select your industry</span>}
              </div>
              <div>
                <textarea {...register('message', { required: true })} placeholder="Message" className="w-full bg-secondary/20 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200" rows={4}></textarea>
                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EnhancedButton
                  type="submit"
                  variant="accent"
                  icon={<Send className="h-4 w-4" />}
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  className="w-full"
                >
                  Get Industry-Specific Solution
                </EnhancedButton>
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 btn-gradient-border rounded-lg font-medium"
                >
                  <DollarSign className="h-4 w-4" />
                  <span>View Pricing</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
