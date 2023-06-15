import { useEffect, useState } from 'react'
import "./App.css"

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState( { x:0, y:0 } )

  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias 
    // -> antes de ejecutar el efecto de nuevo
    return () => { // cleanup method
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div className='circle' style = {{ transform: `translate(${position.x}px, ${position.y}px`}} ></div>
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled) }>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

export default App
