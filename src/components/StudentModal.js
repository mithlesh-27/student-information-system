import React from 'react';

function StudentModal({ student, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={student.image} alt={student.name} className="modal-header-image" />
          <h2>{student.name}</h2>
        </div>
        <div className="modal-body">
          <div className="detail-row">
            <strong>Student ID:</strong> {student.studentId}
          </div>
          <div className="detail-row">
            <strong>Major:</strong> {student.major}
          </div>
          <div className="detail-row">
            <strong>Email:</strong> {student.email}
          </div>
          <div className="detail-row">
            <strong>Phone:</strong> {student.phone}
          </div>
          <div className="detail-row">
            <strong>Join Date:</strong> {student.joinDate}
          </div>
          <div className="detail-row">
            <strong>Status:</strong>
            <span className={`status-badge ${student.status}`}>
              {student.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
