import { defineStore } from "pinia";

import type { Book, createBookDto } from "schemas";

export const useBookStore = defineStore("book", {
    state: function () {
        return {
            books: [] as Book[]
        };
    },

    getters: {
        //
    },

    actions: {
        findAll: async function () {
            const res = await fetch("/api/books");
            const data = await res.json();

            this.books = data.books;
        },

        create: async function (entity: createBookDto) {
            const res = await fetch("/api/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entity)
            });
            const data = await res.json();

            this.books.push(data.book);
        },

        remove: async function (id: Book["id"]) {
            const res = await fetch(`/api/books/${id}`, {
                method: "DELETE"
            });
            const data = await res.json();

            this.books = this.books.filter((book) => book.id !== data.book.id);
        }
    }
});
