import http from '@services/httpService';
import config from '@services/config.json';
import endpoints from '@services/endpoint';

export const postOTP = (data: body.OTPRequest) => {
  return http.post(endpoints.auth.request_otp, data);
};

export const verifyOTP = (data: body.OTPVerify) => {
  return http.post(config['auth-api'] + endpoints.auth.verify_otp, data);
};
