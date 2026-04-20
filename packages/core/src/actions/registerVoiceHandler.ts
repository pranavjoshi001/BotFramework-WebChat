const VOICE_REGISTER_HANDLER = 'WEB_CHAT/VOICE_REGISTER_HANDLER' as const;

import type { BargeInMode } from './setBargeInMode';

type VoiceHandler = {
  queueAudio: (base64: string, bargeInMode?: BargeInMode) => void;
  stopAllAudio: () => void;
};

type VoiceRegisterHandlerAction = {
  type: typeof VOICE_REGISTER_HANDLER;
  payload: { id: string; voiceHandler: VoiceHandler };
};

function registerVoiceHandler(id: string, voiceHandler: VoiceHandler): VoiceRegisterHandlerAction {
  return {
    type: VOICE_REGISTER_HANDLER,
    payload: { id, voiceHandler }
  };
}

export default registerVoiceHandler;

export { VOICE_REGISTER_HANDLER };

export type { VoiceHandler, VoiceRegisterHandlerAction };
