import React, { useState } from 'react';
import { Input, Row, Col } from 'antd';
import { addGoal } from '../actions/goals';
import { connect } from 'react-redux';
import Habit from './Habit';
function Main(props) {
  const { Search } = Input;
  console.log('###', props);

  const [title, setTitle] = useState('');
  const handleAddChange = (e) => {
    console.log('###', e.target.value);
    setTitle(e.target.value);
  };
  const handleAddGoal = () => {
    console.log('%%%', title);
    props.dispatch(
      addGoal({
        title: title,
        status: ['None','None','None','None','None','None','None'],
        streak: 0,
      })
    );
  };

  return (
    <Row justify='space-around' align='middle'>
      <Col span={12}>
        <div className='input-container'>
          <Search
            placeholder='Add Now!!'
            allowClear
            enterButton='Add Goal'
            size='large'
            onChange={handleAddChange}
            value={title}
            onSearch={handleAddGoal}
          />
        </div>

        <Habit goals={props.state.goals}/>
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
