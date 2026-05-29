/**
 * App Routes - React Router configuration
 */

import { createBrowserRouter } from 'react-router';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MoodScreen } from './screens/MoodScreen';
import { JournalScreen } from './screens/JournalScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { SupportScreen } from './screens/SupportScreen';
import { SOSScreen } from './screens/SOSScreen';
import { ProfileScreen } from './screens/ProfileScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />,
  },
  {
    path: '/welcome',
    element: <WelcomeScreen />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/signup',
    element: <SignupScreen />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />,
  },
  {
    path: '/home',
    element: <HomeScreen />,
  },
  {
    path: '/mood',
    element: <MoodScreen />,
  },
  {
    path: '/journal',
    element: <JournalScreen />,
  },
  {
    path: '/insights',
    element: <InsightsScreen />,
  },
  {
    path: '/support',
    element: <SupportScreen />,
  },
  {
    path: '/sos',
    element: <SOSScreen />,
  },
  {
    path: '/profile',
    element: <ProfileScreen />,
  },
  {
    path: '*',
    element: <SplashScreen />,
  },
]);
