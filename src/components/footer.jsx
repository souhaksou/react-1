const Footer = () => {
  return (
    <footer className="bg:white p:32">
      <div className="mb:32 flex jc:center ai:center {inline-block;f:20;p:4|8;mx:8;}>a">
        <a>
          <i className="bi bi-facebook fg:#3D5B97"></i>
        </a>
        <a>
          <i className="bi bi-twitter fg:#59ADED"></i>
        </a>
        <a>
          <i className="bi bi-google fg:#DA4D3C"></i>
        </a>
        <a>
          <i className="bi bi-instagram fg:#674A8D"></i>
        </a>
        <a>
          <i className="bi bi-threads fg:black"></i>
        </a>
      </div>
      <p className="t:center">Copyright 2025© App All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
