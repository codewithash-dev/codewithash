'use client';

export default function SnackEmbed(): JSX.Element {
  const webUrl = 'http://192.168.1.160:8082';
  const expoUrl = 'exp://192.168.1.160:8081';
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '80vh' }}>
      <iframe
        src={webUrl}
        title="Local Expo Web — Login Credentials"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, borderRadius: 6 }}
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div style={{ position: 'absolute', right: 12, top: 12 }}>
        <a
          href={expoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.6)', color: 'white', borderRadius: 6, textDecoration: 'none', fontSize: 13 }}
        >
          Open in Expo Go
        </a>
      </div>
    </div>
  );
}
