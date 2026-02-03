"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = Strategy;
const strategy_registry_1 = require("./strategy.registry");
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
function Strategy(ruleCode, module, isDefault = false) {
    return function (constructor) {
        // Cria uma instância para registrar
        const instance = new constructor();
        strategy_registry_1.StrategyRegistry.register(ruleCode, instance, module, isDefault);
        return constructor;
    };
}
//# sourceMappingURL=strategy.decorator.js.map