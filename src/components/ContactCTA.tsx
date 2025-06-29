import React, { useState } from 'react';
import { Send, DollarSign } from 'lucide-react';
import EnhancedButton from './EnhancedButton';
import { supabase } from '@/integrations/supabase/client';

interface ContactCTAProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

const ContactCTA = ({ 
  title = "Ready to Transform Your Business?",
  description = "Schedule a free consultation to see how AI can help your SMB",
  compact = false
}: ContactCTAProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleQuickContact = async () => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message || 'Quick consultation request from CTA',
          source: 'quick-cta'
        }
      });

      if (!error) {
        alert('Thank you! We\'ll be in touch within 24 hours.');
        setShowForm(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <EnhancedButton
          onClick={handleQuickContact}
          variant="accent"
          icon={<Send className="h-4 w-4" />}
          isLoading={isSubmitting}
          loadingText="Sending..."
          className="gradient-purple-green text-white hover:gradient-purple-green-hover"
        >
          Schedule SMB Consultation
        </EnhancedButton>
        <a
          href="https://www.apply.codes/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-sm text-foreground border border-border/50 rounded-lg font-medium hover:bg-background/90 transition-all duration-200"
        >
          <DollarSign className="h-4 w-4" />
          View Pricing
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {showForm && (
        <div className="mb-6 space-y-4 animate-fade-in">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3"
          />
          <textarea
            placeholder="Brief message (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3"
            rows={3}
          />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4">
        <EnhancedButton
          onClick={handleQuickContact}
          variant="accent"
          icon={<Send className="h-4 w-4" />}
          isLoading={isSubmitting}
          loadingText="Sending..."
          className="gradient-purple-green text-white hover:gradient-purple-green-hover"
        >
          {showForm ? 'Send Message' : 'Schedule SMB Consultation'}
        </EnhancedButton>
        <a
          href="https://www.apply.codes/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-sm text-foreground border border-border/50 rounded-lg font-medium hover:bg-background/90 transition-all duration-200"
        >
          <DollarSign className="h-4 w-4" />
          View Pricing
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;