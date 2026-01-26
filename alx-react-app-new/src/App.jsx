import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Counter />
      <UserProfile name="John Doe" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Jane Smith" age="30" bio="Software developer and coffee enthusiast" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;