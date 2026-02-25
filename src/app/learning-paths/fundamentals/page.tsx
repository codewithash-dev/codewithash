import Link from "next/link";

export default function FundamentalsPage() {
    const sections = [
      {
        title: "Programming Languages",
        description:
          "I have several courses on various programming languages such as Python, Java, JavaScript, and C#. Professional software engineers often know more than one language, but if you're starting out, just focus on one language. I recommend you learn Java first, even if you're not planning to use it in the future. Java is a classic programming language with amazing features. Once you learn Java, you can quickly and easily switch to similar languages like JavaScript, C#, C++, etc.",
        courses: [
          { title: "Ultimate Java Part 1: Fundamentals", level: "Beginner", duration: "4h" },
          { title: "Ultimate Java Part 2: Object-oriented Programming", level: "Intermediate", duration: "4h" },
          { title: "Ultimate Java Part 3: Advanced Topics", level: "Intermediate to Pro", duration: "6h" },
        ],
      },
      {
        title: "Data Structures & Algorithms",
        description:
          "Studying classic data structures and algorithms helps you improve your programming and problem-solving skills. These topics are frequently asked in coding interviews, and this course will help you master them.",
        courses: [
          { title: "Ultimate Data Structures & Algorithms: Part 1", level: "Beginner", duration: "5h" },
          { title: "Ultimate Data Structures & Algorithms: Part 2", level: "Intermediate", duration: "6h" },
          { title: "Ultimate Data Structures & Algorithms: Part 3", level: "Intermediate", duration: "3h" },
        ],
      },
      {
        title: "Design Patterns",
        description:
          "Design patterns are engineered solutions to common problems in software design, and are often asked about in coding interviews. There are 20 classic design patterns commonly known as GoF (Gang of Four) patterns. The following courses help you learn and understand these patterns and appreciate object-oriented programming techniques.",
        courses: [
          { title: "Mastering Design Patterns: Part 1", level: "Beginner", duration: "4h" },
          { title: "Mastering Design Patterns: Part 2", level: "Intermediate", duration: "2h" },
          { title: "Mastering Design Patterns: Part 3", level: "Intermediate", duration: "1h" },
        ],
      },
      {
        title: "Version Control and Collaboration",
        description:
          "Version control is like a time machine for software engineers. It allows you to go back in time and see the exact state of your code at any point. This is incredibly important because it means you can easily track changes, fix bugs, and collaborate with others without the fear of losing or messing up your code.",
        courses: [
          { title: "The Ultimate Git Course", level: "Beginner to Pro", duration: "6h" },
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
          <h1 className="text-6xl font-extrabold mb-5">Fundamentals</h1>
          <p className="text-neutral-400 text-lg">The essential skills every software engineer must have.</p>
        </header>
  
        {/* INTRO */}
        <main className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-neutral-300 leading-relaxed mb-4">
            If you&apos;re pursuing a career as a professional software engineer, you should dedicate the first three to six months to
            mastering the fundamentals.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-16">
            Here are the courses I believe you should take, listed in order. Depending on your knowledge and experience level,
            you can take all the courses in order, or just pick the ones that are best for you.
          </p>
  
          {/* SECTIONS */}
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">{section.description}</p>
  
              {/* TIMELINE */}
              <div className="relative pl-8">
                {/* vertical line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-pink-600 opacity-60" />
  
                <div className="flex flex-col gap-5">
                  {section.courses.map((course) => (
                    <div key={course.title} className="relative">
                      {/* dot */}
                      <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500" />
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 hover:border-purple-500 hover:bg-[#1a1a2e] transition-all cursor-pointer group">
                        <h3 className="font-semibold text-base mb-1 group-hover:text-purple-400 transition-colors">
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