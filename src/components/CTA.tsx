import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Home, Shield } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of students and professionals who have found their perfect 
            boarding house through our platform. Start your journey today!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Tenants</h3>
            <p className="text-blue-100">
              Find, compare, and book your ideal boarding house with ease
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Landlords</h3>
            <p className="text-blue-100">
              List your properties and manage tenants efficiently
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-blue-100">
              Safe transactions and verified properties for peace of mind
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Join as Tenant</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/register"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>List Your Property</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <p className="mt-6 text-blue-100">
            Free to join • No hidden fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;