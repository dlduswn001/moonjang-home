import Image from "next/image";

const reservationUrl = "https://reservation.moonjang.site";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#home">
          <Image src="/moonjang-logo.png" alt="문장학교" width={138} height={69} priority />
        </a>
        <nav>
          <a href="#about">문장학교 소개</a>
          <a href="#classes">수업 안내</a>
          <a href={reservationUrl}>수업 예약</a>
          <a href="#gallery">갤러리</a>
        </nav>
        <a className="topButton" href={reservationUrl}>수업 예약하기 <span>→</span></a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="vertical">
            <i></i>
            <span>MOONJANG SCHOOL OF WRITING</span>
            <i></i>
          </div>
          <div className="headline">
            <h1>쓰는 사람이<br />되는 곳,<br />문장학교</h1>
            <p>당신의 문장을 기다리는 시간<br />한 문장이 삶을 바꾸는 순간을 함께합니다.</p>
            <div className="heroActions">
              <a className="creamButton" href={reservationUrl}>수업 예약하기 <span>→</span></a>
              <a className="textButton" href="#classes">수업 둘러보기 <span>→</span></a>
            </div>
          </div>
        </div>

        <div className="heroBook">
          <div className="bookScene">
            <div className="shadowLeaf leafOne"></div>
            <div className="shadowLeaf leafTwo"></div>
            <div className="book">
              <div className="bookSpine">당신의 문장을 기다리는 시간</div>
              <Image src="/moonjang-logo.png" alt="문장학교" width={210} height={105} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="aboutCopy">
          <h2>문장학교는<br />글을 계속 쓰는 힘을 기르는 곳입니다.</h2>
          <p>에세이, 자기소개, 소설, 독서 기록, 나만의 문집까지 당신의 경험과 생각이 문장이 되고, 기록이 되도록 곁에서 함께합니다.</p>
          <a href="#classes">문장학교 소개 보기 <span>→</span></a>
        </div>

        <div className="aboutItems">
          <article>
            <div className="icon">✎</div>
            <h3>쓰는 힘을 기르는 수업</h3>
            <p>1:1 맞춤 글쓰기 수업으로 당신의 글쓰기 방향을 함께 찾아갑니다.</p>
          </article>
          <article>
            <div className="icon">▧</div>
            <h3>세계문학 함께 읽기</h3>
            <p>민음사 세계문학전집 450권 완독을 목표로 함께 읽고 질문합니다.</p>
          </article>
          <article>
            <div className="icon">▤</div>
            <h3>기록으로 남기는 시간</h3>
            <p>필사, 문장 수집, 글 아카이브로 당신의 문장이 쌓입니다.</p>
          </article>
        </div>
      </section>

      <section id="classes" className="classes">
        <div className="sectionTitle">
          <h2>수업 안내</h2>
          <a href={reservationUrl}>모든 수업 보기 <span>→</span></a>
        </div>

        <div className="cards">
          <article className="course">
            <div className="photo photoOne"></div>
            <h3>정규 글쓰기 수업</h3>
            <p>에세이, 자기소개, 소설, 블로그 등 나만의 글을 완성해가는 시간</p>
            <a href={reservationUrl}>자세히 보기 <span>→</span></a>
          </article>
          <article className="course">
            <div className="photo photoTwo"></div>
            <h3>세계문학 리딩 수업</h3>
            <p>450권 완독 프로젝트. 함께 읽고, 질문하고, 기록합니다.</p>
            <a href={reservationUrl}>자세히 보기 <span>→</span></a>
          </article>
          <article className="course">
            <div className="photo photoThree"></div>
            <h3>원데이 클래스</h3>
            <p>자서전 쓰기, 필사, 문장 수집 등 하루 수업으로 만나는 글쓰기</p>
            <a href={reservationUrl}>자세히 보기 <span>→</span></a>
          </article>
        </div>
      </section>

      <section id="reading" className="reading">
        <div className="readingText">
          <p>문장학교 프로젝트</p>
          <h2>세계문학 450권</h2>
          <span>함께 읽고, 나의 언어로<br />다시 써 내려가는 긴 여정</span>
          <a href={reservationUrl}>프로젝트 소개 보기 <span>→</span></a>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="sectionTitle">
          <h2>갤러리</h2>
          <a href={reservationUrl}>수업 예약하기 <span>→</span></a>
        </div>
        <div className="galleryGrid">
          <div className="galleryPhoto galleryOne"><span>수업이 이루어지는 공간</span></div>
          <div className="galleryPhoto galleryTwo"><span>함께 읽고 기록하는 시간</span></div>
          <div className="galleryPhoto galleryThree"><span>문장이 쌓이는 자리</span></div>
        </div>
      </section>

      <section className="price">
        <div><p>체험수업</p><strong>60,000원</strong></div>
        <div><p>정규 1:1 글쓰기</p><strong>260,000원</strong></div>
        <div><p>원데이 클래스</p><strong>정규생 월 1회 무료</strong></div>
      </section>

      <section id="reservation" className="cta">
        <h2>문장학교 수업을 시작해 볼까요?</h2>
        <p>정규수업과 원데이 클래스 신청은 문장학교 예약 페이지에서 진행됩니다.</p>
        <a className="redButton" href={reservationUrl}>예약 페이지로 이동 <span>→</span></a>
      </section>

      <footer>문장학교 · 서울 종로/광화문 글쓰기 수업 공간</footer>
    </main>
  );
}
