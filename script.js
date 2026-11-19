/* ==========================================================================
   OUR STORY UNDER THE MOON — Pure Vanilla JavaScript Controller
   Zero frameworks, zero build step — GitHub Pages ready.
   ========================================================================== */

'use strict';

/* ==========================================================================
   1. EDITABLE PERSONALIZATION CONTENT (3 Chapters + YES & NO Endings)
   ========================================================================== */
const STORY_CONFIG = {
  // Page 2 — Exact 3 Book Chapters (formatted across a realistic open book spread)
  storyPages: [
    {
      chapter: 'Chapter I',
      heading: 'The Beginning',
      leftParagraphs: [
        "every story has a beginning, and ours started in a way i never expected. i didn't know that a simple interaction, a conversation, or even the smallest moments between us would eventually become something this meaningful to me.",
        'as time passed, i found myself looking forward to hearing from you, sharing random things with you, and getting to know more about the person behind the screen. slowly, you became someone i wanted to make time for, someone whose presence made ordinary days feel a little different.',
      ],
      rightParagraphs: [
        "looking back, i never really knew where things would lead us. i just knew that i wanted to know you more, and i'm glad i allowed myself to take that first step.",
        "if i could go back to the beginning, i'd still choose to meet you, get to know you, and let our story unfold all over again.",
      ],
      closingLine: '',
      usagiPos: 'pos-left',
      usagiMood: 'waving',
      usagiWhisper: 'Turn the page with me...',
      illustration: 'constellation',
    },
    {
      chapter: 'Chapter II',
      heading: 'Through Ups and Downs',
      leftParagraphs: [
        "i won't pretend that everything has always been perfect between us. we've had our misunderstandings, disagreements, difficult moments, and times when things weren't as easy as we wanted them to be.",
        "there were moments when we didn't understand each other, when emotions got in the way, and when we both had things to figure out. but despite all those moments, i've come to realize that getting to know someone also means learning how to understand them, even when things get difficult.",
      ],
      rightParagraphs: [
        "i don't want to remember only the happy moments. i want to acknowledge the difficult ones too, because they're also part of our story. they remind me that we're two different people, still learning about each other and figuring things out along the way.",
        "i don't expect us to be perfect. what matters to me is that we continue to communicate, understand each other, and make an effort. because every page, whether happy or difficult, has brought us to where we are now.",
      ],
      closingLine: '',
      usagiPos: 'pos-mid',
      usagiMood: 'guiding',
      usagiWhisper: 'One more chapter ahead...',
      illustration: 'crescent',
    },
    {
      chapter: 'Chapter III',
      heading: 'The Next Step',
      leftParagraphs: [
        "by now, i think you already know how much you mean to me. we've already shared so many moments, gotten to know each other in ways we probably didn't expect, and experienced what it's like to have each other around.",
        "and honestly, i've grown to love what we have. i appreciate the time we spend together, the little things we do, and even the ordinary moments that somehow become special just because they're with you.",
        "i know that we're already somewhere beyond just getting to know each other, but i also understand that there's still a step we haven't officially taken. i know you're not entirely ready yet, and i've never wanted to rush you into something you're not comfortable with.",
      ],
      rightParagraphs: [
        "but as for me, i've reached a point where i want to pursue you properly. not because i feel like we need a label, but because i want to make my intentions clear and let you know that i'm serious about you.",
        "i want to court you officially, to show you that i'm willing to put in the effort, and to give us the chance to build something even more meaningful.",
        "so, after everything we've shared and everything i've written in these pages, there's one question i want to ask you.",
      ],
      closingLine: '',
      usagiPos: 'pos-near-cta',
      usagiMood: 'guiding',
      usagiWhisper: 'Turn the last page...',
      illustration: 'seal',
    },
  ],

  // YES Ending (Moon Scene) — Main Message Only
  yesMessage: {
    headline: 'WAIT, YOU SAID YES?!',
    paragraphs: [
      {
        text: "OMG BABYYY i've been looking forward to this moment!!! and knowing that you're willing to let me pursue you officially makes me happier than i can put into words.",
        style: 'normal',
      },
      {
        text: "thank you for giving me this chance. thank you for trusting me enough to take this next step with you. i promise i'll treasure this opportunity and make the most out of it. i know this is just the beginning, and there's still so much for us to learn and experience together. but i'm genuinely excited. excited to make more memories, to spend more time with you, to know you even deeper, and to show you just how much you mean to me.",
        style: 'normal',
      },
      {
        text: "AND NOW I CAN OFFICIALLY SAY THAT I'M COURTING YOU!",
        style: 'highlight',
      },
      {
        text: 'i hope this is the beginning of something beautiful for both of us!!! i love you so muchhhhh!!!!',
        style: 'closing',
      },
    ],
  },

  // NO Ending — Respectful & Sincere Message
  noParagraphs: [
    'first of all, thank you for being honest with me. i know asking you this might have been a little unexpected, but i hope you never feel bad about giving me your honest answer.',
    "i understand that you might not be ready, or maybe this simply isn't what you want right now, and that's completely okay. i don't want you to feel like you have to say yes just because of everything i've written here.",
    "i meant every word in this book, and nothing about that changes because of your answer. i'm still grateful for all the moments we've shared, the memories we've made, and the opportunity to get to know you the way i have.",
    "please don't think that you've disappointed me or that you have to make it up to me somehow. you don't owe me anything, and your feelings deserve to be respected just as much as mine.",
    "i just wanted to be honest about what i feel and what i've been hoping for. whatever your answer is, i'll respect it.",
    "and if there's one thing i hope you take away from this little book, it's that you deserve to be loved without feeling pressured to give something before you're ready.",
    "thank you for reading all these pages. i'm genuinely glad that i got to write this story with you in it.",
  ],
};

/* ==========================================================================
   2. DELICATE INK BOOK ORNAMENTS FOR CHAPTER HEADERS
   ========================================================================== */
const STORY_ILLUSTRATIONS = {
  constellation: `
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="22" x2="54" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <line x1="106" y1="22" x2="148" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <path d="M62 28 L74 14 L88 26 L100 15" stroke="#9C7382" stroke-width="1" stroke-dasharray="2 3"/>
      <circle cx="62" cy="28" r="2.2" fill="#8B5B6C"/>
      <circle cx="74" cy="14" r="2.8" fill="#B6976C"/>
      <circle cx="88" cy="26" r="2.2" fill="#8B5B6C"/>
      <circle cx="100" cy="15" r="2.4" fill="#B6976C"/>
    </svg>
  `,
  crescent: `
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="22" x2="58" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <line x1="102" y1="22" x2="146" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <path d="M84 9C77 10.2 72 16 72 22.8C72 30.2 78 36 85.4 36C87.8 36 90 35.4 92 34.4C89 37.8 84.5 39.8 79.5 39.8C70.8 39.8 63.8 32.8 63.8 24.1C63.8 15.8 70.1 9 78.2 8.2C80.2 8 82.2 8.3 84 9Z" stroke="#9A7A52" stroke-width="1.3" fill="rgba(182,151,108,0.22)"/>
      <circle cx="91" cy="17" r="1.8" fill="#9C6478"/>
    </svg>
  `,
  seal: `
    <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="22" x2="58" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <line x1="102" y1="22" x2="146" y2="22" stroke="#B6976C" stroke-width="0.9" opacity="0.7"/>
      <circle cx="80" cy="22" r="14" stroke="#B6976C" stroke-width="1.1" fill="rgba(198,136,154,0.12)"/>
      <path d="M80 28 C80 28 73 23.5 73 19.2 C73 17 74.8 15.5 76.8 15.5 C78.2 15.5 79.4 16.3 80 17.4 C80.6 16.3 81.8 15.5 83.2 15.5 C85.2 15.5 87 17 87 19.2 C87 23.5 80 28 80 28 Z" stroke="#8B5B6C" stroke-width="1.25" fill="rgba(198,136,154,0.25)"/>
    </svg>
  `,
};

/* ==========================================================================
   3. APPLICATION STATE & REDUCED MOTION DETECTION
   ========================================================================== */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = {
  currentScene: 'cover',
  storyIndex: 0,
  isTransitioning: false,
  hasStarted: false,
  yesUnlocked: false, // Moon surprise is strictly locked until YES is pressed
  musicStarted: false,
  isMuted: false,
  usingFallbackAudio: false,
};

/* ==========================================================================
   4. PERSISTENT BACKGROUND MUSIC CONTROLLER
   Uses <audio id="bg-music"> pointing to ./assets/background-music.mp3.
   Starts ONLY inside the START click event; never restarts between scenes.
   Includes a gentle Web Audio fallback ONLY if background-music.mp3 is missing.
   ========================================================================== */
const audioController = (() => {
  const audioEl = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  const targetVolume = 0.62;
  let fadeRaf = null;

  let ctx = null;
  let masterGain = null;

  function startFallbackAmbient() {
    if (ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      ctx = new AudioCtx();
      masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 2.4);

      state.usingFallbackAudio = true;

      const chords = [
        [261.63, 329.63, 392.0, 493.88],
        [220.0, 261.63, 329.63, 392.0],
        [174.61, 220.0, 261.63, 329.63],
        [196.0, 246.94, 293.66, 392.0],
      ];
      let step = 0;

      const playPhrase = () => {
        if (!ctx || !masterGain) return;
        const chord = chords[step % chords.length];
        const now = ctx.currentTime;

        chord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.34);

          noteGain.gain.setValueAtTime(0.0001, now + idx * 0.34);
          noteGain.gain.linearRampToValueAtTime(idx === 0 ? 0.24 : 0.12, now + idx * 0.34 + 0.45);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.34 + 4.0);

          osc.connect(noteGain);
          noteGain.connect(masterGain);
          osc.start(now + idx * 0.34);
          osc.stop(now + idx * 0.34 + 4.2);
        });

        step += 1;
      };

      playPhrase();
      window.setInterval(playPhrase, 4400);
    } catch (_) {
      // Fail silently if Web Audio is unavailable
    }
  }

  function fadeInElement(el, durationMs = 2400) {
    if (fadeRaf) cancelAnimationFrame(fadeRaf);
    const startTime = performance.now();
    el.volume = 0;

    const tick = (now) => {
      if (state.isMuted) {
        el.volume = 0;
        return;
      }
      const progress = Math.min((now - startTime) / durationMs, 1);
      el.volume = progress * progress * targetVolume;
      if (progress < 1) {
        fadeRaf = requestAnimationFrame(tick);
      }
    };
    fadeRaf = requestAnimationFrame(tick);
  }

  function startFromUserGesture() {
    if (state.musicStarted) return;
    state.musicStarted = true;

    if (toggleBtn) {
      toggleBtn.classList.remove('is-hidden');
    }

    if (!audioEl) {
      startFallbackAmbient();
      return;
    }

    audioEl.volume = 0;
    audioEl.muted = false;

    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          fadeInElement(audioEl, 2400);
        })
        .catch(() => {
          startFallbackAmbient();
        });
    } else {
      fadeInElement(audioEl, 2400);
    }

    audioEl.addEventListener(
      'error',
      () => {
        if (!state.usingFallbackAudio) {
          startFallbackAmbient();
        }
      },
      { once: true }
    );
  }

  function toggleMute() {
    state.isMuted = !state.isMuted;

    if (toggleBtn) {
      toggleBtn.classList.toggle('is-muted', state.isMuted);
      toggleBtn.setAttribute('aria-pressed', String(state.isMuted));
      toggleBtn.setAttribute(
        'aria-label',
        state.isMuted ? 'Unmute background music' : 'Mute background music'
      );
    }

    if (state.usingFallbackAudio && ctx && masterGain) {
      const now = ctx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setTargetAtTime(state.isMuted ? 0.0001 : 0.09, now, 0.15);
    } else if (audioEl) {
      if (fadeRaf) cancelAnimationFrame(fadeRaf);
      audioEl.muted = state.isMuted;
      if (!state.isMuted && audioEl.volume < 0.05) {
        audioEl.volume = targetVolume;
      }
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMute);
  }

  return {
    startFromUserGesture,
    toggleMute,
  };
})();

/* ==========================================================================
   4B. REALISTIC GENTLE PAPER-TURNING SOUND ENGINE (Web Audio Foley)
   Synthesizes a soft, physical parchment turn (corner lift -> sweeping arc
   with gentle stereo pan -> delicate settle) synced to the 3D book animation.
   Zero external audio files, zero latency, automatically respects mute state.
   ========================================================================== */
const paperSoundEngine = (() => {
  let sfxCtx = null;
  let pinkNoiseBuffer = null;

  function ensureContext() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!sfxCtx) {
        sfxCtx = new AudioCtx();
      }
      if (sfxCtx.state === 'suspended') {
        sfxCtx.resume().catch(() => {});
      }
      if (!pinkNoiseBuffer) {
        pinkNoiseBuffer = createOrganicPaperNoise(sfxCtx, 1.6);
      }
      return sfxCtx;
    } catch (_) {
      return null;
    }
  }

  // Warm 7-pole pink noise with subtle fiber micro-texture (sounds like cotton book paper)
  function createOrganicPaperNoise(ctx, durationSec) {
    const sampleRate = ctx.sampleRate;
    const length = Math.floor(sampleRate * durationSec);
    const buffer = ctx.createBuffer(2, length, sampleRate);

    for (let ch = 0; ch < 2; ch += 1) {
      const data = buffer.getChannelData(ch);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;

      for (let i = 0; i < length; i += 1) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        const pink = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;

        // Subtle organic micro-ripple mimicking textured book paper fibers
        const ripple = 0.86 + 0.14 * Math.sin((i / sampleRate) * 28 + ch * 1.4);
        data[i] = Math.max(-1, Math.min(1, pink * ripple));
      }
    }
    return buffer;
  }

  function unlock() {
    ensureContext();
  }

  function playPageTurn(direction = 'next', intensity = 1) {
    if (state.isMuted) return;
    const ctx = ensureContext();
    if (!ctx || !pinkNoiseBuffer) return;

    try {
      const now = ctx.currentTime + 0.015;
      // Subtle per-turn organic variance so consecutive pages never sound robotic
      const pitchVar = 0.94 + Math.random() * 0.12;
      const durVar = 0.96 + Math.random() * 0.08;
      const level = 0.25 * intensity;
      const isPrev = direction === 'prev';

      // Master warm parchment tone chain (eliminates harsh digital hiss)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(level, now);

      const warmCut = ctx.createBiquadFilter();
      warmCut.type = 'lowpass';
      warmCut.frequency.setValueAtTime(5200 * pitchVar, now);
      warmCut.Q.setValueAtTime(0.6, now);

      const rumbleCut = ctx.createBiquadFilter();
      rumbleCut.type = 'highpass';
      rumbleCut.frequency.setValueAtTime(95, now);

      // Gentle directional stereo pan synced to the physical page crossing the center spine
      let outputNode = warmCut;
      if (typeof ctx.createStereoPanner === 'function') {
        const panner = ctx.createStereoPanner();
        const startPan = isPrev ? -0.34 : 0.34;
        const endPan = isPrev ? 0.34 : -0.34;
        panner.pan.setValueAtTime(startPan, now);
        panner.pan.linearRampToValueAtTime(endPan, now + 0.66 * durVar);
        warmCut.connect(panner);
        panner.connect(rumbleCut);
      } else {
        warmCut.connect(rumbleCut);
      }
      rumbleCut.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Random start offset within the pink noise buffer for fresh texture every turn
      const maxOffset = Math.max(0.05, pinkNoiseBuffer.duration - 0.95);
      const offsetA = Math.random() * maxOffset;
      const offsetB = Math.random() * maxOffset;

      // --- STAGE 1: Delicate fingertip corner separation (0.00s - 0.14s) ---
      const liftSrc = ctx.createBufferSource();
      liftSrc.buffer = pinkNoiseBuffer;
      const liftFilter = ctx.createBiquadFilter();
      liftFilter.type = 'bandpass';
      liftFilter.frequency.setValueAtTime(2550 * pitchVar, now);
      liftFilter.frequency.exponentialRampToValueAtTime(3400 * pitchVar, now + 0.11 * durVar);
      liftFilter.Q.setValueAtTime(1.35, now);

      const liftGain = ctx.createGain();
      liftGain.gain.setValueAtTime(0.0001, now);
      liftGain.gain.linearRampToValueAtTime(0.24, now + 0.035 * durVar);
      liftGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14 * durVar);

      liftSrc.connect(liftFilter);
      liftFilter.connect(liftGain);
      liftGain.connect(outputNode);
      liftSrc.start(now, offsetA, 0.18);

      // --- STAGE 2A: Smooth page-arc air sweep (0.05s - 0.58s) ---
      const bodySrc = ctx.createBufferSource();
      bodySrc.buffer = pinkNoiseBuffer;
      const bodyFilter = ctx.createBiquadFilter();
      bodyFilter.type = 'bandpass';
      bodyFilter.frequency.setValueAtTime(520 * pitchVar, now + 0.05);
      bodyFilter.frequency.exponentialRampToValueAtTime(1420 * pitchVar, now + 0.28 * durVar);
      bodyFilter.frequency.exponentialRampToValueAtTime(680 * pitchVar, now + 0.58 * durVar);
      bodyFilter.Q.setValueAtTime(0.85, now);

      const bodyGain = ctx.createGain();
      bodyGain.gain.setValueAtTime(0.0001, now + 0.04);
      bodyGain.gain.linearRampToValueAtTime(0.62, now + 0.24 * durVar);
      bodyGain.gain.linearRampToValueAtTime(0.46, now + 0.42 * durVar);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62 * durVar);

      bodySrc.connect(bodyFilter);
      bodyFilter.connect(bodyGain);
      bodyGain.connect(outputNode);
      bodySrc.start(now + 0.04, offsetB, 0.65);

      // --- STAGE 2B: Crisp parchment fiber brush across the spine (0.08s - 0.56s) ---
      const fiberSrc = ctx.createBufferSource();
      fiberSrc.buffer = pinkNoiseBuffer;
      const fiberFilter = ctx.createBiquadFilter();
      fiberFilter.type = 'bandpass';
      fiberFilter.frequency.setValueAtTime(2150 * pitchVar, now + 0.08);
      fiberFilter.frequency.exponentialRampToValueAtTime(3250 * pitchVar, now + 0.30 * durVar);
      fiberFilter.frequency.exponentialRampToValueAtTime(1680 * pitchVar, now + 0.56 * durVar);
      fiberFilter.Q.setValueAtTime(1.25, now);

      const fiberGain = ctx.createGain();
      fiberGain.gain.setValueAtTime(0.0001, now + 0.07);
      fiberGain.gain.linearRampToValueAtTime(0.32, now + 0.27 * durVar);
      fiberGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58 * durVar);

      fiberSrc.connect(fiberFilter);
      fiberFilter.connect(fiberGain);
      fiberGain.connect(outputNode);
      fiberSrc.start(now + 0.07, (offsetA + 0.3) % maxOffset, 0.56);

      // --- STAGE 3: Soft settling brush & gentle book-bed pat (0.50s - 0.78s) ---
      const settleStart = now + 0.50 * durVar;
      const settleSrc = ctx.createBufferSource();
      settleSrc.buffer = pinkNoiseBuffer;
      const settleFilter = ctx.createBiquadFilter();
      settleFilter.type = 'lowpass';
      settleFilter.frequency.setValueAtTime(860 * pitchVar, settleStart);
      settleFilter.frequency.exponentialRampToValueAtTime(310 * pitchVar, settleStart + 0.22 * durVar);

      const settleGain = ctx.createGain();
      settleGain.gain.setValueAtTime(0.0001, settleStart);
      settleGain.gain.linearRampToValueAtTime(0.42, settleStart + 0.045 * durVar);
      settleGain.gain.exponentialRampToValueAtTime(0.0001, settleStart + 0.25 * durVar);

      settleSrc.connect(settleFilter);
      settleFilter.connect(settleGain);
      settleGain.connect(outputNode);
      settleSrc.start(settleStart, (offsetB + 0.45) % maxOffset, 0.28);

      // Tiny damped low resonance as the cream sheet rests flat on the facing stack
      const patOsc = ctx.createOscillator();
      const patGain = ctx.createGain();
      patOsc.type = 'sine';
      patOsc.frequency.setValueAtTime(142 * pitchVar, settleStart + 0.02);
      patOsc.frequency.exponentialRampToValueAtTime(76, settleStart + 0.14);

      patGain.gain.setValueAtTime(0.0001, settleStart + 0.02);
      patGain.gain.linearRampToValueAtTime(0.085, settleStart + 0.038);
      patGain.gain.exponentialRampToValueAtTime(0.0001, settleStart + 0.15);

      patOsc.connect(patGain);
      patGain.connect(masterGain);
      patOsc.start(settleStart + 0.02);
      patOsc.stop(settleStart + 0.17);
    } catch (_) {
      // Fail silently if audio scheduling fails
    }
  }

  // Gentle cover lift + staggered flyleaf paper rustle when Page 1 book opens
  function playBookOpen() {
    if (state.isMuted) return;
    playPageTurn('next', 0.68);
    window.setTimeout(() => {
      if (!state.isMuted) {
        playPageTurn('next', 0.52);
      }
    }, 240);
  }

  return {
    unlock,
    playPageTurn,
    playBookOpen,
  };
})();

/* ==========================================================================
   5. STARFIELD, PORTAL WARP & CONTINUOUS FALLING STARS CANVAS
   ========================================================================== */
const skyEngine = (() => {
  const canvas = document.getElementById('sky-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  if (!canvas || !ctx) {
    return {
      setMode: () => {},
      burstFromCenter: () => {},
    };
  }

  let width = 0;
  let height = 0;
  let dpr = 1;
  let mode = 'cover'; // 'cover' | 'story' | 'question' | 'portal' | 'warp' | 'moon' | 'no'
  const stars = [];
  const motes = [];
  const fallingStars = [];
  let lastFallSpawn = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initStars() {
    stars.length = 0;
    const count = width < 640 ? 115 : 200;
    const palette = ['#FFFFFF', '#E5EAF5', '#F3C4CF', '#DFC496', '#D2C8EC'];

    for (let i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.45 + 0.35,
        baseAlpha: Math.random() * 0.55 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        phase: Math.random() * Math.PI * 2,
        driftY: -(Math.random() * 0.09 + 0.02),
        color: palette[i % palette.length],
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * Math.max(width, height) * 0.65 + 24,
        warpSpeed: Math.random() * 5 + 3.5,
      });
    }
  }

  function spawnFallingStar(randomProgress = false) {
    const colors = [
      { head: '#FFFDF7', tail: '255, 248, 232' },
      { head: '#FFE6EE', tail: '243, 196, 207' },
      { head: '#F7E7C6', tail: '223, 196, 150' },
      { head: '#EAE6FF', tail: '198, 187, 238' },
    ];
    const tint = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * (width * 1.25) + width * 0.05;
    const startY = randomProgress ? Math.random() * height * 0.75 : -20 - Math.random() * 80;
    const speed = Math.random() * 3.8 + 3.4;
    const angle = (118 + Math.random() * 20) * (Math.PI / 180); // Gentle diagonal cascade

    fallingStars.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: Math.random() * 78 + 56,
      radius: Math.random() * 1.3 + 1.0,
      alpha: randomProgress ? Math.random() * 0.6 + 0.3 : 0,
      maxAlpha: Math.random() * 0.32 + 0.64,
      life: randomProgress ? Math.random() * 0.5 + 0.4 : 1,
      decay: Math.random() * 0.0055 + 0.0045,
      tint,
    });
  }

  function burstFromCenter(count = 36, originYRatio = 0.45) {
    if (prefersReducedMotion) return;
    const ox = width * 0.5;
    const oy = height * originYRatio;
    const colors = ['#FFF4D6', '#F3C4CF', '#DFC496', '#D9CEF2'];

    for (let i = 0; i < count; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2.4 + 0.8;
      motes.push({
        x: ox + (Math.random() - 0.5) * 60,
        y: oy + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.9,
        size: Math.random() * 2.6 + 1.1,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.008,
        color: colors[i % colors.length],
      });
    }
  }

  function setMode(nextMode) {
    mode = nextMode;
    if (mode === 'warp') {
      const cx = width * 0.5;
      const cy = height * 0.5;
      stars.forEach((s) => {
        s.angle = Math.atan2(s.y - cy, s.x - cx);
        s.dist = Math.max(12, Math.hypot(s.x - cx, s.y - cy));
      });
    }
    if ((mode === 'moon' || mode === 'moon-bright') && !prefersReducedMotion) {
      // Pre-seed continuous falling stars immediately upon entering the Moon scene
      if (fallingStars.length === 0) {
        const initialCount = width < 640 ? 6 : 10;
        for (let i = 0; i < initialCount; i += 1) {
          spawnFallingStar(true);
        }
      }
      lastFallSpawn = performance.now();
    } else if (mode !== 'moon' && mode !== 'moon-bright' && mode !== 'flower') {
      fallingStars.length = 0;
    }
  }

  function render(now) {
    ctx.clearRect(0, 0, width, height);

    const cx = width * 0.5;
    const cy = height * 0.5;
    const globalDim =
      mode === 'no'
        ? 0.38
        : mode === 'moon-bright'
        ? 1.2
        : mode === 'moon' || mode === 'flower' || mode === 'finale'
        ? 0.96
        : 0.82;

    for (let i = 0; i < stars.length; i += 1) {
      const s = stars[i];
      s.phase += prefersReducedMotion ? 0 : s.twinkleSpeed;
      const twinkle = 0.55 + Math.sin(s.phase) * 0.45;

      if (mode === 'warp' && !prefersReducedMotion) {
        const prevDist = s.dist;
        s.dist += s.warpSpeed * (1 + s.dist * 0.015);
        const maxR = Math.hypot(width, height) * 0.72;
        if (s.dist > maxR) {
          s.dist = Math.random() * 48 + 8;
        }
        const x1 = cx + Math.cos(s.angle) * prevDist;
        const y1 = cy + Math.sin(s.angle) * prevDist;
        const x2 = cx + Math.cos(s.angle) * s.dist;
        const y2 = cy + Math.sin(s.angle) * s.dist;

        ctx.strokeStyle = s.color;
        ctx.globalAlpha = Math.min(0.9, s.baseAlpha + 0.3);
        ctx.lineWidth = Math.max(1, s.r * 1.15);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      } else {
        if (!prefersReducedMotion) {
          const driftFactor = mode === 'no' ? 0.35 : 1;
          s.y += s.driftY * driftFactor;
          if (s.y < -4) {
            s.y = height + 4;
            s.x = Math.random() * width;
          }

          if (mode === 'portal') {
            const dx = cx - s.x;
            const dy = cy - s.y;
            s.x += dx * 0.004;
            s.y += dy * 0.004;
          }
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.baseAlpha * twinkle * globalDim;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Floating magical burst particles
    for (let i = motes.length - 1; i >= 0; i -= 1) {
      const m = motes[i];
      m.x += m.vx;
      m.y += m.vy;
      m.vx *= 0.985;
      m.vy *= 0.985;
      m.alpha -= m.decay;

      if (m.alpha <= 0) {
        motes.splice(i, 1);
        continue;
      }

      ctx.fillStyle = m.color;
      ctx.globalAlpha = m.alpha;
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Continuous Falling Stars in Moon & Teaser Scenes
    if ((mode === 'moon' || mode === 'moon-bright') && !prefersReducedMotion) {
      const maxFalling = width < 640 ? 9 : 15;
      const intervalMs = width < 640 ? 440 : 280;
      if (fallingStars.length < maxFalling && now - lastFallSpawn > intervalMs) {
        spawnFallingStar(false);
        lastFallSpawn = now;
      }

      for (let i = fallingStars.length - 1; i >= 0; i -= 1) {
        const fs = fallingStars[i];
        fs.x += fs.vx;
        fs.y += fs.vy;
        fs.life -= fs.decay;

        // Smooth fade-in then graceful fade-out
        const currentAlpha =
          fs.life > 0.8
            ? ((1 - fs.life) / 0.2) * fs.maxAlpha
            : Math.max(0, fs.life * fs.maxAlpha);

        if (fs.life <= 0 || fs.y > height + 100 || fs.x < -120) {
          fallingStars.splice(i, 1);
          continue;
        }

        const speedMag = Math.hypot(fs.vx, fs.vy) || 1;
        const tailX = fs.x - (fs.vx / speedMag) * fs.length;
        const tailY = fs.y - (fs.vy / speedMag) * fs.length;

        const grad = ctx.createLinearGradient(fs.x, fs.y, tailX, tailY);
        grad.addColorStop(0, `rgba(${fs.tint.tail}, ${currentAlpha})`);
        grad.addColorStop(0.45, `rgba(${fs.tint.tail}, ${currentAlpha * 0.4})`);
        grad.addColorStop(1, `rgba(${fs.tint.tail}, 0)`);

        ctx.strokeStyle = grad;
        ctx.globalAlpha = 1;
        ctx.lineWidth = fs.radius * 1.15;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(fs.x, fs.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Luminous star head glow
        ctx.fillStyle = fs.tint.head;
        ctx.globalAlpha = Math.min(1, currentAlpha * 1.15);
        ctx.beginPath();
        ctx.arc(fs.x, fs.y, fs.radius * 1.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(render);
  }

  resize();
  initStars();
  requestAnimationFrame(render);

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });

  return {
    setMode,
    burstFromCenter,
  };
})();

/* ==========================================================================
   6. USAGI ANIMATION & COMPANION HELPER
   ========================================================================== */
const USAGI_MODES = [
  'usagi--idle',
  'usagi--walking',
  'usagi--waving',
  'usagi--guiding',
  'usagi--excited',
  'usagi--surprised',
  'usagi--sitting',
  'usagi--floating',
];

function setUsagiState(el, modeName) {
  if (!el) return;
  USAGI_MODES.forEach((cls) => el.classList.remove(cls));
  el.classList.add(`usagi--${modeName}`);
}

function showUsagiWhisper(whisperEl, text, durationMs = 2800) {
  if (!whisperEl) return;
  whisperEl.textContent = text;
  whisperEl.classList.add('is-visible');

  if (whisperEl._timer) {
    window.clearTimeout(whisperEl._timer);
  }
  if (durationMs > 0) {
    whisperEl._timer = window.setTimeout(() => {
      whisperEl.classList.remove('is-visible');
    }, durationMs);
  }
}

function bindInteractiveUsagi(wrapperId, whisperId, defaultMood, reactionMood, phrases) {
  const el = document.getElementById(wrapperId);
  const whisper = document.getElementById(whisperId);
  if (!el) return;

  let phraseIdx = 0;
  const triggerReaction = () => {
    const previousMode =
      USAGI_MODES.find((cls) => el.classList.contains(cls))?.replace('usagi--', '') ||
      defaultMood;
    setUsagiState(el, reactionMood);
    if (whisper && phrases && phrases.length) {
      showUsagiWhisper(whisper, phrases[phraseIdx % phrases.length], 2400);
      phraseIdx += 1;
    }
    window.setTimeout(() => {
      if (el.classList.contains(`usagi--${reactionMood}`)) {
        setUsagiState(el, previousMode);
      }
    }, 1150);
  };

  el.addEventListener('click', triggerReaction);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerReaction();
    }
  });
}

/* ==========================================================================
   7. SCENE SWITCHING ENGINE
   ========================================================================== */
const scenes = {
  cover: document.getElementById('scene-cover'),
  story: document.getElementById('scene-story'),
  question: document.getElementById('scene-question'),
  portal: document.getElementById('scene-portal'),
  moon: document.getElementById('scene-moon'),
  flower: document.getElementById('scene-flower'),
  finale: document.getElementById('scene-finale'),
  no: document.getElementById('scene-no'),
};

function wait(ms) {
  return new Promise((resolve) =>
    window.setTimeout(resolve, prefersReducedMotion ? Math.min(ms, 220) : ms)
  );
}

async function switchScene(targetName) {
  // Moon Surprise, Flower Animation & Fireworks Finale ONLY open after YES is chosen
  if (
    (targetName === 'moon' || targetName === 'flower' || targetName === 'finale') &&
    !state.yesUnlocked
  ) {
    return;
  }

  const currentEl = scenes[state.currentScene];
  const nextEl = scenes[targetName];
  if (!nextEl || currentEl === nextEl) return;

  if (currentEl) {
    currentEl.classList.add('is-leaving');
    currentEl.classList.remove('is-active');
    await wait(520);
    currentEl.hidden = true;
    currentEl.classList.remove('is-leaving');
  }

  state.currentScene = targetName;
  document.body.setAttribute('data-scene', targetName);
  skyEngine.setMode(targetName);

  nextEl.hidden = false;
  if (targetName === 'story') {
    syncUniformBookHeight();
  }
  window.scrollTo({ top: 0, behavior: 'instant' });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextEl.classList.add('is-active');
    });
  });
}

/* ==========================================================================
   8. PAGE 1 — ENCHANTED BOOK OPENING SEQUENCE
   ========================================================================== */
function initCoverScene() {
  const startBtn = document.getElementById('btn-start');
  const coverScene = scenes.cover;
  const usagiCover = document.getElementById('usagi-cover');
  const coverWhisper = document.getElementById('usagi-cover-whisper');

  bindInteractiveUsagi('usagi-cover', 'usagi-cover-whisper', 'idle', 'waving', [
    'Press start whenever you are ready',
    'I kept this book safe for you',
  ]);

  if (!startBtn) return;

  startBtn.addEventListener('click', async () => {
    if (state.isTransitioning) return;
    state.isTransitioning = true;
    state.hasStarted = true;

    // 1. Start music & unlock paper SFX INSIDE click event for mobile browser autoplay compliance
    audioController.startFromUserGesture();
    paperSoundEngine.unlock();

    // 2. Smoothly fade START button
    startBtn.classList.add('is-fading');
    startBtn.disabled = true;

    // 3. Usagi waves warmly at the visitor
    setUsagiState(usagiCover, 'waving');
    showUsagiWhisper(coverWhisper, 'Come along...', 1800);

    await wait(340);

    // 4. Book begins glowing & opens realistically in 3D with gentle parchment sound
    coverScene.classList.add('is-opening');
    paperSoundEngine.playBookOpen();

    // 5. Magical particles emerge from its pages
    await wait(520);
    skyEngine.burstFromCenter(44, 0.42);

    // 6. Background gradually brightens
    document.body.classList.add('is-brightening');
    await wait(620);
    skyEngine.burstFromCenter(28, 0.4);

    // 7. Transition smoothly into Page 2 — The 3-Chapter Book
    await wait(780);
    document.body.classList.remove('is-brightening');
    renderStoryPage(0, false);
    await switchScene('story');

    coverScene.classList.remove('is-opening');
    startBtn.classList.remove('is-fading');
    startBtn.disabled = false;
    setUsagiState(usagiCover, 'idle');
    state.isTransitioning = false;
  });
}

/* ==========================================================================
   9. PAGE 2 — RESPONSIVE REALISTIC BOOK (1 Page Mobile / 2-Page Desktop Spread)
   ========================================================================== */
const storyCard = document.getElementById('story-page-card');
const bookTurningLeaf = document.getElementById('book-turning-leaf');
const bookTurnShadow = document.getElementById('book-turn-shadow');
const storyCounter = document.getElementById('story-page-counter');
const storyChapter = document.getElementById('story-chapter-label');
const storyRunningChapter = document.getElementById('story-running-chapter');
const storyHeading = document.getElementById('story-heading');
const storyBodyLeft = document.getElementById('story-body-left');
const storyBodyRight = document.getElementById('story-body-right');
const storyClosingLine = document.getElementById('story-closing-line');
const storyFolioLeft = document.getElementById('story-folio-left');
const storyFolioRight = document.getElementById('story-folio-right');
const storyIllustration = document.getElementById('story-illustration');
const btnContinue = document.getElementById('btn-continue');
const btnStoryBack = document.getElementById('btn-story-back');
const usagiStory = document.getElementById('usagi-story');
const usagiStoryWhisper = document.getElementById('usagi-story-whisper');

const desktopBookMedia = window.matchMedia('(min-width: 760px)');
const isDesktopBook = () => desktopBookMedia.matches;
const TOTAL_BOOK_PAGES = STORY_CONFIG.storyPages.length * 2; // 6 physical pages across 3 chapters

function renderParagraphList(container, paragraphs) {
  if (!container) return;
  container.innerHTML = '';
  paragraphs.forEach((text) => {
    const p = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
  });
}

function updateStoryMetaChrome(pageIdx) {
  const chapters = STORY_CONFIG.storyPages;
  const chapterIdx = Math.floor(pageIdx / 2);
  const chapter = chapters[chapterIdx];
  if (!chapter) return;

  if (isDesktopBook()) {
    storyCounter.textContent = `Chapter ${chapterIdx + 1} of ${chapters.length}`;
    if (btnStoryBack) {
      btnStoryBack.innerHTML = '&larr; Previous chapter';
      btnStoryBack.hidden = chapterIdx === 0;
    }
  } else {
    storyCounter.textContent = `Page ${pageIdx + 1} of ${TOTAL_BOOK_PAGES} · ${chapter.chapter}`;
    if (btnStoryBack) {
      btnStoryBack.innerHTML = '&larr; Previous page';
      btnStoryBack.hidden = pageIdx === 0;
    }
  }
}

let uniformHeightResizeTimer = null;

/**
 * Measures all 3 chapters at the active viewport width using an invisible off-flow
 * clone so Chapters 1, 2, and 3 share the exact same pixel height with zero layout
 * jumps, zero clipping, and consistent positioning across mobile, tablet, and desktop.
 */
function syncUniformBookHeight() {
  if (!storyCard || !storyCard.parentElement) return;
  const cardWidth = storyCard.getBoundingClientRect().width;
  if (cardWidth <= 0) return;

  const clone = storyCard.cloneNode(true);
  clone.removeAttribute('id');
  clone.setAttribute('aria-hidden', 'true');
  clone.classList.remove('is-flipping');
  clone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
  clone.querySelectorAll('.book-turning-leaf, .book-turn-shadow').forEach((el) => el.remove());

  clone.style.position = 'absolute';
  clone.style.top = '0';
  clone.style.left = '0';
  clone.style.width = `${cardWidth}px`;
  clone.style.minHeight = '0';
  clone.style.height = 'auto';
  clone.style.visibility = 'hidden';
  clone.style.pointerEvents = 'none';
  clone.style.zIndex = '-1';
  clone.style.transition = 'none';

  storyCard.parentElement.appendChild(clone);

  const cloneChapter = clone.querySelector('.story-chapter-label');
  const cloneRunning = clone.querySelector('.book-leaf-right .book-running-head');
  const cloneHeading = clone.querySelector('.story-heading');
  const cloneIllus = clone.querySelector('.story-illustration');
  const cloneBodyLeft = clone.querySelector('.book-leaf-left .story-prose');
  const cloneBodyRight = clone.querySelector('.book-leaf-right .story-prose');
  const cloneClosing = clone.querySelector('.story-closing-line');

  const desktop = isDesktopBook();
  const viewportFloor = desktop
    ? Math.min(Math.round(window.innerHeight * 0.68), 640)
    : Math.min(Math.round(window.innerHeight * 0.64), 560);
  let maxH = viewportFloor;

  STORY_CONFIG.storyPages.forEach((ch) => {
    if (cloneChapter) cloneChapter.textContent = ch.chapter;
    if (cloneRunning) cloneRunning.textContent = `${ch.chapter} · ${ch.heading}`;
    if (cloneHeading) cloneHeading.textContent = ch.heading;
    if (cloneIllus) {
      cloneIllus.innerHTML =
        STORY_ILLUSTRATIONS[ch.illustration] || STORY_ILLUSTRATIONS.constellation;
    }
    renderParagraphList(cloneBodyLeft, ch.leftParagraphs);
    renderParagraphList(cloneBodyRight, ch.rightParagraphs);
    if (cloneClosing) {
      if (ch.closingLine) {
        cloneClosing.textContent = ch.closingLine;
        cloneClosing.hidden = false;
      } else {
        cloneClosing.textContent = '';
        cloneClosing.hidden = true;
      }
    }

    if (desktop) {
      maxH = Math.max(maxH, clone.offsetHeight);
    } else {
      clone.setAttribute('data-mobile-side', 'left');
      maxH = Math.max(maxH, clone.offsetHeight);
      clone.setAttribute('data-mobile-side', 'right');
      maxH = Math.max(maxH, clone.offsetHeight);
    }
  });

  clone.remove();
  storyCard.style.setProperty('--book-uniform-height', `${Math.ceil(maxH)}px`);
}

function renderStoryPage(pageIdx, animateTurn = true, direction = 'next') {
  const clampedIdx = Math.max(0, Math.min(pageIdx, TOTAL_BOOK_PAGES - 1));
  const chapterIdx = Math.floor(clampedIdx / 2);
  const mobileSide = clampedIdx % 2 === 0 ? 'left' : 'right';
  const chapter = STORY_CONFIG.storyPages[chapterIdx];
  if (!chapter) return;

  const applyContent = () => {
    state.storyIndex = clampedIdx;
    if (storyCard) {
      storyCard.setAttribute('data-mobile-side', mobileSide);
    }

    updateStoryMetaChrome(clampedIdx);
    storyChapter.textContent = chapter.chapter;
    if (storyRunningChapter) {
      storyRunningChapter.textContent = `${chapter.chapter} · ${chapter.heading}`;
    }
    storyHeading.textContent = chapter.heading;
    storyIllustration.innerHTML =
      STORY_ILLUSTRATIONS[chapter.illustration] || STORY_ILLUSTRATIONS.constellation;

    renderParagraphList(storyBodyLeft, chapter.leftParagraphs);
    renderParagraphList(storyBodyRight, chapter.rightParagraphs);

    if (storyClosingLine) {
      if (chapter.closingLine) {
        storyClosingLine.textContent = chapter.closingLine;
        storyClosingLine.hidden = false;
      } else {
        storyClosingLine.textContent = '';
        storyClosingLine.hidden = true;
      }
    }

    if (storyFolioLeft) storyFolioLeft.textContent = String(chapterIdx * 2 + 1);
    if (storyFolioRight) storyFolioRight.textContent = String(chapterIdx * 2 + 2);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Walk Usagi smoothly to this chapter's anchor position
    if (usagiStory) {
      usagiStory.classList.remove('pos-left', 'pos-mid', 'pos-near-cta');
      setUsagiState(usagiStory, 'walking');
      requestAnimationFrame(() => {
        usagiStory.classList.add(chapter.usagiPos || 'pos-left');
      });

      const whisperText =
        !isDesktopBook() && mobileSide === 'left'
          ? 'Turn to the next page...'
          : chapter.usagiWhisper;

      window.setTimeout(
        () => {
          setUsagiState(usagiStory, chapter.usagiMood || 'idle');
          if (whisperText) {
            showUsagiWhisper(usagiStoryWhisper, whisperText, 2600);
          }
        },
        prefersReducedMotion ? 100 : 750
      );
    }
  };

  if (!animateTurn || prefersReducedMotion || !bookTurningLeaf) {
    if (animateTurn) {
      paperSoundEngine.playPageTurn(direction);
    }
    applyContent();
    return;
  }

  state.isTransitioning = true;
  const flipClass = direction === 'prev' ? 'flip-prev' : 'flip-next';

  storyCard.classList.add('is-flipping');
  bookTurningLeaf.classList.remove('flip-next', 'flip-prev');
  if (bookTurnShadow) bookTurnShadow.classList.remove('is-casting');

  // Force reflow so rapid consecutive page turns restart cleanly
  void bookTurningLeaf.offsetWidth;

  // Trigger gentle realistic paper-turning sound synchronized with physical 3D leaf
  paperSoundEngine.playPageTurn(direction);
  bookTurningLeaf.classList.add(flipClass);
  if (bookTurnShadow) bookTurnShadow.classList.add('is-casting');

  // Swap the printed book page seamlessly at the 90-degree apex of the page turn
  window.setTimeout(() => {
    applyContent();
  }, 400);

  window.setTimeout(() => {
    bookTurningLeaf.classList.remove('flip-next', 'flip-prev');
    if (bookTurnShadow) bookTurnShadow.classList.remove('is-casting');
    storyCard.classList.remove('is-flipping');
    state.isTransitioning = false;
  }, 860);
}

function initStoryScene() {
  bindInteractiveUsagi('usagi-story', 'usagi-story-whisper', 'idle', 'excited', [
    'Take your time reading',
    'Every word is meant for you',
  ]);

  const turnToPreviousPage = () => {
    if (state.isTransitioning) return;
    if (isDesktopBook()) {
      const currentChapter = Math.floor(state.storyIndex / 2);
      if (currentChapter <= 0) return;
      renderStoryPage((currentChapter - 1) * 2, true, 'prev');
    } else {
      if (state.storyIndex <= 0) return;
      renderStoryPage(state.storyIndex - 1, true, 'prev');
    }
  };

  const turnToNextPageOrQuestion = async () => {
    if (state.isTransitioning) return;

    if (isDesktopBook()) {
      const currentChapter = Math.floor(state.storyIndex / 2);
      const lastChapter = STORY_CONFIG.storyPages.length - 1;
      if (currentChapter < lastChapter) {
        renderStoryPage((currentChapter + 1) * 2, true, 'next');
        return;
      }
    } else if (state.storyIndex < TOTAL_BOOK_PAGES - 1) {
      renderStoryPage(state.storyIndex + 1, true, 'next');
      return;
    }

    // Turn the final page smoothly with paper sound before entering the Question scene
    state.isTransitioning = true;
    setUsagiState(usagiStory, 'walking');
    paperSoundEngine.playPageTurn('next');
    if (bookTurningLeaf && !prefersReducedMotion) {
      storyCard.classList.add('is-flipping');
      bookTurningLeaf.classList.remove('flip-next', 'flip-prev');
      if (bookTurnShadow) bookTurnShadow.classList.remove('is-casting');
      void bookTurningLeaf.offsetWidth;
      bookTurningLeaf.classList.add('flip-next');
      if (bookTurnShadow) bookTurnShadow.classList.add('is-casting');
      await wait(520);
    }
    await switchScene('question');
    if (bookTurningLeaf) bookTurningLeaf.classList.remove('flip-next', 'flip-prev');
    if (bookTurnShadow) bookTurnShadow.classList.remove('is-casting');
    storyCard.classList.remove('is-flipping');
    revealQuestionSequence();
    state.isTransitioning = false;
  };

  if (btnStoryBack) {
    btnStoryBack.addEventListener('click', turnToPreviousPage);
  }

  if (btnContinue) {
    btnContinue.addEventListener('click', turnToNextPageOrQuestion);
  }

  // Natural horizontal swipe gesture for flipping physical pages on mobile touchscreens
  if (storyCard) {
    let touchStartX = 0;
    let touchStartY = 0;

    storyCard.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      },
      { passive: true }
    );

    storyCard.addEventListener(
      'touchend',
      (e) => {
        if (state.currentScene !== 'story' || state.isTransitioning) return;
        if (!e.changedTouches || e.changedTouches.length !== 1) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy) * 1.45) {
          if (dx < 0) {
            turnToNextPageOrQuestion();
          } else {
            turnToPreviousPage();
          }
        }
      },
      { passive: true }
    );
  }

  // Natural keyboard book navigation (Left / Right arrow keys while reading)
  window.addEventListener('keydown', (e) => {
    if (state.currentScene !== 'story' || state.isTransitioning) return;
    if (e.key === 'ArrowRight') {
      turnToNextPageOrQuestion();
    } else if (e.key === 'ArrowLeft') {
      turnToPreviousPage();
    }
  });

  // Keep chapter/page indicator and uniform book dimensions synced across breakpoints & resizes
  const handleBookLayoutChange = () => {
    if (state.currentScene === 'story') {
      updateStoryMetaChrome(state.storyIndex);
      syncUniformBookHeight();
    }
  };
  if (typeof desktopBookMedia.addEventListener === 'function') {
    desktopBookMedia.addEventListener('change', handleBookLayoutChange);
  } else if (typeof desktopBookMedia.addListener === 'function') {
    desktopBookMedia.addListener(handleBookLayoutChange);
  }

  const scheduleBookHeightSync = () => {
    if (state.currentScene !== 'story') return;
    if (uniformHeightResizeTimer) window.clearTimeout(uniformHeightResizeTimer);
    uniformHeightResizeTimer = window.setTimeout(() => {
      uniformHeightResizeTimer = null;
      syncUniformBookHeight();
    }, 80);
  };
  window.addEventListener('resize', scheduleBookHeightSync);
  window.addEventListener('orientationchange', scheduleBookHeightSync);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (state.currentScene === 'story') {
        syncUniformBookHeight();
      }
    });
  }
}

/* ==========================================================================
   10. PAGE 3 — THE QUESTION & DUAL ENDINGS (Available After Chapter 3)
   ========================================================================== */
async function revealQuestionSequence() {
  const title = document.getElementById('question-title');
  const actions = document.getElementById('question-actions');
  const usagiQ = document.getElementById('usagi-question');
  const usagiQWhisper = document.getElementById('usagi-question-whisper');

  title.classList.remove('is-visible');
  actions.classList.remove('is-visible');
  setUsagiState(usagiQ, 'idle');

  await wait(240);
  title.classList.add('is-visible');
  setUsagiState(usagiQ, 'surprised');
  showUsagiWhisper(usagiQWhisper, 'Take your time...', 2600);
  skyEngine.burstFromCenter(22, 0.36);

  await wait(620);
  actions.classList.add('is-visible');
  setUsagiState(usagiQ, 'idle');
}

function initQuestionScene() {
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  bindInteractiveUsagi('usagi-question', 'usagi-question-whisper', 'idle', 'waving', [
    'Whatever you choose is okay',
  ]);

  if (btnYes) {
    btnYes.addEventListener('click', () => {
      if (state.isTransitioning) return;
      runYesPortalSequence();
    });
  }

  if (btnNo) {
    btnNo.addEventListener('click', () => {
      if (state.isTransitioning) return;
      runNoEndingSequence();
    });
  }
}

/* ==========================================================================
   11. YES ENDING — MAGICAL PORTAL -> MOON SCENE WITH CONTINUOUS FALLING STARS
   ========================================================================== */
async function runYesPortalSequence() {
  state.isTransitioning = true;
  state.yesUnlocked = true;

  const usagiQ = document.getElementById('usagi-question');
  const portalScene = scenes.portal;
  const portalCaption = document.getElementById('portal-caption');
  const usagiPortal = document.getElementById('usagi-portal');

  // 1. Usagi jumps excitedly
  setUsagiState(usagiQ, 'excited');
  skyEngine.burstFromCenter(34, 0.5);
  await wait(800);

  // 2. Enter Portal Stage
  portalScene.classList.remove('phase-forming', 'phase-warp', 'phase-flash');
  portalCaption.textContent = 'A doorway opens in the starlight...';
  setUsagiState(usagiPortal, 'excited');

  await switchScene('portal');
  skyEngine.setMode('portal');

  // 3. Portal forms behind Usagi
  await wait(240);
  portalScene.classList.add('phase-forming');
  skyEngine.burstFromCenter(40, 0.5);

  await wait(1450);

  // 4. Travel through portal into outer space
  portalCaption.textContent = 'Traveling together beyond the sky...';
  skyEngine.setMode('warp');
  portalScene.classList.add('phase-warp');

  await wait(1450);

  // 5. Starlight crossing wash
  portalScene.classList.add('phase-flash');
  await wait(780);

  // 6. Populate & reveal the Moon scene with continuous falling stars
  populateMoonYesMessage();
  await switchScene('moon');
  skyEngine.setMode('moon');

  portalScene.classList.remove('phase-forming', 'phase-warp', 'phase-flash');

  // Welcome wave from floating Usagi in outer space
  const usagiMoonTop = document.getElementById('usagi-moon-top');
  const usagiMoonWhisper = document.getElementById('usagi-moon-whisper');
  setUsagiState(usagiMoonTop, 'waving');
  showUsagiWhisper(usagiMoonWhisper, 'Yay!! Under the moon together!', 3600);
  window.setTimeout(() => {
    setUsagiState(usagiMoonTop, 'floating');
  }, 2200);

  state.isTransitioning = false;

  // Schedule automatic transition into "Wait... there's more!" after comfortable reading time
  scheduleMoonSurpriseTeaser();
}

let moonPopulated = false;
let teaserAutoTimer = null;
let finalSequenceRunId = 0;

function clearTeaserAutoTimer() {
  if (teaserAutoTimer) {
    window.clearTimeout(teaserAutoTimer);
    teaserAutoTimer = null;
  }
}

function scheduleMoonSurpriseTeaser() {
  clearTeaserAutoTimer();
  const moonYesStage = document.getElementById('moon-yes-stage');
  const moonTeaser = document.getElementById('moon-teaser');
  if (moonYesStage) moonYesStage.classList.remove('is-fading-out');
  if (moonTeaser) {
    moonTeaser.hidden = true;
    moonTeaser.classList.remove('is-visible');
  }

  // Give plenty of relaxed time to read the YES message (18s), or visitor can tap CONTINUE anytime
  teaserAutoTimer = window.setTimeout(() => {
    if (state.currentScene === 'moon' && !state.isTransitioning) {
      runWaitTheresMoreAndFinalSequence();
    }
  }, 18000);
}

function populateMoonYesMessage() {
  if (moonPopulated) return;
  moonPopulated = true;

  const data = STORY_CONFIG.yesMessage;
  const headlineEl = document.getElementById('moon-yes-headline');
  const paragraphsWrap = document.getElementById('moon-letter-paragraphs');

  if (headlineEl) {
    headlineEl.textContent = data.headline;
  }

  if (paragraphsWrap) {
    paragraphsWrap.innerHTML = '';
    data.paragraphs.forEach((item) => {
      const p = document.createElement('p');
      p.textContent = item.text;
      if (item.style === 'highlight') {
        p.className = 'yes-highlight-line';
      } else if (item.style === 'closing') {
        p.className = 'yes-closing-line';
      }
      paragraphsWrap.appendChild(p);
    });
  }

  bindInteractiveUsagi('usagi-moon-top', 'usagi-moon-whisper', 'floating', 'excited', [
    'Make a wish on the falling stars!',
    'So happy right now!',
  ]);

  const btnMoonNext = document.getElementById('btn-moon-next');
  if (btnMoonNext) {
    btnMoonNext.addEventListener('click', () => {
      if (state.isTransitioning) return;
      clearTeaserAutoTimer();
      runWaitTheresMoreAndFinalSequence();
    });
  }

  const moonOrbWrap = document.getElementById('moon-orb-wrap');
  if (moonOrbWrap && !prefersReducedMotion) {
    window.addEventListener(
      'scroll',
      () => {
        if (state.currentScene !== 'moon') return;
        const offset = Math.min(window.scrollY * 0.14, 60);
        moonOrbWrap.style.transform = `translateY(${offset}px)`;
      },
      { passive: true }
    );
  }
}

/* ==========================================================================
   12. FLOATING FLOWER PETALS CANVAS ENGINE (For "A Flower For You")
   ========================================================================== */
const petalsEngine = (() => {
  const canvas = document.getElementById('petals-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  if (!canvas || !ctx) {
    return { start: () => {}, stop: () => {} };
  }

  let running = false;
  let rafId = null;
  let width = 0;
  let height = 0;
  const petals = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth || window.innerWidth;
    height = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnPetal(randomY = false) {
    const palette = ['#f6bfd0', '#e99cb3', '#f9dde5', '#d5c1ee', '#f5d7b2'];
    petals.push({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -18,
      vx: (Math.random() - 0.35) * 0.85,
      vy: Math.random() * 0.85 + 0.55,
      rx: Math.random() * 4.5 + 3.2,
      ry: Math.random() * 2.4 + 1.8,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.035,
      swayPhase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.38 + 0.52,
      color: palette[Math.floor(Math.random() * palette.length)],
    });
  }

  function loop() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    const maxCount = width < 640 ? 22 : 34;
    if (petals.length < maxCount && Math.random() < 0.16) {
      spawnPetal(false);
    }

    for (let i = petals.length - 1; i >= 0; i -= 1) {
      const p = petals[i];
      p.swayPhase += 0.025;
      p.x += p.vx + Math.sin(p.swayPhase) * 0.45;
      p.y += p.vy;
      p.rot += p.vrot;

      if (p.y > height + 24) {
        petals.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (prefersReducedMotion) return;
    resize();
    petals.length = 0;
    for (let i = 0; i < 12; i += 1) spawnPetal(true);
    running = true;
    loop();
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    ctx.clearRect(0, 0, width, height);
    petals.length = 0;
  }

  window.addEventListener('resize', () => {
    if (running) resize();
  });

  return { start, stop };
})();

/* ==========================================================================
   13. CINEMATIC PYROTECHNIC FIREWORKS FINALE — "I LOVE YOU YANA"
   Real ascending firework shells, luminous golden & warm-white star-shell
   lettering, drifting backlit atmospheric smoke, falling ember trails,
   surrounding framing bursts & water reflections — optimized for 60fps mobile.
   ========================================================================== */
const fireworksEngine = (() => {
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const finaleEl = document.getElementById('scene-finale');
  if (!canvas || !ctx) {
    return {
      start: () => {},
      stop: () => {},
      launchSalvo: () => {},
      revealLoveText: () => {},
      beginGentleFade: () => {},
    };
  }

  const AMBIENT_PALETTE = [
    { hex: '#ffd984', sprite: 'gold' },     // champagne gold
    { hex: '#fff4d6', sprite: 'warmWhite' },// warm pearl white
    { hex: '#f8b4cb', sprite: 'rose' },     // romantic rose-gold pink
    { hex: '#f2b866', sprite: 'amber' },    // deep brocade gold
    { hex: '#9eddf8', sprite: 'sky' },      // delicate moonlit cyan
  ];

  const LETTER_PALETTE = [
    { hex: '#fffef9', sprite: 'warmWhite' },
    { hex: '#fff4d2', sprite: 'warmWhite' },
    { hex: '#ffe294', sprite: 'gold' },
    { hex: '#f7c862', sprite: 'gold' },
    { hex: '#eeb24c', sprite: 'amber' },
  ];

  // Pre-rendered offscreen glow & smoke sprites for buttery 60fps performance without shadowBlur
  function makeRadialSprite(size, stops) {
    const c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    const sctx = c.getContext('2d');
    if (!sctx) return c;
    const half = size / 2;
    const g = sctx.createRadialGradient(half, half, 0, half, half, half);
    stops.forEach(([offset, color]) => g.addColorStop(offset, color));
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, size, size);
    return c;
  }

  const SPRITES = {
    warmWhite: makeRadialSprite(40, [
      [0, 'rgba(255, 255, 252, 1)'],
      [0.22, 'rgba(255, 246, 220, 0.85)'],
      [0.52, 'rgba(255, 218, 134, 0.28)'],
      [1, 'rgba(255, 198, 92, 0)'],
    ]),
    gold: makeRadialSprite(40, [
      [0, 'rgba(255, 250, 226, 1)'],
      [0.24, 'rgba(255, 215, 114, 0.84)'],
      [0.56, 'rgba(238, 168, 62, 0.28)'],
      [1, 'rgba(210, 128, 36, 0)'],
    ]),
    amber: makeRadialSprite(40, [
      [0, 'rgba(255, 242, 200, 0.96)'],
      [0.28, 'rgba(246, 184, 78, 0.78)'],
      [0.6, 'rgba(214, 126, 44, 0.22)'],
      [1, 'rgba(180, 92, 24, 0)'],
    ]),
    rose: makeRadialSprite(40, [
      [0, 'rgba(255, 246, 250, 0.98)'],
      [0.26, 'rgba(248, 178, 202, 0.78)'],
      [0.58, 'rgba(218, 124, 158, 0.22)'],
      [1, 'rgba(184, 86, 126, 0)'],
    ]),
    sky: makeRadialSprite(40, [
      [0, 'rgba(248, 253, 255, 0.96)'],
      [0.26, 'rgba(156, 224, 252, 0.72)'],
      [0.58, 'rgba(92, 166, 232, 0.2)'],
      [1, 'rgba(62, 122, 198, 0)'],
    ]),
    smokeCool: makeRadialSprite(84, [
      [0, 'rgba(148, 166, 210, 0.16)'],
      [0.45, 'rgba(116, 134, 178, 0.085)'],
      [0.78, 'rgba(84, 98, 138, 0.025)'],
      [1, 'rgba(60, 72, 108, 0)'],
    ]),
    smokeWarm: makeRadialSprite(84, [
      [0, 'rgba(244, 212, 156, 0.19)'],
      [0.42, 'rgba(186, 164, 154, 0.095)'],
      [0.76, 'rgba(118, 118, 146, 0.028)'],
      [1, 'rgba(72, 82, 118, 0)'],
    ]),
  };

  let running = false;
  let rafId = null;
  let width = 0;
  let height = 0;
  let autoLaunchTimer = null;
  let glowStrength = 0.12;
  let activeGlowColor = '#fbd988';
  let textFadeState = 'hidden'; // 'hidden' | 'launching' | 'holding' | 'fading'

  const rockets = [];
  const sparks = [];
  const embers = [];
  const flashes = [];
  const smokePuffs = [];
  const reflections = [];
  const textSparks = [];
  const pendingTimers = [];

  function scheduleTimer(fn, delayMs) {
    const id = window.setTimeout(() => {
      const idx = pendingTimers.indexOf(id);
      if (idx !== -1) pendingTimers.splice(idx, 1);
      if (running) fn();
    }, delayMs);
    pendingTimers.push(id);
    return id;
  }

  function clearPendingTimers() {
    while (pendingTimers.length > 0) {
      window.clearTimeout(pendingTimers.pop());
    }
  }

  function getHorizonY() {
    const vistaH = Math.min(height * (width >= 760 ? 0.46 : 0.44), width >= 760 ? 360 : 330);
    return height - vistaH * 0.58;
  }

  function resize() {
    const isMobile = window.innerWidth < 640;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.75 : 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function pulseBacklight(color, intensity = 0.34) {
    activeGlowColor = color;
    glowStrength = Math.max(glowStrength, intensity);
    if (finaleEl) {
      finaleEl.style.setProperty('--fw-glow-color', activeGlowColor);
      finaleEl.style.setProperty('--fw-glow-alpha', glowStrength.toFixed(3));
    }
  }

  function addWaterReflection(x, color, radius = 92) {
    if (reflections.length > 18) reflections.shift();
    reflections.push({
      x,
      color,
      radius,
      alpha: 0.44,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function spawnSmoke(x, y, radius = 44, warm = true, alpha = 0.58) {
    const maxSmoke = width < 640 ? 24 : 38;
    if (smokePuffs.length >= maxSmoke) smokePuffs.shift();
    smokePuffs.push({
      x: x + (Math.random() - 0.5) * 14,
      y: y + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.38) * 0.22, // Subtle night breeze drift
      vy: -(Math.random() * 0.14 + 0.04),
      radius: radius * (0.75 + Math.random() * 0.45),
      grow: 0.26 + Math.random() * 0.22,
      alpha,
      decay: 0.0024 + Math.random() * 0.0014,
      warm,
    });
  }

  function spawnEmber(x, y, color = '#ffe294', vx = 0, vy = 0.35) {
    const maxEmbers = width < 640 ? 110 : 210;
    if (embers.length >= maxEmbers) return;
    embers.push({
      x,
      y,
      px: x,
      py: y,
      vx: vx + (Math.random() - 0.5) * 0.35,
      vy: vy + Math.random() * 0.32,
      alpha: 0.82 + Math.random() * 0.18,
      decay: 0.018 + Math.random() * 0.016,
      size: 0.9 + Math.random() * 0.75,
      color,
    });
  }

  function launchRocket(targetX, targetY, scale = 1, paletteEntry = null, letterPayload = null) {
    const pick =
      paletteEntry || AMBIENT_PALETTE[Math.floor(Math.random() * AMBIENT_PALETTE.length)];
    const launchY = getHorizonY();
    const startX = letterPayload
      ? targetX + (Math.random() - 0.5) * 34
      : targetX + (Math.random() - 0.5) * 86;

    const flightFrames = letterPayload
      ? Math.round(30 + Math.random() * 8)
      : Math.round(34 + Math.random() * 14);

    rockets.push({
      startX,
      startY: launchY,
      x: startX,
      y: launchY,
      tx: targetX,
      ty: targetY,
      curveX: (Math.random() - 0.5) * (letterPayload ? 18 : 42),
      frame: 0,
      duration: flightFrames,
      color: pick.hex,
      sprite: pick.sprite,
      scale,
      trail: [],
      letterPayload,
    });
  }

  function explodeFirework(x, y, primaryColor, spriteKey = 'gold', scale = 1) {
    const secondary = AMBIENT_PALETTE[Math.floor(Math.random() * AMBIENT_PALETTE.length)];
    const baseCount = width < 640 ? 44 : 68;
    const count = Math.floor(baseCount * scale);
    const isWillow = Math.random() < 0.45;

    pulseBacklight(primaryColor, Math.min(0.42, 0.2 + scale * 0.11));
    addWaterReflection(x, primaryColor, 82 * scale);

    // Bright pyrotechnic detonation flash
    flashes.push({
      x,
      y,
      radius: 12 * scale,
      maxRadius: 72 * scale,
      alpha: 0.82,
      sprite: spriteKey,
    });

    // Atmospheric backlit smoke clouds expanding from burst
    spawnSmoke(x, y, 42 * scale, true, 0.54);
    spawnSmoke(x + (Math.random() - 0.5) * 26, y - 6, 36 * scale, false, 0.42);

    for (let i = 0; i < count; i += 1) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.14;
      const speed = (Math.random() * 3.1 + 1.25) * scale;
      const useSec = i % 4 === 0;
      sparks.push({
        x,
        y,
        px: x,
        py: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: isWillow ? Math.random() * 0.0075 + 0.0058 : Math.random() * 0.0105 + 0.008,
        gravity: isWillow ? 0.044 : 0.028,
        drag: isWillow ? 0.968 : 0.974,
        size: Math.random() * 1.85 + 1.05,
        color: useSec ? secondary.hex : primaryColor,
        sprite: useSec ? secondary.sprite : spriteKey,
        twinkle: Math.random() * Math.PI * 2,
        shedsEmbers: isWillow && i % 3 === 0,
      });
    }

    // Incandescent warm-white inner star core
    const coreCount = Math.floor(16 * scale);
    for (let i = 0; i < coreCount; i += 1) {
      const angle = (Math.PI * 2 * i) / coreCount;
      const speed = (Math.random() * 1.25 + 0.5) * scale;
      sparks.push({
        x,
        y,
        px: x,
        py: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: 0.016,
        gravity: 0.022,
        drag: 0.96,
        size: 1.5,
        color: '#fffdf7',
        sprite: 'warmWhite',
        twinkle: Math.random() * Math.PI * 2,
        shedsEmbers: false,
      });
    }
  }

  function detonateLetterShell(cx, cy, payload) {
    const isHero = payload.isHero;
    pulseBacklight('#ffd984', isHero ? 0.44 : 0.34);
    addWaterReflection(cx, '#ffd984', isHero ? 128 : 96);

    // Bright golden-white sky flash at shell center
    flashes.push({
      x: cx,
      y: cy,
      radius: 16,
      maxRadius: isHero ? 92 : 70,
      alpha: 0.92,
      sprite: 'warmWhite',
    });

    // Warm backlit atmospheric smoke cloud right behind the newly ignited letters
    spawnSmoke(cx, cy, isHero ? 56 : 44, true, 0.64);
    spawnSmoke(cx + (Math.random() - 0.5) * 28, cy + 6, isHero ? 42 : 34, false, 0.42);

    // Radiating golden pyrotechnic blast sparks around the detonation point
    const blastCount = width < 640 ? (isHero ? 18 : 13) : isHero ? 26 : 18;
    for (let i = 0; i < blastCount; i += 1) {
      const angle = (Math.PI * 2 * i) / blastCount + (Math.random() - 0.5) * 0.25;
      const speed = (Math.random() * 2.2 + 0.9) * (isHero ? 1.15 : 0.92);
      sparks.push({
        x: cx,
        y: cy,
        px: cx,
        py: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 0.95,
        decay: 0.018 + Math.random() * 0.012,
        gravity: 0.032,
        drag: 0.955,
        size: 1.35 + Math.random() * 0.7,
        color: i % 2 === 0 ? '#fff6dc' : '#ffd272',
        sprite: i % 2 === 0 ? 'warmWhite' : 'gold',
        twinkle: Math.random() * Math.PI * 2,
        shedsEmbers: i % 3 === 0,
      });
    }

    // Spawn the golden & warm-white star-shell particles that bloom into the letterform
    const sparkSizeBase = width < 480 ? 1.45 : width < 760 ? 1.7 : 2.0;
    for (let i = 0; i < payload.points.length; i += 1) {
      const pt = payload.points[i];
      const pick = LETTER_PALETTE[Math.floor(Math.random() * LETTER_PALETTE.length)];
      const dx = pt.tx - cx;
      const dy = pt.ty - cy;
      // Start near detonation core and expand naturally into exact glyph coordinates
      const startSpread = 0.08 + Math.random() * 0.08;
      textSparks.push({
        x: cx + dx * startSpread + (Math.random() - 0.5) * 4,
        y: cy + dy * startSpread + (Math.random() - 0.5) * 4,
        px: cx,
        py: cy,
        tx: pt.tx + (Math.random() - 0.5) * 1.15,
        ty: pt.ty + (Math.random() - 0.5) * 1.15,
        vx: (Math.random() - 0.5) * 0.26,
        vy: Math.random() * 0.18 + 0.06,
        ease: 0.085 + Math.random() * 0.038,
        size: sparkSizeBase * (isHero ? 1.12 : 0.98) * (0.85 + Math.random() * 0.38),
        color: pick.hex,
        sprite: pick.sprite,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.2,
        age: 0,
        fadeRate: 0.0022 + Math.random() * 0.0024,
        isHero,
      });
    }
  }

  // Sample crisp individual word/letter shells for "I LOVE YOU" (line 1) & "YANA" (line 2)
  function buildMessageShellPlan() {
    const off = document.createElement('canvas');
    const offCtx = off.getContext('2d');
    if (!offCtx) return [];

    const horizonY = getHorizonY();
    const topSafe = width < 640 ? 64 : 74;
    const availableSkyH = Math.max(170, horizonY - topSafe - 24);
    const maxLine1W = Math.min(width * 0.88, 820);
    const maxLine2W = Math.min(width * 0.78, 660);

    // Measure text with crisp manual character tracking for unmistakable sky-letter legibility
    function measureTracked(text, fontPx, tracking) {
      offCtx.font = `700 ${fontPx}px "Plus Jakarta Sans", -apple-system, sans-serif`;
      let total = 0;
      for (let i = 0; i < text.length; i += 1) {
        total += offCtx.measureText(text[i]).width;
        if (i < text.length - 1) total += tracking;
      }
      return total;
    }

    function fitFontSize(text, targetW, minPx, maxPx, trackRatio) {
      let size = maxPx;
      while (size > minPx) {
        const w = measureTracked(text, size, size * trackRatio);
        if (w <= targetW) break;
        size -= 2;
      }
      return size;
    }

    const line1Text = 'I LOVE YOU';
    const line2Text = 'YANA';
    const trackRatio1 = 0.09;
    const trackRatio2 = 0.22;

    const maxFromH1 = Math.floor(availableSkyH * 0.31);
    const fontSize1 = fitFontSize(line1Text, maxLine1W, 24, Math.min(72, maxFromH1), trackRatio1);
    const maxFromH2 = Math.floor(availableSkyH * 0.42);
    const fontSize2 = fitFontSize(
      line2Text,
      maxLine2W,
      Math.round(fontSize1 * 1.12),
      Math.min(92, Math.max(fontSize1 + 10, maxFromH2)),
      trackRatio2
    );

    const lineGap = Math.max(fontSize1 * 0.44, 18);
    const totalBlockH = fontSize1 + lineGap + fontSize2;
    const blockTop = topSafe + Math.max(6, (availableSkyH - totalBlockH) * 0.42);
    const line1Y = blockTop + fontSize1 * 0.5;
    const line2Y = blockTop + fontSize1 + lineGap + fontSize2 * 0.52;

    const step = width < 480 ? 3 : width < 900 ? 3 : 4;

    function sampleSegment(text, startX, centerY, fontPx, tracking, isHero) {
      const segW = Math.ceil(measureTracked(text, fontPx, tracking) + 28);
      const segH = Math.ceil(fontPx * 1.48);
      off.width = Math.max(24, segW);
      off.height = Math.max(24, segH);

      offCtx.clearRect(0, 0, off.width, off.height);
      offCtx.fillStyle = '#ffffff';
      offCtx.textBaseline = 'middle';
      offCtx.textAlign = 'left';
      offCtx.font = `700 ${fontPx}px "Plus Jakarta Sans", -apple-system, sans-serif`;

      let cursorX = 14;
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        offCtx.fillText(ch, cursorX, segH / 2);
        cursorX += offCtx.measureText(ch).width + tracking;
      }

      const data = offCtx.getImageData(0, 0, off.width, off.height).data;
      const points = [];
      const worldLeft = startX - 14;
      const worldTop = centerY - segH / 2;

      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          if (data[(y * off.width + x) * 4 + 3] > 135) {
            points.push({
              tx: worldLeft + x,
              ty: worldTop + y,
            });
          }
        }
      }

      return {
        label: text,
        cx: startX + (segW - 28) * 0.5,
        cy: centerY,
        points,
        isHero,
      };
    }

    const plan = [];

    // Compute exact horizontal x-positions for Wave 1: "I", "LOVE", "YOU"
    const track1 = fontSize1 * trackRatio1;
    const totalW1 = measureTracked(line1Text, fontSize1, track1);
    let cursor1 = (width - totalW1) / 2;
    const line1Parts = [
      { text: 'I', delay: 0 },
      { text: ' ', delay: null },
      { text: 'LOVE', delay: 380 },
      { text: ' ', delay: null },
      { text: 'YOU', delay: 780 },
    ];

    line1Parts.forEach((part) => {
      const w = measureTracked(part.text, fontSize1, track1);
      if (part.delay !== null) {
        const seg = sampleSegment(part.text, cursor1, line1Y, fontSize1, track1, false);
        plan.push({ ...seg, delay: part.delay });
      }
      cursor1 += w + track1;
    });

    // Compute exact horizontal x-positions for Wave 2: "Y", "A", "N", "A"
    const track2 = fontSize2 * trackRatio2;
    const totalW2 = measureTracked(line2Text, fontSize2, track2);
    let cursor2 = (width - totalW2) / 2;
    const yanaDelays = [1460, 1620, 1780, 1940];

    for (let i = 0; i < line2Text.length; i += 1) {
      const ch = line2Text[i];
      const w = measureTracked(ch, fontSize2, track2);
      const seg = sampleSegment(ch, cursor2, line2Y, fontSize2, track2, true);
      plan.push({ ...seg, delay: yanaDelays[i] });
      cursor2 += w + track2;
    }

    return plan;
  }

  function launchFramingFirework(side = 'any', scale = 0.95) {
    const horizonY = getHorizonY();
    let tx;
    if (side === 'left') {
      tx = width * (0.09 + Math.random() * 0.14);
    } else if (side === 'right') {
      tx = width * (0.77 + Math.random() * 0.14);
    } else {
      tx =
        Math.random() < 0.5
          ? width * (0.08 + Math.random() * 0.17)
          : width * (0.75 + Math.random() * 0.17);
    }
    const ty = Math.max(58, Math.min(horizonY - 90, height * (0.12 + Math.random() * 0.26)));
    launchRocket(tx, ty, scale);
  }

  function revealLoveText(instant = false) {
    clearPendingTimers();
    textSparks.length = 0;
    const plan = buildMessageShellPlan();
    if (!plan.length) return;

    if (instant || prefersReducedMotion) {
      textFadeState = 'holding';
      plan.forEach((seg) => {
        const sparkSizeBase = width < 480 ? 1.5 : width < 760 ? 1.75 : 2.05;
        seg.points.forEach((pt) => {
          const pick = LETTER_PALETTE[Math.floor(Math.random() * LETTER_PALETTE.length)];
          textSparks.push({
            x: pt.tx,
            y: pt.ty,
            px: pt.tx,
            py: pt.ty,
            tx: pt.tx,
            ty: pt.ty,
            vx: (Math.random() - 0.5) * 0.2,
            vy: Math.random() * 0.16 + 0.06,
            ease: 0.1,
            size: sparkSizeBase * (seg.isHero ? 1.12 : 0.98),
            color: pick.hex,
            sprite: pick.sprite,
            phase: Math.random() * Math.PI * 2,
            alpha: 1,
            age: 40,
            fadeRate: 0.0022 + Math.random() * 0.002,
            isHero: seg.isHero,
          });
        });
      });
      return;
    }

    textFadeState = 'holding';

    // Launch each letter/word shell sequentially from behind the bay horizon
    plan.forEach((seg) => {
      scheduleTimer(() => {
        launchRocket(
          seg.cx,
          seg.cy,
          seg.isHero ? 1.2 : 1.0,
          { hex: '#ffe394', sprite: 'gold' },
          seg
        );
      }, seg.delay);
    });

    // Celebratory framing fireworks exploding around & behind the message as it blooms
    scheduleTimer(() => launchFramingFirework('left', 1.05), 1120);
    scheduleTimer(() => launchFramingFirework('right', 1.05), 1320);
    scheduleTimer(() => {
      launchFramingFirework('left', 1.22);
      launchFramingFirework('right', 1.22);
    }, 2380);
    scheduleTimer(() => {
      // Soft high-sky golden willow directly behind/above the message
      launchRocket(width * 0.5, Math.max(54, height * 0.12), 1.15, {
        hex: '#ffd984',
        sprite: 'gold',
      });
    }, 3450);
    scheduleTimer(() => launchFramingFirework('any', 1.0), 4750);
  }

  function beginGentleFade() {
    textFadeState = 'fading';
    clearPendingTimers();
    if (autoLaunchTimer) {
      window.clearInterval(autoLaunchTimer);
      autoLaunchTimer = null;
    }
  }

  function launchSalvo(count = 3, scale = 1) {
    for (let i = 0; i < count; i += 1) {
      scheduleTimer(() => {
        const tx = width * (0.14 + Math.random() * 0.72);
        const ty = height * (0.13 + Math.random() * 0.27);
        launchRocket(tx, ty, scale);
      }, i * 320);
    }
  }

  function loop() {
    if (!running) return;

    // Gentle canvas persistence fade for organic luminous firework trails
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
    ctx.fillRect(0, 0, width, height);

    // Gently decay atmospheric rim backlight toward warm starlight baseline
    const baseGlow = textFadeState === 'holding' ? 0.3 : 0.1;
    if (glowStrength > baseGlow) {
      glowStrength = Math.max(baseGlow, glowStrength - 0.0042);
      if (finaleEl) {
        finaleEl.style.setProperty('--fw-glow-alpha', glowStrength.toFixed(3));
      }
    }

    // 1. Atmospheric Backlit Pyrotechnic Smoke Clouds (source-over behind bright sparks)
    ctx.globalCompositeOperation = 'source-over';
    for (let i = smokePuffs.length - 1; i >= 0; i -= 1) {
      const sm = smokePuffs[i];
      sm.x += sm.vx;
      sm.y += sm.vy;
      sm.radius += sm.grow;
      sm.alpha -= sm.decay;

      if (sm.alpha <= 0.01) {
        smokePuffs.splice(i, 1);
        continue;
      }

      const sprite = sm.warm ? SPRITES.smokeWarm : SPRITES.smokeCool;
      const d = sm.radius * 2;
      ctx.globalAlpha = sm.alpha;
      ctx.drawImage(sprite, sm.x - sm.radius, sm.y - sm.radius, d, d);
    }

    // Switch to additive light blending for realistic glowing pyrotechnics
    ctx.globalCompositeOperation = 'lighter';

    // 2. Detonation Sky Flashes
    for (let i = flashes.length - 1; i >= 0; i -= 1) {
      const fl = flashes[i];
      fl.radius += (fl.maxRadius - fl.radius) * 0.24;
      fl.alpha -= 0.065;
      if (fl.alpha <= 0.02) {
        flashes.splice(i, 1);
        continue;
      }
      const sp = SPRITES[fl.sprite] || SPRITES.warmWhite;
      const d = fl.radius * 2;
      ctx.globalAlpha = fl.alpha;
      ctx.drawImage(sp, fl.x - fl.radius, fl.y - fl.radius, d, d);
    }

    // 3. Ascending Firework Shells (Natural Decelerating Arc + Glowing Spark Trail)
    for (let i = rockets.length - 1; i >= 0; i -= 1) {
      const r = rockets[i];
      r.frame += 1;
      const t = Math.min(1, r.frame / r.duration);
      const easeOut = 1 - Math.pow(1 - t, 2.15);

      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 11) r.trail.shift();

      r.x = r.startX + (r.tx - r.startX) * t + Math.sin(t * Math.PI) * r.curveX;
      r.y = r.startY + (r.ty - r.startY) * easeOut;

      // Shed tiny trailing ember sparks & wispy smoke ribbon during ascent
      if (Math.random() < 0.65) {
        spawnEmber(r.x, r.y, '#ffe5a3', (Math.random() - 0.5) * 0.4, 0.45);
      }
      if (r.frame % 6 === 0) {
        spawnSmoke(r.x, r.y + 4, 15, false, 0.22);
      }

      // Luminous tapering comet tail
      for (let k = 1; k < r.trail.length; k += 1) {
        const p0 = r.trail[k - 1];
        const p1 = r.trail[k];
        const frac = k / r.trail.length;
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = frac * 0.78;
        ctx.lineWidth = 0.9 + frac * 1.9;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }

      // Bright ascending shell head glow
      const headSprite = SPRITES[r.sprite] || SPRITES.gold;
      ctx.globalAlpha = 0.95;
      ctx.drawImage(headSprite, r.x - 9, r.y - 9, 18, 18);

      if (t >= 1) {
        if (r.letterPayload) {
          detonateLetterShell(r.tx, r.ty, r.letterPayload);
        } else {
          explodeFirework(r.x, r.y, r.color, r.sprite, r.scale);
        }
        rockets.splice(i, 1);
      }
    }

    // 4. Burst Sparks (Surrounding & Detonation Explosions)
    for (let i = sparks.length - 1; i >= 0; i -= 1) {
      const s = sparks[i];
      s.px = s.x;
      s.py = s.y;
      s.vx *= s.drag;
      s.vy = s.vy * s.drag + s.gravity;
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= s.decay;
      s.twinkle += 0.24;

      if (s.alpha <= 0.015) {
        sparks.splice(i, 1);
        continue;
      }

      if (s.shedsEmbers && s.alpha > 0.35 && Math.random() < 0.16) {
        spawnEmber(s.x, s.y, s.color, s.vx * 0.15, 0.3);
      }

      const flicker = 0.72 + Math.sin(s.twinkle) * 0.28;
      const a = Math.max(0, s.alpha * flicker);

      ctx.strokeStyle = s.color;
      ctx.globalAlpha = a;
      ctx.lineWidth = s.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(s.px, s.py);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();

      // Subtle glowing spark head
      if (a > 0.3) {
        const sp = SPRITES[s.sprite] || SPRITES.gold;
        const r = s.size * 3.1;
        ctx.globalAlpha = a * 0.55;
        ctx.drawImage(sp, s.x - r, s.y - r, r * 2, r * 2);
      }
    }

    // 5. Fine Drifting Golden Micro-Embers (Shed by Rockets & Burning Letter Sparks)
    for (let i = embers.length - 1; i >= 0; i -= 1) {
      const em = embers[i];
      em.px = em.x;
      em.py = em.y;
      em.vx *= 0.985;
      em.vy += 0.028;
      em.x += em.vx;
      em.y += em.vy;
      em.alpha -= em.decay;

      if (em.alpha <= 0.02) {
        embers.splice(i, 1);
        continue;
      }

      ctx.strokeStyle = em.color;
      ctx.globalAlpha = em.alpha * 0.78;
      ctx.lineWidth = em.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(em.px, em.py);
      ctx.lineTo(em.x, em.y);
      ctx.stroke();
    }

    // 6. Shimmering Water Reflections Below Horizon
    const vistaH = Math.min(height * (width >= 760 ? 0.46 : 0.44), width >= 760 ? 360 : 330);
    const waterTop = height - vistaH * 0.6;
    const waterBand = vistaH * 0.34;
    for (let i = reflections.length - 1; i >= 0; i -= 1) {
      const rf = reflections[i];
      rf.phase += 0.08;
      rf.alpha -= 0.0052;
      if (rf.alpha <= 0.01) {
        reflections.splice(i, 1);
        continue;
      }
      ctx.fillStyle = rf.color;
      for (let row = 0; row < 5; row += 1) {
        const ry = waterTop + (row / 5) * waterBand;
        const rw = rf.radius * (0.45 + row * 0.16) * (0.85 + Math.sin(rf.phase + row) * 0.15);
        ctx.globalAlpha = rf.alpha * (1 - row * 0.16) * 0.36;
        ctx.fillRect(rf.x - rw * 0.5, ry, rw, 2.2);
      }
    }

    // 7. Pyrotechnic Sky Lettering — "I LOVE YOU, YANA" (Golden & Warm-White Sparks)
    for (let i = textSparks.length - 1; i >= 0; i -= 1) {
      const ts = textSparks[i];
      ts.age += 1;
      ts.phase += 0.11;
      ts.px = ts.x;
      ts.py = ts.y;

      if (textFadeState === 'holding') {
        ts.x += (ts.tx - ts.x) * ts.ease;
        ts.y += (ts.ty - ts.y) * ts.ease;
        ts.alpha = Math.min(1, ts.alpha + 0.06);

        // Occasional delicate downward-drifting golden embers burning off the sky letters
        if (ts.age > 18 && Math.random() < (width < 640 ? 0.0035 : 0.005)) {
          spawnEmber(ts.x, ts.y, ts.color, (Math.random() - 0.5) * 0.25, 0.38);
        }
      } else if (textFadeState === 'fading') {
        ts.vy += 0.008; // Natural gentle gravity drift as burning stars fade out
        ts.x += ts.vx;
        ts.y += ts.vy;
        ts.alpha -= ts.fadeRate;
        if (ts.alpha <= 0.015) {
          textSparks.splice(i, 1);
          continue;
        }
      }

      // Real firework-star sparkle crackle (golden halo + bright incandescent pinpoint core)
      const shimmer = 0.72 + Math.sin(ts.phase) * 0.22 + (Math.sin(ts.phase * 2.7) > 0.9 ? 0.18 : 0);
      const jitterX = Math.sin(ts.phase * 1.15) * 0.32;
      const jitterY = Math.cos(ts.phase * 1.05) * 0.32;
      const drawX = ts.x + jitterX;
      const drawY = ts.y + jitterY;
      const a = Math.max(0, Math.min(1, ts.alpha * shimmer));

      // During rapid outward burst from detonation center, draw subtle radial spark streak
      if (ts.age < 16) {
        ctx.strokeStyle = ts.color;
        ctx.globalAlpha = a * 0.72;
        ctx.lineWidth = ts.size * 0.9;
        ctx.beginPath();
        ctx.moveTo(ts.px, ts.py);
        ctx.lineTo(drawX, drawY);
        ctx.stroke();
      }

      // Soft golden/warm-white pyrotechnic bloom halo
      const haloSprite = SPRITES[ts.sprite] || SPRITES.gold;
      const haloR = ts.size * (ts.isHero ? 3.9 : 3.4);
      ctx.globalAlpha = a * 0.62;
      ctx.drawImage(haloSprite, drawX - haloR, drawY - haloR, haloR * 2, haloR * 2);

      // Crisp incandescent pinpoint center
      ctx.fillStyle = '#fffef9';
      ctx.globalAlpha = a;
      ctx.beginPath();
      ctx.arc(drawX, drawY, ts.size * 0.62, 0, Math.PI * 2);
      ctx.fill();
    }

    // Keep soft warm-gold shimmer across the calm bay water while "I LOVE YOU, YANA" glows
    if (textFadeState === 'holding' && textSparks.length > 0 && Math.random() < 0.09) {
      addWaterReflection(width * (0.3 + Math.random() * 0.4), '#ffd984', 120);
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    rafId = requestAnimationFrame(loop);
  }

  function startAmbientLoop() {
    if (autoLaunchTimer) window.clearInterval(autoLaunchTimer);
    autoLaunchTimer = window.setInterval(() => {
      if (!running) return;
      if (textFadeState === 'holding') {
        // Keep ambient fireworks framing around the sides so they complement "I LOVE YOU, YANA"
        launchFramingFirework('any', 0.85 + Math.random() * 0.3);
      } else {
        const tx = width * (0.14 + Math.random() * 0.72);
        const ty = height * (0.13 + Math.random() * 0.28);
        launchRocket(tx, ty, 0.88 + Math.random() * 0.34);
      }
    }, 1550);
  }

  function start() {
    clearPendingTimers();
    resize();
    rockets.length = 0;
    sparks.length = 0;
    embers.length = 0;
    flashes.length = 0;
    smokePuffs.length = 0;
    reflections.length = 0;
    textSparks.length = 0;
    textFadeState = 'hidden';
    glowStrength = 0.12;
    if (finaleEl) {
      finaleEl.style.setProperty('--fw-glow-alpha', '0.12');
    }
    ctx.clearRect(0, 0, width, height);
    running = true;
    if (!prefersReducedMotion) {
      loop();
      startAmbientLoop();
    } else {
      revealLoveText(true);
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      textSparks.forEach((ts) => {
        const haloSprite = SPRITES[ts.sprite] || SPRITES.gold;
        const haloR = ts.size * 3.4;
        ctx.globalAlpha = 0.6;
        ctx.drawImage(haloSprite, ts.tx - haloR, ts.ty - haloR, haloR * 2, haloR * 2);
        ctx.fillStyle = '#fffef9';
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(ts.tx, ts.ty, ts.size * 0.62, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  function stop() {
    running = false;
    textFadeState = 'hidden';
    clearPendingTimers();
    if (rafId) cancelAnimationFrame(rafId);
    if (autoLaunchTimer) window.clearInterval(autoLaunchTimer);
    autoLaunchTimer = null;
    rockets.length = 0;
    sparks.length = 0;
    embers.length = 0;
    flashes.length = 0;
    smokePuffs.length = 0;
    reflections.length = 0;
    textSparks.length = 0;
    ctx.clearRect(0, 0, width, height);
  }

  window.addEventListener('resize', () => {
    if (running) {
      const wasHolding = textFadeState === 'holding' && textSparks.length > 0;
      resize();
      if (wasHolding) revealLoveText(true);
    }
  });

  return { start, stop, launchSalvo, revealLoveText, beginGentleFade };
})();

/* ==========================================================================
   14. DIRECTOR: "WAIT... THERE'S MORE!" -> A FLOWER FOR YOU (14.5s) -> FIREWORKS
   ========================================================================== */
function resetFlowerSceneClasses() {
  const flowerScene = scenes.flower;
  if (!flowerScene) return;
  flowerScene.classList.remove(
    'step-offer',
    'step-reach',
    'step-receive',
    'step-admire',
    'step-look-boy',
    'step-sky',
    'phase-admire',
    'phase-zoomout'
  );
}

async function runWaitTheresMoreAndFinalSequence(skipFadeOut = false) {
  finalSequenceRunId += 1;
  const runId = finalSequenceRunId;

  clearTeaserAutoTimer();
  fireworksEngine.stop();
  petalsEngine.stop();
  state.isTransitioning = true;

  const moonYesStage = document.getElementById('moon-yes-stage');
  const moonTeaser = document.getElementById('moon-teaser');
  const flowerScene = scenes.flower;
  const finaleScene = scenes.finale;

  // --- STEP 1: "Wait... there's more!" Transition ---
  if (!skipFadeOut && state.currentScene === 'moon') {
    if (moonYesStage) moonYesStage.classList.add('is-fading-out');
    skyEngine.setMode('moon-bright');
    await wait(950);
  } else {
    if (moonYesStage) moonYesStage.classList.add('is-fading-out');
    await switchScene('moon');
    skyEngine.setMode('moon-bright');
  }
  if (runId !== finalSequenceRunId) return;

  if (moonTeaser) {
    moonTeaser.hidden = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        moonTeaser.classList.add('is-visible');
      });
    });
  }

  await wait(2700);
  if (runId !== finalSequenceRunId) return;

  if (moonTeaser) {
    moonTeaser.classList.remove('is-visible');
  }
  await wait(750);
  if (moonTeaser) moonTeaser.hidden = true;
  if (runId !== finalSequenceRunId) return;

  // --- STEP 2: A FLOWER FOR YOU (14.5 SECONDS — CALM, CONTROLLED & NATURAL) ---
  resetFlowerSceneClasses();
  await switchScene('flower');
  if (runId !== finalSequenceRunId) return;

  // 0.0s – 3.0s: Both stand naturally still under the moon; boy holds bouquet behind back.
  petalsEngine.start();
  await wait(3000);
  if (runId !== finalSequenceRunId) return;

  // 3.0s – 7.0s: Boy slowly brings bouquet forward; girl smoothly reaches out and receives it.
  flowerScene.classList.add('step-offer');

  await wait(1400); // 4.4s: Girl gently begins reaching out to meet the bouquet
  if (runId !== finalSequenceRunId) return;
  flowerScene.classList.add('step-reach');

  await wait(1000); // 5.4s: Synchronized hand-to-bouquet transfer; girl draws bouquet in, boy relaxes arm
  if (runId !== finalSequenceRunId) return;
  flowerScene.classList.remove('step-offer', 'step-reach');
  flowerScene.classList.add('step-receive');

  await wait(1600); // 7.0s
  if (runId !== finalSequenceRunId) return;

  // 7.0s – 11.0s: Girl gently looks down at bouquet (7–9s), then looks warmly toward boy (9–11s).
  // Boy responds with a subtle warm smile and gentle nod. Minimal body motion.
  flowerScene.classList.add('phase-admire', 'step-admire');

  await wait(2000); // 9.0s
  if (runId !== finalSequenceRunId) return;
  flowerScene.classList.remove('step-admire');
  flowerScene.classList.add('step-look-boy');

  await wait(2000); // 11.0s
  if (runId !== finalSequenceRunId) return;

  // 11.0s – 14.5s: Both stand together naturally, look toward the moonlit sky, camera pulls back, Usagi waves.
  flowerScene.classList.remove('step-look-boy');
  flowerScene.classList.add('step-sky', 'phase-zoomout');

  await wait(3500);
  if (runId !== finalSequenceRunId) return;

  // --- STEP 3: SITTING TOGETHER WATCHING "I LOVE YOU" FIREWORKS ---
  petalsEngine.stop();
  finaleScene.classList.remove('show-replay', 'show-usagi', 'gaze-up', 'phase-fadeout', 'is-settled');
  await switchScene('finale');
  if (runId !== finalSequenceRunId) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      finaleScene.classList.add('is-settled');
    });
  });

  fireworksEngine.start();

  // Gradual, cinematic colorful fireworks illuminating the night sky & water reflections
  await wait(550);
  fireworksEngine.launchSalvo(2, 0.95);

  await wait(1800);
  if (runId !== finalSequenceRunId) return;
  fireworksEngine.launchSalvo(3, 1.12);

  await wait(1950);
  if (runId !== finalSequenceRunId) return;
  fireworksEngine.launchSalvo(4, 1.24);

  // Grand "I LOVE YOU YANA" Pyrotechnic Formation in the Deep Navy Sky (Gradual Choreographed Reveal)
  await wait(1650);
  if (runId !== finalSequenceRunId) return;
  fireworksEngine.revealLoveText();
  finaleScene.classList.add('gaze-up');

  // Usagi gently appears near the corner as "YANA" bursts beneath "I LOVE YOU"
  await wait(2450);
  if (runId !== finalSequenceRunId) return;
  finaleScene.classList.add('show-usagi');

  // Hold the glowing "I LOVE YOU YANA" fireworks clearly readable alongside framing bursts (~6.2s after full bloom)
  await wait(6200);
  if (runId !== finalSequenceRunId) return;

  // Allow golden particles to drift & fade naturally into the peaceful night sky
  fireworksEngine.beginGentleFade();

  // Smooth cinematic fade-out after the final fireworks naturally dissolve
  await wait(2800);
  if (runId !== finalSequenceRunId) return;
  finaleScene.classList.add('phase-fadeout');

  await wait(2200);
  if (runId !== finalSequenceRunId) return;
  finaleScene.classList.add('show-replay');

  state.isTransitioning = false;
}

/* ==========================================================================
   15. NO ENDING — CALM, RESPECTFUL MESSAGE (NO PORTAL, NO MOON ACCESS)
   ========================================================================== */
async function runNoEndingSequence() {
  state.isTransitioning = true;
  state.yesUnlocked = false;
  clearTeaserAutoTimer();

  const usagiQ = document.getElementById('usagi-question');
  const usagiNo = document.getElementById('usagi-no');
  const noParagraphsWrap = document.getElementById('no-message-paragraphs');
  const noCardStage = document.querySelector('.no-card-stage');
  const noClosedState = document.getElementById('no-closed-state');

  if (noParagraphsWrap) {
    noParagraphsWrap.innerHTML = '';
    STORY_CONFIG.noParagraphs.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      noParagraphsWrap.appendChild(p);
    });
  }

  if (noCardStage) noCardStage.hidden = false;
  if (noClosedState) noClosedState.hidden = true;

  // 1. Usagi reacts with gentle surprise
  setUsagiState(usagiQ, 'surprised');
  await wait(650);

  // 2. Calm background & dim stars, show heartfelt message box
  await switchScene('no');
  skyEngine.setMode('no');

  // 3. Usagi settles into sitting pose beside the message box
  setUsagiState(usagiNo, 'surprised');
  await wait(700);
  setUsagiState(usagiNo, 'sitting');

  state.isTransitioning = false;
}

function initEndingControls() {
  const btnCloseBook = document.getElementById('btn-close-book');
  const btnReopenCover = document.getElementById('btn-reopen-cover');
  const btnReplayFinale = document.getElementById('btn-replay-finale');
  const noCardStage = document.querySelector('.no-card-stage');
  const noClosedState = document.getElementById('no-closed-state');

  if (btnCloseBook) {
    btnCloseBook.addEventListener('click', () => {
      if (noCardStage) noCardStage.hidden = true;
      if (noClosedState) noClosedState.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnReopenCover) {
    btnReopenCover.addEventListener('click', async () => {
      if (state.isTransitioning) return;
      state.isTransitioning = true;
      state.storyIndex = 0;
      await switchScene('cover');
      if (noCardStage) noCardStage.hidden = false;
      if (noClosedState) noClosedState.hidden = true;
      state.isTransitioning = false;
    });
  }

  if (btnReplayFinale) {
    btnReplayFinale.addEventListener('click', () => {
      if (state.isTransitioning) return;
      runWaitTheresMoreAndFinalSequence(true);
    });
  }

  bindInteractiveUsagi('usagi-finale', null, 'waving', 'excited', []);
}

/* ==========================================================================
   16. INITIALIZE EXPERIENCE
   ========================================================================== */
initCoverScene();
initStoryScene();
initQuestionScene();
initEndingControls();
