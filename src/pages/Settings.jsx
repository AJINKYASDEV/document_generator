import React, { useState } from 'react';
import {  Box, Container, Paper,Typography, Grid,Switch, FormControlLabel, Select, MenuItem, FormControl, InputLabel,
  Button, Divider, Card, CardContent, CardHeader, Alert,TextField, Chip, List, ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
  Storage as StorageIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Delete as DeleteIcon,
  Backup as BackupIcon,
  RestoreFromTrash as RestoreIcon
} from '@mui/icons-material';

const Settings = () => {
  const theme = useTheme();
  const [settings, setSettings] = useState({
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      documentUpdates: true,
      systemAlerts: true
    },
    appearance: {
      theme: 'light',
      language: 'en',
      dateFormat: 'MM/DD/YYYY',
      timezone: 'UTC+05:30'
    },
    privacy: {
      profileVisibility: 'private',
      dataSharing: false,
      analyticsTracking: true
    },
    documents: {
      autoSave: true,
      defaultFormat: 'PDF',
      compressionLevel: 'medium',
      watermark: true
    }
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [backupDialog, setBackupDialog] = useState(false);
  const [resetDialog, setResetDialog] = useState(false);

  const handleSettingChange = (category, setting) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    // Here you would typically save to backend
    setSuccessMessage('Settings saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleExportData = () => {
    // Simulate data export
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'settings-backup.json';
    link.click();
  };

  const handleBackupData = () => {
    setBackupDialog(false);
    setSuccessMessage('Data backup created successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleResetSettings = () => {
    setSettings({
      notifications: {
        emailNotifications: true,
        pushNotifications: false,
        documentUpdates: true,
        systemAlerts: true
      },
      appearance: {
        theme: 'light',
        language: 'en',
        dateFormat: 'MM/DD/YYYY',
        timezone: 'UTC+05:30'
      },
      privacy: {
        profileVisibility: 'private',
        dataSharing: false,
        analyticsTracking: true
      },
      documents: {
        autoSave: true,
        defaultFormat: 'PDF',
        compressionLevel: 'medium',
        watermark: true
      }
    });
    setResetDialog(false);
    setSuccessMessage('Settings reset to defaults!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const settingSections = [
    {
      title: 'Notifications',
      icon: <NotificationsIcon />,
      description: 'Manage your notification preferences',
      settings: [
        {
          key: 'emailNotifications',
          label: 'Email Notifications',
          description: 'Receive notifications via email',
          type: 'switch',
          value: settings.notifications.emailNotifications
        },
        {
          key: 'pushNotifications',
          label: 'Push Notifications',
          description: 'Receive browser push notifications',
          type: 'switch',
          value: settings.notifications.pushNotifications
        },
        {
          key: 'documentUpdates',
          label: 'Document Updates',
          description: 'Get notified when documents are updated',
          type: 'switch',
          value: settings.notifications.documentUpdates
        },
        {
          key: 'systemAlerts',
          label: 'System Alerts',
          description: 'Receive important system notifications',
          type: 'switch',
          value: settings.notifications.systemAlerts
        }
      ]
    },
    {
      title: 'Appearance',
      icon: <PaletteIcon />,
      description: 'Customize the look and feel',
      settings: [
        {
          key: 'theme',
          label: 'Theme',
          description: 'Choose your preferred theme',
          type: 'select',
          value: settings.appearance.theme,
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'auto', label: 'Auto' }
          ]
        },
        {
          key: 'language',
          label: 'Language',
          description: 'Select your preferred language',
          type: 'select',
          value: settings.appearance.language,
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' }
          ]
        },
        {
          key: 'dateFormat',
          label: 'Date Format',
          description: 'Choose how dates are displayed',
          type: 'select',
          value: settings.appearance.dateFormat,
          options: [
            { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
            { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
            { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' }
          ]
        },
        {
          key: 'timezone',
          label: 'Timezone',
          description: 'Set your local timezone',
          type: 'select',
          value: settings.appearance.timezone,
          options: [
            { value: 'UTC+05:30', label: 'India Standard Time (UTC+05:30)' },
            { value: 'UTC+00:00', label: 'Greenwich Mean Time (UTC+00:00)' },
            { value: 'UTC-05:00', label: 'Eastern Time (UTC-05:00)' },
            { value: 'UTC-08:00', label: 'Pacific Time (UTC-08:00)' }
          ]
        }
      ]
    },

    {
      title: 'Privacy & Security',
      icon: <SecurityIcon />,
      description: 'Control your privacy and security settings',
      settings: [
        {
          key: 'profileVisibility',
          label: 'Profile Visibility',
          description: 'Control who can see your profile',
          type: 'select',
          value: settings.privacy.profileVisibility,
          options: [
            { value: 'public', label: 'Public' },
            { value: 'private', label: 'Private' },
            { value: 'team', label: 'Team Only' }
          ]
        },
        {
          key: 'dataSharing',
          label: 'Data Sharing',
          description: 'Allow sharing of anonymized usage data',
          type: 'switch',
          value: settings.privacy.dataSharing
        },
        {
          key: 'analyticsTracking',
          label: 'Analytics Tracking',
          description: 'Help improve the app with usage analytics',
          type: 'switch',
          value: settings.privacy.analyticsTracking
        }
      ]
    },
    {
      title: 'Document Settings',
      icon: <StorageIcon />,
      description: 'Configure document generation preferences',
      settings: [
        {
          key: 'autoSave',
          label: 'Auto Save',
          description: 'Automatically save documents while editing',
          type: 'switch',
          value: settings.documents.autoSave
        },
        {
          key: 'defaultFormat',
          label: 'Default Format',
          description: 'Default format for generated documents',
          type: 'select',
          value: settings.documents.defaultFormat,
          options: [
            { value: 'PDF', label: 'PDF' },
            { value: 'DOCX', label: 'Word Document' },
            { value: 'HTML', label: 'HTML' }
          ]
        },
        {
          key: 'compressionLevel',
          label: 'Compression Level',
          description: 'File compression for generated documents',
          type: 'select',
          value: settings.documents.compressionLevel,
          options: [
            { value: 'low', label: 'Low (Better Quality)' },
            { value: 'medium', label: 'Medium (Balanced)' },
            { value: 'high', label: 'High (Smaller Size)' }
          ]
        },
        {
          key: 'watermark',
          label: 'Add Watermark',
          description: 'Include company watermark in documents',
          type: 'switch',
          value: settings.documents.watermark
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Customize your application preferences and settings
        </Typography>
      </Box>

      {successMessage && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {successMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Settings Sections */}
        <Grid item xs={12} lg={8}>
          {settingSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} sx={{ mb: 3 }}>
              <CardHeader
                avatar={section.icon}
                title={section.title}
                subheader={section.description}
                sx={{
                  '& .MuiCardHeader-avatar': {
                    color: 'primary.main'
                  }
                }}
              />
              <CardContent>
                <List>
                  {section.settings.map((setting, settingIndex) => (
                    <ListItem key={settingIndex} sx={{ px: 0 }}>
                      <ListItemText
                        primary={setting.label}
                        secondary={setting.description}
                      />
                      <ListItemSecondaryAction>
                        {setting.type === 'switch' ? (
                          <Switch
                            checked={setting.value}
                            onChange={handleSettingChange(
                              section.title.toLowerCase().replace(' & ', '').replace(' ', ''),
                              setting.key
                            )}
                            color="primary"
                          />
                        ) : (
                          <FormControl size="small" sx={{ minWidth: 150 }}>
                            <Select
                              value={setting.value}
                              onChange={handleSettingChange(
                                section.title.toLowerCase().replace(' & ', '').replace(' ', ''),
                                setting.key
                              )}
                            >
                              {setting.options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Action Panel */}
        <Grid item xs={12} lg={4}>
          {/* Save Settings */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Save Changes
              </Typography>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSaveSettings}
                sx={{ mb: 2 }}
              >
                Save All Settings
              </Button>
              <Typography variant="caption" color="text.secondary">
                Changes are saved automatically when modified
              </Typography>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Data Management
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={handleExportData}
                  fullWidth
                >
                  Export Settings
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<BackupIcon />}
                  onClick={() => setBackupDialog(true)}
                  fullWidth
                >
                  Backup Data
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  fullWidth
                >
                  Import Settings
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Reset Settings */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Reset Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Reset all settings to their default values. This action cannot be undone.
              </Typography>
              <Button
                variant="outlined"
                color="error"
                startIcon={<RestoreIcon />}
                onClick={() => setResetDialog(true)}
                fullWidth
              >
                Reset to Defaults
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Backup Confirmation Dialog */}
      <Dialog open={backupDialog} onClose={() => setBackupDialog(false)}>
        <DialogTitle>Create Data Backup</DialogTitle>
        <DialogContent>
          <Typography>
            This will create a backup of all your settings and data. The backup will be stored securely and can be restored later if needed.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBackupDialog(false)}>Cancel</Button>
          <Button onClick={handleBackupData} variant="contained">Create Backup</Button>
        </DialogActions>
      </Dialog>

      {/* Reset Confirmation Dialog */}
      <Dialog open={resetDialog} onClose={() => setResetDialog(false)}>
        <DialogTitle>Reset Settings</DialogTitle>
        <DialogContent>
          <Typography color="error">
            Are you sure you want to reset all settings to their default values? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResetDialog(false)}>Cancel</Button>
          <Button onClick={handleResetSettings} color="error" variant="contained">
            Reset Settings
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Settings;