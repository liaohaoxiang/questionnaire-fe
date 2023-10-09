import pkg from 'mockjs'
const { Random } = pkg // {
//   // 请求地址
//   url: string;
//   // 请求方式
//   method?: MethodType;
//   // 设置超时时间
//   timeout?: number;
//   // 状态吗
//   statusCode?:number;
//   // 响应数据（JSON）
//   response?: ((opt: { [key: string]: string; body: Record<string,any>; query:  Record<string,any>, headers: Record<string, any>; }) => any) | any;
//   // 响应（非JSON）
//   rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
// }
export default [
  {
    url: '/api/test',
    method: 'get',
    timeout: 500,
    response: () => {
      return {
        code: 0,
        success: true,
        message: 'ok',
        data: {
          'categorys|5': [
            {
              id: '@id',
              name: '@cname',
              age: Random.integer(1, 100),
              address: '@province',
              city: '@city',
              province: '@province',
              email: Random.email(),
              phone: /^1[0-9]{10}$/,
              regin: '@region',
              url: '@url',
              date: Random.date('yyyy-MM-dd'),
            },
          ],
        },
      }
    },
  },
]
