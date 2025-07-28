# Sign UP AND LOGIN 🚀

A modern Progressive Web Application (PWA) built with Next.js, TypeScript, and Tailwind CSS. Danamit provides a comprehensive authentication system with OTP verification, user registration, and modern UI components.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 Authentication System
- **OTP Verification**: Secure phone number verification with SMS OTP
- **User Registration**: Complete user onboarding flow
- **Google Login Integration**: Social authentication support
- **JWT Token Management**: Secure token-based authentication

### 📱 Progressive Web App
- **Offline Support**: Works without internet connection
- **App-like Experience**: Install on mobile and desktop
- **Service Worker**: Background sync and caching
- **Responsive Design**: Mobile-first approach

### 🎨 Modern UI/UX
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components
- **Toast Notifications**: User feedback system
- **Persian/RTL Support**: Right-to-left language support

### 🏗️ State Management
- **Redux Toolkit**: Efficient state management
- **React Redux**: React bindings for Redux
- **Persistent Storage**: State persistence across sessions

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa) - PWA support for Next.js
- **Code Quality**: ESLint + Prettier - Code formatting and linting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 14.6.0 or higher
- **npm**: Version 6.x or higher
- **Git**: For cloning the repository

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd danamit
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://danamit-auth-service.liara.run/api

# Google OAuth (Optional)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# Development
NODE_ENV=development
```

### API Configuration

The API configuration is managed in `src/services/config.json`:

```json
{
  "auth-api": "/api/proxy"
}
```

### Next.js Configuration

The project uses a proxy configuration in `next.config.js` to handle CORS issues:

```javascript
async rewrites() {
  return [
    {
      source: '/api/proxy/:path*',
      destination: 'https://danamit-auth-service.liara.run/api/:path*',
    },
  ];
},
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

### Other Scripts

- **Linting**: `npm run lint`
- **Fix Linting**: `npm run lint:fix`
- **Clean Cache**: `npm run clean`

## 📁 Project Structure

```
danamit/
├── public/                 # Static assets
│   ├── icons/             # PWA icons
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # React components
│   │   ├── main/         # Main page components
│   │   ├── register/     # Registration components
│   │   └── email/        # Email components
│   ├── pages/            # Next.js pages
│   │   ├── api/          # API routes (proxy)
│   │   ├── register/     # Registration pages
│   │   └── login/        # Login pages
│   ├── services/         # API services
│   │   ├── auth/         # Authentication services
│   │   ├── config.json   # API configuration
│   │   ├── endpoint.ts   # API endpoints
│   │   └── httpService.ts # HTTP client setup
│   ├── store/            # Redux store
│   │   ├── slices/       # Redux slices
│   │   └── store.ts      # Store configuration
│   ├── styles/           # CSS modules
│   ├── svg/              # SVG components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── types/            # TypeScript types
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📡 API Documentation

### Authentication Endpoints

#### Request OTP
```typescript
POST /auth/otp/request
{
  "phoneNumber": "string",
  "purpose": "registration" | "login"
}
```

#### Verify OTP
```typescript
POST /auth/otp/verify
{
  "phoneNumber": "string",
  "otpCode": "string",
  "purpose": "registration" | "login"
}
```

#### User Registration
```typescript
POST /auth/register
{
  "temporaryToken": "string",
  "phoneNumber": "string",
  "username": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "password": "string"
}
```

### Usage Example

```typescript
import { postOTP, verifyOTP } from '@services/auth/OTP';

// Request OTP
const requestOTP = async (phoneNumber: string) => {
  try {
    const response = await postOTP({
      phoneNumber,
      purpose: 'registration'
    });
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Failed to send OTP:', error);
  }
};

// Verify OTP
const verifyCode = async (phoneNumber: string, otpCode: string) => {
  try {
    const response = await verifyOTP({
      phoneNumber,
      otpCode,
      purpose: 'registration'
    });
    console.log('OTP verified successfully');
  } catch (error) {
    console.error('OTP verification failed:', error);
  }
};
```

## 💻 Development

### Code Style

The project uses ESLint and Prettier for code formatting:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Component Development

When creating new components:

1. Use TypeScript for type safety
2. Follow the existing component structure
3. Use CSS modules for styling
4. Add proper prop types and documentation

Example component structure:
```typescript
// components/MyComponent.tsx
import React from 'react';
import styles from '@styles/myComponent.module.css';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default MyComponent;
```

### State Management

Using Redux Toolkit slices:

```typescript
// store/mySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyState {
  value: string;
  isLoading: boolean;
}

const initialState: MyState = {
  value: '',
  isLoading: false,
};

const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setValue, setLoading } = mySlice.actions;
export default mySlice.reducer;
```

## 🔧 Troubleshooting

### Common Issues

#### 1. API Network Errors
**Problem**: Getting "Network Error" when calling APIs
**Solution**: 
- Ensure the proxy configuration is correct in `next.config.js`
- Check that the API server is running
- Verify the API endpoint URLs

#### 2. Dependency Conflicts
**Problem**: npm install fails with peer dependency errors
**Solution**: 
```bash
npm install --legacy-peer-deps
```

#### 3. TypeScript Errors
**Problem**: Path aliases not working
**Solution**: 
- Check `tsconfig.json` baseUrl and paths configuration
- Restart TypeScript server in VS Code

#### 4. PWA Not Working
**Problem**: Service worker not registering
**Solution**: 
- Check that PWA is enabled in production
- Verify manifest.json is accessible
- Clear browser cache

### Debug Mode

Enable debug logging by setting environment variable:
```bash
DEBUG=1 npm run dev
```

### Clear Cache

If you encounter persistent issues:
```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Add proper error handling
- Write meaningful commit messages
- Update documentation when needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Redux Toolkit for state management
- All contributors who help improve this project

## 📞 Support

If you have any questions or need help:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing issues in the repository
3. Create a new issue with detailed information
4. Contact the development team

---

**Some Shit Developed By MOHSEN! 🎉**
