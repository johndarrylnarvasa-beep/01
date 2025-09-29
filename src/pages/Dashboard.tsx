import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Search, 
  Calendar, 
  CreditCard, 
  Wrench, 
  Bell,
  Users,
  BarChart3,
  Plus,
  Star
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const tenantModules = [
    { icon: Search, title: 'Find Boarding Houses', desc: 'Search and filter available properties', color: 'bg-blue-100 text-blue-600' },
    { icon: Calendar, title: 'My Reservations', desc: 'View and manage your bookings', color: 'bg-green-100 text-green-600' },
    { icon: CreditCard, title: 'Rent Payments', desc: 'Pay rent and view payment history', color: 'bg-purple-100 text-purple-600' },
    { icon: Wrench, title: 'Maintenance Requests', desc: 'Submit and track maintenance issues', color: 'bg-orange-100 text-orange-600' },
    { icon: Bell, title: 'Notifications', desc: 'View announcements and alerts', color: 'bg-red-100 text-red-600' },
    { icon: Star, title: 'Reviews & Ratings', desc: 'Rate and review properties', color: 'bg-yellow-100 text-yellow-600' }
  ];

  const landlordModules = [
    { icon: Home, title: 'My Properties', desc: 'Manage your property listings', color: 'bg-blue-100 text-blue-600' },
    { icon: Plus, title: 'Add Property', desc: 'List a new boarding house', color: 'bg-green-100 text-green-600' },
    { icon: Users, title: 'Tenant Management', desc: 'View and manage tenants', color: 'bg-purple-100 text-purple-600' },
    { icon: CreditCard, title: 'Payment Tracking', desc: 'Monitor rent payments and billing', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Wrench, title: 'Maintenance Requests', desc: 'Handle tenant maintenance requests', color: 'bg-orange-100 text-orange-600' },
    { icon: BarChart3, title: 'Analytics', desc: 'View reports and property statistics', color: 'bg-teal-100 text-teal-600' }
  ];

  const adminModules = [
    { icon: Users, title: 'User Management', desc: 'Manage all system users', color: 'bg-blue-100 text-blue-600' },
    { icon: Home, title: 'Property Oversight', desc: 'Monitor all property listings', color: 'bg-green-100 text-green-600' },
    { icon: BarChart3, title: 'System Analytics', desc: 'View platform-wide statistics', color: 'bg-purple-100 text-purple-600' },
    { icon: Bell, title: 'System Notifications', desc: 'Manage platform announcements', color: 'bg-red-100 text-red-600' },
    { icon: Star, title: 'Content Moderation', desc: 'Review ratings and reports', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Wrench, title: 'System Maintenance', desc: 'Platform maintenance and updates', color: 'bg-gray-100 text-gray-600' }
  ];

  const getModules = () => {
    switch (user?.role) {
      case 'landlord':
        return landlordModules;
      case 'admin':
        return adminModules;
      default:
        return tenantModules;
    }
  };

  const getRoleTitle = () => {
    switch (user?.role) {
      case 'landlord':
        return 'Landlord Dashboard';
      case 'admin':
        return 'Admin Dashboard';
      default:
        return 'Tenant Dashboard';
    }
  };

  const getRoleWelcome = () => {
    switch (user?.role) {
      case 'landlord':
        return 'Manage your properties and tenants efficiently';
      case 'admin':
        return 'Monitor and manage the entire platform';
      default:
        return 'Find and manage your perfect boarding house';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 text-lg">{getRoleWelcome()}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600 capitalize">
                {getRoleTitle()}
              </div>
              <div className="text-gray-500 text-sm">
                {user?.email}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Home className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Bookings</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Calendar className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₱25,000</p>
              </div>
              <CreditCard className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Bell className="h-12 w-12 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getModules().map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${module.color} mb-4`}>
                  <module.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                
                <p className="text-gray-600">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">New booking received</p>
                <p className="text-sm text-gray-500">Maria Santos booked Room 101 at Sunrise Boarding House</p>
              </div>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Payment received</p>
                <p className="text-sm text-gray-500">₱8,000 rent payment for February 2025</p>
              </div>
              <span className="text-sm text-gray-400">1 day ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-orange-100 text-orange-600 p-2 rounded-full">
                <Wrench className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Maintenance request</p>
                <p className="text-sm text-gray-500">AC repair needed in Room 203</p>
              </div>
              <span className="text-sm text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;