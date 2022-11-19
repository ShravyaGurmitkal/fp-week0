import React from 'react';

import Navigation from './Navigation.component';

export default {
  title: 'Example/Navigation',
  component: Navigation.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = () => <Navigation />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});
