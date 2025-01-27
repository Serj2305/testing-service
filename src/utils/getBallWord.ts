export function getBallWord(score: number): string {
  const lastDigit = score % 10;
  const lastTwoDigits = score % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "баллов";
  }

  if (lastDigit === 1) {
    return "балл";
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return "балла";
  }

  return "баллов";
}