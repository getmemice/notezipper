import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage'
import MyNotes from './screens/MyNotes/MyNotes'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' exact component={LandingPage} />
        <Route path='/mynotes' exact component={() => <MyNotes />} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
