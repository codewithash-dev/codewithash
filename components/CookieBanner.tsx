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
        background: '#0b0b0b',
        padding: '10px 16px',
        fontSize: '13px',
        alignItems: 'center',
      }}
      contentStyle={{
        margin: 0,
        flex: 1,
        lineHeight: 1.4,
      }}
      buttonWrapperStyle={{
        marginLeft: '16px',
        gap: '10px',
      }}
      buttonStyle={{
        background: '#16a34a',
        color: '#fff',
        fontSize: '13px',
        borderRadius: '6px',
        padding: '8px 18px',
        fontWeight: '600',
      }}
      declineButtonStyle={{
        background: '#4b5563',
        border: '1px solid #4b5563',
        color: '#fff',
        fontSize: '13px',
        borderRadius: '6px',
        padding: '8px 18px',
        fontWeight: '600',
      }}
      expires={150}
    >
      This site uses cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
    </CookieConsent>
  );
}