import React from 'react';

function ResponsiveImageWithText() {
  return (
    <div className="relative max-w-800 mx-auto">
      <img
        src="/photo4.jpg"
        alt="Notebook"
        className="block w-full"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Heading</h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei.
        </p>
      </div>
    </div>
  );
}

export default ResponsiveImageWithText;
