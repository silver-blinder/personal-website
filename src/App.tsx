import { About, Header, Hobbies, Home, Projects, Skills, Travel } from './conponents'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="relative z-[1] px-4 pt-[4.5rem] fill-content md:px-0">
        <div className="main-class">
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Hobbies />
            <Travel />
          </>
        </div>
      </main>
    </>
  )
}

export default App
