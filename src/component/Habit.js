import { Row, Col, Card } from 'antd';

function Habit(props) {
  console.log('$$$', props);
  const { goals } = props.goals;
 
  return (
    <div className='habit-container'>
      <div className='site-card-wrapper'>
        <Row gutter={[16, 16]}>
          {goals && goals.map((goal) => {
            return (
              <Col span={8}>
                <Card title={goal.title} bordered={false}>
                  {goal.title}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Habit;
