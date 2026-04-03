import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const ctcBreakupData = [
  { name: '≥ 3.6 LPA', value: 35, count: 32 },
  { name: '2.4 - 3.59 LPA', value: 42, count: 38 },
  { name: '< 2.4 LPA', value: 23, count: 20 }
];

const COLORS = ['#DC2626', '#EF4444', '#FCA5A5'];

export function Slide4() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">CTC Analysis</h2>
        <p className="text-xl text-gray-500 mt-2">Salary Distribution & Metrics</p>
      </div>

      <div className="flex-1 flex gap-12 mt-4">
        {/* Chart */}
        <div className="flex-1">
          <div className="text-2xl font-bold text-gray-900 mb-4">CTC Breakup Distribution</div>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={ctcBreakupData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${value}%`}
                outerRadius={180}
                fill="#8884d8"
                dataKey="value"
              >
                {ctcBreakupData.map((entry, index) => (
                  <Cell key={`ctc-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #DC2626',
                  borderRadius: '8px',
                  padding: '12px'
                }}
                formatter={(value: number, name: string, props: any) => [
                  `${value}% (~${props.payload.count} placements)`,
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend & Stats */}
        <div className="w-1/3 flex flex-col justify-center gap-6">
          {ctcBreakupData.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-5 h-5 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <div className="text-lg font-bold text-gray-700">{item.name}</div>
              </div>
              <div className="flex gap-6 items-center">
                <div>
                  <div className="text-4xl font-black text-red-600">{item.value}%</div>
                  <div className="text-xs text-gray-500 mt-1">~{item.count} offers</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-6 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black text-red-600">42% in Mid-Range</div>
          <div className="text-lg text-gray-700">Majority of placements between 2.4-3.59 LPA, 35% in desirable segment (≥3.6L)</div>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}