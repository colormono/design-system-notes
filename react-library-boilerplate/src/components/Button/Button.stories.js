import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const Default = () => (
  <Button task={object('task', { ...taskData })} {...actionsData}>
    Text
  </Button>
);

export const Pinned = () => (
  <Button
    task={object('task', { ...taskData, state: 'TASK_PINNED' })}
    {...actionsData}
  >
    Text
  </Button>
);

export const Archived = () => (
  <Button
    task={object('task', { ...taskData, state: 'TASK_ARCHIVED' })}
    {...actionsData}
  >
    Text
  </Button>
);
