import http from '@services/httpService';
import endpoints from '@services/endpoint';

export const postOTP = async (data: body.OTPRequest) => {
  try {
    console.log('🔍 Requesting OTP via proxy:', { 
      endpoint: endpoints.auth.request_otp, 
      data
    });
    
    const response = await http.post(endpoints.auth.request_otp, data);
    
    console.log('✅ OTP Request Success:', response);
    return response;
  } catch (error) {
    console.error('❌ OTP Request Failed:', error);
    throw error;
  }
};

export const verifyOTP = async (data: body.OTPVerify) => {
  try {
    console.log('🔍 Verifying OTP via proxy:', { 
      endpoint: endpoints.auth.verify_otp, 
      data
    });
    
    const response = await http.post(endpoints.auth.verify_otp, data);
    
    console.log('✅ OTP Verification Success:', response);
    return response;
  } catch (error) {
    console.error('❌ OTP Verification Failed:', error);
    throw error;
  }
};
