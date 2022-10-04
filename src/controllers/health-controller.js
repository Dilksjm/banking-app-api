
export const healthRoute = {
    path: '/health',
    method: 'get',
    handler: async (req, res) => {
        res.status(200).json("healthy")
    }
}

export default [healthRoute]
