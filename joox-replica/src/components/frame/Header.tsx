import React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header>
      <div className="hamburger">
        <i className="fa fa-bars"></i>
      </div>
      <div className="logo-wrap">
        <span className="logo"></span>
      </div>
      <div className="form-wrap">
        <form>
          <input
            className="form-expand"
            type="text"
            placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์"
            autoComplete="off"
          />
        </form>
      </div>
      <div className="btn-download-wrap">
        <button className="btn btn-round btn-green btn-download">
          โหลดแอป JOOX บนพีซี <i className="fa fa-download"></i>
        </button>
      </div>
      <div className="btn-wrap">
        <form action="/login">
          <button className="btn btn-round btn-silhouette btn-login">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
      <div className="btn-wrap">
        <form action="/register">
          <button className="btn btn-round btn-silhouette bton-register">
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
