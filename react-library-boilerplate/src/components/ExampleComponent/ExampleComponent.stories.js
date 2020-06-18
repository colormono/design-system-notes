import React from 'react';
import ExampleComponent from './ExampleComponent';

export default {
  component: ExampleComponent,
  title: 'ExampleComponent'
};

export const text = () => (
  <ExampleComponent text='Create React Library Example 😄' />
);
