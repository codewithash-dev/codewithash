import Link from "next/link";

export default function GameDevPage() {
    const sections = [
      {
        title: "Game Development Fundamentals",
        description: "Learn the core concepts of game development including game loops, physics, collision detection, and game design principles.",
        courses: [
          { title: "Introduction to Game Development", level: "Beginner", duration: "4h" },
          { title: "Game Design Principles", level: "Beginner", duration: "3h" },
          { title: "Math for Game Developers", level: "Beginner to Intermediate", duration: "5h" },
        ],
      },
      {
        title: "Unity Game Engine",
        description: "Master Unity, one of the most popular game engines. Build 2D and 3D games for multiple platforms.",
        courses: [
          { title: "Unity Fundamentals", level: "Beginner", duration: "6h" },
          { title: "Unity 2D Game Development", level: "Intermediate", duration: "8h" },
          { title: "Unity 3D Game Development", level: "Intermediate to Pro", duration: "10h" },
        ],
      },
      {
        title: "C# for Game Development",
        description: "Learn C# programming specifically for game development. Master scripting, gameplay mechanics, and game logic.",
        courses: [
          { title: "C# Programming Essentials", level: "Beginner", duration: "5h" },
          { title: "C# for Unity", level: "Intermediate", duration: "6h" },
          { title: "Advanced Game Scripting", level: "Intermediate to Pro", duration: "5h" },
        ],
      },
      {
        title: "Game Physics & AI",
        description: "Implement realistic physics and intelligent AI behaviors in your games.",
        courses: [
          { title: "Game Physics Fundamentals", level: "Intermediate", duration: "4h" },
          { title: "AI for Games", level: "Intermediate", duration: "5h" },
          { title: "Pathfinding & Navigation", level: "Intermediate to Pro", duration: "3h" },
        ],
      },
      {
        title: "Publishing & Monetization",
        description: "Learn how to publish your games and implement monetization strategies.",
        courses: [
          { title: "Publishing to App Stores", level: "Intermediate", duration: "3h" },
          { title: "Game Monetization Strategies", level: "Intermediate", duration: "2h" },
          { title: "Marketing Your Game", level: "Intermediate", duration: "3h" },
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
          <h1 className="text-6xl font-extrabold mb-5">Game Development</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            The fundamental courses you need to build games.
          </p>
        </header>
  
        {/* INTRO */}
        <main className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Game development combines programming, design, art, and storytelling. Whether you want to build indie games or work at a AAA studio, this path will teach you the fundamentals.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-16">
            Here are the courses I believe you should take, listed in order. Master game engines, programming, and game design principles.
          </p>
  
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">{section.description}</p>
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-violet-500 opacity-70" />
                <div className="flex flex-col gap-5">
                  {section.courses.map((course) => (
                    <div key={course.title} className="relative">
                      <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400" />
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 hover:border-violet-500 hover:bg-[#120f1f] transition-all cursor-pointer group">
                        <h3 className="font-semibold text-base mb-1 group-hover:text-violet-400 transition-colors">{course.title}</h3>
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