function Contact() {
  return (
    <section className="contact-area" id="contact">
      <h3 className="contact-title">CONTACT</h3>
      <ul className="contact-list">
        <li>
          <img src="/image/location.png" alt="주소 아이콘" className="icon" />
          <p>
            주소
            <br />
            서울시 관악구
          </p>
        </li>
        <li>
          <img src="/image/phone.png" alt="전화 아이콘" className="icon" />
          <p>
            전화번호
            <br />
            010-7242-9274
          </p>
        </li>
        <li>
          <img src="/image/email.png" alt="이메일 아이콘" className="icon" />
          <p>
            이메일
            <br />
            minseo200113@yonsei.ac.kr
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
