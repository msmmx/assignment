import { useState, useRef } from "react";

function IntroEditor() {
  // ref에 HTMLInputElement 타입을 명시
  const inputRef = useRef<HTMLInputElement>(null);
  const [intro, setIntro] = useState("");

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className="intro-area">
      <div className="intro-content">
        <input
          ref={inputRef}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          placeholder="한 줄 소개를 입력하세요"
        />

        <button onClick={focusInput}>커서 포커싱</button>

        <p>한 줄 소개 : {intro}</p>
      </div>
    </section>
  );
}

export default IntroEditor;

//입력창으로 이동 -> focousinput됨 (커서 포인트)
//한줄소개에는 -> 인트로가 저장한 값 바로 보여주기
