import styles from './app.module.css';
import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';
import { ErrorBoundary } from 'solid-js';
import { Suspense } from 'solid-js';
import Footer from './components/footer/Footer';

const Main = lazy(() => import('./pages/main/Main'));
const Page = lazy(() => import('./pages/Page'));
const Error = lazy(() => import('./pages/error/Error'));

const App: Component = () => {
  return (
    <Router>
      <div class={styles.Container}>
        <Routes>
          <Route
            path="/"
            component={() => (
              <ErrorBoundary fallback={err => <Error message={err.message} />}>
                <Suspense fallback={<p>불러오는 중입니다...</p>}>
                  <Main />
                </Suspense>
              </ErrorBoundary>
            )}
          />
          <Route
            path="/:dataStructure"
            component={() => (
              <ErrorBoundary fallback={err => <Error message={err.message} />}>
                <Suspense fallback={<p>불러오는 중입니다...</p>}>
                  <Page />
                </Suspense>
              </ErrorBoundary>
            )}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
