'use client';

export default function SnackEmbed() {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '80vh' }}>
      <iframe
        src="https://snack.expo.dev/@codewithash-dev/login-credentials?platform=web"
        title="Expo Snack — Login Credentials"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 6 }}
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
