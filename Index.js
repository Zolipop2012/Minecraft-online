const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'kaboom.pw',
  username: 'Z0lipop'
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.on('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true }) // port is the minecraft server port, if first person is false, you get a bird's-eye 
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
