import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Mail, DollarSign, TrendingUp } from 'lucide-react';

export function DashboardHome() {
  const stats = [
    {
      title: 'Total Customers',
      value: '2,543',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Emails Sent',
      value: '8,329',
      change: '+8.2%',
      icon: Mail,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+23.1%',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Growth',
      value: '18.2%',
      change: '+4.3%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New customer added', customer: 'Sarah Johnson', time: '2 min ago' },
    { id: 2, action: 'Email campaign sent', customer: 'Q4 Newsletter', time: '15 min ago' },
    { id: 3, action: 'Payment received', customer: 'Acme Corp - $2,500', time: '1 hour ago' },
    { id: 4, action: 'Support ticket resolved', customer: 'Ticket #1234', time: '2 hours ago' },
    { id: 5, action: 'New user registered', customer: 'Mike Wilson', time: '3 hours ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.color} p-2 rounded-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div>
                  <div className="text-sm">{activity.action}</div>
                  <div className="text-sm text-gray-500">{activity.customer}</div>
                </div>
                <div className="text-xs text-gray-400">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
