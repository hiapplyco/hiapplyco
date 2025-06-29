
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Mail, Building, Clock } from 'lucide-react';
import EnhancedButton from './EnhancedButton';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
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
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB AI Consultation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your small or medium business with locally-optimized AI solutions?
          </p>
        </div>
        
        <div className="glass p-8 md:p-10 rounded-2xl animate-fade-up shadow-lg">
          {isSuccess ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-muted-foreground">Your message has been sent. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full">
                  <input {...register('name', { required: true })} placeholder="Name" className="w-full bg-secondary/20 border-none rounded-lg px-4 py-3" />
                  {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="w-full">
                  <input {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email" className="w-full bg-secondary/20 border-none rounded-lg px-4 py-3" />
                  {errors.email && <span className="text-red-500 text-sm">Please enter a valid email</span>}
                </div>
              </div>
              <div>
                <textarea {...register('message', { required: true })} placeholder="Message" className="w-full bg-secondary/20 border-none rounded-lg px-4 py-3" rows={4}></textarea>
                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div className="flex justify-center sm:justify-start">
                <EnhancedButton
                  type="submit"
                  variant="accent"
                  icon={<Send className="h-4 w-4" />}
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                >
                  Schedule SMB Consultation
                </EnhancedButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
