import "../styles/footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="header-black"></div>
      <div className="footer-content">
        <div className="socials-ctr">
          <a href="https://www.instagram.com/ljpino95/" target="_blank">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693442901/instagram-logo_aoujxu.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/louis-pino/" target="_blank">
            <img className="linkedin" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693442901/linkedinlogo_bm2946.png" alt="" />
          </a>
          <a href="https://github.com/LouisPino" target="_blank">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693442901/githublogo_mbcxbi.png" alt="" />
          </a>
          <a href="mailto:LJPino95@gmail.com" target="_blank">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693443068/mail-logo_wn7uuv.svg" />
          </a>
        </div>
        <h3 className="here">© Louis Pino 2023</h3>
      </div>
    </footer>
  );
}

export default Footer;
