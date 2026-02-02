// import { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   Divider,
//   Grid,
//   useTheme,
//   useMediaQuery,
//   Alert,
//   Snackbar
// } from '@mui/material';
// import { useCompany } from '../context/CompanyContext';
// import { useDocument } from '../context/DocumentContext';
// import { useAuth } from '../context/AuthContext';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import ResponsiveContainer from '../components/common/ResponsiveContainer';

// // Document Template Components
// // import SalarySlipTemplate from '../components/documents/SalarySlipTemplate';
// // import InternshipCertificateTemplate from '../components/documents/InternshipCertificateTemplate';
// // import OfferLetterTemplate from '../components/documents/OfferLetterTemplate';
// // import CompletionCertificateTemplate from '../components/documents/CompletionCertificateTemplate';
// // import IncrementLetterTemplate from '../components/documents/IncrementLetterTemplate';
// // import AppointmentLetterTemplate from '../components/documents/AppointmentLetterTemplate';
// // import ExperienceLetterTemplate from '../components/documents/ExperienceLetterTemplate';
// // import RelievingLetterTemplate from '../components/documents/RelievingLetterTemplate';
// // import SalaryTransactionTemplate from '../components/documents/SalaryTransactionTemplate';
// // import EmploymentVerificationTemplate from '../components/documents/EmploymentVerificationTemplate';
// // import PromotionLetterTemplate from '../components/documents/PromotionLetterTemplate';
// // import WarningLetterTemplate from '../components/documents/WarningLetterTemplate';
// // import NOCTemplate from '../components/documents/NOCTemplate';
// // import TerminationLetterTemplate from '../components/documents/TerminationLetterTemplate';
// // import TransferLetterTemplate from '../components/documents/TransferLetterTemplate';

// import SalarySlipTemplate from '../components/documents/SalarySlip/SalarySlipTemplate';
// import IncrementLetterTemplate from '../components/documents/IncrementLetter/IncrementLetterTemplate';
// import ExperienceLetterTemplate from '../components/documents/ExperienceLetter/ExperienceLetterTemplate';
// import RelievingLetterTemplate from '../components/documents/RelievingLetter/RelievingLetteTemplate';
// import OfferLetterTemplate from '../components/documents/OfferLetter/OfferLetterTemplate';

// const DocumentPreview = () => {
//   const { selectedCompany } = useCompany();
//   const { selectedDocType, documentData } = useDocument();
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();
//   const documentRef = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   useEffect(() => {
//     // Redirect if not authenticated
//     if (!currentUser) {
//       navigate('/login');
//       return;
//     }

//     // Redirect if no company or document type selected
//     if (!selectedCompany || !selectedDocType || Object.keys(documentData).length === 0) {
//       navigate('/dashboard');
//     }
//   }, [currentUser, selectedCompany, selectedDocType, documentData, navigate]);

//   const renderDocumentTemplate = () => {
//     if (!selectedDocType) return null;

//     switch (selectedDocType.template) {
//       case 'salary-slip':
//         return <SalarySlipTemplate data={documentData} company={selectedCompany} />;
//       // case 'internship-certificate':
//       //   return <InternshipCertificateTemplate data={documentData} company={selectedCompany} />;
//       case 'offer-letter':
//         return <OfferLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'completion-certificate':
//         // return <CompletionCertificateTemplate data={documentData} company={selectedCompany} />;
//       case 'increment-letter':
//         return <IncrementLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'appointment-letter':
//         // return <AppointmentLetterTemplate data={documentData} company={selectedCompany} />;
//       case 'experience-letter':
//         return <ExperienceLetterTemplate data={documentData} company={selectedCompany} />;
//       case 'relieving-letter':
//         return <RelievingLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'salary-transaction':
//         // return <SalaryTransactionTemplate data={documentData} company={selectedCompany} />;
//       // case 'employment-verification':
//         // return <EmploymentVerificationTemplate data={documentData} company={selectedCompany} />;
//       // case 'promotion-letter':
//         // return <PromotionLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'warning-letter':
//         // return <WarningLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'noc':
//         // return <NOCTemplate data={documentData} company={selectedCompany} />;
//       // case 'termination-letter':
//         // return <TerminationLetterTemplate data={documentData} company={selectedCompany} />;
//       // case 'transfer-letter':
//         // return <TransferLetterTemplate data={documentData} company={selectedCompany} />;
//       default:
//         return <Typography>Template not found</Typography>;
//     }
//   };

//   const handleDownloadPDF = async () => {
//     if (!documentRef.current) {
//       setError('Document reference not found');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       // Show loading message
//       setSnackbarMessage('Generating PDF...');
//       setSnackbarOpen(true);
      
//       const canvas = await html2canvas(documentRef.current, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         logging: false,
//         letterRendering: true,
//         width: documentRef.current.scrollWidth,
//         height: documentRef.current.scrollHeight,
//         scrollX: 0,
//         scrollY: 0
//       });
      
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       const imgWidth = 210; // A4 width in mm
//       const pageHeight = 297; // A4 height in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
//       let heightLeft = imgHeight;
//       let position = 0;

//       // Add first page
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;

//       // Add additional pages if needed
//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }
      
//       const fileName = `${selectedDocType.name}-${new Date().toISOString().slice(0, 10)}.pdf`;
//       pdf.save(fileName);
      
//       // Show success message
//       setSnackbarMessage(`PDF "${fileName}" downloaded successfully`);
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setError(`Failed to generate PDF: ${error.message || 'Unknown error'}`);
//       setSnackbarMessage('PDF generation failed');
//       setSnackbarOpen(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDownloadPDFWord = async () => {
//   if (!documentRef.current) {
//     setError('Document reference not found');
//     return;
//   }

//   setLoading(true);
//   setError('');

//   try {
//     setSnackbarMessage('Generating PDF (Content Only)...');
//     setSnackbarOpen(true);

//     // ✅ Target only the .a4-content-only section
//     const contentElement = documentRef.current.querySelector('.a4-content-only');
//     if (!contentElement) {
//       throw new Error('Content section not found (.a4-content-only missing)');
//     }

//     const canvas = await html2canvas(contentElement, {
//       scale: 2,
//       useCORS: true,
//       allowTaint: true,
//       logging: false,
//       letterRendering: true,
//       width: contentElement.scrollWidth,
//       height: contentElement.scrollHeight,
//       scrollX: 0,
//       scrollY: 0,
//       // ✅ Correct placement for exclusion logic
//       ignoreElements: (el) => {
//         const alt = el.getAttribute?.("alt")?.toLowerCase?.() || "";
//         if (alt.includes("hr signature") || alt.includes("company stamp")) return true;
//         return false;
//       },
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4'
//     });

//     const imgWidth = 210; // A4 width in mm
//     const pageHeight = 297; // A4 height in mm
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
//     let heightLeft = imgHeight;
//     let position = 0;

//     // Add first page
//     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     // Add additional pages if needed
//     while (heightLeft >= 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }

//     const fileName = `${selectedDocType.name}-ContentOnly-${new Date()
//       .toISOString()
//       .slice(0, 10)}.pdf`;

//     pdf.save(fileName);

//     setSnackbarMessage(`PDF "${fileName}" (content only) downloaded successfully`);
//     setSnackbarOpen(true);
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     setError(`Failed to generate content-only PDF: ${error.message || 'Unknown error'}`);
//     setSnackbarMessage('PDF generation failed');
//     setSnackbarOpen(true);
//   } finally {
//     setLoading(false);
//   }
// };
  
//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   if (!selectedCompany || !selectedDocType) {
//     return null; // Will redirect in useEffect
//   }

//   return (
//     <ResponsiveContainer>
//       {error && (
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       )}
      
//       <Box sx={{ 
//         mb: isMobile ? 2 : 4, 
//         display: 'flex', 
//         flexDirection: isMobile ? 'column' : 'row',
//         justifyContent: isMobile ? 'center' : 'space-between', 
//         alignItems: 'center',
//         gap: isMobile ? 2 : 0
//       }}>
//         <Typography 
//           variant={isMobile ? "h5" : "h4"} 
//           component="h1"
//           sx={{ textAlign: isMobile ? 'center' : 'left' }}
//         >
//           Document Preview
//         </Typography>
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row',
//           gap: isMobile ? 1 : 2,
//           width: isMobile ? '100%' : 'auto'
//         }}>
//           <Button
//             variant="outlined"
//             onClick={() => navigate('/documents/create')}
//             sx={{ mr: isMobile ? 0 : 2 }}
//             fullWidth={isMobile}
//             size={isMobile ? "small" : "medium"}
//           >
//             Edit
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleDownloadPDF}
//             fullWidth={isMobile}
//             size={isMobile ? "small" : "medium"}
//             disabled={loading}
//           >
//             {loading ? 'Generating...' : 'Download PDF'}
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleDownloadPDFWord}
//             fullWidth={isMobile}
//             size={isMobile ? "small" : "medium"}
//             disabled={loading}
//           >
//             {loading ? 'Generating...' : 'Download Word PDF'}
//           </Button>
//         </Box>
//       </Box>

//       <Paper 
//         elevation={3} 
//         sx={{ 
//           p: 0, // Remove padding to avoid affecting A4 dimensions
//           mb: isMobile ? 2 : 4, 
//           width: '210mm', // Fixed A4 width
//           margin: '0 auto',
//           minHeight: '297mm', // Fixed A4 height
//           backgroundColor: '#fff',
//           overflowX: 'auto',
//           display: 'flex',
//           flexDirection: 'column'
//         }}
//         ref={documentRef}
//       >
//         {renderDocumentTemplate()}
//       </Paper>
      
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={snackbarMessage}
//       />
//     </ResponsiveContainer>
//   );
// };

// export default DocumentPreview;




import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar
} from '@mui/material';
import { useCompany } from '../context/CompanyContext';
import { useDocument } from '../context/DocumentContext';
import { useAuth } from '../context/AuthContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResponsiveContainer from '../components/common/ResponsiveContainer';
import { generatePDF } from '../utils/pdfUtils'; // adjust path as needed

// Templates
import SalarySlipTemplate from '../components/documents/SalarySlip/SalarySlipTemplate';
import IncrementLetterTemplate from '../components/documents/IncrementLetter/IncrementLetterTemplate';
import ExperienceLetterTemplate from '../components/documents/ExperienceLetter/ExperienceLetterTemplate';
import RelievingLetterTemplate from '../components/documents/RelievingLetter/RelievingLetteTemplate';
import OfferLetterTemplate from '../components/documents/OfferLetter/OfferLetterTemplate';
import AppointmentLetterTemplate from '../components/documents/AppointmentLeter/AppointmentLetterTemplate';
import InternshipLetterTemplate from '../components/documents/InternshipLetter/InternshipLetterTemplate';
import CertificationLetterTemplate from '../components/documents/InternshipComplitionCertificate/CertificationLetterTemplate';
import FullandFinalLetterTemplate from '../components/documents/FullandFinalLetter/FullandFinalLetterTemplate';





const DocumentPreview = () => {
  const { selectedCompany } = useCompany();
  const { selectedDocType, documentData } = useDocument();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const documentRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  /* ================= AUTH + STATE CHECK ================= */
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    // Redirect if no company or document type selected
    if (
      !selectedCompany ||
      !selectedDocType ||
      Object.keys(documentData).length === 0
    ) {
      navigate("/dashboard");
    }
  }, [currentUser, selectedCompany, selectedDocType, documentData, navigate]);

  /* ================= TEMPLATE RENDER ================= */
  const renderDocumentTemplate = () => {
    switch (selectedDocType?.template) {
      case 'salary-slip':
        return <SalarySlipTemplate data={documentData} company={selectedCompany} />;

       case 'internship-certificate':
      return (
        <InternshipLetterTemplate data={documentData} company={selectedCompany}/>
      );

       
      case 'offer-letter':
        return <OfferLetterTemplate data={documentData} company={selectedCompany} />;
        
       case 'completion-certificate':
         return <CertificationLetterTemplate data={documentData} company={selectedCompany} />;

      case 'increment-letter':
        return <IncrementLetterTemplate data={documentData} company={selectedCompany} />;
      case 'appointment-letter':
        return <AppointmentLetterTemplate data={documentData} company={selectedCompany} />;
      case 'experience-letter':
        return <ExperienceLetterTemplate data={documentData} company={selectedCompany} />;
      case 'relieving-letter':
        return <RelievingLetterTemplate data={documentData} company={selectedCompany} />;
      // case 'FullAndFinal-letter':
      //   return <FullAndFinalLetterTemplate data={documentData} company={selectedCompany} />;

      // case 'salary-transaction':
      // return <SalaryTransactionTemplate data={documentData} company={selectedCompany} />;
      // case 'employment-verification':
      // return <EmploymentVerificationTemplate data={documentData} company={selectedCompany} />;
      // case 'promotion-letter':
      // return <PromotionLetterTemplate data={documentData} company={selectedCompany} />;
      // case 'warning-letter':
      // return <WarningLetterTemplate data={documentData} company={selectedCompany} />;
      // case 'noc':
      // return <NOCTemplate data={documentData} company={selectedCompany} />;
      // case 'termination-letter':
      // return <TerminationLetterTemplate data={documentData} company={selectedCompany} />;
      // case 'transfer-letter':
        // return <TransferLetterTemplate data={documentData} company={selectedCompany} />;
        case 'fullandfinal-letter':
         return <FullandFinalLetterTemplate data={documentData} company={selectedCompany} />;
      default:
        return <Typography>Template not found</Typography>;
    }
  };

  /* ================= PDF GENERATION (FULL) ================= */
 const handleDownloadPDF = async () => {
  if (!documentRef.current) return;

    setLoading(true);
    setError('');

  try {
    setSnackbarMessage('Generating PDF...');
    setSnackbarOpen(true);

    await generatePDF(
      documentRef.current,
      `${selectedDocType.name}-${new Date().toISOString().slice(0, 10)}`
    );

    setSnackbarMessage('PDF downloaded successfully');
    setSnackbarOpen(true);
  } catch (err) {
    console.error(err);
    setError('Failed to generate PDF');
  } finally {
    setLoading(false);
  }
};

  /* ================= PDF (CONTENT ONLY / WORD STYLE) ================= */
  const handleDownloadPDFWord = async () => {
    if (!documentRef.current) return;

    setLoading(true);
    setError('');

    try {
      setSnackbarMessage('Generating Content Only PDF...');
      setSnackbarOpen(true);

      const content = documentRef.current.querySelector('.a4-content-only');
      if (!content) throw new Error('Missing .a4-content-only');

      const canvas = await html2canvas(content, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        ignoreElements: (el) =>
          el?.getAttribute?.('alt')?.toLowerCase()?.includes('signature') ||
          el?.getAttribute?.('alt')?.toLowerCase()?.includes('stamp'),
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${selectedDocType.name}-ContentOnly.pdf`);
      setSnackbarMessage('Content-only PDF downloaded');
      setSnackbarOpen(true);
    } catch (err) {
      console.error(err);
      setError('Failed to generate content-only PDF');
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  if (!selectedCompany || !selectedDocType) return null;

  return (
    <ResponsiveContainer>
      {error && <Alert severity="error">{error}</Alert>}

      <Box mb={3} display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
        <Typography variant={isMobile ? 'h5' : 'h4'}>Document Preview</Typography>

        <Box display="flex" gap={2} flexWrap="wrap">
          <Button variant="outlined" onClick={() => navigate('/documents/create')}>
            Edit
          </Button>
          <Button variant="contained" onClick={handleDownloadPDF} disabled={loading}>
            Download PDF
          </Button>
          <Button variant="contained" onClick={handleDownloadPDFWord} disabled={loading}>
            Download Word PDF
          </Button>
        </Box>
      </Box>

      <Paper
        ref={documentRef}
        elevation={3}
        sx={{
          width: '210mm',
          minHeight: '297mm',
          margin: '0 auto',
          backgroundColor: '#fff',
        }}
      >
        {renderDocumentTemplate()}
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </ResponsiveContainer>
  );
};

export default DocumentPreview;
