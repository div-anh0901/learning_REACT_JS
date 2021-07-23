import logo from "./acesst/logo.png";
import { useState, useEffect } from "react";
import "./App.css";
import "./reponsave.css";
import gach from "./acesst/gack.png";
import tongquan from "./acesst/tongquan.jpg";
import address from "./acesst/address.jpg";
import lienket from "./acesst/lien-ket.jpg";
import matbang from "./acesst/mat-bang-bao-loc.jpg";
import tienich from "./acesst/tien-ich.png";

function App() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    let clickMenu = click ? { display: "block" } : { display: "none" };
    return (
        <div className="bat_dong_san">
            <div className="container">
                <div className="nav">
                    <div className="nav-childen">
                        <div className="nav-mr">
                            <div className="nav-flex">
                                <div className="bars" onClick={handleClick}>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="nav_left">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>

                                <div className="nav_center">
                                    {/* menu laptop */}
                                    <div className="menu">
                                        <ul className="menu-ul">
                                            <li className="menu-li">TRANG CHỦ</li>
                                            <li className="menu-li">TỔNG QUAN</li>
                                            <li className="menu-li">VỊ TRÍ</li>
                                            <li className="menu-li">MẶT BẰNG</li>
                                            <li className="menu-li">TIỆN ÍCH</li>
                                            <li className="menu-li">TIN TỨC</li>
                                        </ul>
                                    </div>
                                    {/* menu mobile */}
                                    <div className="menu-mobile" style={clickMenu}>
                                        <div className="menu-mb-bg">
                                            <div className="children">
                                                <ul className="menu-ul">
                                                    <li className="menu-li">TRANG CHỦ</li>
                                                    <li className="menu-li">TỔNG QUAN</li>
                                                    <li className="menu-li">VỊ TRÍ</li>
                                                    <li className="menu-li">MẶT BẰNG</li>
                                                    <li className="menu-li">TIỆN ÍCH</li>
                                                    <li className="menu-li">TIN TỨC</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav_right">
                                    <button className="btn-sdt">ĐẶT SUẤT NGAY</button>
                                </div>
                                <div className="times" onClick={handleClick} style={clickMenu}>
                                    <i className="far fa-times"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="banner-bg">
                        <div className="banner-contact">
                            <div className="child-bg">
                                <div className="child-text">
                                    <div className="text-mr">
                                        <p className="title"> Biệt thự sinh thái Đồi Bảo Lộc</p>
                                        <h3 className="title">Sở hữa chỉ với</h3>
                                        <div className="bn-gia">
                                            <h3>2.4triệu/m2</h3>
                                        </div>
                                        <div className="banner-list">
                                            <ul>
                                                <li>Nằm ngay Nút Giao Đambri-Bảo Lộc</li>
                                                <li>
                                                    Vị Trí Vàng : ngay Trung Tâm khu Du Lịch Nghỉ Dưỡng
                                                    Đambri đậm chất thiên nhiên rừng Bảo Lộc!
                                                </li>
                                                <li>
                                                    Giay chứng nhận quyền sử dụng đất Thuộc TP Bảo Lộc
                                                </li>
                                                <li>Đất có thổ cư , hạ hầng bài bản</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="content">
                        <div className="content-container">
                            <div className="child">
                                <h3>Bình nơi tiên cảnh</h3>
                                <h1>Biệt Thự Vườn Sinh Thái Bảo Lôc</h1>
                                <p>
                                    Dự án được biết đến với vai trò là chuỗi biệt thự nghỉ dưỡng
                                    được xây dựng tự do với đầy đủ cả 4 hướng và đặc biệt khu vực
                                    này lại rất phù hợp với khí hậu của Bảo Lộc. Tổng diện tích dự
                                    án lên đến 44.000 m2 và được phân lô thành 39 nền. Dự án với
                                    quy mô thiết kế rất thông minh và tiện ích giúp mang lại không
                                    gian nghỉ dưỡng sang trọng đẳng cấp và đáp ứng tối ưu mong
                                    muốn của khách hàng.
                                </p>
                                <div className="gach-img">
                                    <img src={gach} alt="gggg" />
                                </div>
                            </div>
                            <div className="tong-quan">
                                <div className="img-tp">
                                    <img src={tongquan} alt="hhh" />
                                </div>
                                <div className="chi-tiet">
                                    <h3>Tong Quan</h3>
                                    <ul className="list">
                                        <li className="item">
                                            Loại hình sản phẩm: Biệt thự nghỉ dưỡng xây dựng tự do,
                                            đầy đủ cả 4 hướng đặc biệt phù hợp với khí hậu Bảo Lộc.
                                        </li>
                                        <li className="item">Tổng diện tích: 44.000m2.</li>
                                        <li className="item">
                                            Số lượng sản phẩm: giai đoạn 1: 60 nền, đợt 1 bán 39 nền.
                                        </li>
                                        <li className="item">Mật độ xây dựng 50%.</li>
                                        <li className="item">1 trục đường chính rộng 20m.</li>
                                        <li className="item">2 trục đường nội bộ rộng 5m.</li>
                                        <li className="item">
                                            Tích hợp đầy đủ điện lưới, cống thoát nước và cây xanh
                                            phục vụ cho sinh hoạt
                                        </li>
                                        <li>Xây dựng thoải mái theo ý muốn khách hàng.</li>
                                        <li className="item">
                                            Nền đất phẳng không bị dốc so với các dự án khác đang
                                            triển khai tại Bảo Lộc.
                                        </li>
                                        <li className="item">View đồi thoáng đãng.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-container">
                            <div className="child">
                                <h3>Thiên đường nghỉ dưỡng sinh thái</h3>
                                <h1>VỊ TRÍ TUYỆT ĐẸP</h1>
                                <p>
                                    Tọa lạc tại Đường Lý Thái Tổ 40m, là cung đường du lịch đẹp
                                    nhất Thành Phố khi ôm trọn các đồi chè, thác nước, cảnh quan
                                    thơ mộng, thiên đường nghỉ dưỡng tuyệt đẹp!
                                </p>
                                <p>
                                    Liền kề các khu Đô Thị hiện đại, mang đến giá trị sống đẳng
                                    cấp vượt trội, là ngôi nhà mang tài lộc, hưng thịnh, cát khí,
                                    nhân hòa dành cho Bạn.
                                </p>
                                <div className="gach-img">
                                    <img src={gach} alt="gggg" />
                                </div>
                            </div>
                            <div className="address-img">
                                <img src={address} alt="address" />
                            </div>
                            <div className="tong-quan">
                                <div className="img-tp">
                                    <img src={tienich} alt="hhh" />
                                </div>
                                <div className="chi-tiet">
                                    <h3>LIÊN KẾT VÙNG THUẬN TIỆN</h3>
                                    <ul className="list">
                                        <li className="item-kc">Cách thác D’amBri</li>
                                        <li className="item-kc">
                                            Cách Nút Cao Tốc Dầu Dây – Bảo Lộc –
                                        </li>
                                        <li className="item-kc">Cách Lâu đài trắng</li>
                                        <li className="item-kc">Cách Homestay Tulip Garden</li>
                                        <li className="item-kc">Cách chùa Adiđà </li>
                                        <li className="item-kc">Cách trung tâm mua sắm Vincom .</li>
                                        <li className="item-kc">Cách quảng trường trung tâm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="form-contact">
                    <div className="row">
                        <div className="col">
                            <div className="pd">
                                <div className="title">
                                    <h1>ĐĂNG KÝ THÔNG TIN DỰ ÁN</h1>
                                </div>
                                <form>
                                    <div className="child-form">
                                        <div className="input">
                                            <input
                                                className="input-ten"
                                                type="text"
                                                required
                                                placeholder="Ho va ten"
                                            />
                                            <input
                                                className="input-sdt"
                                                type="text"
                                                required
                                                minLength="8"
                                                placeholde="so dien thoai"
                                            />
                                        </div>
                                        <div className="btn">
                                            <button>GỬI CHO TÔI</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="content">
                        <div className="content-container">
                            <div className="child">
                                <h1>MẶT BẰNG PHÂN LÔ</h1>
                                <p>
                                    Dự án đất nền biệt thự sinh thái đồi Bảo Lộc được xây dựng tự
                                    do, đầy đủ cả 4 hướng. Công trình tại đây không bị ép theo nhà
                                    kiểu mẫu, xây dựng ngay khi hoàn thành thủ tục bàn giao (mật
                                    độ không quá 50%, tối đa 1 trệt 3 lầu).
                                </p>
                                <div className="gach-img">
                                    <img src={gach} alt="gggg" />
                                </div>
                            </div>
                            <div className="address-img">
                                <img src={matbang} alt="address" />
                            </div>
                            <div className="chi-tiet">
                                <p>
                                    Một trong những lý do đáng để đầu tư bởi dự án Biệt thự sinh
                                    thái Đồi Bảo Lộc sở hữu địa thế vô cùng đẹp. Không bị dốc như
                                    đại đa số các khu đất nền biệt thự tại Bảo Lộc, dự án giúp nhà
                                    đầu tư tiết kiệm ít nhất 30% chi phí xây dựng. Đặc biệt, giá
                                    cả vô cùng ưu đãi chỉ từ 2,4 triệu đồng/m2, 1 tỷ 2 cho lô đất
                                    biệt thự rộng 500m2. Đây là cái quá hời khi trên thực tế giá
                                    đất nền tại Bảo Lộc có vị trí tương tự giá trung bình 4-5
                                    triệu đồng/m2. Đặc biệt nơi đây thích hợp để nghỉ dưỡng với
                                    khí hậu ôn hòa mát mẻ quanh năm.
                                </p>
                            </div>
                            <div className="mkt-img">
                                <div className="bg">
                                <div className="text">
                                    <h1> ….Thiên Nhiên Bảo Lộc</h1>
                                    <p>
                                    Giá trị đầu tư và tiềm năng sinh lời: Nằm trên 
                                    đỉnh của đồi thoải thung lũng đặc trưng của vùng
                                    đất Bảo Lộc,thêm dòng Long Mạch chảy qua tạo cho
                                    Khu Biệt Thự một cảnh quan độc nhất vô nhị ở xứ
                                    sở Sương Mù
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-container">
                            <div className="tong-quan">
                                <div className="img-tienich">
                                    <img src={tienich} alt="hhh" />
                                </div>
                                <div className="chi-tiet">
                                    <h3>TIỆN ÍCH DỰ ÁN</h3>
                                    <h1>
                                    Biệt thự sinh thái Đồi Bảo Lộc
                                    </h1>
                                    <p>
                                    Thiên đường nghỉ dưỡng sinh thái tại Lâm Đồng
                                    </p>
                                    <ul className="list">
                                        <li className="item-kc">Cách trường học cấp 1, 2 ĐamBri khoảng 800m.</li>
                                        <li className="item-kc">
                                        Gần nhà hàng, tiệc cưới khoảng 300m.
                                        </li>
                                        <li className="item-kc">Cách trạm xăng Đức Huy khoảng 500m. </li>
                                        <li className="item-kc">Cách Lâu Đài Trắng 1.5km, 3 phút di chuyển. </li>
                                        <li className="item-kc">Cách điểm kết nối Lý Thái Tổ – Cao Tốc Dầu Giây Liên Khương 2km.  </li>
                                        <li className="item-kc">Cách Tu Viện Bát Nhã 1.5km với 5 phút di chuyển. </li>
                                        <li className="item-kc">Cách đồi Chè Tâm Châu 2km với 5 phút di chuyển. </li>
                                        <li className="item-kc">Cách Thác ĐamBri 4km với 7 phút di chuyển.  </li>
                                        <li className="item-kc">Cách UBND xã ĐamBri 7km với khoảng 11 phút di chuyển. </li>
                                        <li className="item-kc">Cách Trung tâm TP Bảo Lộc khoảng 13km, 20 phút di chuyển.  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-container">
                            <div className="reactive">
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    );
}

export default App;
