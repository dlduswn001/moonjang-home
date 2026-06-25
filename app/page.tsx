import Image from "next/image";

const reservationUrl = "https://reservation.moonjang.site";

const courseCards = [
  {
    title: "정규 글쓰기 수업",
    desc: "에세이, 자기소개, 소설, 블로그 등 나만의 글을 완성해 가는 시간"
  },
  {
    title: "세계문학 리딩 수업",
    desc: "450권 완독 프로젝트. 함께 읽고, 질문하고, 기록합니다."
  },
  {
    title: "원데이 클래스",
    desc: "자서전 쓰기, 필사, 문장 수집 등 하루 수업으로 만나는 글쓰기"
  }
];

const introItems = [
  {
    icon: "✎",
    title: "쓰는 힘을 기르는 수업",
    desc: "1:1 맞춤 글쓰기 수업으로 당신의 글쓰기 방향을 함께 찾아갑니다."
  },
  {
    icon: "□",
    title: "세계문학 함께 읽기",
    desc: "민음사 세계문학전집 450권 완독을 목표로 함께 읽고 질문합니다."
  },
  {
    icon: "▤",
    title: "기록으로 남기는 시간",
    desc: "필사, 문장 수집, 글 아카이브로 당신의 문장이 쌓입니다."
  }
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logoWrap" href="#home" aria-label="문장학교 홈">
          <Image src="/moonjang-logo.png" alt="문장학교" width={136} height={68} priority />
        </a>

        <nav className="nav">
          <a href="#about">문장학교 소개</a>
          <a href="#classes">수업 안내</a>
          <a href="#reading">세계문학 450</a>
          <a href="#archive">아카이브</a>
          <a href="#materials">자료실</a>
          <a href="#login">로그인</a>
        </nav>

        <a className="reserveTop" href={reservationUrl}>
          수업 예약하기 <span>→</span>
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroLeft">
          <div className="verticalText">
            <span />
            <p>MOONJANG SCHOOL OF WRITING</p>
            <span />
          </div>

          <div className="heroContent">
            <h1>
              쓰는 사람이
              <br />
              되는 곳,
              <br />
              문장학교
            </h1>
            <p>
              당신의 문장을 기다리는 시간
              <br />
              한 문장이 삶을 바꾸는 순간을 함께합니다.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href={reservationUrl}>
                수업 예약하기 <span>→</span>
              </a>
              <a className="ghostButton" href="#classes">
                수업 둘러보기 <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="bookMockup">
            <Image src="/moonjang-logo.png" alt="문장학교 로고" width={220} height={110} />
            <p className="bookSide">당신의 문장을 기다리는 시간</p>
          </div>
        </div>
      </section>

      <section id="about" className="intro">
        <div className="introText">
          <h2>
            문장학교는
            <br />
            글을 계속 쓰는 힘을 기르는 곳입니다.
          </h2>
          <p>
            에세이, 자기소개, 소설, 독서 기록, 나만의 문집까지
            당신의 경험과 생각이 문장이 되고, 기록이 되도록 곁에서 함께합니다.
          </p>
          <a href="#classes">문장학교 소개 보기 <span>→</span></a>
        </div>

        <div className="introGrid">
          {introItems.map((item) => (
            <article className="introItem" key={item.title}>
              <strong>{item.icon}</strong>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="classes" className="classes">
        <div className="sectionHead">
          <h2>수업 안내</h2>
          <a href={reservationUrl}>모든 수업 보기 <span>→</span></a>
        </div>

        <div className="courseGrid">
          {courseCards.map((card, index) => (
            <article className="courseCard" key={card.title}>
              <div className={`courseImage image${index + 1}`} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href={reservationUrl}>자세히 보기 <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="reading" className="reading">
        <div className="readingContent">
          <p>문장학교 프로젝트</p>
          <h2>세계문학 450권</h2>
          <span>함께 읽고, 나의 언어로 다시 써 내려가는 긴 여정</span>
          <a href={reservationUrl}>프로젝트 소개 보기 <span>→</span></a>
        </div>
      </section>

      <section id="archive" className="archive">
        <p>ARCHIVE PLATFORM</p>
        <h2>수강생의 글과 첨삭 기록이 사라지지 않도록</h2>
        <div className="archiveList">
          <span>수업 예약</span>
          <span>과제 제출</span>
          <span>첨삭 기록</span>
          <span>필사 노트</span>
          <span>자료실</span>
          <span>문장학교 문집</span>
        </div>
      </section>

      <section id="materials" className="price">
        <div>
          <p>체험수업</p>
          <strong>60,000원</strong>
        </div>
        <div>
          <p>정규 1:1 글쓰기</p>
          <strong>260,000원</strong>
        </div>
        <div>
          <p>원데이 클래스</p>
          <strong>정규생 월 1회 무료</strong>
        </div>
      </section>

      <section id="login" className="cta">
        <h2>문장학교 수업을 시작해 볼까요?</h2>
        <p>정규수업과 원데이 클래스 신청은 문장학교 예약 페이지에서 진행됩니다.</p>
        <a className="primaryButton" href={reservationUrl}>
          예약 페이지로 이동 <span>→</span>
        </a>
      </section>

      <footer className="footer">
        <p>문장학교 · 서울 종로/광화문 글쓰기 수업 공간</p>
      </footer>
    </main>
  );
}
