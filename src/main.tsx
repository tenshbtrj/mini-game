import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
console.log(import.meta.env.MODE);  // アプリが動作しているモード
console.log(import.meta.env.BASE_URL);  // アプリのベースURL
console.log(import.meta.env.PROD);  // プロダクションモードかどうか
console.log(import.meta.env.DEV);  // 開発モードかどうか
console.log(import.meta.env.SSR);  // サーバーサイドレンダリングかどうか
console.log(import.meta.env.VITE_TEST);  // サーバーサイドレンダリングかどうか

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
