import { v4 as uuidv4 } from 'uuid';

import { type SsmlOptions, genSSML } from './genSSML';

const API =
  'https://southeastasia.api.speech.microsoft.com/accfreetrial/texttospeech/acc/v3.0-beta1/vcg/speak';

export const postMicrosoftSpeech = (text: string, options: SsmlOptions): [any, any] => {
  const data = JSON.stringify({
    offsetInPlainText: 0,
    properties: {
      SpeakTriggerSource: 'AccTuningPagePlayButton',
    },
    ssml: genSSML(text, options),
    ttsAudioFormat: 'audio-24khz-160kbitrate-mono-mp3',
  });

  const DEFAULT_HEADERS = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'authority': 'southeastasia.api.speech.microsoft.com',
    'content-type': 'application/json',
    'customvoiceconnectionid': uuidv4(),
    'origin': 'https://speech.microsoft.com',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
  };

  return [
    API,
    {
      body: data,
      headers: DEFAULT_HEADERS,
      method: 'POST',
      responseType: 'arraybuffer',
    },
  ];
};
