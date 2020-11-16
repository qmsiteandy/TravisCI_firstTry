import { student } from '../js/student'

test('字串比對：Hi, 王小明!', () => {
  const name = '王小明'

  // 期望 Function 回復對的字串
  expect(student.sayHi(name)).toBe('Hi, 王小明!')
})

test('數字：數學成績大於60', () => {
  expect(student.getMathScore()).toBeGreaterThan(60)
})

test('物件：上學期各科成績都是100分', () => {
  expect(student.getAllScore()).toEqual({
    '國文': 100,
    '英文': 100,
    '數學': 100,
    '社會': 100,
    '自然': 100
  })
})

test('正規表達式：符合 email 格式', () => {
  expect(student.getEmail()).toMatch(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)
})

test('陣列包含：3年1班學生包含王小明在內', () => {
  expect(student.getClass()).toContain('王小明')
})

describe('小明上課流程測試', () => {
  test('數字：早上10點，進入教室', () => {
    expect(student.getScheduleTime(1)).toBe(10)
  })

  test('陣列包含：檢查手機有沒有在書包裡', () => {
    expect(student.bring).toContain('手機')
  })

  test('物件：輸入遊戲帳密，並驗證', () => {
    expect(student.account).toEqual({
      username: 'xiaoming',
      password: '12345678'
    })
  })

  test('字串比對：下課，謝謝老師！', () => {
    expect(student.sayBye('老師')).toBe('下課，謝謝老師！')
  })
})
