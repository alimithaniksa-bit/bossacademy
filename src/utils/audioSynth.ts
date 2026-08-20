// Live Web Audio Synthesizer for Interactive Sound System Testing

class SoundSystemEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentType: string | null = null;
  private intervalId: number | null = null;
  private gainNode: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTrack(type: 'desi_dhol' | 'club_bass' | 'qawwali_vocal' | 'corporate_speech', onStep?: (beat: number) => void): boolean {
    this.stop();
    this.initContext();
    if (!this.ctx) return false;

    this.isPlaying = true;
    this.currentType = type;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.4, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    let step = 0;
    const bpm = type === 'desi_dhol' ? 128 : type === 'club_bass' ? 130 : type === 'qawwali_vocal' ? 95 : 85;
    const intervalMs = (60 / bpm / 2) * 1000; // eighth notes

    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.gainNode) return;
      const now = this.ctx.currentTime;

      if (type === 'desi_dhol') {
        this.triggerDesiStep(now, step);
      } else if (type === 'club_bass') {
        this.triggerClubStep(now, step);
      } else if (type === 'qawwali_vocal') {
        this.triggerQawwaliStep(now, step);
      } else if (type === 'corporate_speech') {
        this.triggerSpeechStep(now, step);
      }

      if (onStep) onStep(step);
      step = (step + 1) % 16;
    }, intervalMs);

    return true;
  }

  private triggerDesiStep(now: number, step: number) {
    if (!this.ctx || !this.gainNode) return;

    // Desi Dhol Base Kick (Punchy 45Hz sub drop on beats 0, 4, 8, 12 + syncopation 6, 14)
    if (step === 0 || step === 4 || step === 8 || step === 12 || step === 6 || step === 14) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.18);

      gain.gain.setValueAtTime(1.0, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.gainNode);
      osc.start(now);
      osc.stop(now + 0.26);
    }

    // High Dholak Talli / Snare Snap (beats 2, 6, 10, 14)
    if (step % 2 === 0) {
      const noise = this.ctx.createOscillator();
      const nGain = this.ctx.createGain();
      noise.type = 'triangle';
      noise.frequency.setValueAtTime(step % 4 === 2 ? 880 : 440, now);
      noise.frequency.exponentialRampToValueAtTime(220, now + 0.08);

      nGain.gain.setValueAtTime(0.3, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      noise.connect(nGain);
      nGain.connect(this.gainNode);
      noise.start(now);
      noise.stop(now + 0.1);
    }
  }

  private triggerClubStep(now: number, step: number) {
    if (!this.ctx || !this.gainNode) return;

    // 4-on-the-floor Club EDM Kick & Sub Bass
    if (step % 4 === 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.22);

      gain.gain.setValueAtTime(1.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.gainNode);
      osc.start(now);
      osc.stop(now + 0.3);
    }

    // Rolling Saw Bassline (offbeats 2, 6, 10, 14)
    if (step % 2 === 1) {
      const bass = this.ctx.createOscillator();
      const bGain = this.ctx.createGain();
      bass.type = 'sawtooth';
      const notes = [55, 55, 65.41, 48.99]; // A1, A1, C2, G1
      bass.frequency.setValueAtTime(notes[Math.floor(step / 4)], now);

      // Low pass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.15);

      bGain.gain.setValueAtTime(0.35, now);
      bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);

      bass.connect(filter);
      filter.connect(bGain);
      bGain.connect(this.gainNode);
      bass.start(now);
      bass.stop(now + 0.17);
    }

    // Hi-hats
    if (step % 2 === 1) {
      const hh = this.ctx.createOscillator();
      const hGain = this.ctx.createGain();
      hh.type = 'square';
      hh.frequency.setValueAtTime(6000, now);
      hGain.gain.setValueAtTime(0.12, now);
      hGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      hh.connect(hGain);
      hGain.connect(this.gainNode);
      hh.start(now);
      hh.stop(now + 0.06);
    }
  }

  private triggerQawwaliStep(now: number, step: number) {
    if (!this.ctx || !this.gainNode) return;

    // Harmonium chord drone swell
    if (step % 8 === 0) {
      [220, 277.18, 329.63].forEach((freq, i) => {
        if (!this.ctx || !this.gainNode) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        g.gain.setValueAtTime(0.01, now);
        g.gain.linearRampToValueAtTime(0.12 - i * 0.02, now + 0.4);
        g.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc.connect(g);
        g.connect(this.gainNode);
        osc.start(now);
        osc.stop(now + 1.25);
      });
    }

    // Tabla Dayan tone (crisp high pitched ringing sur)
    if (step % 4 === 0 || step === 3 || step === 7) {
      const tabla = this.ctx.createOscillator();
      const tGain = this.ctx.createGain();
      tabla.type = 'sine';
      tabla.frequency.setValueAtTime(step === 0 ? 330 : 495, now);
      tabla.frequency.exponentialRampToValueAtTime(220, now + 0.3);

      tGain.gain.setValueAtTime(0.4, now);
      tGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      tabla.connect(tGain);
      tGain.connect(this.gainNode);
      tabla.start(now);
      tabla.stop(now + 0.36);
    }
  }

  private triggerSpeechStep(now: number, step: number) {
    if (!this.ctx || !this.gainNode) return;

    // Clean acoustic chime / clarity pulse
    if (step === 0 || step === 8) {
      const chime = this.ctx.createOscillator();
      const cGain = this.ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(step === 0 ? 587.33 : 880, now);

      cGain.gain.setValueAtTime(0.2, now);
      cGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      chime.connect(cGain);
      cGain.connect(this.gainNode);
      chime.start(now);
      chime.stop(now + 0.85);
    }
  }

  public stop() {
    this.isPlaying = false;
    this.currentType = null;
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getPlayingTrack(): string | null {
    return this.isPlaying ? this.currentType : null;
  }
}

export const soundEngine = new SoundSystemEngine();
