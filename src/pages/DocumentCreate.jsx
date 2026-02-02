import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';

import { useCompany } from '../context/CompanyContext';
import { useDocument } from '../context/DocumentContext';
import { useAuth } from '../context/AuthContext';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import { validateForm } from '../utils/validationUtils';

const DocumentCreate = () => {
  const { selectedCompany, selectCompany, companies } = useCompany();
  const { selectedDocType, selectDocumentType, documentTypes, documentData, updateDocumentData } = useDocument();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formErrors, setFormErrors] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    // Redirect if not authenticated
    if (!currentUser) {
      navigate('/login');
      return;
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    // Handle navigation state from Dashboard
    if (location.state) {
      const { companyId, documentType } = location.state;

      // Find and set the company
      if (companyId && companies.length > 0) {
        selectCompany(companyId);
      }

      // Find and set the document type
      if (documentType && documentTypes.length > 0) {
        selectDocumentType(documentType);
      }
    }
  }, [location.state, companies.length, documentTypes.length]);

  useEffect(() => {
    // Redirect if no company or document type selected after processing state
    if (!selectedCompany || !selectedDocType) {
      // Only redirect if we don't have navigation state to process
      if (!location.state) {
        navigate('/dashboard');
      }
    }
  }, [selectedCompany, selectedDocType, location.state, navigate]);

  const handleInputChange = (field, value) => {
    updateDocumentData(field, value);


    // ✅ NEW — Auto clear stipend if internship becomes unpaid
    if (field === 'internshipType' && value === 'unpaid') {
      updateDocumentData('stipend', '');
    }

    // Clear error for this field if it exists
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateDocumentForm = () => {
    if (!selectedDocType) return true;

    // Create validation rules based on document type fields
    const rules = {};
    selectedDocType.fields.forEach(field => {
      // ✅ NEW — Skip validation if field is hidden
      if (!shouldShowField(field)) return;
      if (field.required) {
        rules[field.name] = {
          required: true,
          message: `${field.label} is required`
        };
      }

      // Add specific validation based on field type
      if (field.type === 'email') {
        rules[field.name] = { ...rules[field.name], email: true };
      } else if (field.type === 'date') {
        rules[field.name] = { ...rules[field.name], date: true };
      } else if (field.type === 'number') {
        rules[field.name] = { ...rules[field.name], number: true };
      }
    });

    const errors = validateForm(documentData, rules);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateDocumentForm()) {
      navigate('/documents/preview');
    }
  };

  if (!selectedCompany || !selectedDocType) {
    return null; // Will redirect in useEffect
  }

  // ✅ NEW — Conditional field visibility
  const shouldShowField = (field) => {
    if (!field.dependsOn) return true;

    return (
      documentData[field.dependsOn.field] === field.dependsOn.value
    );
  };


  return (
    <ResponsiveContainer>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, mb: isMobile ? 3 : 4 }}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="h1"
          gutterBottom
          sx={{ textAlign: isMobile ? 'center' : 'left' }}
        >
          Create {selectedDocType.name}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: isMobile ? 'center' : 'left' }}
        >
          Company: {selectedCompany.name}
        </Typography>

        {Object.keys(formErrors).length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Please fill in all required fields
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: isMobile ? 2 : 3 }}>
          <Grid container spacing={isMobile ? 2 : 3}>
            {selectedDocType.fields.map((field) => (
              
              <Grid
                item
                xs={12}
                sm={field.type === 'textarea' ? 12 : (isTablet ? 12 : 6)}
                key={field.name}
              >
                {field.type === 'select' ? (
                  <FormControl fullWidth error={!!formErrors[field.name]}>
                    <InputLabel id={`${field.name}-label`}>{field.label}</InputLabel>
                    <Select
                      labelId={`${field.name}-label`}
                      id={field.name}
                      value={documentData[field.name] || ''}
                      label={field.label}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      size={isMobile ? "small" : "medium"}
                    >
                      {field.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                    {formErrors[field.name] && (
                      <Typography variant="caption" color="error">
                        {formErrors[field.name]}
                      </Typography>
                    )}
                  </FormControl>
                ) : field.type === 'textarea' ? (
                  <TextField
                    id={field.name}
                    name={field.name}
                    label={field.label}
                    multiline
                    rows={isMobile ? 3 : 4}
                    fullWidth
                    value={documentData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    error={!!formErrors[field.name]}
                    helperText={formErrors[field.name]}
                    size={isMobile ? "small" : "medium"}
                  />
                ) : (
                  <TextField
                    id={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    fullWidth
                    value={documentData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    error={!!formErrors[field.name]}
                    helperText={formErrors[field.name]}
                    size={isMobile ? "small" : "medium"}
                    InputLabelProps={
                      field.type === 'date' || field.type === 'month'
                        ? { shrink: true }
                        : undefined
                    }
                  />
                )}
              </Grid>
            ))}
          </Grid>
          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            gap: isMobile ? 2 : 0,
            mt: isMobile ? 3 : 4
          }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/dashboard')}
              fullWidth={isMobile}
              sx={{ order: isMobile ? 2 : 1 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={isMobile}
              sx={{ order: isMobile ? 1 : 2 }}
            >
              Preview Document
            </Button>
          </Box>
        </Box>
      </Paper>
    </ResponsiveContainer>
  );
};

export default DocumentCreate;