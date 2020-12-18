import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tracker from './Tracker';
import Navbar from './Navbar';
import Main from './Main';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { addGoal, startAction, deleteGoal } from '../actions/goals';
import React, { useEffect } from 'react';
function App(props) {
  useEffect(() => {
    if (localStorage.getItem('goals') === null) {
      localStorage.setItem('goals', JSON.stringify(props.state.goals));
    } else {
      props.dispatch(addGoal(JSON.parse(localStorage.getItem('goals')).goals));
    }
  }, []);
  const { Footer, Content } = Layout;
  const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background:
      'url(https://images.unsplash.com/photo-1542596081-6d3eaca5240c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
  };

  const contentStyle2 = {
    height: '360px',

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background:
      'url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80)',
    backgroundRepeat: 'no',
    backgroundSize: 'cover',
  };
  return (
    <Router>
      <div className='App'>
        <Layout className='layout'>
          <Navbar />
          <Switch>
            <Content>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>shashank</h3>
                </div>
                <div>
                  <h3 style={contentStyle2}>shashank</h3>
                </div>
              </Carousel>
              <Route exact path='/' component={Main} />
              <Route path='/progress' component={Tracker} />
            </Content>
          </Switch>
          <Footer className='footer' style={{ textAlign: 'center' }}>
            ©2020 Created by Shashank Chandel - github.com/shashankch
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
