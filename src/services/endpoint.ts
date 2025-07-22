const endpoints = {
  auth: {
    request_otp: '/auth/otp/request',
    verify_otp: '/auth/otp/verify',
    register: '/auth/register',
    profile: '/auth/profile',
  },
  logout: {
    logout: '/auth/logout',
  },
  login: {
    login: '/auth/login',
  },
  refresh: {
    refresh: '/auth/refresh-token',
  },
};

export default endpoints;
