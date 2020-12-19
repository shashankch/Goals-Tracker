import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

//display navbar
function Navbar() {
  const { Header } = Layout;
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to='/'>Goal-Tracker </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/'>Home </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/progress'>Progress </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
