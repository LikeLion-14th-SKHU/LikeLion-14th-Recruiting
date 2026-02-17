const Footer = () => {
  return (
    <footer className="w-[1440px] h-[220px] bg-primary-bg flex items-center justify-between px-[120px] mx-auto">
      {/* Contact Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-primary-point2 text-2xl font-bold ml-10">
          Contact
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src="../img/푸터인스타로고.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <span className="text-text-main text-base">@likelion_skhu</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="../img/푸터깃허브로고.png"
              alt="GitHub"
              className="w-6 h-6"
            />
            <span className="text-text-main text-base">
              @LikeLion-14th-SKHU
            </span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div>
        <img src="../img/푸터멋사로고.png" alt="Logo" className="w-auto h-24" />
      </div>

      {/* Credits Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-primary-point2 text-2xl font-bold text-right mr-10">
          Credits
        </h3>
        <div className="flex flex-col gap-1 text-base text-right text-text-main">
          <p>윤현승 이정혁 이다정</p>
          <p className="mr-6">최진원 이아림</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
