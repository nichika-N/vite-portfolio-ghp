import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome!</h1>
      <p className="mb-4">このページからポートフォリオに移動できます</p>
      <button
        onClick={() => navigate('/portfolio')}
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition"
      >
        ポートフォリオを見る
      </button>
    </div>
  )
}

export default Home
