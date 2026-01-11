export type LightColor = "red" | "orange" | "green";


export const colorFrequencies: Record<LightColor, number> = {
  red: 220,    
  orange: 440, 
  green: 880,  
};


export function playTone(
  frequency: number,
  durationMs = 300
) {
  const audioContext = new AudioContext();

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  gainNode.gain.value = 0.2;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + durationMs / 1000);
}
