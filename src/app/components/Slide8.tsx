import guestImage from '../../imports/guest2.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide8() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Guest Lecture</h2>
        <p className="text-xl text-gray-500 mt-2">Industry Experts & Thought Leaders</p>
      </div>

      {/* Guest Lecture Image */}
      <div className="flex-1 flex items-center justify-center">
        <a href="https://drive.google.com/file/d/1ZB2jVVaI7ormS5tqHbEWwaGT12w3JjSc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="max-w-full max-h-full flex items-center justify-center">
          <ImageWithFallback 
            src={guestImage} 
            alt="Guest Lecture Speakers"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
          />
        </a>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}