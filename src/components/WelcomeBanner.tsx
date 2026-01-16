import React from 'react';

const WelcomeBanner = () => {
      const text = "Welcome to my portfolio";
      const letters = text.split("");

      return (
            <div className="fixed top-24 left-0 z-50 pointer-events-none">
                  <div className="animate-[slide-container] bg-black/40 backdrop-blur-2xl border-y border-r border-white/20 px-10 py-6 rounded-r-full shadow-2xl">
                        <h1 className="flex m-0 p-0">
                              {letters.map((char, index) => (
                                    <span
                                          key={`${index}-${char}`}
                                          className="letter-stagger inline-block text-white text-4xl font-extralight tracking-wider"
                                          style={{
                                                animationDelay: `${index * 0.07}s`,
                                                minWidth: char === " " ? "0.6em" : "auto"
                                          }}
                                    >
                                          {char}
                                    </span>
                              ))}
                        </h1>
                  </div>
            </div>
      );
};

export default WelcomeBanner;