import React from 'react';

function StatusFilter({ statusFilter, setStatusFilter, activeCount, inactiveCount, totalCount }) {
  return (
    <div className="status-filter">
      <button 
        className={statusFilter === 'all' ? 'active' : ''}
        onClick={() => setStatusFilter('all')}
      >
        All ({totalCount})
      </button>
      <button 
        className={statusFilter === 'active' ? 'active' : ''}
        onClick={() => setStatusFilter('active')}
      >
        Active ({activeCount})
      </button>
      <button 
        className={statusFilter === 'inactive' ? 'active' : ''}
        onClick={() => setStatusFilter('inactive')}
      >
        Inactive ({inactiveCount})
      </button>
    </div>
  );
}

export default StatusFilter;
