import { useState } from "react"
import { useForm } from "react-hook-form"

export const CreateFolder = ({setCreating, setOut}) => {

    const { register, handleSubmit} = useForm()
    const [value, setValue] = useState("")

    const onSubmit = (data) => { 
        setCreating(data)
      }

  return (
    <>
        <div onClick={()=>{setOut()}} className="bg-[#0000002b] w-[100%] h-[100%] fixed top-0 left-0 cursor-pointer z-[1]"></div>
        <form 
            className="fixed w-[80%] py-[15px] max-w-[650px] left-[50%] translate-x-[-50%] top-[100px] h-[100px] z-[2] bg-[#2a2c2f]"
            onSubmit={handleSubmit(onSubmit)}>

            <input 
                className="w-[90%] bg-transparent m-auto mb-[20px] block focus:outline-none border-none"
                onChange={(e)=>{setValue(e.target.value)}}
                type="text"
                defaultValue={value}
                placeholder="Nombre de la carpeta"
                {...register('title', {
                    required: true,
                })}/>

            <div className="pr-[10%] flex justify-end">
                <button type="submit">Crear</button>
            </div>
        </form>
    </>
  )
}
