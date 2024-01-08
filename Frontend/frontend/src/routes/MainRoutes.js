import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
//const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
//const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
//const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
//const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Zaposleni = Loadable(lazy(() => import('pages/authentication/zaposleni/Zaposleni')));
const Artikli = Loadable(lazy(() => import('pages/authentication/Artikli/Artikli')));
const Narocila = Loadable(lazy(() => import('pages/components-overview/Narocila')));
const DodajArtikel = Loadable(lazy(() => import('pages/authentication/Artikli/DodajArtikel')));




// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },/*
    {
      path: 'color',
      element: <Color />
    },*/
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },/*
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },*/
    {
      path: 'zaposleni',
      element: <Zaposleni />
    },
    {
      path: 'artikli',
      element: <Artikli />
    },
    {
      path: 'narocila',
      element: <Narocila />
    },
    {
      path: 'artikli/dodaj',
      element: <DodajArtikel />
    }
  ]
};

export default MainRoutes;
