import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    console.log('efecto', { enable })
  }, [enable])

  return (
    <main>
      <div>

      </div>
      <h3>Proyecto 3</h3>
      <button onClick={() => { setEnable(!enable) }}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

export default App
