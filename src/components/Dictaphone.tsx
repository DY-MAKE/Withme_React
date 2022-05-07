import React, { useEffect, useMemo } from 'react';
import SpeechRecognition, { SpeechRecognitionOptions, useSpeechRecognition } from 'react-speech-recognition';

// TODO: 브라우져 기본 제공 STT API가 타입 문제가 있어서 (useSpeechRecognition TODO 참조), 외부 라이브러리 사용하려 함
// 내부적으로는 브라우져 기본 제공 STT 사용
// 한국어 처리에 약간 문제가 있어 보임
// commands 안에 command 부분을 string[] 형태로 주는 예제가 있는데 영어로는 작동하지만 한국어로는 작동이 안되는 이슈 있음
// 외부 라이브러리로 STT를 해결할지 useSpeechRecognition을 살려서 직접 해결 할지 선택 필요
const Dictaphone = () => {
    const commands: SpeechRecognitionOptions['commands'] = useMemo(
        () => [
            {
                command: '위드미 *',
                callback: (cmd: string) => console.log('위드미', cmd),
            },
        ],
        [],
    );
    const { transcript, interimTranscript, resetTranscript, listening } = useSpeechRecognition({ commands });

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    useEffect(() => {
        // if (!listening) {
        //     console.log('trying restart stt');
        //     SpeechRecognition.startListening({ continuous: true, language: 'ko' });
        // }
    }, [listening]);

    return (
        <div>
            image.png
            <div>status: {`${listening}`}</div>
            <button
                type="button"
                onClick={() => {
                    SpeechRecognition.startListening({ continuous: false, language: 'ko' });
                }}
            >
                Start
            </button>
            <button
                type="button"
                onClick={() => {
                    SpeechRecognition.stopListening();
                }}
            >
                Stop
            </button>
            <button
                type="button"
                onClick={() => {
                    resetTranscript();
                }}
            >
                Reset
            </button>
            <p>{transcript}</p>
            <p>{interimTranscript}</p>
        </div>
    );
    // return <div>disabled</div>;
};
export default Dictaphone;
