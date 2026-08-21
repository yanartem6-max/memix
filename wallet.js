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

export async function sendTonTransaction(transaction) {
  console.log('[wallet.js] sendTonTransaction deprecated');
  throw new Error('Wallet not connected');
}

export function TonTransaction() {
  console.log('[wallet.js] TonTransaction deprecated');
  return null;
}
