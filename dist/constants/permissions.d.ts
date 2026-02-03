export declare const PERMISSIONS: {
    readonly USERS_VIEW: "users:view";
    readonly USERS_CREATE: "users:create";
    readonly USERS_EDIT: "users:edit";
    readonly USERS_DELETE: "users:delete";
    readonly ROLES_VIEW: "roles:view";
    readonly ROLES_CREATE: "roles:create";
    readonly ROLES_EDIT: "roles:edit";
    readonly ROLES_DELETE: "roles:delete";
    readonly EMPLOYEES_VIEW: "employees:view";
    readonly EMPLOYEES_CREATE: "employees:create";
    readonly EMPLOYEES_EDIT: "employees:edit";
    readonly EMPLOYEES_DELETE: "employees:delete";
    readonly BENEFITS_VIEW: "benefits:view";
    readonly BENEFITS_CREATE: "benefits:create";
    readonly BENEFITS_EDIT: "benefits:edit";
    readonly BENEFITS_DELETE: "benefits:delete";
    readonly VACATIONS_VIEW: "vacations:view";
    readonly VACATIONS_CREATE: "vacations:create";
    readonly VACATIONS_EDIT: "vacations:edit";
    readonly VACATIONS_APPROVE: "vacations:approve";
    readonly PAYROLL_VIEW: "payroll:view";
    readonly PAYROLL_CREATE: "payroll:create";
    readonly PAYROLL_EDIT: "payroll:edit";
    readonly PAYROLL_APPROVE: "payroll:approve";
};
export type PermissionCode = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
export declare const PERMISSION_GROUPS: {
    readonly CORE: readonly ["users:view", "users:create", "users:edit", "users:delete", "roles:view", "roles:create", "roles:edit", "roles:delete"];
    readonly HR: readonly ["employees:view", "employees:create", "employees:edit", "employees:delete", "benefits:view", "benefits:create", "benefits:edit", "benefits:delete", "vacations:view", "vacations:create", "vacations:edit", "vacations:approve", "payroll:view", "payroll:create", "payroll:edit", "payroll:approve"];
};
//# sourceMappingURL=permissions.d.ts.map