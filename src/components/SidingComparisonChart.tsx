import React from 'react';

const sidingData = [
  { name: 'Vinyl', Cost: 'Low', Durability: 'Moderate', Maintenance: 'Low', Appeal: 'Moderate', EcoFriendly: 'Low' },
  {
    name: 'Fiber Cement',
    Cost: 'Moderate-High',
    Durability: 'High',
    Maintenance: 'Low',
    Appeal: 'High',
    EcoFriendly: 'Moderate',
  },
  { name: 'Wood', Cost: 'High', Durability: 'Moderate', Maintenance: 'High', Appeal: 'High', EcoFriendly: 'High' },
  { name: 'Metal', Cost: 'Moderate', Durability: 'High', Maintenance: 'Low', Appeal: 'Moderate', EcoFriendly: 'High' },
  {
    name: 'Brick',
    Cost: 'High',
    Durability: 'Very High',
    Maintenance: 'Very Low',
    Appeal: 'High',
    EcoFriendly: 'Moderate',
  },
  {
    name: 'Stone Veneer',
    Cost: 'High',
    Durability: 'High',
    Maintenance: 'Low',
    Appeal: 'Very High',
    EcoFriendly: 'Moderate',
  },
];

function SidingComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-200 w-full">
        <thead className="bg-gray-100 dark:bg-gray-700 text-left">
          <tr>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Material</th>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Cost</th>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Durability</th>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Maintenance</th>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Aesthetic Appeal</th>
            <th className="border border-gray-200 px-4 py-2 font-semibold">Eco-Friendliness</th>
          </tr>
        </thead>
        <tbody>
          {sidingData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
              <strong>
                <td className="border border-gray-200 px-4 py-2">{item.name}</td>
              </strong>
              <td className="border border-gray-200 px-4 py-2">{item.Cost}</td>
              <td className="border border-gray-200 px-4 py-2">{item.Durability}</td>
              <td className="border border-gray-200 px-4 py-2">{item.Maintenance}</td>
              <td className="border border-gray-200 px-4 py-2">{item.Appeal}</td>
              <td className="border border-gray-200 px-4 py-2">{item.EcoFriendly}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SidingComparisonTable;
