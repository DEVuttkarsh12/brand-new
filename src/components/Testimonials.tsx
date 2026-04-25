import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Karamjeet',
    role: 'CISSP Student',
    text: 'My experience at Infotechmon Private Limited (ITM) was excellent. The regular evaluations, smartboards, highly specialized and expert faculty made my learning journey truly exceptional. I would highly recommend ITM to anyone looking to upskill.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Web Development Student',
    text: 'The faculty at ITM goes above and beyond to ensure every student understands the concepts thoroughly. The placement support helped me land my dream job within weeks of completing the course.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Communication Mastery Student',
    text: 'I joined ITM for their English communication course and the transformation was incredible. My confidence in corporate meetings and presentations has improved dramatically. Best investment I\'ve made.',
    rating: 5,
  },
  {
    name: 'Anita Kaur',
    role: '3D Modeling Student',
    text: 'The modern infrastructure and hands-on approach at ITM sets it apart from other institutes. The 3D modeling course gave me practical skills that I use daily in my architectural firm.',
    rating: 4,
  },
  {
    name: 'Mandeep Singh',
    role: 'Corporate Training',
    text: 'We enrolled our entire IT team for the corporate cybersecurity training. The customized curriculum and flexible scheduling made it seamless. Our team\'s security awareness has improved significantly.',
    rating: 5,
  },
  {
    name: 'Simran Gill',
    role: 'Digital Marketing Student',
    text: 'From zero knowledge to running successful ad campaigns — ITM\'s digital marketing course was comprehensive and practical. The faculty shares real campaign data which makes the learning so much more impactful.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-sans text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground mt-4" style={{ lineHeight: 1.1 }}>
            Our <span className="italic text-muted">happy</span> students speak.
          </h2>
          <p className="text-lg text-muted font-sans mt-6 max-w-xl mx-auto">
            Rated <strong className="text-foreground">4.7 out of 5</strong> with 278+ verified reviews.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <StarRating rating={t.rating} />
              <p className="text-sm text-muted font-sans leading-relaxed mt-4 flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center">
                  <span className="text-white text-sm font-semibold font-sans">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-sans font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs font-sans text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
