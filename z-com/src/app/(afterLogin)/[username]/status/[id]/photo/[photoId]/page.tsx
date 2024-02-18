import Home from "@/app/(afterLogin)/home/page";

//슬러그 ([username]) 같은 것들의 값을 params로 가져올 수 있음
type Props = {
  params: {
    username: string,
    id: string,
    photoId: string,
  }
}

//modal 뒷 배경은 home 화면
export default function Page({params}:Props) {
  return (
    <Home />
  )
}