import { Router } from "express"
import httpPersonas from "../controllers/persona.js"

const router=new Router()

router.get('/hola', httpPersonas.getpersonas  )

router.get('/:cedula', httpPersonas.getPersonasCedula)

router.post('/', httpPersonas.postPersonas  )

router.delete('/:cedula',(req,res)=>{
  const {cedula}=req.params

  const index=personas.findIndex( persona=> persona.cedula==cedula   )
  const persona= personas.splice(index,1)

  if( index==-1 ) res.status(400).json({error:"Persona no existe"})
  else res.json({persona})
})

export default router