import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed(){
    await Promise.all(
        getJokes().map((joke) => {
            return db.joke.create({data: joke});
        })
    )
}

seed();

function getJokes(){
    return [
        {
            name: "Road Worker",
            content: "I never wanted to believe that my dad was stealing from his job",
        },
        {
            name: "Frisbee",
            content: "I was wondering why the frisbee was getting bigger, then it hit me"
        }
    ]
}