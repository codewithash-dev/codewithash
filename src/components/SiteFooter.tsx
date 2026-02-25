import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaYoutube, href: "https://www.youtube.com/@CodeWithAshOfficial", label: "YouTube" },
  { icon: FaInstagram, href: "https://instagram.com/_codewithash", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com/@_codewithash", label: "TikTok" },
  { icon: FaFacebook, href: "https://www.facebook.com/CodeWithAshOfficial", label: "Facebook" },
  { icon: FaGithub, href: "https://github.com/codewithash-dev", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/codewithash", label: "LinkedIn" },
];

export default function SiteFooter() {
  return (
    <footer className="py-10 px-6 border-t border-gray-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">© 2026 Code with Ash</p>

        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-white transition-colors text-2xl"
            >
              <Icon aria-hidden />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/terms" className="btn-animate hover:text-white transition inline-block">
            Terms of Use
          </Link>
          <Link href="/privacy" className="btn-animate hover:text-white transition inline-block">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
