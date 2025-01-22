'use client'
export default function Hero() {
  const one = <h1 className="text-5xl font-bold">Jordan Tam</h1>
  const two = <h2 className="text-2xl mt-3 font-medium">FullStack Developer</h2>
  const three = <p className="text-2xl mt-4 leading-normal">Sydney, Australia</p>

  const items = [one, two, three];

  return (
    <div>
      <div className="flex flex-col h-full text-primary">
        {items.map((item, i) => (
          // <div key={i} className="transition-opacity duration-1000 ease-in-out delay-1000 opacity-0 transform translate-y-8 sm:translate-y-0 sm:translate-x-8 sm:opacity-0 sm:scale-95 sm:delay-1000 sm:duration-1000">
          <div key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
