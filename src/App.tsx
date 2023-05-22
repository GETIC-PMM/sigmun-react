import Alert from './components/Alert'
// arquivo para testar os componentes sendo desenvolvidos
function App() {
  return (
    <div>
      <Alert type="primary" enableClose>
        Esse aqui da p fechar
      </Alert>
      <Alert type="info" enableClose>
        Esse aq nao da
      </Alert>
    </div>
  )
}

export default App
