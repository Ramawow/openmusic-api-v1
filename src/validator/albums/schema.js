/* eslint-disable indent */
/* eslint-disable eol-last */
const Joi = require('joi');

const AlbumPayLoadSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required(),
});

module.exports = { AlbumPayLoadSchema };