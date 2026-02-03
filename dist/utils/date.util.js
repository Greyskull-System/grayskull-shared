"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nowBrazil = nowBrazil;
exports.formatDateBR = formatDateBR;
exports.formatDateTimeBR = formatDateTimeBR;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getLastDayOfMonth = getLastDayOfMonth;
exports.diffInDays = diffInDays;
exports.diffInMonths = diffInMonths;
/**
 * Retorna a data atual no timezone de São Paulo
 */
function nowBrazil() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
}
/**
 * Formata data para exibição no padrão brasileiro
 */
function formatDateBR(date) {
    return date.toLocaleDateString('pt-BR');
}
/**
 * Formata data e hora para exibição no padrão brasileiro
 */
function formatDateTimeBR(date) {
    return date.toLocaleString('pt-BR');
}
/**
 * Retorna o primeiro dia do mês
 */
function getFirstDayOfMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
/**
 * Retorna o último dia do mês
 */
function getLastDayOfMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
/**
 * Calcula a diferença em dias entre duas datas
 */
function diffInDays(start, end) {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
/**
 * Calcula a diferença em meses entre duas datas
 */
function diffInMonths(start, end) {
    return ((end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth()));
}
//# sourceMappingURL=date.util.js.map