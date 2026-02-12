import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Code with Ash',
  description: 'Privacy Policy for Code with Ash website',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p>This Privacy Policy governs the manner in which the Website collects, uses, maintains and discloses information collected from users (each, a &quot;Visitor&quot;) of the Website. This Privacy Policy applies to the Website and all content and services offered by the Website.</p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Personal identification information</h2>
              <p>We may collect personal identification information from Visitors in a variety of ways, including, but not limited to, when Visitors subscribe to a newsletter, fill out a contact form, and in connection with other activities, services, features, or resources we make available on our Website. Visitors may visit the Website anonymously. We will collect personal identification information from Visitors only if they voluntarily submit such information to us. Visitors can refuse to supply personal identification information but doing so may prevent them from engaging in certain Website-related activities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How we use collected information</h2>
              <p>The Website may collect and use Visitors&apos; personal identification information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Visitors as a group use the services and resources provided on our Website.</li>
                <li><strong>To send periodic emails:</strong> We may use Visitor email addresses to send information and updates pertaining to inquiries. Visitor email addresses may also be used to respond to inquiries, questions, or other requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Sharing your personal information</h2>
              <p>We do not sell, trade, or rent Visitor personal identification information to others.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third party websites</h2>
              <p>Visitors may find advertising or other content on our Website that link to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these websites and are not responsible for the practices employed by websites linked to or from our Website. In addition, these websites or services, including their content and links, may be constantly changing. These websites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Website, is subject to that website&apos;s own terms and policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to this Privacy Policy</h2>
              <p>The Website has the discretion to update this Privacy Policy at any time. We encourage Visitors to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your acceptance of these terms</h2>
              <p>By using this Website, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Website. Your continued use of the Website following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.</p>
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
