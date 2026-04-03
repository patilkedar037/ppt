import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const centerData = [
  { name: 'Pune', placements: 31 },
  { name: 'Indore', placements: 14 },
  { name: 'Jaipur', placements: 10 }
];

const topCompaniesRelevant = [
  { company: 'Eclerx', count: 7 },
  { company: 'TCS', count: 6 },
  { company: 'Media Vidhya', count: 6 },
  { company: 'Convergence', count: 5 },
  { company: 'Accenture', count: 4 }
];

const topPlacements = [
  { name: 'Kranti Patil', city: 'Pune', role: 'Sr. Data Consultant', ctc: '15L', company: 'Infosys' },
  { name: 'Harshvardhan', city: 'Jaipur', role: 'Business Analyst Intern', ctc: '8.5L', company: 'SynergyLabs' },
  { name: 'Krishna Takate', city: 'Pune', role: 'Data Scientist', ctc: '5.5L', company: 'All Soft' },
  { name: 'Sarthak Maiti', city: 'Kolkata', role: 'Systems Engineer', ctc: '7.09L', company: 'Tata Consultancy Services' },
  { name: 'Gouthami Gottimukkala', city: 'Bengaluru', role: 'Data Analyst', ctc: '5L', company: 'Soliflex Packaging' }
];

export function Slide7() {
  return (
    <div className="w-full h-full bg-white p-16 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="h-1 w-24 bg-red-600 mb-3"></div>
        <h2 className="text-5xl font-bold text-gray-900">Center & Company Performance</h2>
        <p className="text-xl text-gray-500 mt-2">Geographic Distribution & Top Partners</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-10">
        {/* Left Column: Center Performance + Top Companies */}
        <div className="flex flex-col gap-8">
          {/* Center-wise Performance */}
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-900 mb-4">Center-wise Placements</div>
            <ResponsiveContainer width="100%" height="70%">
              <BarChart data={centerData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#4B5563', fontSize: 14, fontWeight: 600 }}
                />
                <YAxis tick={{ fill: '#4B5563', fontSize: 14, fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #DC2626',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                  formatter={(value: number) => [`${value} placements`, 'Total']}
                />
                <Bar dataKey="placements" radius={[8, 8, 0, 0]}>
                  {centerData.map((entry, index) => (
                    <Cell key={`center-${index}`} fill="#DC2626" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Center Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {centerData.map((center, index) => (
                <div key={index} className="p-4 bg-red-50 rounded-lg text-center">
                  <div className="text-3xl font-black text-red-600">{center.placements}</div>
                  <div className="text-xs font-semibold text-gray-600 mt-1">{center.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 5 Companies - Relevant Roles */}
          <div className="flex-1">
            <div className="text-2xl font-bold text-gray-900 mb-4">Top 5 Companies</div>
            <div className="space-y-3">
              {topCompaniesRelevant.map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-white rounded-xl border-2 border-red-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-black">
                      {index + 1}
                    </div>
                    <div className="text-base font-bold text-gray-900">{company.company}</div>
                  </div>
                  <div className="text-3xl font-black text-red-600">{company.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Top 5 Placements */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-4">Top 5 Placements</div>
          <div className="space-y-3 flex-1">
            {topPlacements.map((placement, index) => (
              <div 
                key={index} 
                className="p-5 bg-gradient-to-br from-red-50 via-white to-red-50 rounded-xl border-2 border-red-100 hover:border-red-600 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-black shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-lg font-black text-gray-900">{placement.name}</div>
                      <div className="text-sm text-gray-600">{placement.city}</div>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-red-600">{placement.ctc}</div>
                </div>
                <div className="ml-13 space-y-1">
                  <div className="text-sm font-semibold text-gray-700">{placement.role}</div>
                  <div className="text-xs font-semibold text-red-600">{placement.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-6 p-6 bg-red-50 rounded-xl border-l-4 border-red-600">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black text-red-600">Pune Leads with 31</div>
          <div className="text-lg text-gray-700">Top 3 centers contribute 55 placements</div>
        </div>
      </div>

      {/* UpGrad Branding */}
      <div className="absolute top-8 right-16">
        <div className="text-red-600 font-bold text-2xl tracking-wider">upGrad</div>
      </div>
    </div>
  );
}