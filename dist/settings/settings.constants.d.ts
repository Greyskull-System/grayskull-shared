/**
 * Códigos de configurações do sistema
 * Centralizados aqui para evitar typos e facilitar autocomplete
 *
 * SETTINGS = Configurações simples (valores, parâmetros)
 * FEATURES = Funcionalidades que podem ser habilitadas/desabilitadas
 * BUSINESS_RULES = Regras de negócio customizáveis (estratégias)
 */
export declare const SETTINGS: {
    readonly CORE: {
        readonly TIMEZONE: "core.timezone";
        readonly DATE_FORMAT: "core.date_format";
        readonly CURRENCY: "core.currency";
    };
    readonly HR: {
        readonly VACATION_INCLUDE_DSR: "hr.vacation.include_dsr";
        readonly VACATION_ADVANCE_DAYS: "hr.vacation.advance_days";
        readonly VACATION_MIN_DAYS: "hr.vacation.min_days";
        readonly VACATION_MAX_SPLIT: "hr.vacation.max_split";
        readonly PAYROLL_CUTOFF_DAY: "hr.payroll.cutoff_day";
        readonly PAYROLL_PAYMENT_DAY: "hr.payroll.payment_day";
        readonly PAYROLL_OVERTIME_RATE: "hr.payroll.overtime_rate";
        readonly PAYROLL_NIGHT_SHIFT_RATE: "hr.payroll.night_shift_rate";
        readonly EMPLOYEE_REGISTRATION_PREFIX: "hr.employee.registration_prefix";
        readonly EMPLOYEE_AUTO_REGISTRATION: "hr.employee.auto_registration";
    };
};
/**
 * Feature Flags - Funcionalidades que podem ser habilitadas/desabilitadas por empresa
 *
 * Estrutura: modulo.funcionalidade ou modulo.funcionalidade.subfuncionalidade
 *
 * Exemplo de uso no código:
 *   if (await settingsService.isFeatureEnabled(companyId, FEATURES.HR.EMPLOYEES)) {
 *     // Mostra menu de funcionários
 *   }
 */
export declare const FEATURES: {
    readonly CORE: {
        readonly MULTI_BRANCH: "core.multi_branch";
        readonly TWO_FACTOR_AUTH: "core.two_factor_auth";
        readonly AUDIT_LOG: "core.audit_log";
        readonly API_ACCESS: "core.api_access";
    };
    readonly HR: {
        readonly EMPLOYEES: "hr.employees";
        readonly VACATIONS: "hr.vacations";
        readonly PAYROLL: "hr.payroll";
        readonly BENEFITS: "hr.benefits";
        readonly TIMESHEET: "hr.timesheet";
        readonly RECRUITMENT: "hr.recruitment";
        readonly TRAINING: "hr.training";
        readonly EMPLOYEES_DOCUMENTS: "hr.employees.documents";
        readonly EMPLOYEES_HISTORY: "hr.employees.history";
        readonly EMPLOYEES_DEPENDENTS: "hr.employees.dependents";
        readonly VACATIONS_APPROVAL_FLOW: "hr.vacations.approval_flow";
        readonly VACATIONS_CALENDAR: "hr.vacations.calendar";
        readonly VACATIONS_COLLECTIVE: "hr.vacations.collective";
        readonly PAYROLL_AUTO_CALCULATE: "hr.payroll.auto_calculate";
        readonly PAYROLL_PAYSLIP: "hr.payroll.payslip";
        readonly PAYROLL_ESOCIAL: "hr.payroll.esocial";
        readonly BENEFITS_VT: "hr.benefits.vt";
        readonly BENEFITS_VR: "hr.benefits.vr";
        readonly BENEFITS_HEALTH: "hr.benefits.health";
        readonly BENEFITS_DENTAL: "hr.benefits.dental";
        readonly EMPLOYEE_SELF_SERVICE: "hr.employee_self_service";
    };
    readonly FINANCIAL: {
        readonly ACCOUNTS_PAYABLE: "financial.accounts_payable";
        readonly ACCOUNTS_RECEIVABLE: "financial.accounts_receivable";
        readonly CASH_FLOW: "financial.cash_flow";
        readonly BANK_RECONCILIATION: "financial.bank_reconciliation";
        readonly INVOICING: "financial.invoicing";
        readonly COST_CENTER: "financial.cost_center";
    };
    readonly FLEET: {
        readonly VEHICLES: "fleet.vehicles";
        readonly MAINTENANCE: "fleet.maintenance";
        readonly FUEL: "fleet.fuel";
        readonly DRIVERS: "fleet.drivers";
        readonly TRACKING: "fleet.tracking";
        readonly ROUTES: "fleet.routes";
    };
    readonly STOCK: {
        readonly PRODUCTS: "stock.products";
        readonly MOVEMENTS: "stock.movements";
        readonly INVENTORY: "stock.inventory";
        readonly PURCHASE_ORDERS: "stock.purchase_orders";
    };
};
/**
 * Códigos de regras de negócio (para estratégias)
 */
export declare const BUSINESS_RULES: {
    readonly HR: {
        readonly VACATION_CALCULATION: "hr.vacation.calculation";
        readonly VACATION_VALIDATION: "hr.vacation.validation";
        readonly PAYROLL_CALCULATION: "hr.payroll.calculation";
        readonly PAYROLL_INSS_CALCULATION: "hr.payroll.inss_calculation";
        readonly PAYROLL_IRRF_CALCULATION: "hr.payroll.irrf_calculation";
        readonly OVERTIME_CALCULATION: "hr.overtime.calculation";
    };
};
//# sourceMappingURL=settings.constants.d.ts.map