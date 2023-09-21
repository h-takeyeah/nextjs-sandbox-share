import { createServer } from 'node:http'
import type { RequestListener } from 'node:http'
import { createReadStream } from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(import.meta.url)

const mdContentHandler: RequestListener = (req, res) => {
  const readable = createReadStream(path.join(__dirname, '/sample.md').slice('file:'.length), { encoding: 'utf8' })
  const chunks: string[] = []
  readable.on('error', err => {
    console.error(err.message)
    // @ts-ignore
    if (err.code === 'ENOENT') {
      res.writeHead(404, {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      })
      res.end()
    } else {
      res.writeHead(500, {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      })
      res.end()
    }
  })
  readable.on('readable', () => {
    let chunk = ''
    while ((chunk = readable.read()) !== null) {
      chunks.push(chunk)
    }
  })
  readable.on('end', () => {
    const body = JSON.stringify({ statement: chunks.join('') })
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      'Transfer-Encoding': 'chunked',
    })
    res.end(req.method === 'HEAD' ? undefined : body)
  })
}

const server = createServer({ keepAlive: true })

server.on('request', async (req, res) => {
  console.log(req.method, req.url)
  const pathname = new URL(req?.url || '', `http://${req.headers.origin}`).pathname
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    })
    res.end()
    return
  } else if (req.method === 'HEAD' && pathname !== '/api/sample') {
    res.writeHead(404)
    return
  }

  if (pathname === '/api/sample' && req.method === 'GET' || req.method === 'HEAD') {
    mdContentHandler(req, res)
  } else if (req.method === 'GET' || req.method === 'OPTIONS') {
    res.writeHead(404)
    res.end()
  } else {
    res.writeHead(501)
    res.end()
  }
})

server.listen(3001, '127.0.0.1', () => {
  console.log('listening on port 3001')
})
