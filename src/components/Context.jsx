import { Data } from "../App"
import { useContext } from "react"

const Context = () => {
const message = useContext(Data)

  return (
    <div>context component:{message}</div>
  )
}

export default Context