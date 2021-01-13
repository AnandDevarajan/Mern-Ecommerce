import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Shipping from './screens/Shipping';
import Payment from './screens/Payment';
import PlaceOrder from './screens/PlaceOrder';
import Order from './screens/Order';
import UserList from './screens/UserList';
import UserEdit from './screens/UserEdit';
import ProductList from './screens/ProductList';
import ProductEdit from './screens/ProductEdit';
import OrderList from './screens/OrderList';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/search/:keyword' component={Home} />

          <Route path='/product/:id' component={Product} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/admin/userlist' component={UserList} />
          <Route path='/admin/productlist' component={ProductList} />
          <Route path='/admin/orderlist' component={OrderList} />
          <Route path='/admin/user/:id' component={UserEdit} />
          <Route path='/admin/product/:id' component={ProductEdit} />
          <Route path='/order/:id' component={Order} />
          <Route path='/cart/:id?' component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
