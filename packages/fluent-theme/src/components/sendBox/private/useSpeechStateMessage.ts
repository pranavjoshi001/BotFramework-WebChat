import { hooks } from 'botframework-webchat';
import { useMemo } from 'react';

const { useBargeInMode, useLocalizer, useVoiceState } = hooks;

export default function useSpeechPlaceholder(): string {
  const [voiceState] = useVoiceState();
  const [bargeInMode] = useBargeInMode();
  const localize = useLocalizer();

  return useMemo(() => {
    switch (voiceState) {
      case 'bot_speaking':
        // Show different messages based on barge-in mode
        switch (bargeInMode) {
          case 'speech':
            // Only speech can interrupt
            return 'speech barge-in only placeholder'; // No localization needed as this is a temporary message for testing

          case 'dtmf':
            // Only DTMF can interrupt
            return 'dtmf barge-in only placeholder'; // No localization needed as this is a temporary message for testing

          case 'none':
            // Non-interruptible
            return 'non-interruptible placeholder'; // No localization needed as this is a temporary message for testing

          default:
            // undefined = all allowed (existing behavior)
            return localize('TEXT_INPUT_SPEECH_BOT_SPEAKING_PLACEHOLDER');
        }

      case 'idle':
        return localize('TEXT_INPUT_SPEECH_IDLE_PLACEHOLDER');

      case 'listening':
      case 'user_speaking':
        return localize('TEXT_INPUT_SPEECH_LISTENING_PLACEHOLDER');

      case 'processing':
        return localize('TEXT_INPUT_SPEECH_PROCESSING_PLACEHOLDER');

      default:
        return localize('TEXT_INPUT_SPEECH_IDLE_PLACEHOLDER');
    }
  }, [voiceState, bargeInMode, localize]);
}
