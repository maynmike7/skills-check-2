module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },

    createProduct: (req, res) => {
        const {image, name, price} = req.body,
              db = req.app.get('db');

        db.create_product({image, name, price})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    deleteProduct: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.delete_product({id})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}
