import React, { useState } from 'react';
import './App.css';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import StatusFilter from './components/StatusFilter';
import StudentModal from './components/StudentModal';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Mithlesh',
      studentId: 'STU001',
      major: 'Computer Science',
      status: 'active',
      email: 'mithlesh@example.com',
      phone: '+91-9876543210',
      joinDate: '2022-01-15',
      image: '/images/student1.jpg',
    },
    {
      id: 2,
      name: 'Ankesh',
      studentId: 'STU002',
      major: 'UI/UX Design',
      status: 'inactive',
      email: 'ankesh@example.com',
      phone: '+91-9876543211',
      joinDate: '2022-02-20',
      image: '/images/student2.jpg',
    },
    {
      id: 3,
      name: 'Dhanajay',
      studentId: 'STU003',
      major: 'Project Management',
      status: 'active',
      email: 'dhanajay@example.com',
      phone: '+91-9876543212',
      joinDate: '2022-03-10',
      image: '/images/student3.jpg',
    },
    {
      id: 4,
      name: 'Raj',
      studentId: 'STU004',
      major: 'Software Testing',
      status: 'active',
      email: 'raj@example.com',
      phone: '+91-9876543215',
      joinDate: '2022-06-25',
      image: '/images/student4.jpeg',
    },
    {
      id: 5,
      name: 'Vineet Pattnaik',
      studentId: 'STU005',
      major: 'System Administration',
      status: 'active',
      email: 'vineet@example.com',
      phone: '+91-9876543216',
      joinDate: '2022-07-30',
      image: '/images/student2.jpg',
    },
    {
      id: 6,
      name: 'Satyam',
      studentId: 'STU006',
      major: 'Frontend Development',
      status: 'inactive',
      email: 'satyam@example.com',
      phone: '+91-9876543217',
      joinDate: '2022-08-05',
      image: '/images/student4.jpeg',
    },
    {
      id: 7,
      name: 'Rudra',
      studentId: 'STU007',
      major: 'Backend Development',
      status: 'active',
      email: 'rudra@example.com',
      phone: '+91-9876543218',
      joinDate: '2022-09-10',
      image: '/images/student1.jpg',
    },
    {
      id: 8,
      name: 'Sridhar',
      studentId: 'STU008',
      major: 'DevOps',
      status: 'active',
      email: 'sridhar@example.com',
      phone: '+91-9876543219',
      joinDate: '2022-10-15',
      image: '/images/student3.jpg',
    },
  ]);

  const handleDetails = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const toggleBlockStatus = (studentId) => {
    setStudents(students.map(student =>
      student.id === studentId
        ? { ...student, status: student.status === 'active' ? 'inactive' : 'active' }
        : student
    ));
  };

  const filteredStudents = students.filter(student =>
    (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     student.studentId.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || student.status === statusFilter)
  );

  return (
    <div className="app">
      <h1>Student Information System</h1>
      {selectedStudent && (
        <div className="login-indicator">
          <img src={selectedStudent.image} alt={selectedStudent.name} className="login-image" />
          <span>{selectedStudent.name}</span>
        </div>
      )}
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <StatusFilter 
          statusFilter={statusFilter} 
          setStatusFilter={setStatusFilter}
          activeCount={students.filter(s => s.status === 'active').length}
          inactiveCount={students.filter(s => s.status === 'inactive').length}
          totalCount={students.length}
        />
      </div>
      <div className="student-grid">
        {filteredStudents.map(student => (
          <StudentCard 
            key={student.id} 
            student={student}
            onDetails={() => handleDetails(student)}
            onBlock={() => toggleBlockStatus(student.id)}
          />
        ))}
      </div>
      {isModalOpen && selectedStudent && (
        <StudentModal 
          student={selectedStudent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
