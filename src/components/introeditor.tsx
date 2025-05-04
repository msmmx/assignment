import { useState, useRef } from "react";

function IntroEditor() {
  // ref에 HTMLInputElement 타입을 명시
  const inputRef = useRef<HTMLInputElement>(null);
  const [intro, setIntro] = useState("");
  const [submittedIntro, setSubmittedIntro] = useState("");

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = () => {
    setSubmittedIntro(intro); //현재 입력값 저장
  };

  return (
    <section className="intro-area">
      <div className="intro-content">
        <h2>한 줄 소개 작성하기</h2>
        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
          <input
            ref={inputRef}
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            placeholder="한 줄 소개를 입력하세요"
            style={{ flex: 1 }}
          />
          <button onClick={handleSubmit}>입력</button>
        </div>

        <button
          onClick={focusInput}
          style={{
            backgroundColor: "transparent",
            border: "2px solid rgb(181, 212, 255)",
            color: "#6ba8ff",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          커서 포커싱
        </button>

        <p>한 줄 소개 : {intro}</p>
        {submittedIntro && (
          <p>
            <strong>입력한 소개글: </strong> {submittedIntro}
          </p>
        )}
      </div>
    </section>
  );
}

export default IntroEditor;

//입력창으로 이동 -> focousinput됨 (커서 포인트)
//한줄소개에는 -> 인트로가 저장한 값 바로 보여주기
