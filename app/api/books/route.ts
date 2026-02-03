let books: any[] = [
    {title: "Jitterbug perfume", author: "Tom Robbins"},
    {title: "The Secret History", author: "Donna Tartt"},
    {title: "Anna Karenina", author: "Leo Tolstoy"},
];

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);
    return Response.json({success: true, book});
}

export async function GET() {
    return Response.json(books);
}