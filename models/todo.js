var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({

    product_id: String,
	title: String,
    price: Number,
    instock: Boolean,
    photo: String,

});

module.exports = mongoose.model('Product', ProductSchema);