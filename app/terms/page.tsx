import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use - Code with Ash',
  description: 'Terms of Use for Code with Ash website',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" />
            <span className="text-white font-bold text-2xl tracking-wide leading-none -ml-3 hidden lg:inline">ASH</span>
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link>
            <Link href="/learning-paths" className="text-gray-300 hover:text-white transition">Learning Paths</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Terms of Use</h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Terms</h2>
              <p>By accessing this Website, you are agreeing to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this Website are protected by applicable copyright and trademark law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Permission is granted to temporarily download one copy of any downloadable materials on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on the Website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or &apos;mirror&apos; the materials on any other server.</li>
                  </ol>
                </li>
                <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by the Website owner at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p>The materials on the Website are provided &apos;as is&apos;. The Website makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, the Website does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p>In no event shall the Website be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if the Website or an authorized representative of the Website has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Revisions and Errata</h2>
              <p>The materials appearing on the Website may include technical, typographical, or photographic errors. The Website does not warrant that any of the materials on its web site are accurate, complete, or current. The Website may make changes to the materials contained on its web site at any time without notice. The Website does not, however, make any commitment to update the materials.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
              <p>The Website has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the Website of the site. Use of any such linked website is at the user&apos;s own risk.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Site Terms of Use Modifications</h2>
              <p>The Website may revise these Terms of Use at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
              <p>Any claim relating to the Website shall be governed by the laws of the Website owner&apos;s home jurisdiction without regard to its conflict of law provisions.</p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2026 Code with Ash</p>
            <div className="flex gap-6 mt-4 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Use</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
