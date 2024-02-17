import {redirect} from 'next/navigation';

export default function Login() {
  redirect('/i/flow/login')
}

//https://twitter.com/login 으로 접근 시
//https://twitter.com/i/flow/login 으로 리다이렉트