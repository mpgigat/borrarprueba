const httpPersonas = {
    getpersonas:async (req, res) => {
        res.json({ personas })
    },
    getPersonasCedula:async (req, res) => {
        const { cedula } = req.params
        const persona = personas.find(persona => persona.cc == cedula)
        if (existe == undefined) res.status(400).json({ error: "Persona no existe" })
        else res.json({ persona })
    },
    postPersonas:async (req, res) => {
        const { nombre, cedula, edad, telefono } = req.body

        const persona = { nombre, cedula, edad, telefono }
        personas.push(persona)
        res.json({ persona })

    },
    putpersonas: async() => {

    }
}

export default httpPersonas