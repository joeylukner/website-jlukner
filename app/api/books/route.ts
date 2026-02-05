let currentlyReading: any[] = [
    {title: "Kafka on the Shore", author: "Haruki Murakami"},
    {title: "Portrait of a Lady", author: "Henry James"},
];

export async function POST(request: Request) {
    const book = await request.json();
    currentlyReading.push(book);
    return Response.json({success: true, book});
}

export async function GET() {
    return Response.json(currentlyReading);
}