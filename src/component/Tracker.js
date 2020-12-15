import React, { useState, useEffect } from 'react';
import { Input, Layout, Menu, Row, Col, Card } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Select } from 'antd';
import { connect } from 'react-redux';
function Tracker(props) {
  const { Option } = Select;
  var date = new Date();
  var dt = date.getDate();
  var mt = date.toLocaleString('default', { month: 'short' });
  console.log('tracker$$$', props.state.goals);
  const { goals } = props.state.goals;

  const columns = [
    {
      title: 'Goal',
      dataIndex: 'goal',
      key: 'goal',
    },
    {
      title: dt - 6 + ' ' + mt,
      dataIndex: 'dt_6',
      key: 'dt-6',
    },
    {
      title: dt - 5 + ' ' + mt,
      dataIndex: 'dt_5',
      key: 'dt-5',
    },
    {
      title: dt - 4 + ' ' + mt,
      dataIndex: 'dt_4',
      key: 'dt-4',
    },
    {
      title: dt - 3 + ' ' + mt,
      dataIndex: 'dt_3',
      key: 'dt-3',
    },
    {
      title: dt - 2 + ' ' + mt,
      dataIndex: 'dt_2',
      key: 'dt-2',
    },
    {
      title: dt - 1 + ' ' + mt,
      dataIndex: 'dt_1',
      key: 'dt-1',
    },
    {
      title: dt + ' ' + mt,
      dataIndex: 'dt',
      key: 'dt',
    },
  ];

  const data = [];
  goals.map((goal, index) => {
    data.push({
      key: index + 1,
      goal: `${goal.title}`,
      dt_6: `${goal.status[6]}`,
      dt_5: `${goal.status[5]}`,
      dt_4: `${goal.status[4]}`,
      dt_3: `${goal.status[3]}`,
      dt_2: `${goal.status[2]}`,
      dt_1: `${goal.status[1]}`,
      dt: `${goal.status[0]}`,
    });
  });

  return (
    <div className='tracker-container'>
      <Table columns={columns} dataSource={data} />
      <Select
        defaultValue='lucy'
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='disabled' disabled>
          Disabled
        </Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </Select>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Tracker);
