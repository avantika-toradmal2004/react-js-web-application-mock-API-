
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Userlist from './Components/Userlist'
import Updateuser from './Components/Updateuser'
import Adduser from './Components/Adduser'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/userlist" element={<Userlist/>}/>
         <Route path="/adduser" element={<Adduser/>}/>
         <Route path="/update/:id" element={<Updateuser/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
