'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="codewithash-cookie-consent"
      style={{ 
        background: '#000',
        padding: '20px'
      }}
      buttonStyle={{ 
        background: '#fff', 
        color: '#000', 
        fontSize: '14px',
        borderRadius: '6px',
        padding: '12px 24px',
        fontWeight: '600'
      }}
      declineButtonStyle={{
        background: 'transparent',
        border: '1px solid #fff',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '6px',
        padding: '12px 24px',
        fontWeight: '600'
      }}
      expires={150}
    >
      This site uses cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
    </CookieConsent>
  );
}