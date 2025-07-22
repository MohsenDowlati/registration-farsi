declare namespace body {
  interface OTPRequest {
    phoneNumber: string;
    purpose: string;
  }

  type OTPVerify = {
    phoneNumber: string;
    otpCode: string;
    purpose: string;
  };

  type SignUp = {
    temporaryToken: string;
    phoneNumber: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  };
}
