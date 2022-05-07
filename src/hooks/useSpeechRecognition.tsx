import { useEffect, useState } from 'react';

import useEffectOnce from './useEffectOnce';

const SpeechRecognition =
    (window as any).SpeechRecognition || ((window as any).webkitSpeechRecognition as SpeechRecognitionAlternative);

// TODO: STT 기능 제공하는 훅
// MDN문서 보고 개발중이였는데, SpeechRecognition 타입을 찾을 수가 없어서 문제임
// 5번라인 SpeechRecognition을 선언하고 new SpeechRecognition() 을 사용해서 STT 객체 생성, 추가사항은 MDN참조
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

const useSpeechRecognition = () => {
    const [speechRecognition, setSpeechRecognition] = useState<any>();

    useEffectOnce(() => {
        setSpeechRecognition(new SpeechRecognition());
    });

    useEffect(() => {
        if (!speechRecognition) return;

        try {
            console.log(speechRecognition);
        } catch (err) {
            console.log(err);
        }
    }, [speechRecognition]);
};

export default useSpeechRecognition;
