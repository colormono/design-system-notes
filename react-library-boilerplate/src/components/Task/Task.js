import React from 'react';
import PropTypes from 'prop-types';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIVED'}
          name='checked'
          disabled
        />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
      </label>
      <div className='title'>
        <input
          type='text'
          value={title}
          placeholder='Input title'
          style={{ textOverflow: 'ellipsis' }}
          readOnly
        />
      </div>

      <div className='actions' onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask(id)}>
            <span className='icon-star' />
          </button>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};
