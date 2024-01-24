import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
//const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
//const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
//const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
//const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
//const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Zaposleni = Loadable(lazy(() => import('pages/authentication/zaposleni/Zaposleni')));
const Artikli = Loadable(lazy(() => import('pages/authentication/Artikli/Artikli')));
const Narocila = Loadable(lazy(() => import('pages/authentication/Narocila/Narocila')));
const Scanner = Loadable(lazy(() => import('pages/authentication/Scanner/Scanner')));
const Stranke = Loadable(lazy(() => import('pages/authentication/Stranke/Stranke')));

const Priprava = Loadable(lazy(() => import('pages/authentication/PripravaNarocil/PripravaNarocil')));
const DelovniCas = Loadable(lazy(() => import('pages/authentication/DelovniCas/DelovniCas')))


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <ProtectedRoute element={<DashboardDefault />} />
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
          element: <ProtectedRoute element={<DashboardDefault />} />
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
      element: <ProtectedRoute element={<Zaposleni />} />
    },
    {
      path: 'artikli',
      element: <ProtectedRoute element={<Artikli />} />
    },
    {
      path: 'narocila/*',
      element: <ProtectedRoute element={<Narocila />} />
    },
    {
      path: 'artikli/scanner',
      element: <ProtectedRoute element={<Scanner />} />
    },
    {
      path: 'stranka',
      element: <ProtectedRoute element={<Stranke />} />
    },
    {
      path: 'priprava',
      element: <ProtectedRoute element={<Priprava />} />
    }
    ,
    {
      path: 'delovniCas',
      element: <ProtectedRoute element={<DelovniCas />} />
    }
  ]
};

export default MainRoutes;
