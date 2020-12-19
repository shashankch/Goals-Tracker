import { Layout, Carousel } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tracker from './Tracker';
import Navbar from './Navbar';
import Main from './Main';
import { contentStyle, contentStyle2 } from '../helpers';

function App(props) {
  const { Footer, Content } = Layout;

  //render layout- header-navbar content-main and tracker and footer
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

export default App;
