import useFetch from "./CustomHooks/useFetch"

const Ref = () => {

const [data] =  useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
  <>
  { data && data.map((item) =>  {
    return <h1 key={item.id}>{item.title}</h1>
  })} 
  </>
  )
}

export default Ref