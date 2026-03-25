

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-scree text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Elden Ring App</h1>
      <p className="text-lg mb-8">Explore the world of Elden Ring and discover its secrets.</p>
      <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  )
}