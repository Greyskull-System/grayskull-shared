import { IExtension, ExtensionHook } from './extension.interface';
/**
 * Registro global de extensões.
 * Gerencia todas as extensões registradas para cada hook.
 */
export declare class ExtensionRegistry {
    private static extensions;
    /**
     * Registra uma extensão para um hook
     */
    static register<TInput, TOutput = TInput>(hook: ExtensionHook, extension: IExtension<TInput, TOutput>): void;
    /**
     * Executa todas as extensões de um hook
     */
    static execute<TInput, TOutput = TInput>(hook: ExtensionHook, input: TInput, companyId: string): Promise<TOutput>;
    /**
     * Lista todas as extensões de um hook
     */
    static list(hook: ExtensionHook): IExtension<unknown, unknown>[];
    /**
     * Remove uma extensão
     */
    static unregister(hook: ExtensionHook, extensionName: string): void;
}
//# sourceMappingURL=extension.registry.d.ts.map