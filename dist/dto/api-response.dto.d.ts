export declare class ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    statusCode?: number;
    static success<T>(data: T, message?: string): ApiResponse<T>;
    static error<T = null>(error: string, statusCode?: number): ApiResponse<T>;
}
//# sourceMappingURL=api-response.dto.d.ts.map