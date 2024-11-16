"use client"; // Add this line at the top

import { useState } from 'react';


export default function Signup() {
    

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    dob: { day: '', month: '', year: '' },
    phone: '',
    countryCode: '+1', // Default country code (US)
  });

  const countries = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+63', name: 'Philippines' },
    { code: '+1', name: 'Canada' },
    { code: '+61', name: 'Australia' },
    { code: '+91', name: 'India' },
    { code: '+81', name: 'Japan' },
    { code: '+86', name: 'China' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+34', name: 'Spain' },
    { code: '+39', name: 'Italy' },
    { code: '+7', name: 'Russia' },
    { code: '+55', name: 'Brazil' },
    { code: '+64', name: 'New Zealand' },
    { code: '+27', name: 'South Africa' },
    { code: '+52', name: 'Mexico' },
    { code: '+47', name: 'Norway' },
    { code: '+46', name: 'Sweden' },
    { code: '+31', name: 'Netherlands' },
    { code: '+62', name: 'Indonesia' },
    { code: '+82', name: 'South Korea' },
    { code: '+48', name: 'Poland' },
    { code: '+90', name: 'Turkey' },
    { code: '+45', name: 'Denmark' },
    { code: '+351', name: 'Portugal' },
    { code: '+56', name: 'Chile' },
    { code: '+20', name: 'Egypt' },
    { code: '+32', name: 'Belgium' },
    { code: '+58', name: 'Venezuela' },
    { code: '+351', name: 'Portugal' },
    { code: '+60', name: 'Malaysia' },
    { code: '+65', name: 'Singapore' },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      dob: {
        ...prev.dob,
        [name]: value,
      },
    }));
  };

  const handleCountryCodeChange = (e) => {
    const selectedCountryCode = e.target.value;
    setFormData((prev) => ({
      ...prev,
      countryCode: selectedCountryCode,
      phone: selectedCountryCode, // Automatically set the phone field to start with the country code
    }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Ensure the phone input starts with the selected country code
    if (!value.startsWith(formData.countryCode)) {
      value = formData.countryCode + value.replace(/^[+0-9]+/, ''); // Remove any previous codes/numbers
    }

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Join Twitch Today</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex space-x-2">
            <div>
              <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
              <select
                id="month"
                name="month"
                value={formData.dob.month}
                onChange={handleDateChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                style={{ width: '130px' }}
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day</label>
              <input
                id="day"
                name="day"
                type="number"
                value={formData.dob.day}
                onChange={handleDateChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
              <input
                id="year"
                name="year"
                type="number"
                value={formData.dob.year}
                onChange={handleDateChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code</label>
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name} {country.code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
