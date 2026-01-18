export const libraryText: string = `Welcome to my library. I spend a lot of free time reading.
I complete a reading challenge each year. For 2026, my goal is 60 books. Throughout reading journey, 
my tastes have changed a lot and certain preferences have stayed the same. This is a digital 
compilation of all of my all-time favorites.

`;
export const litFictionSubtitle: string = "Explore contemporary literary fiction exploring complex themes and character development.";

export const classicsSubtitle: string = "Timeless masterpieces that have shaped literature and culture throughout history.";

export const comedySubtitle: string = "Humorous and witty novels that entertain while offering clever social commentary.";

export const yaGoldSubtitle: string = "I was a teenager once.";


export const yaGoldArr : Book[] = [
    {title: "The Song of Achilles", author: "Madeline Miller"},
    {title: "Carry On", author: "Rainbow Rowell"},
    {title: "New Moon", author: "Stephanie Myer"},
]; 

export const comedyArr : Book[] = [
    {title: "Jitterbug Perfume", author: "Tom Robbins"},
    {title: "Still Life With Woodpecker", author: "Tom Robbins"},
    {title: "High Maintenance", author: "Jennifer Belle"},
    {title: "Crazy Rich Asians", author: "Kevin Kwan"}
]

export interface Book {
    title: string;
    author: string;
}

export const litFictionArr : Book[] = [
    {title: "The Secret History", author: "Donna Tartt" },
    {title: "Confessions of a Mask", author: "Yukio Mishima" },
    {title: "The Pillars of the Earth", author: "Ken Follett" },
    {title: "World Without End", author: "Ken Follett" },
    {title: "American Psycho", author: "Bret Easton Ellis" },
    {title: "The Dutch House", author: "Ann Patchett" },
    {title: "The Book of Salt", author: "Madeline Truong" }
]

export const literaryFiction: string = `
\u2022 The Secret History by Donna Tartt
\u2022 Confessions of a Mask by Yukio Mishima
\u2022 The Pillars of the Earth by Ken Follett
\u2022 World Without End by Ken Follett
\u2022 American Psycho by Bret Easton Ellis
\u2022 The Dutch House by Ann Patchett
\u2022 The Book of Salt by Madeline Truong

`;

export const classicsArr : Book[] = [
    {title: "Jane Eyre", author: "Charlotte Brontë" },
    {title: "Anna Karenina", author: "Leo Tolstoy" },
    {title: "Pride and Prejudice", author: "Jane Austen" },
    {title: "Ladies of the Rachmaninoff Eyes", author: "Henry Van Dyke" },
    {title: "Love in the Time of Cholera", author: "Gabriel García Márquez" },
    {title: "One Hundred Years of Solitude", author: "Gabriel García Márquez" },
    {title: "The Wrath of Dionysus", author: "Nagrodskaia Evdokia" },
    {title: "Swann's Way", author: "Marcel Proust" }
]

export const welcome: string = `Welcome to my website! I'm a software developer 
with 2 years of professional experience. I started coding in high school and 
found a passion for the problem solving of engineering.`
