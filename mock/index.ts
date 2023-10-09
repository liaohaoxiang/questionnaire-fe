export const MOCK_QUESTION = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublish: false,
    isStar: true,
    answerCount: 5,
    createdAt: '2023-01-01',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublish: true,
    isStar: false,
    answerCount: 3,
    createdAt: '2023-05-12',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublish: false,
    isStar: false,
    answerCount: 10,
    createdAt: '2023-06-03',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublish: true,
    isStar: true,
    answerCount: 2,
    createdAt: '2021-07-01',
  },
]

export const MOCK_QUESTION_COLUMNS = [
  { title: '标题', dataIndex: 'title', key: 'title' },
  {
    title: '是否发布',
    dataIndex: 'isPublish',
    key: 'isPublish',
    render: (isPublish: boolean) => {
      return isPublish ? '已发布' : '未发布'
    },
  },
  { title: '答卷数量', dataIndex: 'answerCount', key: 'answerCount' },
  { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
  { title: '是否星标', dataIndex: 'isStar', key: 'isStar' },
]

type Person = {
  age: number
  name: string
  born: string
}

// Omit 去掉第一个类型里的某个key的类型
type newType = Omit<Person, 'born'>
const newType: newType = { age: 18, name: 'SuperMan' }

// Partial
type newHuman = Partial<Person>
const human: newHuman = { age: 18 }

// Pick  用于从一个类型中，提取一个或者多个属性出来。
const SuperMan: Pick<Person, keyof newType> = { name: 'SuperMan', age: 18 }

// Record
type key = string
type value = number
const male: Record<key, value> = { name: 1, age: 2 }

// Exclude
type time = string | number
type age = Exclude<time, string>

const age: age = 18

// Parameters 获取函数的参数类型
export function fun1(x: number, y: string, z: boolean) {
  const name: Parameters<typeof fun1> = [1, '2', true]
  console.log(x, y, z, name)
  return { x, y, z }
}
