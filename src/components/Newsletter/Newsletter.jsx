import React from "react";
import "./Newsletter.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Newsletter = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>CADASTRE-SE PARA RECEBER NOTÍCIAS SOBRE ALCLISBOA. E TORNE-SE VIP:</span>
        <div className="mail">
          <input type="text" placeholder="Insira seu e-mail..." />
          <button>INSCREVA-SE</button>
        </div>
        <div className="icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <GoogleIcon />
            <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;