import React , {useState, useEffect } from 'react'


function App() {
  const [data, setData] = useState ([{}])

  useEffect(() => {
    fetch("/search").then(
      res => res.json()
    ).then (
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [] )

    return 
      <div>

        </div>
}

export default App