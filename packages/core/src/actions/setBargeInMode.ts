const VOICE_SET_BARGE_IN_MODE = 'WEB_CHAT/VOICE_SET_BARGE_IN_MODE' as const;

type BargeInMode = 'speech' | 'dtmf' | 'none';

type VoiceSetBargeInModeAction = {
  type: typeof VOICE_SET_BARGE_IN_MODE;
  payload: { bargeInMode: BargeInMode | undefined };
};

function setBargeInMode(bargeInMode: BargeInMode | undefined): VoiceSetBargeInModeAction {
  return {
    type: VOICE_SET_BARGE_IN_MODE,
    payload: { bargeInMode }
  };
}

export default setBargeInMode;

export { VOICE_SET_BARGE_IN_MODE };

export type { BargeInMode, VoiceSetBargeInModeAction };
