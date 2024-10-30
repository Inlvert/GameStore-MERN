const createHttpErrors = require("http-errors");
const { Product } = require("../models");

module.exports.createProduct = async (req, res, next) => {
  try {
    const { body, file } = req;

    const product = await Product.create({ ...body, images: file.filename });

    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};
