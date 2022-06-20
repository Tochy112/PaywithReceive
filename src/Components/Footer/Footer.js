import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      {/*social media links and icons gotten from react-icons*/}
      <div className="leoo">
        <a href="" target="_blank" rel="noreferer">
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/paywithreceive"
          target="_blank"
          rel="noreferer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/paywithReceive"
          target="_blank"
          rel="noreferer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.instagram.com/paywithreceive/"
          target="_blank"
          rel="noreferer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="easypayments.receive@gmail.com"
          target="_blank"
          rel="noreferer"
        >
          <AiTwotoneMail />
        </a>
      </div>
      <div className="copyright">
        <small>Copyright &copy;2022 - StartUp22 All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
