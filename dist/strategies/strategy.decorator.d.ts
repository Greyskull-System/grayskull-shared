import { IStrategy } from './strategy.interface';
/**
 * Decorator para registrar automaticamente uma estratégia
 *
 * @example
 * @Strategy('vacation.calculation', 'hr', true)
 * class DefaultVacationCalculator implements IVacationCalculator {
 *   name = 'default';
 *   description = 'Cálculo padrão de férias';
 *   // ...
 * }
 */
export declare function Strategy(ruleCode: string, module: string, isDefault?: boolean): <T extends new (...args: unknown[]) => IStrategy<unknown, unknown>>(constructor: T) => T;
//# sourceMappingURL=strategy.decorator.d.ts.map