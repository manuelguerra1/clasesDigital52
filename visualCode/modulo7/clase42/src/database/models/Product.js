module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        category_id: {
            // unsigned no permite numeros negativos
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }

    };
    let config = {
        // timestamps al decirle false le digo q mi tabla no contempla esos campos
        timestamps: true,
        tablename: 'categories'
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Product, {
            as: 'category',
            foreignKey: 'category_id'
        })
        Product.belongsToMany(models.Product, {
            as: 'images',
            foreignKey: 'product_id',
            otherKey: 'image_id',
            through:'product_images',
            timestamps: false
        })
    }

    return Product
};