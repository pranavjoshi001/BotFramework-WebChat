import { setBargeInMode, type BargeInMode } from 'botframework-webchat-core';
import { useCallback } from 'react';
import { useDispatch, useSelector } from './WebChatReduxContext';

/**
 * Internal hook to get and set the barge-in mode.
 *
 * BargeInMode values:
 * - undefined: All barge-in allowed (default, backward compatible)
 * - 'speech': Only speech can interrupt
 * - 'dtmf': Only DTMF can interrupt
 * - 'none': No barge-in allowed
 */
export default function useBargeInModeWritable(): readonly [
  BargeInMode | undefined,
  (bargeInMode: BargeInMode | undefined) => void
] {
  const dispatch = useDispatch();
  const setter = useCallback(
    (bargeInMode: BargeInMode | undefined) => {
      dispatch(setBargeInMode(bargeInMode));
    },
    [dispatch]
  );
  const value = useSelector(({ voice }) => voice.bargeInMode);
  return Object.freeze([value, setter]);
}
