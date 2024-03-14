const createError = require("http-errors");
const Joi = require("joi");
const { MongoIDPattern } = require("../../../utils/constants");

const addProposalSchema = Joi.object({
  description: Joi.string()
    .required()
    .error(createError.BadRequest("توضیحات ارسال شده صحیح نمیباشد")),
  price: Joi.number().error(
    createError.BadRequest("قیمت وارد شده صحیح نمیباشد")
  ),
  duration: Joi.number()
    .required()
    .error(createError.BadRequest(" زمان انجام پروژه را وارد کنید")),
  projectId: Joi.string()
    .required()
    .regex(MongoIDPattern)
    .error(createError.BadRequest("شناسه پروژه وارد شده صحیح نمیباشد")),
});

module.exports = {
  addProposalSchema,
};
