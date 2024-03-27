import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
 

const Footer = () => {
  const year = new Date().getFullYear();
  return (
<footer style={{ backgroundColor: '#121b35', padding: '20px', textAlign: 'center', color: 'white', position: 'inherit', bottom: 0, width: '100%' }}>
<p>
<strong>İletişim:</strong> <a href="mailto:info@insankaynaklari.com" style={{ color: 'white' }}>info@insankaynaklari.com</a>
</p>
<div style={{ fontSize: '1.5rem' }}>
<a href="https://www.facebook.com/insankaynaklari" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
<FontAwesomeIcon icon={faFacebookF} />
</a>
<a href="https://www.twitter.com/insankaynaklari" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
<FontAwesomeIcon icon={faTwitter} />
</a>
<a href="https://www.instagram.com/insankaynaklari" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
<FontAwesomeIcon icon={faInstagram} />
</a>
</div>
<p>Copyright © {year} İnsan Kaynakları A.Ş. Tüm hakları saklıdır.</p>
</footer>
  );
};
 
export default Footer;