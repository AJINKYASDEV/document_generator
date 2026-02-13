import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CompanyProvider } from './context/CompanyContext';
import { DocumentProvider } from './context/DocumentContext';
import theme from './theme/theme';
import Layout from './components/layout/Layout';
import DashboardLayout from './components/layout/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DocumentCreate from './pages/DocumentCreate';
import DocumentPreview from './pages/DocumentPreview';
import CompanyManagement from './pages/CompanyManagement';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import ErrorBoundary from './components/common/ErrorBoundary';
import ToastProvider from './components/common/Toast';
import { PageTransition } from './components/common/AnimatedContainer';
import './App.css';
import SignUp from './pages/SignUp';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

// ErrorBoundary wrapper with navigation
const ErrorBoundaryWithNavigation = ({ children }) => {
  const navigate = useNavigate();
  return <ErrorBoundary navigate={navigate}>{children}</ErrorBoundary>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastProvider>
        <Router>
          <AuthProvider>
            <CompanyProvider>
              <DocumentProvider>
                <Routes>
                  <Route path="/login" element={
                    <PageTransition>
                      <ErrorBoundaryWithNavigation><Login /></ErrorBoundaryWithNavigation>
                    </PageTransition>
                  } />
                  <Route
                    path="/signup"
                    element={
                      <PageTransition>
                        <SignUp />
                      </PageTransition>
                    }
                  />

                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <Dashboard />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/documents/create"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <DocumentCreate />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/documents/preview"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <DocumentPreview />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/company-management"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <CompanyManagement />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <Profile />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <Settings />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/analytics"
                    element={
                      <ProtectedRoute>
                        <PageTransition>
                          <ErrorBoundaryWithNavigation>
                            <DashboardLayout>
                              <Analytics />
                            </DashboardLayout>
                          </ErrorBoundaryWithNavigation>
                        </PageTransition>
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </DocumentProvider>
            </CompanyProvider>
          </AuthProvider>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
