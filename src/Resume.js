import React from 'react';
import resumePdf from './pdf/Akeem_Resume_Grad.docx-2.pdf';

const PdfViewer = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '80px auto 20px auto', padding: '0 16px' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '129.4%' /* ~8.5x11 aspect */ }}>
        <object
          data={resumePdf}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
        >
          <iframe
            title="Resume PDF"
            src={resumePdf}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </object>
      </div>
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <a href={resumePdf} download rel="noopener noreferrer">Download Resume (PDF)</a>
      </div>
    </div>
  );
}

export default PdfViewer;