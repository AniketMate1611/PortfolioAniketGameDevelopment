import Image from 'next/image';

interface Props {
  title: string;
  image: string;
  video?: string;
  description: string;
}

export default function FeaturedCard({ title, image, video, description }: Props) {
  return (
    <div className="relative bg-card text-white p-6 rounded-2xl shadow-lg hover:shadow-neonPink transition-shadow w-[85%] max-w-6xl mx-auto overflow-visible mt-[10%] flex flex-col md:flex-row md:min-h-[300px] gap-4 sm:gap-6">
      
      {/* Image section: adjusted popping out effect based on screen size */}
      <div className="
        relative 
        -mt-12 sm:-mt-24         /* Slight pop on small/mobile */
        md:mt-0 md:absolute 
        md:-top-32 lg:-top-16    /* Stronger pop on medium/large screens */
        md:-right-10 
        w-[160px] sm:w-[180px] h-[220px] sm:h-[240px] 
        z-20 pointer-events-none">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="z-10 relative text-center md:text-left mt-2 sm:mt-4 md:mt-0 md:pr-[220px]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h3>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            className="w-full rounded-lg mb-3 max-w-md mx-auto md:mx-0"
          />
        )}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
