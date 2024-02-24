import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';


const User = [
	{id: 'elonmusk', nickname: 'Elon Musk', image: '/elon_temp.jpg'},
	{id: 'beeguri', nickname: '비그링', image: '/profile.jpg'},
	{id: 'wendy', nickname: '웬디', image: faker.image.avatar()},
]

//공식문서 https://mswjs.io/docs/basics/mocking-responses 참조
export const handlers = [
	//HttpResponse.json(body, init)

	//회원가입
	http.post('api/users', async () => {

		console.log('회원가입');

		//성공했을 때
		return new HttpResponse('ok', {
			status: 200,
			statusText: 'ok',
			headers: {
				'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
			}
		})

		//실패 했을 때
		// return new HttpResponse(null, {
		// 	status: 403,
		// 	statusText: 'user_exists',
		// })
	}),

	//로그인
	http.post('/api/login', () => {
		console.log('로그인');
		return HttpResponse.json(User[1], {
		  headers: {
			'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
		  }
		})
	}),
]