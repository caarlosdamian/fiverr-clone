import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import {
  Add,
  Gig,
  Gigs,
  Home,
  Message,
  Messages,
  MyGigs,
  Orders,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/messages/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/mygigs",
        element: <MyGigs />,
      },
    ],
  },
]);
