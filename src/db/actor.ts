// import { query } from "./db.js";
import { PrismaClient } from "@prisma/client";
import { Actor } from "../types/actor";

const prisma = new PrismaClient();
export const getActors = async () => {
  const actors = await prisma.actor.findMany();
  return actors;
};

export const getActorById = async (actorId: string) => {
    const id = Number(actorId);
    const actor = await prisma.actor.findUnique({
      where: {
        actor_id: id,
      },
    });
    return actor ? actor : null;

};

export const insertActor = async (actor: Actor) => {
    const newActor = await prisma.actor.create({
      data: actor,
    });
    return newActor;

};

export const updateActor = async (actorId: string, actor: Partial<Actor>)=> {
    const id = Number(actorId);
    const updatedActor = await prisma.actor.update({
      where: {
        actor_id: id,
      },
      data: actor,
    });
    return updatedActor;

};

export const deleteActor = async (actorId: string) => {
  const id = Number(actorId);
    await prisma.actor.deleteMany({
      where: {
        actor_id: id,
      },
    });
    return { message: "Actor deleted" };

};
