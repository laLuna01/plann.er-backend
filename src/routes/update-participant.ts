import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";

export async function updateParticipant(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().put('/participants/:participantId', {
        schema: {
            params: z.object({
                participantId: z.string().uuid(),
            }),
            body: z.object({
                name: z.string(),
                is_confirmed: z.coerce.boolean(),
            })
        },
    }, async (request) => {
        const { participantId } = request.params;
        const { name, is_confirmed } = request.body;

        const participant = await prisma.participant.findUnique({
            select: {
                id: true,
                name: true,
                email: true,
                is_confirmed: true,
            },
            where: {
                id: participantId,
            }
        });

        if (!participant) {
            throw new ClientError('Participant not found.');
        }

        console.log(is_confirmed)

        await prisma.participant.update({
            where: {
                id: participantId,
            },
            data: {
                name,
                is_confirmed,
            }
        })

        return { participantId: participant.id }
    })
}