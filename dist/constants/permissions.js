"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSION_GROUPS = exports.PERMISSIONS = void 0;
exports.PERMISSIONS = {
    // Users
    USERS_VIEW: 'users:view',
    USERS_CREATE: 'users:create',
    USERS_EDIT: 'users:edit',
    USERS_DELETE: 'users:delete',
    // Roles
    ROLES_VIEW: 'roles:view',
    ROLES_CREATE: 'roles:create',
    ROLES_EDIT: 'roles:edit',
    ROLES_DELETE: 'roles:delete',
    // Employees
    EMPLOYEES_VIEW: 'employees:view',
    EMPLOYEES_CREATE: 'employees:create',
    EMPLOYEES_EDIT: 'employees:edit',
    EMPLOYEES_DELETE: 'employees:delete',
    // Benefits
    BENEFITS_VIEW: 'benefits:view',
    BENEFITS_CREATE: 'benefits:create',
    BENEFITS_EDIT: 'benefits:edit',
    BENEFITS_DELETE: 'benefits:delete',
    // Vacations
    VACATIONS_VIEW: 'vacations:view',
    VACATIONS_CREATE: 'vacations:create',
    VACATIONS_EDIT: 'vacations:edit',
    VACATIONS_APPROVE: 'vacations:approve',
    // Payroll
    PAYROLL_VIEW: 'payroll:view',
    PAYROLL_CREATE: 'payroll:create',
    PAYROLL_EDIT: 'payroll:edit',
    PAYROLL_APPROVE: 'payroll:approve',
};
// Grupos de permissões por módulo
exports.PERMISSION_GROUPS = {
    CORE: [
        exports.PERMISSIONS.USERS_VIEW,
        exports.PERMISSIONS.USERS_CREATE,
        exports.PERMISSIONS.USERS_EDIT,
        exports.PERMISSIONS.USERS_DELETE,
        exports.PERMISSIONS.ROLES_VIEW,
        exports.PERMISSIONS.ROLES_CREATE,
        exports.PERMISSIONS.ROLES_EDIT,
        exports.PERMISSIONS.ROLES_DELETE,
    ],
    HR: [
        exports.PERMISSIONS.EMPLOYEES_VIEW,
        exports.PERMISSIONS.EMPLOYEES_CREATE,
        exports.PERMISSIONS.EMPLOYEES_EDIT,
        exports.PERMISSIONS.EMPLOYEES_DELETE,
        exports.PERMISSIONS.BENEFITS_VIEW,
        exports.PERMISSIONS.BENEFITS_CREATE,
        exports.PERMISSIONS.BENEFITS_EDIT,
        exports.PERMISSIONS.BENEFITS_DELETE,
        exports.PERMISSIONS.VACATIONS_VIEW,
        exports.PERMISSIONS.VACATIONS_CREATE,
        exports.PERMISSIONS.VACATIONS_EDIT,
        exports.PERMISSIONS.VACATIONS_APPROVE,
        exports.PERMISSIONS.PAYROLL_VIEW,
        exports.PERMISSIONS.PAYROLL_CREATE,
        exports.PERMISSIONS.PAYROLL_EDIT,
        exports.PERMISSIONS.PAYROLL_APPROVE,
    ],
};
//# sourceMappingURL=permissions.js.map