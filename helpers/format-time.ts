
export const formatTime = (time: number, formats: string[]) => {
  const lastTens = time % 100;
  const lastSymbol = time % 10;

  if (lastSymbol === 1 && lastTens !== 11) {
    return formats[0]
  } else if (lastSymbol < 5) {
    if (lastTens > 10) {
      return formats[2]
    } else {
      return formats[1];
    }
  } else {
    return formats[2];
  }
}