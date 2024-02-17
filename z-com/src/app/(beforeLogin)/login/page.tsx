"use client";

//use client 명시하지 않으면 리다이렉트가 서버측에서 일어남 
//서버에서 리다이렉트 하면 인터셉팅이 되지 않음
//클라이언트에서 링크를 통해 리다이렉트 해야 인터셉팅 라우트가 동작!!

//import {redirect} from 'next/navigation'; //서버측에서 리다이렉트
import { useRouter } from 'next/navigation'; //클라이언트측에서 리다이렉트
import Main from '../_component/Main';

export default function Login() {
  
  // 서버측에서 리다이렉트
  // redirect('/i/flow/login')

  // 클라이언트측에서 리다이렉트
  const router = useRouter();
  router.replace('/i/flow/login');

  // 원래는 localhost:3000 main page가 뜨고 거기서 localhost:3000/i/flow/login으로 인터셉터 되어 가서 배경이 뜨는데
  // 리다이렉트 할 경우 localhost:3000 main page -> localhost:3000/login (배경 없음) -> localhost:3000/i/flow/login 으로 가기때문에
  // 배경이 없는 상태에서 인터셉트 되어 모달이 뜸 
  // 해결을 위해 return에 main page 뜨도록 함!
  return (
    <Main />
  );
}

//https://twitter.com/login 으로 접근 시
//https://twitter.com/i/flow/login 으로 리다이렉트

/**
 * router.push
 * localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * => history : localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * 
 * router.replace
 * localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * => history : localhost:3000 -> localhost:3000/i/flow/login
 * 
 */
