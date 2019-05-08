import '~/styles/index.less'

const main: string = 'hello wrold'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

async function sleep(time: number) {
  await delay(time)
  return 'done'
}

sleep(1000).then(console.log)
console.log(main)