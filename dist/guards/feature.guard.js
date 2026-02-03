"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureGuard = exports.REQUIRED_FEATURE_KEY = void 0;
exports.RequireFeature = RequireFeature;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
exports.REQUIRED_FEATURE_KEY = 'required_feature';
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
function RequireFeature(...features) {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata(exports.REQUIRED_FEATURE_KEY, features, descriptor?.value ?? target);
        return descriptor ?? target;
    };
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
let FeatureGuard = class FeatureGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const requiredFeatures = this.reflector.get(exports.REQUIRED_FEATURE_KEY, context.getHandler());
        // Se não há features requeridas, permite acesso
        if (!requiredFeatures || requiredFeatures.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user?.companyId) {
            throw new common_1.ForbiddenException('Usuário não autenticado ou sem empresa');
        }
        // Verifica cada feature requerida
        // TODO: Descomentar quando o FEATURE_CHECKER estiver disponível
        // for (const feature of requiredFeatures) {
        //   const isEnabled = await this.featureChecker.isFeatureEnabled(user.companyId, feature);
        //   if (!isEnabled) {
        //     throw new ForbiddenException(`Funcionalidade '${feature}' não está habilitada para sua empresa`);
        //   }
        // }
        return true;
    }
};
exports.FeatureGuard = FeatureGuard;
exports.FeatureGuard = FeatureGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], FeatureGuard);
//# sourceMappingURL=feature.guard.js.map