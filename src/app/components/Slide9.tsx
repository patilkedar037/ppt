import { ImageWithFallback } from './figma/ImageWithFallback';
import championImage from '../../imports/ChatGPT_Image_Apr_2,_2026,_05_16_11_PM.png';

export function Slide9() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-red-600 via-red-500 to-red-600 p-16 flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-12">
        {/* Thank You Message */}
        <div className="space-y-6">
          <div className="text-8xl font-black tracking-tight">THANK YOU</div>
          <div className="h-2 w-48 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Team Champions */}
        <div className="space-y-8 mt-16">
          <div className="text-3xl font-bold tracking-wide">🏆 Team Champions</div>
          <div className="flex justify-center">
            <ImageWithFallback 
              src={championImage} 
              alt="Champions of JFM '26"
              className="max-w-4xl w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Success Stats */}
        <div className="flex justify-center items-center gap-16 mt-16">
          <div className="text-center">
            <div className="text-6xl font-black">90</div>
            <div className="text-lg font-semibold mt-2 opacity-90">Placements</div>
          </div>
          <div className="w-1 h-24 bg-white opacity-30"></div>
          <div className="text-center">
            <div className="text-6xl font-black">154</div>
            <div className="text-lg font-semibold mt-2 opacity-90">Partners</div>
          </div>
          <div className="w-1 h-24 bg-white opacity-30"></div>
          <div className="text-center">
            <div className="text-6xl font-black">450%</div>
            <div className="text-lg font-semibold mt-2 opacity-90">Growth</div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 space-y-4">
          <div className="text-2xl font-bold">JFM'26 - A Record-Breaking Quarter</div>
          <div className="text-lg opacity-90">The Career Pulse • Powered by upGrad</div>
        </div>
      </div>

      {/* UpGrad Logo */}
      <div className="absolute top-8 right-16">
        <div className="text-white font-black text-4xl tracking-wider drop-shadow-lg">upGrad</div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white via-red-200 to-white"></div>
    </div>
  );
}