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
]