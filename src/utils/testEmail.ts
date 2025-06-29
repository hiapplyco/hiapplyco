import { supabase } from '@/integrations/supabase/client';

export async function testEmailFunction() {
  console.log('Testing email function...');
  
  try {
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        source: 'test'
      }
    });
    
    if (error) {
      console.error('Error response:', error);
      return { success: false, error };
    }
    
    console.log('Success response:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Caught error:', err);
    return { success: false, error: err };
  }
}

// Make it available globally for testing
if (typeof window !== 'undefined') {
  (window as any).testEmailFunction = testEmailFunction;
}