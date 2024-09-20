import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { CRISIS_STATUS, SEVERITY } from "../utils/constants.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        //   const firstMessage = errorMessages[0];
        //   console.log(Object.getPrototypeOf(firstMessage));
        //   if (errorMessages[0].startsWith('no job')) {
        //     throw new NotFoundError(errorMessages);
        //     }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("firstName").notEmpty().withMessage("first name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("username").notEmpty().withMessage("username is required"),
  body("age")
    .notEmpty()
    .withMessage("age is required")
    .isNumeric()
    .withMessage("age must be a number"),
  body("location").notEmpty().withMessage("location is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("phoneNumber")
    .notEmpty()
    .withMessage("phone number is required")
    .isNumeric()
    .withMessage("invalid phone numbner format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = () => {};

export const validateCrisisInput = withValidationErrors([
  body("title").notEmpty().withMessage("title is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("location").notEmpty().withMessage("location is required"),
  body("severity")
    .isIn(Object.values(SEVERITY))
    .withMessage("invalid severity value"),
  body("status")
    .isIn(Object.values(CRISIS_STATUS))
    .withMessage("invalid status"),
]);
