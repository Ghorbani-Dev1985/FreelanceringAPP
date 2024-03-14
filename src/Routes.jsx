import Index from "./Pages/Index/Index";
import Layout from "./Layout/Layout";



let routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },

];

export default routes;
