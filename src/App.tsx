import { useRoutes } from 'react-router-dom'
import router from './router'

function App() {
  const MyRouter = (): any => useRoutes(router)
  return (
    <MyRouter />
  )
}

export default App
