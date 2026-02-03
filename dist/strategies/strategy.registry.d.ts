import { IStrategy, IStrategyMetadata } from './strategy.interface';
/**
 * Registro global de estratégias.
 * Permite registrar e recuperar estratégias por código de regra.
 */
export declare class StrategyRegistry {
    private static strategies;
    private static metadata;
    private static defaults;
    /**
     * Registra uma estratégia para um código de regra
     * @param ruleCode Código da regra (ex: 'vacation.calculation')
     * @param strategy Instância da estratégia
     * @param isDefault Se é a estratégia padrão
     */
    static register<TContext, TResult>(ruleCode: string, strategy: IStrategy<TContext, TResult>, module: string, isDefault?: boolean): void;
    /**
     * Recupera uma estratégia específica
     */
    static get<TContext, TResult>(ruleCode: string, strategyName: string): IStrategy<TContext, TResult> | undefined;
    /**
     * Recupera a estratégia padrão para uma regra
     */
    static getDefault<TContext, TResult>(ruleCode: string): IStrategy<TContext, TResult> | undefined;
    /**
     * Lista todas as estratégias disponíveis para uma regra
     */
    static listStrategies(ruleCode: string): IStrategyMetadata[];
    /**
     * Lista todas as regras registradas
     */
    static listRules(): string[];
    /**
     * Verifica se uma estratégia existe
     */
    static has(ruleCode: string, strategyName?: string): boolean;
}
//# sourceMappingURL=strategy.registry.d.ts.map