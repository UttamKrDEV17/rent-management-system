import AppError from "../common/errors/AppError.js";

export const validateRequest = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        if (!result.success) {
            console.log(req.body);
            const message = result.error.issues.map(e => e.message).join(', ');
            return next(new AppError(message, 400, 'VALIDATION_ERROR'));
        }

        req.body = result.data.body ?? req.body;
        req.params = result.data.params ?? req.params;
        // req.query is read-only — skip it

        next();
    };
};