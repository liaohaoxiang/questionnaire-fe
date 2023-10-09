// html表单元素
import { FC, useState, ChangeEvent } from 'react'
import styles from './index.module.scss'

const FormDemo: FC = () => {
  const [text, setText] = useState<string>('')
  const [gender, setGender] = useState('male')
  const [frameWorkerList, setFrameWorkerList] = useState<string[]>([])
  const [city, setCity] = useState('beijing')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value)
  }

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value)
  }

  const handleFrameWorkerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    if (checked) {
      setFrameWorkerList([...frameWorkerList, value])
    } else {
      setFrameWorkerList(frameWorkerList.filter(item => item !== value))
    }
  }

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault() // 阻止跳转
    // 可以自己实现ajax提交数据
    console.log('submit')
  }
  return (
    <div>
      <p>FormDemo</p>
      <form action="/api/submit" onSubmit={handleSubmit}>
        <div>
          {/* 输入框*/}
          <label htmlFor="hello">输入框: </label>
          <input type="text" id="hello" value={text} onChange={handleChange} />
          {JSON.stringify(text)}
        </div>
        <div>
          {/* 文本输入框*/}
          <label htmlFor="textInput">文本输入框: </label>
          <textarea value={text} id="textInput" onChange={handleChange} />
        </div>
        <div>
          {/* 单选框*/}
          <label htmlFor="male">男</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">女</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          {JSON.stringify(gender)}
        </div>
        <div>
          {/* 多选框*/}
          <label htmlFor="vue">Vue</label>
          <input
            type="checkbox"
            id="vue"
            value="vue"
            checked={frameWorkerList.includes('vue')}
            onChange={handleFrameWorkerChange}
          />
          <label htmlFor="react">React</label>
          <input
            type="checkbox"
            id="react"
            value="react"
            checked={frameWorkerList.includes('react')}
            onChange={handleFrameWorkerChange}
          />
          <label htmlFor="angular">Angular</label>
          <input
            type="checkbox"
            id="angular"
            value="angular"
            checked={frameWorkerList.includes('angular')}
            onChange={handleFrameWorkerChange}
          />
          {JSON.stringify(frameWorkerList)}
          <input
            type="hidden"
            name="frameWorker"
            value={JSON.stringify(frameWorkerList)}
          />{' '}
          {/* 用于提交表单 */}
        </div>
        <div>
          {/* 下拉框*/}
          <label htmlFor="city">城市</label>
          <select
            name="city"
            id="city"
            value={city}
            onChange={handleCityChange}
          >
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
          </select>
          {JSON.stringify(city)}
        </div>
        <button type="submit">提交</button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.heart}></div>
        <div className={styles.search}></div>
      </div>
    </div>
  )
}

export default FormDemo
