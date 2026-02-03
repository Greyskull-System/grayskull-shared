import { IPaginatedResult } from '../interfaces/paginated-result.interface';
export declare function paginate<T>(data: T[], total: number, page: number, limit: number): IPaginatedResult<T>;
export declare function calculateSkip(page: number, limit: number): number;
//# sourceMappingURL=pagination.util.d.ts.map