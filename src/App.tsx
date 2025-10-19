import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/components/pages/home/Home'
import { Clicker } from '@/components/pages/clicker/Clicker'
import { DailyMemo } from '@/components/pages/memo/DailyMemo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clicker' element={<Clicker />} />
        <Route path='/Memo' element={<DailyMemo />} />
      </Routes>
    </BrowserRouter>
  )
}
