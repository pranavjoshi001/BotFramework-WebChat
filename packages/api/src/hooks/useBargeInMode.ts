import type { BargeInMode } from 'botframework-webchat-core';
import useBargeInModeWritable from './internal/useBargeInModeWritable';

/**
 * Hook to get the current barge-in mode.
 *
 * The barge-in mode determines what can interrupt bot audio playback:
 * - undefined: All barge-in allowed (both speech and DTMF)
 * - 'speech': Only speech can interrupt the bot
 * - 'dtmf': Only DTMF (keypad) can interrupt the bot
 * - 'none': Non-interruptible audio, nothing can interrupt
 */
export default function useBargeInMode(): readonly [BargeInMode | undefined] {
  return Object.freeze([useBargeInModeWritable()[0]]);
}
