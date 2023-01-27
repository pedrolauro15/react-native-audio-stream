export interface AudioStreamOptions {
  bufferSize: number;
  sampleRate: number;
  bitsPerChannel?: 8 | 16;
  channelsPerFrame?: 1 | 2;
  delay?: number;
}
