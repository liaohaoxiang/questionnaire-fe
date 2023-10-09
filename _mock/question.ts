// Mock for question
export default [
  // GET /api/question/:id
  {
    url: '/api/question/:id',
    method: 'get',
    timeout: 500,
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: {
          id: '@id',
          title: '@ctitle',
        },
      }
    },
  },
  // POST /api/question
  {
    url: '/api/question',
    method: 'post',
    timeout: 500,
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: {
          id: '@id',
        },
      }
    },
  },
  //
  {
    url: '/api/question',
    method: 'get',
    timeout: 500,
    response: res => {
      console.log(`res`, res)
      let isStar: string | boolean = '@boolean'
      if (res.query.isStar === 'true') {
        isStar = true
      }
      let isDeleted: string | boolean = '@boolean'
      if (res.query.isDeleted === 'true') {
        isDeleted = true
      }
      return {
        code: 0,
        msg: 'ok',
        data: {
          total: 100,
          'list|20': [
            {
              _id: '@id',
              title: '@ctitle',
              isPublish: '@boolean',
              isStar: isStar,
              answerCount: '@integer(20, 100)',
              createdAt: '@datetime',
              isDeleted: isDeleted,
            },
          ],
        },
      }
    },
  },
]
