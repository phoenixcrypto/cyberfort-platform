// Task card component for displaying assignments with status toggle functionality
import React from 'react'

/*
Props:
 - task: { id, title, course, due_date, description, status }
 - onStatusToggle: function(id, newStatus)
*/
const TaskCard = ({ task, onStatusToggle }) => {

  const handleToggle = () => {
    if (!onStatusToggle) return
    const newStatus = task.status === 'open' ? 'done' : 'open'
    onStatusToggle(task.id, newStatus)
  }

  return (
    <div className="task-card" data-aos="fade-up">
      <div className="task-card-body">
        <div className="task-header">
          <h3>{task.title}</h3>
          <span className={`status-badge ${task.status}`}>{task.status.toUpperCase()}</span>
        </div>
        <p className="task-meta"><strong>{task.course}</strong> • Due: {task.due_date}</p>
        <p className="task-desc">{task.description}</p>
        <div className="task-actions">
          <button className="btn small" onClick={handleToggle} aria-label="Toggle task status">
            {task.status === 'open' ? (<><i className="fas fa-check"></i> Mark Complete</>) : (<><i className="fas fa-undo"></i> Reopen</>)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
