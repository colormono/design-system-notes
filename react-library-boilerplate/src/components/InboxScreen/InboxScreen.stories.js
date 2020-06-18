import React from 'react';

import PureInboxScreen from '.';
import { defaultTasksData } from '../TaskList/TaskList.stories';

export default {
  component: PureInboxScreen,
  title: 'InboxScreen'
};

export const Default = () => <PureInboxScreen tasks={defaultTasksData} />;

export const Error = () => <PureInboxScreen error='Something' />;
