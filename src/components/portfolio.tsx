import { useState } from "react";

function Portfolio() {
  const [tab, setTab] = useState("project1");
  const handleTabClick = (value: string) => {
    setTab((prev) => (prev === value ? "" : value));
  };

  return (
    <section className="portfolio-area" id="portfolio">
      <h2>포트폴리오</h2>
      <h4>아래 버튼을 눌러보세요!</h4>

      <div className="tab-buttons">
        <button
          className={tab === "project1" ? "active" : ""}
          onClick={() => handleTabClick("project1")}
        >
          프로젝트 1
        </button>
        <button
          className={tab === "project2" ? "active" : ""}
          onClick={() => handleTabClick("project2")}
        >
          프로젝트 2
        </button>

        <button
          className={tab === "project3" ? "active" : ""}
          onClick={() => handleTabClick("project3")}
        >
          프로젝트 3
        </button>
      </div>

      {tab && (
        <div className="tab-content">
          {tab === "project1" && (
            <>
              <h3>꿈해몽 AI 서비스🌙 </h3>
              <p>
                꿈을 아카이빙하고, 해몽을 도와주는 AI 서비스입니다.<br></br>
                꿈을 자주 꾸는 사람이라 재미로 한번 만들어봤어요! 해몽 결과는
                이미지로 저장 가능해요🙆
              </p>
              <br></br>
              <a
                href="https://ai-creator-git-main-minxuyeos-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="dream-button">꿈 해몽하러 가기</button>
              </a>
            </>
          )}
          {tab === "project2" && (
            <>
              <h3>투두리스트📝</h3>
              <p>
                MERN스택으로 구현한 투두리스트입니다.<br></br>
                개발공부한다고 진행해본 프로젝트인데..쉽진않았지만 재밌게
                진행했어요!
              </p>
              <br></br>
              <a
                href="https://github.com/msmmx/mern"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="dream-button">깃허브로 이동하기</button>
              </a>
            </>
          )}
          {tab === "project3" && (
            <>
              <h3>게시판💬</h3>
              <p>
                MERN스택으로 구현한 게시판입니다.<br></br>
                CRUD기능을 구현해보았어요.
              </p>
              <br></br>
              <a
                href="https://github.com/msmmx/board"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="dream-button">깃허브로 이동하기</button>
              </a>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default Portfolio;
