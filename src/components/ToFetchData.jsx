import { useState, useEffect } from 'react'

const ToFetchData = () => {

const  [url, setUrl] = useState([])

useEffect(() => {

//  fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => res.json())
// .then((d) => setUrl(d))


const fetcchData = async () => {
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  if(!response.ok){
    throw new Error('Network response was not ok');
  }

  const jsonData = await response.json();
  setUrl(jsonData)

} catch (error) {
  console.error('Error:', error);
}
}

 fetcchData()

}, [])


  return (
<>

{url && url.map((item) => (
  <li key={item.id}>{item.title}</li>
))
  
}
</>
  )
}

export default ToFetchData;