import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/elon_temp.jpg' },
  { id: 'beeguri', nickname: '비그링', image: '/profile.jpg' },
  { id: 'wendy', nickname: '웬디', image: faker.image.avatar() },
]

//공식문서 https://mswjs.io/docs/basics/mocking-responses 참조
export const handlers = [
  //HttpResponse.json(body, init)

  //회원가입
  http.post('api/users', async () => {

    console.log('회원가입');

    //성공했을 때
    //그리고 보낼 데이터가 없을 때 new HttpResponse 사용
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

  //post 가져오기
  http.get('/api/postRecommends', ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;

    return HttpResponse.json(
      [
        {
          postId: cursor + 1,
          User: User[0],
          content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 2,
          User: User[0],
          content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 3,
          User: User[0],
          content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 4,
          User: User[0],
          content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 5,
          User: User[0],
          content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  //post 가져오기
  http.get('/api/followingPosts', ({ request }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;

    return HttpResponse.json(
      [
        {
          postId: cursor + 1,
          User: User[0],
          content: `${cursor + 1} following contents`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 2,
          User: User[2],
          content: `${cursor + 2} following contents`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 3,
          User: User[0],
          content: `${cursor + 3} following contents`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 4,
          User: User[2],
          content: `${cursor + 4} following contents`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 5,
          User: User[2],
          content: `${cursor + 5} following contents`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  //검색결과 post 가져오기
  http.get('/api/search/:tag', ({ request, params }) => {

    const { tag } = params;
    console.log('tag', tag);
    
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} 검색결과 ${tag}`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[2],
          content: `${2} 검색결과 ${tag}`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} 검색결과 ${tag}`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[2],
          content: `${4} 검색결과 ${tag}`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[2],
          content: `${5} 검색결과 ${tag}`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  //특정 사용자 정보 가져오기
  http.get('/api/users/:userId', ({ request, params }) => {

    const { userId } = params;
    return HttpResponse.json(User[1]);
  }),
  //특정 사용자의 post 가져오기
  http.get('/api/users/:userId/posts', ({ request, params }) => {

    const { userId } = params;
    
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} ${userId}의 게시글`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[2],
          content: `${2} ${userId}의 게시글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} ${userId}의 게시글`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[2],
          content: `${4} ${userId}의 게시글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[2],
          content: `${5} ${userId}의 게시글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  //post의 답글
  http.get('/api/users/:userId/posts/:postId/comments', ({ request, params }) => {

    const { userId, postId } = params;
    
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} ${userId}의 게시글 ${postId}의 답글`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[2],
          content: `${2} ${userId}의 게시글 ${postId}의 답글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} ${userId}의 게시글 ${postId}의 답글`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[2],
          content: `${4} ${userId}의 게시글 ${postId}의 답글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[2],
          content: `${5} ${userId}의 게시글 ${postId}의 답글`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  //post 하나 가져오기
  http.get('/api/users/:userId/posts/:postId', ({ request, params }) => {

    const { userId, postId } = params;
    
    return HttpResponse.json(
      {
        postId: 1,
        User: User[0],
        content: `${1} ${userId}의 게시글 ${postId}의 내용`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    )
  }),
  // follow 추천 대상
  http.get('/api/followRecommends', ({ request }) => {
    return HttpResponse.json(User);
  }),
  // 현재 trend 가져오기
  http.get('/api/trends', ({ request }) => {
    return HttpResponse.json([
        {tagId: 1, title: faker.internet.userName(), count: 1234},
        {tagId: 2, title: faker.internet.userName(), count: 2345},
        {tagId: 3, title: faker.internet.userName(), count: 12},
        {tagId: 4, title: faker.internet.userName(), count: 135},
        {tagId: 5, title: faker.internet.userName(), count: 2567},
        {tagId: 6, title: faker.internet.userName(), count: 1111},
        {tagId: 7, title: faker.internet.userName(), count: 6544},
        {tagId: 8, title: faker.internet.userName(), count: 1676},
        {tagId: 9, title: faker.internet.userName(), count: 999},
    ]);
  }),
]