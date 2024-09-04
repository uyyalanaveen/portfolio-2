import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      )
    },
    {
      path: '/about',
      element: (
        <Layout>
          <About />
        </Layout>
      )
    },
    {
      path: '/skills',
      element: (
        <Layout>
          <Skills />
        </Layout>
      )
    },
    {
      path: '/projects',
      element: (
        <Layout>
          <Projects />
        </Layout>
      )
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <Contact />
        </Layout>
      )
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ChakraProvider > */}
      <RouterProvider router={router} />
    {/* </ChakraProvider> */}
  </React.StrictMode>,
)
