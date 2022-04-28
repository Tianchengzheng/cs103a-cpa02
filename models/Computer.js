'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var computerSchema = Schema( {
    brand: String,
    model: String,
    processor_brand: String,
    processor_name: String,
    processor_gnrtn: String,
    ram_gb: String,
    ram_type: String,
    ssd: String,
    hdd: String,
    os: String,
    os_bit: String,
    graphic_card_gb: String,
    weight: String,
    display_size: String,
    warranty: String,
    Touchscreen: String,
    msoffice: String,
    latest_price: String,
    old_price: String,
    discount: String,
    star_rating: String,
    ratings: String,
    reviews: String,

} );

module.exports = mongoose.model( 'Computer', computerSchema );