export interface VideoInstance {
  bbox: number[];
  fps: number;
  frame_end: number;
  frame_start: number;
  instance_id: number;
  signer_id: number;
  source: string;
  split: string;
  url: string;
  variation_id: number;
  video_id: string;
}

export interface GlossEntry {
  gloss: string;
  instances: VideoInstance[];
}
