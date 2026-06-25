const reservationUrl = "https://reservation.moonjang.site";

const classes = [
  {
    title: "1:1 정규 글쓰기",
    desc: "에세이, 자기소개, 블로그 글, 소설, 독서 기록 등 개인의 목적에 맞춰 글쓰기 방향을 잡고 문장을 다듬습니다."
  },
  {
    title: "세계문학 리딩",
    desc: "민음사 세계문학전집 450권 완독을 목표로 함께 읽고, 질문하고, 자기 언어로 작품을 정리합니다."
  },
  {
    title: "원데이 클래스",
    desc: "자서전 쓰기, 필사, 감각 글쓰기, 문장 수집 등 다양한 주제로 가볍게 참여할 수 있는 수업입니다."
  }
];

const platformItems = [
  {
    label: "내 수업",
    status: "운영중",
    desc: "정규수업 예약, 원데이 클래스 신청, 남은 수강권 확인"
  },
  {
    label: "내 글 아카이브",
    status: "준비중",
    desc: "과제 제출, 첨삭 확인, 수정본 보관"
  },
  {
    label: "필사 기록",
    status: "준비중",
    desc: "오늘의 문장 필사, 연속 기록, 나만의 문장 수집"
  },
  {
    label: "자료실",
    status: "준비중",
    desc: "수업자료, 워크북, 읽기 자료 다운로드"
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home">문장학교</a>
        <nav className="nav">
          <a href="#class">수업</a>
          <a href="#platform">플랫폼</a>
          <a href="#reading">세계문학</a>
          <a href="#price">수강료</a>
          <a href={reservationUrl}>예약</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">성인을 위한 글쓰기 학교</p>
          <h1>
            쓰는 사람이 되는 곳,
            <br />
            문장학교
          </h1>
          <p className="hero-text">
            문장학교는 일상에서 시작한 문장을 에세이, 독서 기록,
            자기소개, 소설, 나만의 문집으로 발전시키는 글쓰기 수업 공간입니다.
          </p>
          <div className="actions">
            <a className="button primary" href={reservationUrl}>수업 예약하기</a>
            <a className="button secondary" href="#class">수업 둘러보기</a>
          </div>
        </div>

        <div className="hero-card">
          <span>문장학교 플랫폼</span>
          <h2>수업 · 기록 · 아카이브</h2>
          <p>
            지금은 예약 기능부터 시작하고, 이후 글 제출, 첨삭, 필사,
            수업자료실을 하나씩 연결합니다.
          </p>
        </div>
      </section>

      <section className="section intro">
        <p>
          문장학교는 글을 잘 쓰는 법만 가르치지 않습니다.
          한 사람이 자신의 경험과 감정, 생각을 꾸준히 기록할 수 있도록
          수업과 아카이브를 함께 설계합니다.
        </p>
      </section>

      <section id="class" className="section">
        <div className="section-head">
          <p className="eyebrow">CLASS</p>
          <h2>수업 안내</h2>
          <p>정규수업, 리딩 수업, 원데이 클래스를 통해 각자의 속도로 글을 씁니다.</p>
        </div>
        <div className="grid three">
          {classes.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="section tinted">
        <div className="section-head">
          <p className="eyebrow">PLATFORM</p>
          <h2>문장학교는 플랫폼으로 확장됩니다</h2>
          <p>
            예약 앱에서 시작해, 수강생의 글과 첨삭 기록이 사라지지 않는
            전용 아카이브로 키워갑니다.
          </p>
        </div>
        <div className="grid two">
          {platformItems.map((item) => (
            <article className="card platform-card" key={item.label}>
              <div className="card-top">
                <h3>{item.label}</h3>
                <span>{item.status}</span>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reading" className="section">
        <div className="reading-box">
          <p className="eyebrow">READING PROJECT</p>
          <h2>세계문학 450권 프로젝트</h2>
          <p>
            문장학교의 세계문학 리딩 수업은 민음사 세계문학전집 450권을 함께 읽는
            장기 프로젝트입니다. 혼자 읽기 어려운 고전을 함께 질문하고 낭독하고
            기록하며 자기만의 독서 언어를 만들어 갑니다.
          </p>
        </div>
      </section>

      <section id="price" className="section">
        <div className="section-head">
          <p className="eyebrow">PRICE</p>
          <h2>수강료</h2>
          <p>아래 금액은 테스트 홈페이지 기준이며, 운영 정책에 맞춰 언제든 수정할 수 있습니다.</p>
        </div>

        <div className="grid three">
          <article className="price-card">
            <h3>체험수업</h3>
            <strong>60,000원</strong>
            <p>상담 + 레벨테스트 + 기초 체험</p>
          </article>
          <article className="price-card">
            <h3>정규 1:1 글쓰기</h3>
            <strong>260,000원</strong>
            <p>90분 × 4회 기준</p>
          </article>
          <article className="price-card">
            <h3>원데이 클래스</h3>
            <strong>정규생 월 1회 무료</strong>
            <p>추가 참석 및 일반 신청은 별도 안내</p>
          </article>
        </div>
      </section>

      <section className="section cta">
        <h2>문장학교 수업을 시작해 볼까요?</h2>
        <p>정규수업과 원데이 클래스 신청은 예약 페이지에서 진행됩니다.</p>
        <a className="button primary" href={reservationUrl}>예약 페이지로 이동</a>
      </section>

      <footer className="footer">
        <p>문장학교 · 서울 종로/광화문 글쓰기 수업 공간</p>
      </footer>
    </main>
  );
}
