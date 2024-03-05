"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import style from './searchFilter.module.css';

export default function SearchFilter() {

  const router = useRouter();
  const searchParams = useSearchParams();
  let url;

  const onChangeFollow = () => { 
    url = `/search?q=${searchParams.get('q')}&pf=on`;

    if (searchParams.has('f'))
      url += `&f=${searchParams.get('f')}`

    router.replace(url);
  };
  const onChangeAll = () => { 
    url = `/search?q=${searchParams.get('q')}`
    
    if (searchParams.has('f'))
      url += `&f=${searchParams.get('f')}`

    router.replace(url);
  };

  //TODO
  //Radio버튼을 체크무늬가 있는 div로 바꾸고 호버하면 색깔 올라가는거 구현

  return (
    <>
      <div className={style.filterTitle}>
        <h3>검색 필터</h3>
      </div>
      <div className={style.filterSection}>
        <div className={style.filterGroup}>
          <label>사용자</label>
          <div className={style.radio}>
            <div>모든 사용자</div>
            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
          </div>
          <div className={style.radio}>
            <div>내가 팔로우하는 사람들</div>
            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
          </div>
        </div>
        {/* <div className={style.filterGroup}>
          <label>위치</label>
          <div className={style.radio}>
            <div>어디 에서나</div>
            <input type="radio" name="lf" defaultChecked onChange={onChangeAll} />
          </div>
          <div className={style.radio}>
            <div>현 위치 주변</div>
            <input type="radio" name="lf" value="on" onChange={onChangeFollow} />
          </div>
        </div> */}
      </div>
    </>
  );
}