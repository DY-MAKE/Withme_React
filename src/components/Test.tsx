import useCamera from '@hooks/useCamera';
import useEffectOnce from '@hooks/useEffectOnce';
import React, { useCallback } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Test: React.FC = () => {
    // const { CameraView, captureImage } = useCamera();
    // const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // const capture = useCallback(() => {
    //     const imageData = captureImage();
    //     const a = document.createElement('a');

    //     a.href = imageData;
    //     a.download = 'testimage.jpeg';
    //     a.click();
    // }, [captureImage]);

    // useEffectOnce(() => {
    //     console.log('browse support stt', browserSupportsSpeechRecognition);
    //     if (!browserSupportsSpeechRecognition) return;

    //     SpeechRecognition.startListening({ continuous: true });
    // });

    // return (
    //     <div>
    //         <div>listening: {`${listening}`}</div>
    //         <div>{transcript}</div>
    //         {/* <button type="button" onClick={capture}>
    //             capture
    //         </button> */}
    //         {/* <CameraView /> */}
    //     </div>
    // );
    return <div>disabled</div>;
};

export default Test;
