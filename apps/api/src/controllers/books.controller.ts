import { Request, Response } from "express";

import { prisma } from "../prisma/client.prisma";

export const booksController = {
    create: async (req: Request, res: Response) => {
        const book = await prisma.book.create({ data: req.body });

        res.status(201).json({
            statusCode: 201,
            message: "",
            book
        });
    },

    findAll: async (req: Request, res: Response) => {
        const books = await prisma.book.findMany();

        res.json({
            statusCode: 200,
            message: "",
            books
        });
    },

    findOne: async (req: Request, res: Response) => {
        const book = await prisma.book.findUnique({
            where: {
                id: +req.params.id
            }
        });

        res.json({
            statusCode: 200,
            message: "",
            book
        });
    },

    update: async (req: Request, res: Response) => {
        try {
            const book = await prisma.book.update({
                where: {
                    id: +req.params.id
                },
                data: req.body
            });

            res.json({
                statusCode: 200,
                message: "",
                book
            });
        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
                error
            });
        }
    },

    remove: async (req: Request, res: Response) => {
        try {
            const book = await prisma.book.delete({
                where: {
                    id: +req.params.id
                }
            });

            res.json({
                statusCode: 200,
                message: "",
                book
            });
        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                message: "Internal server error",
                error
            });
        }
    }
};
