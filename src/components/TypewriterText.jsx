import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterText() {
  return (
    <h2 className="text-lg md:text-xl text-center text-gray-300 font-semibold tracking-wide m-0">
      <Typewriter
        options={{
          strings: [
            'Fullstack Developer',
            'UI Engineer',
            'AI Enthusiast',
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40,
        }}
      />
    </h2>
  );
}

export default TypewriterText;
