import { T, Var } from 'gt-react';
import { LocaleSelector } from 'gt-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <LocaleSelector />
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
    </div>
  );
}

export default App;
