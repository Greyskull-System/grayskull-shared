"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyRegistry = void 0;
/**
 * Registro global de estratégias.
 * Permite registrar e recuperar estratégias por código de regra.
 */
class StrategyRegistry {
    /**
     * Registra uma estratégia para um código de regra
     * @param ruleCode Código da regra (ex: 'vacation.calculation')
     * @param strategy Instância da estratégia
     * @param isDefault Se é a estratégia padrão
     */
    static register(ruleCode, strategy, module, isDefault = false) {
        if (!this.strategies.has(ruleCode)) {
            this.strategies.set(ruleCode, new Map());
            this.metadata.set(ruleCode, []);
        }
        const ruleStrategies = this.strategies.get(ruleCode);
        ruleStrategies.set(strategy.name, strategy);
        // Registra metadata
        const meta = this.metadata.get(ruleCode);
        meta.push({
            name: strategy.name,
            description: strategy.description,
            module,
            ruleCode,
            isDefault,
        });
        // Se for default, registra
        if (isDefault) {
            this.defaults.set(ruleCode, strategy.name);
        }
    }
    /**
     * Recupera uma estratégia específica
     */
    static get(ruleCode, strategyName) {
        const ruleStrategies = this.strategies.get(ruleCode);
        if (!ruleStrategies)
            return undefined;
        return ruleStrategies.get(strategyName);
    }
    /**
     * Recupera a estratégia padrão para uma regra
     */
    static getDefault(ruleCode) {
        const defaultName = this.defaults.get(ruleCode);
        if (!defaultName)
            return undefined;
        return this.get(ruleCode, defaultName);
    }
    /**
     * Lista todas as estratégias disponíveis para uma regra
     */
    static listStrategies(ruleCode) {
        return this.metadata.get(ruleCode) || [];
    }
    /**
     * Lista todas as regras registradas
     */
    static listRules() {
        return Array.from(this.strategies.keys());
    }
    /**
     * Verifica se uma estratégia existe
     */
    static has(ruleCode, strategyName) {
        const ruleStrategies = this.strategies.get(ruleCode);
        if (!ruleStrategies)
            return false;
        if (strategyName)
            return ruleStrategies.has(strategyName);
        return true;
    }
}
exports.StrategyRegistry = StrategyRegistry;
StrategyRegistry.strategies = new Map();
StrategyRegistry.metadata = new Map();
StrategyRegistry.defaults = new Map();
//# sourceMappingURL=strategy.registry.js.map