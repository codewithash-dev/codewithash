import Link from "next/link";

export default function MobilePage() {
    const sections = [
      {
        title: "React Native Fundamentals",
        description: "Learn to build cross-platform mobile apps with React Native. Master components, navigation, and native modules.",
        courses: [
          { title: "React Native Essentials", level: "Beginner", duration: "6h" },
          { title: "React Native Navigation", level: "Beginner to Intermediate", duration: "4h" },
          { title: "State Management with Redux", level: "Intermediate", duration: "5h" },
        ],
      },
      {
        title: "Native Features",
        description: "Access device features like camera, location, notifications, and sensors. Build truly native experiences.",
        courses: [
          { title: "Working with Native Modules", level: "Intermediate", duration: "4h" },
          { title: "Camera & Media Access", level: "Intermediate", duration: "3h" },
          { title: "Push Notifications & Background Tasks", level: "Intermediate", duration: "4h" },
        ],
      },
      {
        title: "UI & Animation",
        description: "Create beautiful, smooth user interfaces with React Native animations and gestures.",
        courses: [
          { title: "React Native UI Libraries", level: "Beginner to Intermediate", duration: "4h" },
          { title: "Advanced Animations with Reanimated", level: "Intermediate to Pro", duration: "5h" },
          { title: "Gesture Handling", level: "Intermediate", duration: "3h" },
        ],
      },
      {
        title: "Performance & Optimization",
        description: "Optimize your apps for smooth performance, faster load times, and better user experience.",
        courses: [
          { title: "React Native Performance Optimization", level: "Intermediate to Pro", duration: "4h" },
          { title: "Memory Management & Debugging", level: "Intermediate", duration: "3h" },
        ],
      },
      {
        title: "Testing & Deployment",
        description: "Test your apps thoroughly and deploy to App Store and Google Play.",
        courses: [
          { title: "Testing React Native Apps", level: "Intermediate", duration: "4h" },
          { title: "iOS Deployment Guide", level: "Intermediate", duration: "3h" },
          { title: "Android Deployment Guide", level: "Intermediate", duration: "3h" },
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
          <h1 className="text-6xl font-extrabold mb-5">Mobile Development</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            All the courses you need to build professional, cross-platform mobile apps using React Native.
          </p>
        </header>
  
        {/* INTRO */}
        <main className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-neutral-300 leading-relaxed mb-4">
            Mobile development with React Native lets you build apps for both iOS and Android using JavaScript and React. It&apos;s the fastest way to ship production-ready mobile apps.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-16">
            Here are the courses I believe you should take, listed in order. Master React Native from basics to advanced deployment.
          </p>
  
          {sections.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">{section.description}</p>
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-blue-500 opacity-70" />
                <div className="flex flex-col gap-5">
                  {section.courses.map((course) => (
                    <div key={course.title} className="relative">
                      <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400" />
                      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-5 hover:border-blue-500 hover:bg-[#0a0f1f] transition-all cursor-pointer group">
                        <h3 className="font-semibold text-base mb-1 group-hover:text-blue-400 transition-colors">{course.title}</h3>
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