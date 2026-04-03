export function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-white via-white to-red-50">
      {/* Background accent shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-600 to-red-500 opacity-10 rounded-bl-[100px]"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16">
        <div className="text-center space-y-8">
          {/* Title with red accent bar */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="h-1 w-32 bg-red-600 mb-8"></div>
            </div>
            
            <h1 className="text-9xl font-black text-red-600 tracking-tight">
              JFM'26
            </h1>
            
            {/* Full Form */}
            <div className="mt-6">
              <p className="text-3xl text-gray-700 font-semibold tracking-widest">
                January • February • March
              </p>
            </div>
            
            <div className="h-1 w-48 bg-red-600 mx-auto mt-8"></div>
          </div>
          
          {/* Subtitle */}
          <div className="mt-12">
            <p className="text-3xl text-gray-900 font-bold tracking-wide">
              PLACEMENT REPORT
            </p>
            <p className="text-xl text-gray-600 font-medium tracking-wide mt-2">
              upGrad Learning Centre
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      {/* UpGrad Logo/Brand */}
      <div className="absolute top-8 left-8">
        <div className="text-red-600 font-black text-3xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}
