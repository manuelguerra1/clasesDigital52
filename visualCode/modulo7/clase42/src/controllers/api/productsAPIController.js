const ProductModel = require('../../database/models').Product

const productsAPIController = {
    list: async(req, res) => {
        try {
            const products = await ProductModel.findAll({
                atributes: ['id', 'name', 'description', 'price'],
                include: ['category', 'images']
            })

            res.json({
                success: true,
                data: products
            })
        } catch (error) {
            res.json({
                success: false,
                data: error,
                message: 'algo fallo'
            })
        }
    },
    create: async (req, res) => {
        try {
            let producto = ProductModel.create(req.body)

            res.json({
                success: true,
                message:'creamos un producto',
                data: product
            })
        } catch (error) {
            res.json({
                success: false,
                message: error
            })
        }
    }
}

module.exports = productsAPIController