import React, { useState } from 'react';
import { Send, DollarSign } from 'lucide-react';
import EnhancedButton from './EnhancedButton';
import { functions } from '@/integrations/firebase/client';
import { httpsCallable } from 'firebase/functions';

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
      const sendEmail = httpsCallable(functions, 'sendEmail');
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message || 'Quick consultation request from CTA',
        source: 'quick-cta'
      });

      // Firebase functions throw on error, so if we get here it's success
      if (result.data) {
        alert('Thank you! We\'ll be in touch within 24 hours.');
        setShowForm(false);
        setFormData({ name: '', email: '', message: '' });
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EnhancedButton
          onClick={handleQuickContact}
          variant="accent"
          icon={<Send className="h-4 w-4" />}
          isLoading={isSubmitting}
          loadingText="Sending..."
          className="w-full"
        >
          Schedule SMB Consultation
        </EnhancedButton>
        <a
          href="#pricing"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 btn-gradient-border rounded-lg font-medium"
        >
          <DollarSign className="h-4 w-4" />
          <span>View Pricing</span>
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
            className="w-full bg-background/50 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background/50 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200"
          />
          <textarea
            placeholder="Brief message (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-background/50 border-2 border-border/80 focus:border-accent rounded-lg px-4 py-3 outline-none transition-colors duration-200"
            rows={3}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EnhancedButton
          onClick={handleQuickContact}
          variant="accent"
          icon={<Send className="h-4 w-4" />}
          isLoading={isSubmitting}
          loadingText="Sending..."
          className="w-full"
        >
          {showForm ? 'Send Message' : 'Schedule SMB Consultation'}
        </EnhancedButton>
        <a
          href="#pricing"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 btn-gradient-border rounded-lg font-medium"
        >
          <DollarSign className="h-4 w-4" />
          <span>View Pricing</span>
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;