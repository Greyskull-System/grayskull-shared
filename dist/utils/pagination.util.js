"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
exports.calculateSkip = calculateSkip;
function paginate(data, total, page, limit) {
    const totalPages = Math.ceil(total / limit);
    return {
        data,
        meta: {
            total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        },
    };
}
function calculateSkip(page, limit) {
    return (page - 1) * limit;
}
//# sourceMappingURL=pagination.util.js.map