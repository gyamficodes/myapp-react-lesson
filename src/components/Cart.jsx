"use client"


const Button  = () => {
   const hanndleClick = (a,b) => {
    alert(a + b)
   }
    return(<>
    <button onClick={() =>  hanndleClick(10,10)} className=" w-[200px] h-[50px] bg-black text-white">Click</button>
    </>)
}

const Cart = () => {
    const items = ['Yellow','green', 'red'];
    const col = 'red'
  return (
    <>
        <div className=" mt-5 text-[40px]">Cart🐱‍💻  : renndering component </div>
       <h1 className="text-[20px] font-bold"> {items.length > 0 && <h1>you have {items.length} items  in your cart</h1>}</h1>
        <ul>
            <h1 style={{color:col}}>👇Products</h1>
            {items.map((item,id) =>  (
                <li key={id}>{item}</li>
            ))}
        </ul>

<Button/>
            </>
  )
}

export default Cart