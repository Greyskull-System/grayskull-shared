import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare const REQUIRED_FEATURE_KEY = "required_feature";
/**
 * Decorator para marcar endpoints que requerem uma feature específica
 *
 * @example
 * @RequireFeature(FEATURES.HR.EMPLOYEES)
 * @Get()
 * findAll() { ... }
 *
 * @example
 * // Requer múltiplas features (AND)
 * @RequireFeature(FEATURES.HR.EMPLOYEES, FEATURES.HR.EMPLOYEES_DOCUMENTS)
 * @Post('documents')
 * uploadDocument() { ... }
 */
export declare function RequireFeature(...features: string[]): (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) => any;
/**
 * Interface que o SettingsService deve implementar
 * (está em settings.interface.ts)
 */
export interface IFeatureChecker {
    isFeatureEnabled(companyId: string, featureCode: string): Promise<boolean>;
}
/**
 * Guard que verifica se as features requeridas estão habilitadas para a empresa
 *
 * Deve ser registrado no módulo:
 * providers: [
 *   {
 *     provide: 'FEATURE_CHECKER',
 *     useExisting: SettingsService,
 *   },
 *   FeatureGuard,
 * ]
 */
export declare class FeatureGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=feature.guard.d.ts.map