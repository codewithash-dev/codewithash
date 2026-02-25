import Link from "next/link";

export default function TermsOfUse() {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
  
        {/* NAV */}
        <nav className="flex justify-between items-center px-12 py-6 border-b border-neutral-900">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white no-underline">
            <span className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-indigo-500 inline-block" />
            ASH
          </Link>
          <ul className="flex gap-9 list-none m-0 p-0">
            <li><a href="/projects" className="text-neutral-400 hover:text-white text-sm no-underline">Projects</a></li>
            <li><a href="/learning-paths" className="text-neutral-400 hover:text-white text-sm no-underline">Learning</a></li>
            <li><a href="/services" className="text-neutral-400 hover:text-white text-sm no-underline">Services</a></li>
            <li><a href="/contact" className="text-neutral-400 hover:text-white text-sm no-underline">Contact</a></li>
          </ul>
        </nav>
  
        {/* CONTENT */}
        <main className="max-w-2xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-5xl font-extrabold mb-12">Terms of Use</h1>
  
          <h2 className="text-xl font-bold mt-10 mb-4">1. Terms</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            By accessing this Website, you are agreeing to be bound by these Terms of Use, all applicable laws
            and regulations, and agree that you are responsible for compliance with any applicable local laws. If
            you do not agree with any of these terms, you are prohibited from using or accessing this site. The
            materials contained in this Website are protected by applicable copyright and trademark law.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">2. Use License</h2>
          <ol className="text-neutral-400 leading-relaxed pl-5 space-y-3 list-decimal">
            <li>
              Permission is granted to temporarily download one copy of any downloadable materials on the
              Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on the Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or &apos;mirror&apos; the materials on any other server.</li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of these restrictions and may be
              terminated by the Website owner at any time. Upon terminating your viewing of these materials or
              upon the termination of this license, you must destroy any downloaded materials in your possession
              whether in electronic or printed format.
            </li>
          </ol>
  
          <h2 className="text-xl font-bold mt-10 mb-4">3. Disclaimer</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            The materials on the Website are provided &apos;as is&apos;. The Website makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties, including without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, the Website does not warrant or make any
            representations concerning the accuracy, likely results, or reliability of the use of the materials on its
            website or otherwise relating to such materials or on any sites linked to this site.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">4. Limitations</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            In no event shall the Website be liable for any damages (including, without limitation, damages for
            loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on the Website, even if the Website or an authorized representative of the Website has
            been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability for consequential or incidental
            damages, these limitations may not apply to you.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">5. Revisions and Errata</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            The materials appearing on the Website may include technical, typographical, or photographic errors.
            The Website does not warrant that any of the materials on its web site are accurate, complete, or
            current. The Website may make changes to the materials contained on its web site at any time
            without notice. The Website does not, however, make any commitment to update the materials.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">6. Links</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            The Website has not reviewed all of the sites linked to its website and is not responsible for the
            contents of any such linked site. The inclusion of any link does not imply endorsement by the Website
            of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">7. Site Terms of Use Modifications</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            The Website may revise these Terms of Use at any time without notice. By using this website you are
            agreeing to be bound by the then current version of these Terms of Use.
          </p>
  
          <h2 className="text-xl font-bold mt-10 mb-4">8. Governing Law</h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Any claim relating to the Website shall be governed by the laws of the Website owner&apos;s home
            jurisdiction without regard to its conflict of law provisions.
          </p>
        </main>
  
        {/* INNER FOOTER */}
        <div className="max-w-2xl mx-auto px-6 pt-6 pb-3 border-t border-neutral-900">
          <p className="text-xs text-neutral-600 mb-2">© 2026 Code with Ash</p>
          <div className="flex gap-6">
            <a href="/terms" className="text-xs text-neutral-600 hover:text-white no-underline">Terms of Use</a>
            <a href="/privacy" className="text-xs text-neutral-600 hover:text-white no-underline">Privacy Policy</a>
          </div>
        </div>
  
        {/* MAIN FOOTER */}
        <footer className="border-t border-neutral-900 px-12 py-6 flex justify-between items-center flex-wrap gap-4 mt-5">
          <span className="text-xs text-neutral-600">© 2026 Code with Ash</span>
  
          <div className="flex gap-5 items-center">
            {/* YouTube */}
            <a href="https://www.youtube.com/@CodeWithAshOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 7 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-7 .1-1.3.1-1.7.1-5s0-3.7-.1-5C23.7 2.7 21.3.3 17 .1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.3v16.4a2.7 2.7 0 0 1-2.7 2.3 2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .5 0 .8.1V10a6 6 0 0 0-.8-.1 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6V8.2a7.8 7.8 0 0 0 4.6 1.5V6.4a4.5 4.5 0 0 1-2.2-3.1z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/CodeWithAshOfficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 3.7 18 4 18 4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12 24 5.4 18.6 0 12 0z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-neutral-600 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.4v6.2zM5.3 7.4a2.1 2.1 0 0 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/></svg>
            </a>
          </div>
  
          <div className="flex gap-6">
            <a href="/terms" className="text-xs text-neutral-600 hover:text-white no-underline">Terms of Use</a>
            <a href="/privacy" className="text-xs text-neutral-600 hover:text-white no-underline">Privacy Policy</a>
          </div>
        </footer>
  
      </div>
    );
  }