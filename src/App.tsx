import Header from "./components/swiggy-components/Header"
import Footer from "./components/swiggy-components/Footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
