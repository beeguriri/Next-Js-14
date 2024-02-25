import BackButton from '../_component/BackButton';
import SearchForm from '../_component/SearchForm';
import SearchResult from './_component/SearchResult';
import Tab from './_component/Tab';
import style from './search.module.css';

type Props = {
  searchParams: {
    q: string,
    f?: string,
    pf?: string,
  }
}

export default function Search({searchParams}:Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      {/* 검색 결과 포스트 */}
      <div className={style.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  )
}

//explore에서 검색하면 주소가 search로 넘어감
//https://twitter.com/search?q=[검색어]
//?q=hello&src=typed_query&f=top