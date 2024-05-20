import App from "../App";
import ErrorPage from "./ErrorPage";
import Shoppage from '../Shoppage'


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/:name",
    element:<App />,
  },
  // {
  //   path:"shop",
  //   element:<Shoppage />,
  // },
];

export default routes;