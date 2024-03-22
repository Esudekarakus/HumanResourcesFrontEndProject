import React from 'react';



const Footer = () => (
  <footer style={{ backgroundColor: '#121b35', padding: '20px', textAlign: 'center',color:'white' }}>
    
    <p style={{color:'white'}}>
      <strong>İletişim:</strong> <a style={{color:'white'}} href="mailto:info@insankaynaklari.com">info@insankaynaklari.com</a>
    </p>
    <ul style={{ listStyleType: 'none', padding: 0  }}>
      <li><a style={{color:'white'}} href="https://www.facebook.com/insankaynaklari" target="_blank" rel="noopener noreferrer">Facebook</a></li>
      <li><a style={{color:'white'}} href="https://www.twitter.com/insankaynaklari" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a style={{color:'white'}} href="https://www.instagram.com/insankaynaklari" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
    <p>Copyright ©  {new Date().getFullYear()} İnsan Kaynakları A.Ş. Tüm hakları saklıdır.</p>
  </footer>
);

export default Footer;
