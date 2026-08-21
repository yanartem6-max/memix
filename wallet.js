// Заглушка для обратной совместимости
// TON Connect интеграция перенесена в другие модули

export function initWalletUI() {
  console.log('[wallet.js] Deprecated - wallet functionality moved to other modules');
}

export function getWallet() {
  return null;
}

export function getTonBalance() {
  return 0;
}
