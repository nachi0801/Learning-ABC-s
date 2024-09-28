import React from 'react';

const users = [
  { name: 'Justin De Castilla', status: 'Active', email: 'DeCastilla23@gmail.com' },
  { name: 'Chan Dacoco', status: 'Not Active', email: 'DacocoMail@gmail.com' },
  { name: 'Manuel Cole', status: 'Not Active', email: 'ColeManuel@gmail.com' },
  { name: 'Mico Sabi', status: 'Active', email: 'SabiMico@gmail.com' },
  { name: 'Louie Labajo', status: 'Active', email: 'Labajo23@gmail.com' },
];

const ManageAccount = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFC357' }}> {/* Set to #FFC357 */}

      {/* Navbar */}
      <nav className="bg-yellow-400 p-4 flex justify-between items-center"> {/* Adjust navbar color if needed */}
        <div className="text-xl font-bold text-white">Manage Account</div>
        <button className="text-white">☰</button>
      </nav>

      {/* Search Bar and Filter */}
      <div className="bg-yellow-200 p-4 flex justify-between items-center space-x-2"> {/* Can keep it lighter or match #FFC357 */}
        <input
          type="text"
          placeholder="Users"
          className="border-2 border-gray-300 p-2 rounded-md flex-grow"
        />

        <select className="border-2 border-gray-300 p-2 rounded-md">
          <option>Role</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>User</option>
        </select>
        <button className="bg-yellow-500 text-white p-2 rounded-md">Delete</button>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-x-auto p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-400 text-white"> {/* Adjust if needed */}
              <th className="p-2 text-left border-b border-gray-300">Full Name</th>
              <th className="p-2 text-left border-b border-gray-300">Status</th>
              <th className="p-2 text-left border-b border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-2">{user.name}</td>
                <td className={`p-2 font-bold ${user.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                  {user.status}
                </td>
                <td className="p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ManageAccount />
    </div>
  );
}

export default App;
