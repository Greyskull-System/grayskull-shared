"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionRegistry = void 0;
/**
 * Registro global de extensões.
 * Gerencia todas as extensões registradas para cada hook.
 */
class ExtensionRegistry {
    /**
     * Registra uma extensão para um hook
     */
    static register(hook, extension) {
        if (!this.extensions.has(hook)) {
            this.extensions.set(hook, []);
        }
        const hookExtensions = this.extensions.get(hook);
        hookExtensions.push(extension);
        // Ordena por prioridade
        hookExtensions.sort((a, b) => a.priority - b.priority);
    }
    /**
     * Executa todas as extensões de um hook
     */
    static async execute(hook, input, companyId) {
        const hookExtensions = this.extensions.get(hook) || [];
        let result = input;
        for (const extension of hookExtensions) {
            // Verifica se a extensão é para esta empresa
            if (extension.companyIds && extension.companyIds.length > 0) {
                if (!extension.companyIds.includes(companyId)) {
                    continue;
                }
            }
            // Verifica se deve executar
            if (extension.shouldExecute && !extension.shouldExecute(result, companyId)) {
                continue;
            }
            // Executa a extensão
            result = await extension.process(result);
        }
        return result;
    }
    /**
     * Lista todas as extensões de um hook
     */
    static list(hook) {
        return this.extensions.get(hook) || [];
    }
    /**
     * Remove uma extensão
     */
    static unregister(hook, extensionName) {
        const hookExtensions = this.extensions.get(hook);
        if (!hookExtensions)
            return;
        const index = hookExtensions.findIndex((e) => e.name === extensionName);
        if (index !== -1) {
            hookExtensions.splice(index, 1);
        }
    }
}
exports.ExtensionRegistry = ExtensionRegistry;
ExtensionRegistry.extensions = new Map();
//# sourceMappingURL=extension.registry.js.map