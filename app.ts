const googleTTS = require('google-tts-api');
const fs = require('fs');

googleTTS
    .getAudioBase64('Hi guys this is pikat lmao', {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000,
    })
    .then((base64Audio) => {

        const audioBuffer = Buffer.from(base64Audio, 'base64');

        fs.writeFile('output.mp3', audioBuffer, (err) => {
            if (err) {
                console.error('Error while writing MP3 file', err);
            } else {
                console.log('MP3 file created : output.mp3');
            }
        });
    })
    .catch(console.error);