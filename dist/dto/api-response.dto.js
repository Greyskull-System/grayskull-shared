"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(data, message) {
        const response = new ApiResponse();
        response.success = true;
        response.data = data;
        response.message = message;
        return response;
    }
    static error(error, statusCode) {
        const response = new ApiResponse();
        response.success = false;
        response.error = error;
        response.statusCode = statusCode;
        return response;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.dto.js.map