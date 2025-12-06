import './index.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Insights from './components/Insights'

function App() {
  return (
    <div className='app-cont'>
      <Header />
      <div>
        <h1>hello</h1>
        <Insights />
        <Sidebar />
        <Editor />
      </div>
    </div>
  )
}

export default App;
