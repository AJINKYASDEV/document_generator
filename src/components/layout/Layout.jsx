import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar';
import ResponsiveContainer from '../common/ResponsiveContainer';
import A4Page from '../layout/A4Page';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ResponsiveContainer component="main" sx={{ flexGrow: 1, py: isMobile ? 2 : 4 }}>
        {children}
      </ResponsiveContainer>
      <Box
        component="footer"
        sx={{
          py: isMobile ? 3 : 4,
          px: isMobile ? 2 : 3,
          mt: 'auto',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            pointerEvents: 'none'
          }
        }}
      >
        <ResponsiveContainer>
          <Box 
            sx={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                mb: 1,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Document Generator
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.9,
                fontSize: '0.875rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              © {new Date().getFullYear()} Professional Document Solutions. All rights reserved.
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.8,
                fontSize: '0.75rem',
                mt: 0.5,
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Powered by Smart Software Services
            </Typography>
          </Box>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Layout;