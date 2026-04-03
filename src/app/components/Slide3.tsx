import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const quarterlyData = [
  { quarter: 'JFM\'25', Total: 29, LC: 20, Self: 9 },
  { quarter: 'AMJ\'25', Total: 18, LC: 12, Self: 6 },
  { quarter: 'JAS\'25', Total: 18, LC: 14, Self: 4 },
  { quarter: 'OND\'25', Total: 20, LC: 9, Self: 11 },
  { quarter: 'JFM\'26', Total: 90, LC: 74, Self: 16 }
];

const tableData = [
  { period: 'JFM\'25', total: 29, lc: 20, self: 9 },
  { period: 'AMJ\'25', total: 18, lc: 12, self: 6 },
  { period: 'JAS\'25', total: 18, lc: 14, self: 4 },
  { period: 'OND\'25', total: 20, lc: 9, self: 11 },
  { period: 'JFM\'26', total: 90, lc: 74, self: 16 }
];

export function Slide3() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Quarterly Performance</h2>
        <p className="text-xl text-gray-500 mt-2">Complete Growth Trajectory & Breakdown</p>
      </div>

      {/* Growth Highlight Banner */}
      

      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* Left: Quarterly Data Table */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-3">Quarterly Summary</div>
          
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-3 px-4 text-left font-bold text-sm"></th>
                  <th className="py-3 px-4 text-center font-bold text-sm">Total</th>
                  <th className="py-3 px-4 text-center font-bold text-sm">LC</th>
                  <th className="py-3 px-4 text-center font-bold text-sm">Self</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr 
                    key={row.period} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.period === 'JFM\'26' ? 'bg-red-50' : ''} border-b border-gray-200`}
                  >
                    <td className="py-3 px-4 font-bold text-gray-900 text-sm">{row.period}</td>
                    <td className="py-3 px-4 text-center font-bold text-lg text-gray-900">{row.total}</td>
                    <td className="py-3 px-4 text-center font-semibold text-base text-orange-600">{row.lc}</td>
                    <td className="py-3 px-4 text-center font-semibold text-base text-red-600">{row.self}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Bar Chart */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-3">Visual Breakdown</div>
          <ResponsiveContainer width="100%" height="82%">
            <BarChart data={quarterlyData} barGap={0}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="quarter" 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: '600' }}
              />
              <YAxis 
                stroke="#374151"
                style={{ fontSize: '12px', fontWeight: '600' }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #dc2626',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}
              />
              <Legend 
                wrapperStyle={{ fontWeight: '600', fontSize: '12px' }}
              />
              <Bar dataKey="Total" fill="#1e40af" radius={[4, 4, 0, 0]} />
              <Bar dataKey="LC" fill="#ea580c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Self" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="p-3 bg-blue-50 rounded-xl text-center">
          <div className="text-3xl font-black text-blue-600">90</div>
          <div className="text-xs font-semibold text-gray-600 mt-1">JFM'26 Total</div>
        </div>
        <div className="p-3 bg-orange-50 rounded-xl text-center">
          <div className="text-3xl font-black text-orange-600">74</div>
          <div className="text-xs font-semibold text-gray-600 mt-1">LC Sourced</div>
        </div>
        <div className="p-3 bg-red-50 rounded-xl text-center">
          <div className="text-3xl font-black text-red-600">16</div>
          <div className="text-xs font-semibold text-gray-600 mt-1">Self Transition</div>
        </div>
        <div className="p-3 bg-red-50 rounded-xl text-center">
          <div className="text-3xl font-black text-red-600">82%</div>
          <div className="text-xs font-semibold text-gray-600 mt-1">LC Success Rate</div>
        </div>
      </div>

      {/* Efficiency Improvement Banner */}
      <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border-2 border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-600">2.0</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">JDs/Selection (Jan)</div>
            </div>
            <div className="text-3xl text-green-600 font-black">→</div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-600">1.25</div>
              <div className="text-xs font-semibold text-gray-500 mt-1">JDs/Selection (Now)</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-green-600">38% Improvement</div>
            <div className="text-sm text-gray-600 mt-1">Recruitment Efficiency Gained</div>
          </div>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}