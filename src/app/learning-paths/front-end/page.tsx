import Link from "next/link";

export default function FrontEndPage() {
    const sections = [
      {
        title: "HTML & CSS",
        description: "Master the fundamentals of building beautiful, responsive websites with HTML and CSS.",
        accentColor: "bg-teal-400",
        lineColor: "bg-teal-600",
        courses: [
          { title: "HTML5 Fundamentals", level: "Beginner", duration: "3h" },
          { title: "CSS3 Complete Guide", level: "Beginner", duration: "4h" },
          { title: "Responsive Design Mastery", level: "Intermediate", duration: "3h" },
        ],
      },
      {
        title: "JavaScript",
        description: "Learn modern JavaScript from basics to advanced concepts. Understand ES6+, async programming, and more.",
        accentColor: "bg-teal-400",
        lineColor: "bg-teal-600",
        courses: [
          { title: "JavaScript Fundamentals", level: "Beginner", duration: "6h" },
          { title: "Advanced JavaScript", level: "Intermediate", duration: "5h" },
          { title: "Modern JavaScript (ES6+)", level: "Intermediate", duration: "4h" },
        ],
      },
      {
        title: "React",
        description: "Build powerful single-page applications with React. Learn hooks, state management, and best practices.",
        accentColor: "bg-teal-400",
        lineColor: "bg-teal-600",
        courses: [
          { title: "React Fundamentals", level: "Beginner", duration: "8h" },
          { title: "React Advanced Patterns", level: "Intermediate", duration: "6h" },
          { title: "React with TypeScript", level: "Intermediate to Pro", duration: "5h" },
        ],
      },
      {
        title: "CSS Frameworks",
        description: "Speed up development with modern CSS frameworks like Tailwind and Bootstrap.",
        accentColor: "bg-teal-400",
        lineColor: "bg-teal-600",
        courses: [
          { title: "Tailwind CSS Complete Guide", level: "Beginner", duration: "4h" },
          { title: "Bootstrap 5 Essentials", level: "Beginner", duration: "3h" },
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
          <h1 className="text-6xl font-extrabold mb-5">Front-end Development</h1>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!
          </p>
        </header>
  
        {/* INTRO */}
        <main className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-neutral-300 leading-relaxed mb-4">
            If you want to become a front-end developer, you need to master HTML, CSS, and JavaScript. These are the core
            technologies that power every website on the internet.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-16">
            Here are the courses I believe you should take, listed in order. Start with the fundamentals and work your way up to
            advanced frameworks like React.
          </p>
  
          {/* SECTIONS */}
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">{section.description}</p>
  
              {/* TIMELINE */}
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-teal-600 opacity-70" />
                <div className="flex flex-col gap-5">
                  {section.courses.map((course) => (
                    <div key={course.title} className="relative">
                      <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400" />
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 hover:border-teal-500 hover:bg-[#0d1f1f] transition-all cursor-pointer group">
                        <h3 className="font-semibold text-base mb-1 group-hover:text-teal-400 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-neutral-500 text-sm">
                          {course.level} <span className="mx-2">•</span> {course.duration}
                        </p>
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