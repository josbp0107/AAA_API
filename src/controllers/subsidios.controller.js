import Subsidios from "../models/Subsidios.js";

export const crearSubsidio = async (req, res) => {

    const {nombre,
        valorEstratoUno,
        valorEstratoDos,
        valorEstratoTres,
        valorEstratoCuatro,
        valorEstratoCinco,
        valorEstratoSeis,
        valorEstratoSiete,
        estado
    } = req.body

    const newSubsidio = new Subsidios({nombre,valorEstratoUno,
        valorEstratoDos,
        valorEstratoTres,
        valorEstratoCuatro,
        valorEstratoCinco,
        valorEstratoSeis,
        valorEstratoSiete,
        estado
    });

    const subsidioGuardado = await newSubsidio.save() // asincrono

    res.status(200).json(subsidioGuardado)
}

export const obtenerSubsidio = async (req, res) => {
    const subsidios = await Subsidios.find();
    res.json(subsidios)
}

export const obtenerSubsidioPorId = async (req, res) => {
    const subsidio = await Subsidios.findById(req.params.subsidioId);
    res.status(200).json(subsidio)
}

export const actualizarSubsidio = async (req, res) => {
    const subsidioActualizado = await Subsidios.findByIdAndUpdate(req.params.subsidioId, req.body, {
        new: true
    })

    res.status(200).json(subsidioActualizado)
}

export const eliminarSubsidioPorId = async (req, res) => {
    await Subsidios.findByIdAndDelete(req.params.subsidioId)
    res.status(204).json()
}