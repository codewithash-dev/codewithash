'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const buttonRefs = useRef<HTMLAnchorElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Floating particles background
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: any[] = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      function animate() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
          ctx.fill();
        });

        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }

    // Stagger text animation for hero title
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 50, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );
    }

    // Hero fade in with 3D transform
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100, rotateX: 20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.2,
      }
    );

    // Stats cards with stagger and 3D flip
    if (statsRef.current) {
      gsap.fromTo(
        Array.from((statsRef.current as HTMLElement)?.children || []),
        { opacity: 0, y: 50, rotateY: 90, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Section cards with curtain reveal
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 25 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );

        // Parallax effect on images/graphics inside sections
        const images = section.querySelectorAll('.parallax-element');
        images.forEach((img) => {
          gsap.to(img, {
            y: -50,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        });
      }
    });

    // Colorful boxes with 3D tilt + magnetic effect
    boxesRef.current.forEach((box) => {
      if (box) {
        // 3D tilt on hover
        box.addEventListener('mouseenter', () => {
          gsap.to(box, {
            scale: 1.2,
            rotateX: 10,
            rotateY: 10,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        box.addEventListener('mouseleave', () => {
          gsap.to(box, {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        // Glitch effect on click
        box.addEventListener('click', () => {
          gsap.to(box, {
            x: Math.random() * 10 - 5,
            duration: 0.05,
            repeat: 5,
            yoyo: true,
            onComplete: () => {
              gsap.to(box, { x: 0, duration: 0.2 });
            },
          });
        });
      }
    });

    // Magnetic buttons
    buttonRefs.current.forEach((button) => {
      if (button) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    // Gradient animation
    const gradientElements = document.querySelectorAll('.animate-gradient');
    gradientElements.forEach((el) => {
      gsap.to(el, {
        backgroundPosition: '200% center',
        duration: 5,
        repeat: -1,
        ease: 'linear',
      });
    });

    // Smooth scroll snap
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.scrollSnapAlign = 'start';
    });
    document.documentElement.style.scrollSnapType = 'y proximity';

  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-lg"
            />
          </a>

          <div className="flex gap-8 items-center">
  <a href="/projects" className="text-gray-300 hover:text-white transition">
    Projects
  </a>
  <a href="/learning-paths" className="text-gray-300 hover:text-white transition">
    Learning Paths
  </a>
  <a href="/contact" className="text-gray-300 hover:text-white transition">
    Contact
  </a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20 relative z-10">
        <div ref={heroRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight perspective-1000"
            >
              Master Coding. Build Real Projects. Get Hired.
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Structured, no-fluff portfolio that showcases the skills you need to succeed in the real world.
            </p>
            <a
              ref={(el) => { if (el) buttonRefs.current[0] = el; }}
              href="/projects"
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient hover:shadow-2xl hover:shadow-purple-500/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              View Projects →
            </a>
          </div>

          <div className="hidden md:block parallax-element">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono leading-relaxed">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">coder</span> = {'{\n'}
                  {'  '}name: <span className="text-yellow-300">'Master Coder'</span>,{'\n'}
                  {'  '}skills: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Node'</span>],{'\n'}
                  {'  '}hardWorker: <span className="text-orange-400">true</span>,{'\n'}
                  {'  '}problemSolver: <span className="text-orange-400">true</span>,{'\n'}
                  {'  '}hireable: <span className="text-green-400">function</span>() {'{\n'}
                  {'    '}<span className="text-purple-400">return</span> ({'\n'}
                  {'      '}<span className="text-blue-300">this</span>.hardWorker &&{'\n'}
                  {'      '}<span className="text-blue-300">this</span>.problemSolver &&{'\n'}
                  {'      '}<span className="text-blue-300">this</span>.skills.length {'>='}  <span className="text-orange-400">5</span>{'\n'}
                  {'    '});{'\n'}
                  {'  '}{'}\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-black relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-xl mb-4">Hello,</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            I'm Ashley Henderson.
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            I've spent years building real-world applications, and my goal isn't just to write code — it's to help you think like a professional software engineer, master problem-solving, and build skills you'll use for life.
          </p>

          <div className="flex justify-center mb-12 parallax-element">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-500">
              <img
                src="/ashley.jpg"
                alt="Ashley Henderson"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-5xl font-bold text-purple-400 mb-2">10M+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-green-500 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-5xl font-bold text-green-400 mb-2">4M</div>
              <div className="text-gray-400">GitHub Stars</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-pink-500 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-5xl font-bold text-pink-400 mb-2">20+</div>
              <div className="text-gray-400">Years experience</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-orange-500 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="text-5xl font-bold text-orange-400 mb-2">52</div>
              <div className="text-gray-400">Tech Stacks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love Learning Here */}
      <section className="py-32 px-6 bg-black relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="text-purple-400 text-xl mb-4">Why You'll Love Learning Here</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Quality, Structure, and Real Results
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {/* Perfectly Structured Courses */}
          <div ref={(el) => { if (el) sectionRefs.current[0] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">A clear path to master coding</p>
              <h3 className="text-4xl font-bold mb-6">Perfectly Structured Courses</h3>
              <p className="text-xl text-gray-300">
                No more jumping between random YouTube tutorials. Follow a clear, logical path designed to build your skills step-by-step.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative parallax-element">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-6 flex items-center justify-center shadow-2xl">
                  <div className="text-center space-y-4 p-8">
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                    <div className="h-3 bg-white/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-400 rounded-2xl shadow-xl"></div>
                <div className="absolute -bottom-10 -left-6 w-20 h-20 bg-teal-400 rounded-2xl shadow-xl"></div>
              </div>
            </div>
          </div>

          {/* Clear and Bite-Sized Lessons */}
          <div ref={(el) => { if (el) sectionRefs.current[1] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative parallax-element">
                <div className="w-96 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                  <div className="flex gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute right-6 top-6 w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-4 shadow-xl">
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-3 bg-orange-500/20 p-4 rounded-xl mt-6">
                    <p className="text-xs text-orange-300 font-semibold">Course contents</p>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded"></div>
                    <div className="h-2 bg-orange-400/30 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Straightforward and to the point</p>
              <h3 className="text-4xl font-bold mb-6">Clear and Bite-Sized Lessons</h3>
              <p className="text-xl text-gray-300">
                Each lesson is focused and fluff-free, so you can make real progress—even with a busy schedule. Get exactly what you need without wasting a minute.
              </p>
            </div>
          </div>

          {/* More than Just Code */}
          <div ref={(el) => { if (el) sectionRefs.current[2] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Deep understanding, not just shortcuts</p>
              <h3 className="text-4xl font-bold mb-6">More than Just Code</h3>
              <p className="text-xl text-gray-300">
                I go beyond the "what" and show you the "why" and "how" behind every concept, so you can code with real understanding.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative parallax-element">
                <div className="w-80 h-80 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-56 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl transform -rotate-12 shadow-2xl"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-64 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl shadow-2xl z-10 p-6 flex flex-col items-center justify-center">
                      <div className="space-y-2 text-sm font-mono text-white/80">
                        <div>{'<div>'}</div>
                        <div className="pl-4">{'<code>'}</div>
                        <div className="pl-8 text-purple-200">...</div>
                        <div className="pl-4">{'</code>'}</div>
                        <div>{'</div>'}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl transform rotate-12 shadow-2xl" style={{ marginLeft: '120px', marginTop: '80px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hands-on Projects */}
          <div ref={(el) => { if (el) sectionRefs.current[3] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-96 h-96 parallax-element">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-teal-900 to-cyan-900 rounded-full shadow-2xl flex items-center justify-center">
                    <svg className="w-64 h-64 opacity-20" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="30" r="8" />
                      <path d="M30 45 L50 30 L70 45 L70 70 L30 70 Z" opacity="0.6" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-48 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-4 z-10">
                    <div className="flex gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2 text-xs font-mono text-teal-200">
                      <div className="h-2 bg-teal-400/30 rounded"></div>
                      <div className="h-2 bg-teal-400/30 rounded w-3/4"></div>
                      <div className="h-2 bg-teal-400/30 rounded w-1/2"></div>
                    </div>
                    <div className="mt-4 bg-pink-500 rounded-xl p-3 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-pink-300 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 bg-pink-300/60 rounded"></div>
                          <div className="h-1.5 bg-pink-300/40 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Get ready for real-world work</p>
              <h3 className="text-4xl font-bold mb-6">Hands-on Projects You'll Love</h3>
              <p className="text-xl text-gray-300">
                We'll build real-world projects together, giving you the confidence to tackle real challenges on the job.
              </p>
            </div>
          </div>

          {/* Built on 20+ Years of Experience */}
          <div ref={(el) => { if (el) sectionRefs.current[4] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Decades of coding, shared with you</p>
              <h3 className="text-4xl font-bold mb-6">Built on 20+ Years of Experience</h3>
              <p className="text-xl text-gray-300">
                With over two decades in the industry, I've seen it all. I'll share insights and lessons that you won't find in any textbook.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="grid grid-cols-3 gap-4 perspective-1000">
                  {[
                    '#8b5cf6', '#ec4899', '#f97316',
                    '#06b6d4', '#10b981', '#f59e0b',
                    '#6366f1', '#ef4444', '#14b8a6'
                  ].map((color, i) => (
                    <div
                      key={i}
                      ref={(el) => { if (el) boxesRef.current[i] = el; }}
                      className="w-20 h-20 rounded-2xl transition shadow-xl cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
                        transformStyle: 'preserve-3d',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by Millions */}
          <div ref={(el) => { if (el) sectionRefs.current[5] = el; }} className="grid md:grid-cols-2 gap-16 items-center perspective-1000">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative parallax-element">
                <div className="w-96 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <div className="bg-white/95 rounded-xl px-8 py-3 mb-6 shadow-lg">
                    <p className="text-purple-600 font-bold text-sm">Programming with Mosh</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <button className="border-2 border-white text-white px-8 py-2.5 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition text-sm">
                    SUBSCRIBE
                  </button>
                </div>
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl px-6 py-4 shadow-2xl">
                  <p className="text-2xl font-bold">3M+</p>
                  <p className="text-xs text-purple-200">Subscribers</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-500 rounded-3xl transform rotate-12 shadow-2xl"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-purple-400 mb-4">Join a global community of learners</p>
              <h3 className="text-4xl font-bold mb-6">Trusted by Millions</h3>
              <p className="text-xl text-gray-300">
                #1 ranked tutorials on YouTube, trusted by millions for their clarity and depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Employees */}
      <section className="py-32 px-6 bg-black relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-xl mb-4">Recognized by Professionals</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-12">
            Trusted by Employees at Leading Companies
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            My courses are used by professionals from top companies like Microsoft, Amazon, and Google, helping them sharpen their skills and stay ahead in their fields.
          </p>
          <div className="flex justify-center gap-6">
            <a
              ref={(el) => { if (el) buttonRefs.current[1] = el; }}
              href="/projects"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient hover:shadow-2xl hover:shadow-purple-500/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              Projects
            </a>
            <a
              ref={(el) => { if (el) buttonRefs.current[2] = el; }}
              href="/contact"
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-[length:200%_100%] animate-gradient hover:shadow-2xl hover:shadow-pink-500/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© Code with Ash</p>

            <div className="flex gap-6">
              <a href="https://github.com/codewithash-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/codewithash/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Use</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .animate-gradient {
          background-size: 200% 100%;
          animation: gradient 5s linear infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </main>
  );
}