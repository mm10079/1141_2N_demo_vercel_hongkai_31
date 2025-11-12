import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_31,
  HomePage_31,
  BlogStaticPage_xx,
  BlogLocalJsonPage_xx,
  BlogNodePage_xx,
  BookListPage_xx,
  BlogSupaPage_xx,
} from './pages';

import {
  T11_ErrorExamplePage_xx,
  T12_UseStateBasicsPage_xx,
} from './pages/tutorials';

import {
  Quiz1LayoutPage_xx,
  Quiz1Page_xx,
  TourStaticPage_xx,
  TourStaticPage2_xx,
  TourStaticPage3_xx,
  TourNodePage_xx,
} from './pages/quiz1';

import {
  MidtermLayoutPage_31,
  MidtermHomePage_31,
  P1_StaticPage_31,
  P2_StaticPage_31,
  P3_NodePage_31,
  P4_SupaPage_31,
} from './pages/midterm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_31 />,
    children: [
      {
        index: true,
        element: <HomePage_31 />,
      },
      {
        path: 'static_xx',
        element: <BlogStaticPage_xx />,
      },
      {
        path: 'localjson_xx',
        element: <BlogLocalJsonPage_xx />,
      },
      {
        path: 'node_xx',
        element: <BlogNodePage_xx />,
      },
      {
        path: 'supa_xx',
        element: <BlogSupaPage_xx />,
      },
      {
        path: 'booklist_xx',
        element: <BookListPage_xx />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_31 />,
    children: [
      {
        index: true,
        element: <HomePage_31 />,
      },
      {
        path: 't11_xx',
        element: <T11_ErrorExamplePage_xx />,
      },
      {
        path: 't12_xx',
        element: <T12_UseStateBasicsPage_xx />,
      },
    ],
  },
  {
    path: '/quiz1',
    element: <Quiz1LayoutPage_xx />,
    children: [
      {
        index: true,
        element: <Quiz1Page_xx />,
      },
      {
        path: 'static_xx',
        element: <TourStaticPage_xx />,
      },
      {
        path: 'static2_xx',
        element: <TourStaticPage2_xx />,
      },
      {
        path: 'static3_xx',
        element: <TourStaticPage3_xx />,
      },
      {
        path: 'node_xx',
        element: <TourNodePage_xx />,
      },
    ],
  },
  {
    path: '/midterm',
    element: <MidtermLayoutPage_31 />,
    children: [
      {
        index: true,
        element: <MidtermHomePage_31 />,
      },
      {
        path: 'p1_31',
        element: <P1_StaticPage_31 />,
      },
      {
        path: 'hats_31',
        element: <P1_StaticPage_31 />,
      },
      {
        path: 'p2_31',
        element: <P2_StaticPage_31 />,
      },
      {
        path: 'p3_31',
        element: <P3_NodePage_31 />,
      },
      {
        path: 'p4_31',
        element: <P4_SupaPage_31 />,
      },
    ],
  },
]);

const App_31 = () => {
  return <RouterProvider router={router} />;
};

export default App_31;
