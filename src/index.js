import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'
import morgan from 'morgan'
import routes from './routes/index.js'

config({ path: join(process.cwd(), `.env.${process.env.NODE_ENV}`) })
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug')
app.set('views', join(__dirname, './public/views'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

app.listen(app.get('port'), () => {
  if (process.env.NODE_ENV === 'production' ) {
    console.log('Node server running...')
    return
  }
  
  console.log(`Node server running on http://localhost:${app.get('port')}`)
  console.log(`Try http://localhost:${app.get('port')}`)
})