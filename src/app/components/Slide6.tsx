import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const programData = [
  { name: 'Data Science', value: 75 },
  { name: 'Full Stack Dev', value: 9 },
  { name: 'Digital Marketing', value: 6 }
];

const roleRelevancyData = [
  { name: 'Relevant Roles', value: 68, percentage: 75.6 },
  { name: 'Non-Relevant Roles', value: 22, percentage: 24.4 }
];

const topRoles = [
  { rank: 1, role: 'Data Analyst', count: 20, percentage: 22.22 },
  { rank: 2, role: 'Software / Systems Eng', count: 14, percentage: 15.56 },
  { rank: 3, role: 'Data Annotation', count: 13, percentage: 14.44 },
  { rank: 4, role: 'Graduate / Tech Trainee', count: 9, percentage: 10.00 },
  { rank: 5, role: 'Digital Marketing', count: 8, percentage: 8.89 }
];

const COLORS = ['#DC2626', '#EF4444'];
const PROGRAM_COLORS = ['#DC2626', '#EF4444', '#F87171'];

export function Slide6() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Program & Role Analysis</h2>
        <p className="text-xl text-gray-500 mt-2">Distribution by Programs & Role Relevancy</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-10">
        {/* Left Column: Program Breakdown + Role Relevancy */}
        <div className="flex flex-col gap-8">
          {/* Program Breakdown */}
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-900 mb-4">Program-wise Placements</div>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={programData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  angle={-20}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: '#4B5563', fontSize: 12, fontWeight: 600 }}
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
                  {programData.map((entry, index) => (
                    <Cell key={`program-${index}`} fill={PROGRAM_COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Role Relevancy Pie Chart */}
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-900 mb-4">Role Relevancy</div>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="60%" height={200}>
                <PieChart>
                  <Pie
                    data={roleRelevancyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ value }) => value}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {roleRelevancyData.map((entry, index) => (
                      <Cell key={`relevancy-${index}`} fill={COLORS[index]} />
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

              {/* Legend */}
              <div className="flex-1 space-y-3">
                {roleRelevancyData.map((item, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      ></div>
                      <div className="text-xs font-semibold text-gray-700">{item.name}</div>
                    </div>
                    <div className="text-2xl font-black text-red-600">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Top 5 Roles */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-4">Top 5 Roles (71% of Placements)</div>
          <div className="space-y-3 flex-1">
            {topRoles.map((role, index) => (
              <div 
                key={index} 
                className="p-5 bg-gradient-to-r from-red-50 to-white rounded-xl border-2 border-red-100 hover:border-red-600 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-black">
                      {role.rank}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{role.role}</div>
                      <div className="text-sm text-gray-600">{role.percentage}% of total</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-red-600">{role.count}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-black text-red-600">75</div>
              <div className="text-xs font-semibold text-gray-600 mt-1">Data Science</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-black text-red-600">9</div>
              <div className="text-xs font-semibold text-gray-600 mt-1">Full Stack</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <div className="text-3xl font-black text-red-600">6</div>
              <div className="text-xs font-semibold text-gray-600 mt-1">Digital Mktg</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-6 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black text-red-600">75.6% Relevant Roles</div>
          <div className="text-lg text-gray-700">Data Science dominates with 75 placements • Top 5 roles account for 71% of all placements</div>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}
