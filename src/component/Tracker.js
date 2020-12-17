import React, { useState, useEffect } from 'react';
import { Input, Layout, Menu, Row, Col, Card } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { updateStatus } from '../actions/goals';
function Tracker(props) {
  const { Option } = Select;
  var date = new Date();
  var dt = date.getDate();
  var mt = date.toLocaleString('default', { month: 'short' });
  console.log('tracker$$$', props.state.goals);
  const { goals } = props.state.goals;

  const handleUpdateStatus = (value) => {
    console.log('value', value);
    var arr = value.split('-');
    console.log('****', arr);
    props.dispatch(updateStatus(arr));
  };
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
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + JSON.stringify(goal) + '-6'}>
              Not Done
            </Option>
            <Option value={'Done-' + goal + '-6'}>Done</Option>
            <Option value={'None-' + goal + '-6'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt - 5 + ' ' + mt,
      dataIndex: 'dt_5',
      key: 'dt-5',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-5'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-5'}>Done</Option>
            <Option value={'None-' + goal.title + '-5'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt - 4 + ' ' + mt,
      dataIndex: 'dt_4',
      key: 'dt-4',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-4'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-4'}>Done</Option>
            <Option value={'None-' + goal.title + '-4'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt - 3 + ' ' + mt,
      dataIndex: 'dt_3',
      key: 'dt-3',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-3'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-3'}>Done</Option>
            <Option value={'None-' + goal.title + '-3'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt - 2 + ' ' + mt,
      dataIndex: 'dt_2',
      key: 'dt-2',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-2'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-2'}>Done</Option>
            <Option value={'None-' + goal.title + '-2'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt - 1 + ' ' + mt,
      dataIndex: 'dt_1',
      key: 'dt-1',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-1'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-1'}>Done</Option>
            <Option value={'None-' + goal.title + '-1'}>None</Option>
          </Select>
        </>
      ),
    },
    {
      title: dt + ' ' + mt,
      dataIndex: 'dt',
      key: 'dt',
      render: (goal) => (
        <>
          <Select
            defaultValue='None'
            style={{ width: 120 }}
            onChange={handleUpdateStatus}
          >
            <Option value={'Not Done-' + goal.title + '-0'}>Not Done</Option>
            <Option value={'Done-' + goal.title + '-0'}>Done</Option>
            <Option value={'None-' + goal.title + '-0'}>None</Option>
          </Select>
        </>
      ),
    },
  ];

  const data = [];
  goals.map((goal, index) => {
    data.push({
      key: index + 1,
      goal: `${goal.title}`,
      dt_6: goal,
      dt_5: goal,
      dt_4: goal,
      dt_3: goal,
      dt_2: goal,
      dt_1: goal,
      dt: goal,
    });
    return data;
  });
  return (
    <div className='tracker-container'>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Tracker);
