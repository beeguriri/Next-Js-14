import {ReactNode} from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import zLogo from "../../../public/zLogo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommendSection from "./_component/FollowRecommendSection";
import RightSearchZone from "./_component/RightSearchZone";

type Props = { children: ReactNode, modal: ReactNode }

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>

      {/* 왼쪽 메뉴 영역 */}
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={zLogo} alt="z.com 로고" width={40} height={40}/>
              </div>
            </Link>
            <nav>
              <ul>
                {/* ActiveLink 를 사용한 nav 메뉴 클라이언트 컴포넌트로 만듦! */}
                <NavMenu />
              </ul>
              <Link href="/compose/post" className={style.postButton}>게시하기</Link>
            </nav>
            {/* onclick event 같은게 있는 버튼은 클라이언트 컴포넌트로 만듦 */}
            <LogoutButton />
          </div>
        </section>
      </header>

      {/* 오른쪽 페이지(child) + 고정 영역(나를 위한 트렌드 등) */}
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>
            {children}
          </main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <FollowRecommendSection />
          </section>
        </div>
      </div>
      {modal}
    </div>
  )
}