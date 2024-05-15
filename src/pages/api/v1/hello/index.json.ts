// Outputs: /builtwith.json
export async function GET({params, request}: {params: any, request: any}) {
  return new Response(
    JSON.stringify({
      msg: 'Hello World!',
      app: 'astro-bento',
      repository: 'https://github.com/engageintellect/astro-bento',
      version: '1.0.0'
    })
  )
}