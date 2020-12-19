import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { Button, notification } from 'antd';
import { addGoal, startAction, deleteGoal } from '../actions/goals';
import { connect } from 'react-redux';
import Habit from './Habit';
function Main(props) {
  const [title, setTitle] = useState('');
  const handleAddChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddGoal = () => {
    props.dispatch(startAction());
    props.dispatch(
      addGoal({
        key: Math.random() * 100,
        title: title,
        status: ['None', 'None', 'None', 'None', 'None', 'None', 'None'],
        streak: 0,
      })
    );

    setTitle('');
    openNotify(
      'success',
      'Goal Added',
      'You Successfully added goal. Now track your goal!!'
    );
  };

  const openNotify = (type, desc, message) => {
    notification[type]({
      message: desc,
      description: message,
    });
  };
  const layout = {
    wrapperCol: {
      span: 18,
      offset: 2,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 9,
      span: 4,
    },
  };

  const handleDelete = (goal) => {
    console.log('delete', goal);
    props.dispatch(deleteGoal(goal));

    openNotify('error', 'Goal Removed', 'You have Successfully deleted goal!!');
  };
  console.log('jhk', props);
  return (
    <Row justify='space-around' align='middle'>
      <Col span={12}>
        <div className='input-container'>
          <Form
            {...layout}
            name='basic'
            initialValues={{
              remember: true,
            }}
            onFinish={handleAddGoal}
          >
            <Form.Item
              name='goal'
              rules={[
                {
                  required: true,
                  message: 'Please input your Goal!',
                },
              ]}
            >
              <Input
                onChange={handleAddChange}
                allowClear
                placeholder='Add Now!!'
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit' size='large'>
                Add Goal
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Habit
          goals={props.state.goals}
          notify={openNotify}
          handleDelete={handleDelete}
          history={props.history}
        />
      </Col>
    </Row>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Main);
