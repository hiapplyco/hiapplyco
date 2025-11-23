import { functions } from '@/integrations/firebase/client';
import { httpsCallable } from 'firebase/functions';

export async function testEmailFunction() {
  console.log('Testing email function...');

  try {
    const sendEmail = httpsCallable(functions, 'sendEmail');
    const result = await sendEmail({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message',
      source: 'test'
    });

    console.log('Success response:', result.data);
    return { success: true, data: result.data };
  } catch (err) {
    console.error('Caught error:', err);
    return { success: false, error: err };
  }
}

// Make it available globally for testing
if (typeof window !== 'undefined') {
  (window as any).testEmailFunction = testEmailFunction;
}