export default function Home() {
  const text = 'Munge Studio';

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8 px-4">
        <h1
          className="text-glow text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-center"
          translate="no"
        >
          <span style={{ color: '#00ff99' }}>
            {text.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
}
