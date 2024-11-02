import React from 'react';

function StudentCard({ student, onDetails, onBlock }) {
  return (
    <div className={`student-card ${student.status}`}>
      <img src={student.image} alt={student.name} className="student-image" />
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <button 
          className="block-btn"
          onClick={onBlock}
        >
          {student.status === 'active' ? 'Block' : 'Unblock'}
        </button>
        <button 
          className="details-btn"
          onClick={onDetails}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
