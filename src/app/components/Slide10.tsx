import { ImageWithFallback } from './figma/ImageWithFallback';
import img1 from '../../imports/celebbbb.jpeg';
import img2 from '../../imports/celllll.jpeg';
import img3 from '../../imports/celebbb.jpeg';
import img4 from '../../imports/celeee.jpeg';
import img5 from '../../imports/celllle.jpeg';
import img6 from '../../imports/celebraa.jpeg';
import img7 from '../../imports/Celebr.jpeg';
import img8 from '../../imports/celeb.jpeg';
import img9 from '../../imports/cele.jpeg';

const celebrationImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export function Slide10() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-10">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Celebration Moments</h2>
        <p className="text-xl text-gray-500 mt-2">Success Stories & Team Spirit</p>
      </div>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-4">
        {/* First large image - spans 2 columns and 2 rows */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[0]}
            alt="Celebration moment 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top right images */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[1]}
            alt="Celebration moment 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[2]}
            alt="Celebration moment 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle right images */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[3]}
            alt="Celebration moment 4"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[4]}
            alt="Celebration moment 5"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom row images */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[5]}
            alt="Celebration moment 6"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[6]}
            alt="Celebration moment 7"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-100">
          <ImageWithFallback 
            src={celebrationImages[7]}
            alt="Celebration moment 8"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats Card - bottom right */}
        <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <div className="text-5xl font-black mb-2">90</div>
            <div className="text-base font-semibold mb-4">Dreams Achieved</div>
            <div className="h-1 w-16 bg-white mx-auto mb-4"></div>
            <div className="text-3xl font-black mb-2">🎉</div>
            <div className="text-xs font-semibold opacity-90">JFM'26 Success</div>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 via-white to-red-50 rounded-xl border-2 border-red-100">
        <div className="text-center">
          <div className="text-2xl font-black text-red-600">Celebrating Every Success Story</div>
          <div className="text-sm text-gray-600 mt-2">Together we achieve more • upGrad Career Pulse JFM'26</div>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}