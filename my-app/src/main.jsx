import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HeaderPage } from './pages/HeaderPage';
import { MapPage } from './pages/MapPage';
import { SliderPage } from './pages/SliderPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPages } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { EsteticPages } from './pages/EsteticPage';
import { FlatsPages } from './pages/FlatsPages';
import { QuestionsPage } from './pages/QuestionsPage';
import { OtdelkaPage } from './pages/OtdelkaPage';
import { DesignPage } from './pages/DesignPage';
import { DevelopPage } from './pages/DevelopPage';
import { OrganisationPage } from './pages/OrganisationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/header',
    element: <HeaderPage />,
  },
  {
    path: '/map',
    element: <MapPage />,
  },
  {
    path: '/slider',
    element: <SliderPage />,
  },
  {
    path: '/features',
    element: <FeaturesPage/>
  },
  {
    path: '/about',
    element: <AboutPages/>
  },
  {
    path: '/gallery',
    element: <GalleryPage/>
  },
  {
    path: '/estetic',
    element: <EsteticPages/>
  },
  {
    path: '/flats',
    element: <FlatsPages/>
  } ,
  {
    path: '/questions' ,
    element : <QuestionsPage/>
  } ,
  {
    path: '/otdelka' ,
    element: <OtdelkaPage/>
  } ,
  {
    path:'/design',
    element: <DesignPage/>
  },
  {
    path: '/develop' ,
    element: <DevelopPage/>
  } ,
  {
    path: '/organisation' ,
    element: <OrganisationPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);