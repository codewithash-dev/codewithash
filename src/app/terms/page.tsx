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
      </div>
    );
  }