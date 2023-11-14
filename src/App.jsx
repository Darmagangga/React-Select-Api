import { useState } from 'react'
import './App.css'
import Select from 'react-select'
import { useEffect } from 'react'

function App() {
  const [datas,setDatas] =  useState([])
  const [userSelect, setUserSelect] = useState("")
  const [show,setShow] =useState(false)

  const getBerries = async() => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berries.json()
    const result = value.results.map(data => {
      return {
        label : data.name,
        value : data.name
      }
      
    })
    result.sort((a, b) => a.label.localeCompare(b.label));
    setDatas(result)
    // console.log(result)
  }

  useEffect(() => {
    getBerries()
  }, [])
  

  const handleChange = (value) => {
    setUserSelect(value)
  }

  const handleSubmit = () => {
    setShow(true)
  }

  return (
    <>
      <div className='App'>
        <button onClick={() => handleSubmit()}>Show Values</button>
        <Select options={datas} onChange={(e) => handleChange(e.value)}></Select>
        <h1>{show ? userSelect : ""}</h1>
      </div>      
    </>
  )
}

export default App
