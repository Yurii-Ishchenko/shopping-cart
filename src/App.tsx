import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from './routes';
import Container from './components/Container/Container';
const HomeView = lazy(
  () => import('./views/HomeView/HomeView' /* webpackChunkName: "home-page" */),
);
const CartView = lazy(
  () => import('./views/CartView/CartView' /* webpackChunkName: "cart-page" */),
);
const NotFoundView = lazy(
  () =>
    import(
      './views/NotFoundView/NotFoundView' /* webpackChunkName: "notFound-page" */
    ),
);
function App() {
  return (
    <Container>
      <Suspense fallback={<h2 style={{ textAlign: 'center' }}>Loading...</h2>}>
        <Switch>
          <Route path={routes.home} exact>
            <HomeView />
          </Route>
          <Route path={routes.cart} exact>
            <CartView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </Container>
  );
}

export default App;
