const { useEffect, useState } = require("react")

function fetchData(){
  fetch('api/data.json')
}


function Component() {

  const [data, setData] = useState(null)


  useEffect(async () => {
    const response = await fetchData()
    setData(response.data)
  },[])



  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
