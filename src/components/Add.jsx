


const Add = ({name, text, age, info, children}) => {
const data = [1,2,3]

  return (
    <div>Hello Please I ame from Add Component
        
        {data.map((ele) => (
            <div  key={Math.random()}>{ele}</div>
        ))
        }

    <div className=" w-[200px] h-auto bg-white shadow-lg dark:text-blue-200 text-yellow-300 rounded-lg py-3 px-3">
             <h1>{name}</h1>
             <p>{text}</p>
             <h1>{age}</h1>
             <h1>{info}</h1>
             <h1>{children}</h1>
    </div>
        
    </div>
  )
}

export default Add;