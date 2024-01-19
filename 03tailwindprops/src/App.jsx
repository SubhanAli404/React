
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const info = {
    title: ['JEE Mains 2023', 'Civil Services 2023', 'SSL CGL 2023'],
    description: ['National Testing Agency', 'Union Public Service Commission', 'Staff Selection Commission'],
    quantity: [20, 15, 10],
    price: [1200, 1500, 1000]
  }

  return (
    <div className=' px-60'>
      <Header />
      <hr className=' w-full border-gray-400 absolute left-0' />
      <Home />
      </div>

    
  )
}

export default App
