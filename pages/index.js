import { useState, useCallback } from "react";
import NgNhp from "../components/ng-nhp";
import PortalPopup from "../components/portal-popup";
import styles from "./index.module.css";

const Desktop6 = () => {
  const [isNgNhpOpen, setNgNhpOpen] = useState(false);

  const openNgNhp = useCallback(() => {
    setNgNhpOpen(true);
  }, []);

  const closeNgNhp = useCallback(() => {
    setNgNhpOpen(false);
  }, []);

  const onImage12Click = useCallback(() => {
    // Please sync "Property 1=Default" to the project
  }, []);

  return (
    <>
      <div className={styles.desktop6}>
        <div className={styles.header}>
          <div className={styles.header1}>
            <div className={styles.headerChild} />
            <div className={styles.logoStore}>
              <img
                className={styles.logoStoreChild}
                alt=""
                src="/rectangle-21@2x.png"
              />
            </div>
            <div className={styles.groupParent}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="/rectangle-3.svg"
                />
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.search}>TÌM KIẾM</div>
              </div>
              <img
                className={styles.userIcon}
                alt=""
                src="/user.svg"
                onClick={openNgNhp}
              />
              <div className={styles.shoppingCart}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src="/shoppingcart.svg"
                />
                <div className={styles.ellipseParent}>
                  <div className={styles.groupItem} />
                  <div className={styles.div}>1</div>
                </div>
              </div>
            </div>
            <div className={styles.navBar}>
              <div className={styles.speacialPrice}>GIÁ ĐẶC BIỆT</div>
              <div className={styles.clothingParent}>
                <div className={styles.clothing}>QUẦN ÁO</div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
              <div className={styles.tShirt}>ÁO SƠ MI</div>
              <div className={styles.tShirt}>POLO</div>
            </div>
          </div>
        </div>
        <div className={styles.containerProduct}>
          <div className={styles.containerProductChild} />
          <div className={styles.danhMcSn}>DANH MỤC SẢN PHẨM</div>
          <div className={styles.ttCSn}>TẤT CẢ SẢN PHẨM</div>
          <div className={styles.ttCSn1}>TẤT CẢ SẢN PHẨM</div>
          <div className={styles.tShirt1}>ÁO SƠ MI</div>
          <div className={styles.jacket}>ÁO KHOÁC</div>
          <div className={styles.pants}>QUẦN</div>
          <div className={styles.spXpParent}>
            <div className={styles.spXp}>Sắp xếp :</div>
            <div className={styles.groupInner} />
            <div className={styles.mcNh}>Mặc định</div>
            <img
              className={styles.chevronDownIcon1}
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className={styles.listProductItems}>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName1}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName1}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon2}
                alt=""
                src="/image-12@2x.png"
                onClick={onImage12Click}
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName3}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName3}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName5}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName1}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName1}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.itemProducts}>
              <div className={styles.itemProductsChild} />
              <div className={styles.priceName1}>
                <div className={styles.lineBoxyRaglan}>
                  LINE BOXY RAGLAN TEE - CREAM
                </div>
                <div className={styles.lineBoxyRaglan}>380.000₫</div>
              </div>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerParent}>
          <div className={styles.footer} />
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-21@2x.png"
          />
          <div className={styles.tHngV}>Đặt hàng và vận chuyển toàn quốc</div>
          <div className={styles.address}>
            <div className={styles.ngNguynDuQun1ThnhPhParent}>
              <div className={styles.ngNguynDu}>
                123 Đường Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh
              </div>
              <img
                className={styles.clothesIcon}
                alt=""
                src="/clothes@2x.png"
              />
            </div>
            <div className={styles.ngCmt8QunTnBnhThnhParent}>
              <div className={styles.ngNguynDu}>
                456 Đường CMT8, Quận Tân Bình, Thành phố Hồ Chí Minh
              </div>
              <img
                className={styles.clothesIcon}
                alt=""
                src="/clothes1@2x.png"
              />
            </div>
            <div className={styles.linH0969404274Wrapper}>
              <div className={styles.linH0969404274}>
                Liên hệ:
                <span className={styles.span}>0969404274</span>
              </div>
            </div>
            <div className={styles.contactUs} />
          </div>
          <div className={styles.address1}>
            <div className={styles.aboutUs}>Về chúng tôi</div>
            <div className={styles.giiThiu}>Giới thiệu</div>
            <div className={styles.hngDnMua}>Hướng dẫn mua hàng</div>
            <div className={styles.chnhSchI}>Chính sách đổi trả</div>
          </div>
          <div className={styles.follow}>
            <div className={styles.followUs}>Follow us</div>
            <img
              className={styles.instagramIcon}
              alt=""
              src="/instagram@2x.png"
            />
            <img
              className={styles.facebookIcon}
              alt=""
              src="/facebook@2x.png"
            />
          </div>
          <div className={styles.linHVi}>Liên hệ với chúng tôi</div>
          <div className={styles.theoDiChng}>Theo dõi chúng tôi</div>
          <img
            className={styles.instagramIcon1}
            alt=""
            src="/instagram@2x.png"
          />
          <img className={styles.facebookIcon1} alt="" src="/facebook@2x.png" />
        </div>
        <img
          className={styles.desktop6Child}
          alt=""
          src="/remove-red-eye1.svg"
        />
      </div>
      {isNgNhpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNgNhp}
        >
          <NgNhp onClose={closeNgNhp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop6;
