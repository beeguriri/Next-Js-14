import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {

  //여기 나중에 q='트렌드명' << 이 값 받아와야함
  return (
    <Link href={`/search?q=하쿠마타`} className={style.container}>
      <div className={style.count}>대한민국에서 트렌드 중</div>
      <div className={style.title}>하쿠마타</div>
      <div className={style.count}>1,234 posts</div>
  </Link>
  );
}

//trend 클릭하면
//https://twitter.com/search?q=트렌드명