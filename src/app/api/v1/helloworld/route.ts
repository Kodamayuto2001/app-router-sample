export async function GET(request: Request) {
  return new Response('Hello World!', { status: 200 });
}


export async function POST(request: Request) {
  return new Response('(POST) Hello World!', { status: 200 });
}

export async function PUT(request: Request) {
  return new Response('(PUT) Hello World!', { status: 200 });
}