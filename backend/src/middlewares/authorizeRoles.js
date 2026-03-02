const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            throw new AppError('Forbidden: You do not have permission to access this resource', 403, 'FORBIDDEN');
        }
        next();
    }
}