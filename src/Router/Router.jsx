import React, { useState, useEffect } from 'react';
import CodemniLanding from '../pages/landingPage';
import  DocsPage  from '../pages/docsPage';
import {PricingPage} from '../pages/pricingPage'
import Resource from '../pages/resourcePage';

export default function Router (){
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        window.history.pushState({}, '', e.target.href);
        setCurrentPath(new URL(e.target.href).pathname);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const routes = {
    '/': <CodemniLanding />,
    '/resources': <Resource />,
    '/docs': <DocsPage />,
    '/pricing': <PricingPage />
  };

  return routes[currentPath] || <CodemniLanding />;
};
