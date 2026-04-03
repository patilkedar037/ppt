import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const jobTypeData = [
  { name: 'Full-Time', value: 76, id: 'ft' },
  { name: 'Internship + PPO', value: 30, id: 'intern' }
];

const placementTypeData = [
  { name: 'LC Sourced', value: 74, percentage: 82.2, id: 'lc' },
  { name: 'Self Transition', value: 16, percentage: 17.8, id: 'st' }
];

const COLORS = ['#DC2626', '#EF4444', '#F87171'];

export function Slide5() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Job & Placement Type</h2>
        <p className="text-xl text-gray-500 mt-2">Distribution Analysis</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-12">
        {/* Job Type - Bar Chart */}
        <div className="flex flex-col" key="job-type-section">
          <div className="text-2xl font-bold text-gray-900 mb-6">Job Type Distribution</div>
          <ResponsiveContainer width="100%" height="70%">
            <BarChart 
              data={jobTypeData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              id="job-type-chart"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                angle={-15}
                textAnchor="end"
                height={80}
                tick={{ fill: '#4B5563', fontSize: 13, fontWeight: 600 }}
              />
              <YAxis tick={{ fill: '#4B5563', fontSize: 14, fontWeight: 600 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #DC2626',
                  borderRadius: '8px',
                  padding: '12px'
                }}
                formatter={(value: number) => [`${value} placements`, 'Count']}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {jobTypeData.map((entry) => (
                  <Cell key={`cell-bar-${entry.id}`} fill={COLORS[jobTypeData.indexOf(entry)]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-black text-red-600">60</div>
              <div className="text-xs font-semibold text-gray-600 mt-1">Full-Time</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-black text-red-600">30</div>
              <div className="text-xs font-semibold text-gray-600 mt-1">Internship+ PPO</div>
            </div>
          </div>
        </div>

        {/* Placement Type - Pie Chart */}
        <div className="flex flex-col" key="placement-type-section">
          <div className="text-2xl font-bold text-gray-900 mb-6">Placement Type</div>
          <ResponsiveContainer width="100%" height="70%">
            <PieChart id="placement-type-chart">
              <Pie
                data={placementTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ value }) => value}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {placementTypeData.map((entry) => (
                  <Cell key={`cell-pie-${entry.id}`} fill={COLORS[placementTypeData.indexOf(entry)]} />
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
                  `${value} (${props.payload.percentage}%)`,
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Stats */}
          <div className="space-y-4 mt-6">
            {placementTypeData.map((item, index) => (
              <div key={`stat-${item.name}-${index}`} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <div className="text-sm font-semibold text-gray-700">{item.name}</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-black text-red-600">{item.value}</div>
                  <div className="text-sm text-gray-500 self-end pb-1">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}