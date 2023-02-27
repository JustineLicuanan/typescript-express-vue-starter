export class Book {
    id: number;
    title: string;
}

export class createBookDto {
    title: string;
}

export class updateBookDto extends createBookDto {}
