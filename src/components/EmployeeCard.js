import React from 'react';

function EmployeeCard({ employee, onBlock, onDetails }) {
  return (
    <div className={`employee-card ${employee.status}`}>
      <img src={employee.image} alt={employee.name} className="employee-image" />
      <div className="employee-info">
        <h3>{employee.name}</h3>
        <p>Employee ID: {employee.empId}</p>
        <p>Designation: {employee.designation}</p>
        <p className="status">Status: {employee.status}</p>
        <div className="card-actions">
          <button 
            className="block-btn"
            onClick={() => onBlock(employee.id)}
          >
            {employee.status === 'active' ? 'Block' : 'Unblock'}
          </button>
          <button 
            className="details-btn"
            onClick={() => onDetails(employee)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;