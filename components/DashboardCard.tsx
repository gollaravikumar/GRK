
import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon: Icon, change, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';
  const changeIcon = changeType === 'increase' ? '▲' : '▼';

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4">
      <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
        <Icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
            {change && (
                <p className={`text-sm font-semibold ${changeColor}`}>
                    {changeIcon} {change}
                </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
