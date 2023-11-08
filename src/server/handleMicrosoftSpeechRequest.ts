import { v4 as uuidv4 } from 'uuid';

import { MICROSOFT_SPPECH_URL } from '../const/api';

export const handleMicrosoftSpeechRequest = async (req: Request) => {
  const DEFAULT_HEADERS = new Headers({
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
  });

  const res = await fetch(MICROSOFT_SPPECH_URL, {
    body: req.body,
    headers: DEFAULT_HEADERS,
    method: 'POST',
    // @ts-ignore
    responseType: 'arraybuffer',
  });

  return new Response(res.body, res);
};
