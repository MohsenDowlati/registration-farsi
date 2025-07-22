// Utility to help debug API calls in development
export const debugApiCall = (url: string, method: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`🔍 API Call: ${method.toUpperCase()} ${url}`);
    console.log('📝 Request Data:', data);
    console.log('🌐 Environment:', typeof window !== 'undefined' ? 'Client' : 'Server');
    console.log('🕐 Timestamp:', new Date().toISOString());
    console.groupEnd();
  }
};

export const debugApiResponse = (url: string, response: any, error?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`📥 API Response: ${url}`);
    if (error) {
      console.error('❌ Error:', error);
      if (error.response) {
        console.error('📊 Response Status:', error.response.status);
        console.error('📝 Response Data:', error.response.data);
      }
    } else {
      console.log('✅ Success:', response);
    }
    console.groupEnd();
  }
};
