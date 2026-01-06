import './App.css'
import Snowfall from 'react-snowfall'

function App() {

  return (
    <>
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, #0f172a, #172554, #0f172a)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5rem'}}>
        <Snowfall color="white"/>
        <Snowfall color="red"/>
        
        <div style={{ maxWidth: '56rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.1'
          }}>
            <span style={{
              background: 'linear-gradient(to right, #67e8f9, #60a5fa, #818cf8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Let It Snow
            </span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e1',
            marginBottom: '3rem',
            lineHeight: '1.75'
          }}>
            A beautiful snowfall animation showcase
          </p>
        </div>
      </div>
    </>
  )
}

export default App
