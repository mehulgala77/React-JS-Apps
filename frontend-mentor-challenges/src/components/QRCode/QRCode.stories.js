import React from 'react';

import QRCode from './QRCode';

export default {
  title: 'QRCode',
  component: QRCode,
};

const Template = (args) => <QRCode {...args} />;

export const Base = Template.bind({});