import { http, HttpResponse } from 'msw'

//공식문서 https://mswjs.io/docs/basics/mocking-responses 참조
export const handlers = [
	//HttpResponse.json(body, init)
	http.post('', () => {
		// Note that you DON'T have to stringify the JSON!
		return HttpResponse.json(
			{
				id: 'abc-123',
				title: 'Modern Testing Practices',
			}, {
			headers: {
				'Content-Type': 'text/plain',
			},
		}
		)
	}),

	//회원가입
	http.post('api/users', async () => {
		console.log('회원가입');
		//성공했을 때
		// return HttpResponse.json(
		// 	'ok', {
		// 	headers: {
		// 		'Set-Cookie' : 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
		// 	},
		// })

		//실패 했을 때
		return new HttpResponse(null, {
			status: 403,
			statusText: 'user_exists',
		})
	}),
]