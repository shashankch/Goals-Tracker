import Habit from './Habit';
import { Input, Layout, Menu, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tracker from './Tracker';
import Navbar from './Navbar';
import Main from './Main';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
function App() {
  const { Footer, Content } = Layout;

  return (
    <Router>
      <div className='App'>
        <Layout className='layout'>
          <Navbar />
          <Switch>
            <Content>
              <Route exact path='/' component={Main} />
              <Route path='/progress' component={Tracker} />
            </Content>
          </Switch>
          <Footer className='footer' style={{ textAlign: 'center' }}>
            ©2020 Created by Shashank
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

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(App);
