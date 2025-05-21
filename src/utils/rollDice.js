export function rollD12() {
  return Math.floor(Math.random() * 12) + 1;
}

export function rollHopeAndFear(){
  return {
    hope: rollD12(),
    fear: rollD12(),
  };
}
