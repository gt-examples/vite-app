import { T, Var } from 'gt-react';
import { LocaleSelector, useGT } from 'gt-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const gt = useGT();

  return (
    <div className="app">
      <header className="header">
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt={gt("Vite logo")} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt={gt("React logo")} />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="https://github.com/gt-examples/vite-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={gt("View on GitHub")}
            style={{ color: '#a1a1aa', display: 'flex' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <LocaleSelector />
        </div>
      </header>

      <main className="main">
        <T>
          <h1>Welcome to this internationalized React app!</h1>
        </T>
        <T>
          <p className="description">
            This example demonstrates how to use gt-react to internationalize a
            React application built with Vite. Try switching languages using the
            dropdown above.
          </p>
        </T>
        <T>
          <p className="subdescription">
            gt-react makes it easy to translate your React components and
            strings. Wrap your content in a {"<T>"} component and it gets
            translated automatically.
          </p>
        </T>

        <div className="buttons">
          <a
            className="button primary"
            href="https://generaltranslation.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <T><Var>gt-react</Var> Docs</T>
          </a>
          <a
            className="button secondary"
            href="https://vite.dev/guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <T><Var>Vite</Var> Docs</T>
          </a>
        </div>
      </main>

      <footer className="disclaimer">
        <T>
          <p>
            This is an example app built with{" "}
            <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer">General Translation</a>{" "}
            to demonstrate internationalization with gt-react. It is not a real product or service.
          </p>
        </T>
      </footer>
    </div>
  );
}

export default App;
