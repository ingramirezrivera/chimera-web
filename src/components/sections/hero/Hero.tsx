import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden">
      {/* Background image from /public (Next prefixes basePath automatically) */}
      <Image
        src="/ChimInsightBanner.png"
        alt="ChimeralInsight hero banner"
        fill
        priority
        sizes="100vw "
        className="object-cover"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Chimeral <span className="text-brand-600">Insight</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-100/90">
            Modern experiences built with a lean, scalable baseline.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#features" className="btn btn-primary">
              Get Started
            </a>
            <a
              href="#about"
              className="btn btn-outline text-white border-white/70 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
