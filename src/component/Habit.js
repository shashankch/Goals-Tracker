import { Row, Col, Card, Statistic, Button } from 'antd';

function Habit(props) {
  const { goals } = props.goals;
  console.log('jhk', props);
  return (
    <div className='habit-container'>
      <div className='site-card-wrapper'>
        <Row gutter={[16, 16]}>
          {goals &&
            goals.map((goal, index) => {
              return (
                <Col span={8} key={index}>
                  <Card
                    title={goal.title}
                    bordered={false}
                    extra={
                      <Button danger onClick={(e) => props.handleDelete(goal)}>
                        Remove
                      </Button>
                    }
                    style={{ width: 300 }}
                  >
                    <Statistic
                      title='Streak'
                      value={goal.streak}
                      suffix='/ 7'
                    />
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
