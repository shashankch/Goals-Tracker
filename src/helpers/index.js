// contains all utility methods...
import { notification } from 'antd';

// styling for carousel
export const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background:
    'url(https://images.unsplash.com/photo-1542596081-6d3eaca5240c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
};

export const contentStyle2 = {
  height: '360px',

  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background:
    'url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80)',
  backgroundRepeat: 'no',
  backgroundSize: 'cover',
};

//display notification
export const openNotify = (type, desc, message) => {
  notification[type]({
    message: desc,
    description: message,
  });
};

//alignment of form input box and add button
export const layout = {
  wrapperCol: {
    span: 18,
    offset: 2,
  },
};
export const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 4,
  },
};
