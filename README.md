# Vite + gt-react

A minimal React + Vite application internationalized with [gt-react](https://generaltranslation.com/docs/react), demonstrating how to add multilingual support to a Vite project.

**[Live Demo](https://vite-app.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example shows how to internationalize a React app built with Vite using gt-react. It supports English, Spanish, French, Japanese, and Chinese out of the box, with translations loaded locally via `loadTranslations`.

## GT Features Used

- `<T>` — JSX translation
- `<Var>` — Dynamic values inside translated content
- `useGT` — String translations (alt text, aria-labels)
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/vite-app.git
cd vite-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Built With

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [General Translation](https://generaltranslation.com) (gt-react)
