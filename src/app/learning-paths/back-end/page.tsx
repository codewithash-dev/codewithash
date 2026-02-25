import Link from "next/link";

export default function BackEndPage() {
    const sections = [
      {
        title: "Node.js",
        description: "Build fast, scalable server-side applications with Node.js and Express. Learn REST APIs, authentication, and more.",
        courses: [
          { title: "Node.js Fundamentals", level: "Beginner", duration: "5h" },
          { title: "Express.js Complete Guide", level: "Intermediate", duration: "6h" },
          { title: "RESTful API Development", level: "Intermediate", duration: "4h" },
        ],
      },
      {
        title: "Databases",
        description: "Master both SQL and NoSQL databases. Learn MongoDB, PostgreSQL, MySQL, and database design principles.",
        courses: [
          { title: "SQL Mastery", level: "Beginner", duration: "4h" },
          { title: "MongoDB Complete Guide", level: "Beginner", duration: "5h" },
          { title: "PostgreSQL Deep Dive", level: "Intermediate", duration: "4h" },
        ],
      },
      {
        title: "Python & Django",
        description: "Build powerful web applications with Python and Django. Learn MVC architecture, ORM, and deployment.",
        courses: [
          { title: "Python for Backend Development", level: "Beginner", duration: "6h" },
          { title: "Django Complete Guide", level: "Intermediate", duration: "8h" },
          { title: "Django REST Framework", level: "Intermediate to Pro", duration: "5h" },
        ],
      },
      {
        title: "Authentication & Security",
        description: "Learn how to secure your applications with JWT, OAuth, encryption, and best security practices.",
        courses: [
          { title: "Authentication & Authorization", level: "Intermediate", duration: "4h" },
          { title: "API Security Best Practices", level: "Intermediate to Pro", duration: "3h" },
        ],
      },
      {
        title: "Deployment & DevOps",
        description: "Deploy your applications to the cloud. Learn Docker, AWS, CI/CD, and monitoring.",
        courses: [
          { title: "Docker Essentials", level: "Beginner to Intermediate", duration: "4h" },
          { title: "AWS for Developers", level: "Intermediate", duration: "6h" },
          { title: "CI/CD with GitHub Actions", level: "Intermediate", duration: "3h" },
        ],
      },
    ];
  
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
            <li><a href="/learning" className="text-white font-semibold text-sm no-underline">Learning</a></li>
            <li><a href="/services" className="text-neutral-400 hover:text-white text-sm no-underline">Services</a></li>
            <li><a href="/contact" className="text-neutral-400 hover:text-white text-sm no-underline">Contact</a></li>
          </ul>
        </nav>
  
        {/* HERO */}
        <header className="text-center pt-16 pb-10 px-6">
          <p className="text-purple-400 text-sm font-medium mb-3">Learning Paths</p>
          <h1 className="text-6xl font-extrabold mb-5">Back-end Development</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!
          </p>
        </header>
  
        {/* INTRO */}
        <main className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Back-end developers build the server-side logic that powers applications. You&apos;ll work with databases, APIs, authentication, and deployment.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-16">
            Here are the courses I believe you should take, listed in order. Master server-side programming, databases, and cloud deployment.
          </p>
  
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">{section.description}</p>
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-orange-500 opacity-70" />
                <div className="flex flex-col gap-5">
                  {section.courses.map((course) => (
                    <div key={course.title} className="relative">
                      <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400" />
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 hover:border-orange-500 hover:bg-[#1f1200] transition-all cursor-pointer group">
                        <h3 className="font-semibold text-base mb-1 group-hover:text-orange-400 transition-colors">{course.title}</h3>
                        <p className="text-neutral-500 text-sm">{course.level} <span className="mx-2">•</span> {course.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }