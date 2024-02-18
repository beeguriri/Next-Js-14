"use client";

import { usePathname } from 'next/navigation';
import SearchForm from './SearchForm';
import SearchFilter from './SearchFilter';
//이 메뉴 하나때문에 서버 컴포넌트를 클라이언트 컴포넌트로 바꿀 필요가 없어서
//별도 컴포넌트로 분리 해 줌!

export default function RightSearchZone() {

  const pathName = usePathname();
  if (pathName === '/explore') return null;

  if (pathName === '/search') {
    return (
      <SearchFilter />
    );
  }

  return (
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm />
    </div>
  );
}