import { Row, Col, Card, Statistic, Button } from 'antd';

function Habit(props) {
  const { goals } = props.goals;
  console.log('jhk', props);
  const redirect = () => {
    props.history.push('/progress');
  };
  return (
    <div className='habit-container'>
      <div className='site-card-wrapper'>
        <Row gutter={[16, 16]}>
          {goals &&
            goals.map((goal, index) => {
              return (
                <Col key={index}>
                  <Card
                    title={goal.title}
                    bordered={false}
                    extra={
                      <Button danger onClick={(e) => props.handleDelete(goal)}>
                        Remove
                      </Button>
                    }
                    style={{ width: 300 }}
                    hoverable={true}
                  >
                    <Statistic
                      title='Streak'
                      value={goal.streak}
                      suffix='/ 7'
                    />
                    <div align='middle'>
                      <Button onClick={redirect} type='link'>
                        Check Progress
                      </Button>
                    </div>
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
