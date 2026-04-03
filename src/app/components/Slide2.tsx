import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', placements: 11 },
  { month: 'Feb', placements: 24 },
  { month: 'Mar', placements: 55 }
];

export function Slide2() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Executive Summary</h2>
        <p className="text-xl text-gray-500 mt-2">JFM'26 Placement Overview</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-4 gap-8 mt-6">
        {/* Metric 1 */}
        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100">
          <div className="text-6xl font-black text-red-600 mb-3">90</div>
          <div className="text-lg font-semibold text-gray-700">Total Placements</div>
          <div className="text-sm text-gray-500 mt-2">87 Unique Learners</div>
        </div>

        {/* Metric 2 */}
        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100">
          <div className="text-6xl font-black text-red-600 mb-3">115</div>
          <div className="text-lg font-semibold text-gray-700">Hiring Partners</div>
          <div className="text-sm text-gray-500 mt-2">Active Companies</div>
        </div>

        {/* Metric 3 */}
        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100">
          <div className="text-6xl font-black text-red-600 mb-3">156</div>
          <div className="text-lg font-semibold text-gray-700">Companies</div>
          <div className="text-sm text-gray-500 mt-2">Total Reach</div>
        </div>

        {/* Metric 4 */}
        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100">
          <div className="text-6xl font-black text-red-600 mb-3">200</div>
          <div className="text-lg font-semibold text-gray-700">Jobs Posted</div>
          <div className="text-sm text-gray-500 mt-2">Open Positions</div>
        </div>
      </div>

      {/* Additional Highlights & Monthly Chart */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-black text-red-600">2454</div>
            <div className="text-sm font-semibold text-gray-700">Total Applications</div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-black text-red-600">873</div>
            <div className="text-sm font-semibold text-gray-700">Total Interviews</div>
          </div>
        </div>

        {/* JFM'26 Monthly Chart */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-3">JFM'26 Monthly Trend</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: '600' }}
              />
              <YAxis 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: '600' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #dc2626',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}
              />
              <Bar dataKey="placements" fill="#dc2626" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}
