import React from 'react';

const brands = ['Apple', 'Samsung', 'Google Pixel', 'OnePlus', 'Xiaomi', 'Sony', 'Motorola', 'Nothing'];

export const BrandsMarquee = () => {
  return (
    <div className="w-full overflow-hidden border-y border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 py-8">
      <div className="flex space-x-16 items-center animate-[marquee_20s_linear_infinite] whitespace-nowrap px-8">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="text-2xl font-bold font-heading opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            {brand}
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
};
