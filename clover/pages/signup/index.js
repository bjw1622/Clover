import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/images/logo_habiters@3x.png";
import googleLogo from "../../public/images/super-g.png";
import kakaoLogo from "../../public/images/Union.png";
import naverLogo from "../../public/images/naver.png";
import styles from "./index.module.scss";

const index = () => {
  const router = useRouter();

  return (
    <>
      <div id={styles.logo}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <Image src={logo} height={36} width={305.6} alt="logo" />
        </Link>
      </div>
      <div id={styles.infoDiv}>
        <div id={styles.info}>
          해비터즈와 함께 지금 바로 습관 형성을 시작하세요!
        </div>
      </div>
      <div id={styles.login}>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.google}>
            <Image
              src={googleLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            구글로 시작하기
          </div>
        </Link>
        <Link
          href={"http://223.130.162.40:8080/oauth2/authorization/kakao"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.kakao}>
            <Image
              src={kakaoLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            카카오로 시작하기
          </div>
        </Link>
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className={router.pathname === "/" ? "active" : ""}
        >
          <div id={styles.naver}>
            <Image
              src={naverLogo}
              height={16}
              width={16}
              alt="logo"
              style={{ marginRight: "8px" }}
            />
            네이버로 시작하기
          </div>
        </Link>
      </div>
      <div id={styles.signup}>
        <div id={styles.text}>
          이미 회원이신가요?{" "}
          <Link href={"/signin"} style={{ textDecoration: "none" }}>
            <span id={styles.test}>로그인하기</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default index;
