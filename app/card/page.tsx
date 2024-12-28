import Image from 'next/image';
import React from 'react';

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {/* Card 1 */}
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/6.png" // Replace with your image path
          alt="Card 1"
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            Loudest à la Madison #1 (L'Integral)
          </h2>
          <p className="text-sm text-gray-600">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <button className="mt-4 text-blue-500 hover:underline">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/7.png" // Replace with your image path
          alt="Card 2"
          width={348}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            Loudest à la Madison #1 (L'Integral)
          </h2>
          <p className="text-sm text-gray-600">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <button className="mt-4 text-blue-500 hover:underline">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/8.png" // Replace with your image path
          alt="Card 3"
          width={348}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            Loudest à la Madison #1 (L'Integral)
          </h2>
          <p className="text-sm text-gray-600">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>22 April 2021</span>
            <span>10 comments</span>
          </div>
          <button className="mt-4 text-blue-500 hover:underline">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
