async function getTrends() {
  const response = await fetch(
    'http://localhost:9090/api/trends', 
    {
      next: {
        tags: ['trends'] //caching data update 하기 위한 key
      },
      cache: 'no-store', //cache 정책
    }
  );

  if(!response.ok)
    throw new Error('failed to fetch data');

  return response.json();
}

export default getTrends;