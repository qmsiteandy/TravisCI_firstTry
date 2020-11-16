const student = {
  schedule: [
    { time: 10, name: '國文' },
    { time: 11, name: '國文' },
    { time: 12, name: '英文' },
    { time: 13, name: '英文' },
    { time: 14, name: '數學' }
  ],
  bring: ['鉛筆盒', '課本', '手機'],
  account: {
    username: 'xiaoming',
    password: '12345678'
  },

  sayHi: (name) => {
    return `Hi, ${name}!`
  },

  getMathScore: () => {
    return 80
  },

  getAllScore: () => {
    return {
      '國文': 100,
      '英文': 100,
      '數學': 100,
      '社會': 100,
      '自然': 100
    }
  },

  getEmail: () => {
    return 'xiaoming@gmail.com'
  },

  getClass: () => {
    return ['王小明', '陳小美', '蔡英文', '馬英九']
  },

  getScheduleTime: (nth) => {
    return student.schedule[nth - 1].time
  },

  sayBye: (name) => {
    return `下課，謝謝${name}！`
  }
}

export { student }
