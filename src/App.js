import logo from './logo.svg';
import './App.css';
import Login from './reusables/LoginBox.js'

function App() {
  return (
    <div>
      <Login/>
    </div>
    
  );
}

export default App;




// import React, { useState } from 'react';
// import StaffLogin from './StaffLogin';
// import ParentLogin from './ParentLogin';
// import StudentLogin from './StudentLogin';

// const LoginPage = () => {
//   const [activeTab, setActiveTab] = useState('staff');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleTabChange('staff')}>Staff</button>
//         <button onClick={() => handleTabChange('parent')}>Parent</button>
//         <button onClick={() => handleTabChange('student')}>Student</button>
//       </div>

//       {activeTab === 'staff' && <StaffLogin />}
//       {activeTab === 'parent' && <ParentLogin />}
//       {activeTab === 'student' && <StudentLogin />}
//     </div>
//   );
// };

// export default LoginPage;
