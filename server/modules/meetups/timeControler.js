export const createTime = async (req, res) => {
    let name = req.body.title
    

    try {
        return res.status(200).json({respuesta: "Hola " + name });
    } catch (e) {
        return res.status(e.status).json({ error: true, message: 'Error with hora'});
    }
}