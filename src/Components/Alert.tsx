import { ReactNode } from "react"

function Alert({children} : {children : ReactNode}) {
  return (
    
    <div>
        <h1 className="text-white uppercase bg-red-600 font-bold p-1 m-1 rounded-sm">{children}</h1>
    </div>
  )
}

export default Alert