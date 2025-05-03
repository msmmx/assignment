import { useState } from "react";

function Portfolio() {
  const [tab, setTab] = useState("about");
  return (
    <section id="portfolio">
      <h2>포트폴리오</h2>
      <button onClick={() => setTab("project")}>프로젝트</button>
      <button onClick={() => setTab("about")}>소개</button>
      {tab === "about" && <p>안녕하세요! 여민서입니다 </p>}
      {tab === "project" && (
        <ul>
          <li>접근성 지도 서비스</li>
          <li>웹 포트폴리오</li>
        </ul>
      )}
    </section>
  );
}

export default Portfolio;
