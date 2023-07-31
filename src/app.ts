import { Fatura, PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

export const app = fastify()

const prisma = new PrismaClient()

interface FaturaQuery {
  numero_cliente?: string
  mes_referencia?: string
  data_vencimento?: string
  energia_eletrica_quantidade?: string
  energia_eletrica_preco_unitario?: string
  energia_eletrica_valor?: string
  energia_injetada_quantidade?: string
  energia_injetada_preco_unitario?: string
  energia_injetada_valor?: string
  energia_sICMS_quantidade?: string
  energia_sICMS_preco_unitario?: string
  energia_sICMS_valor?: string
  contrib_ilum_publica_municipal?: string
  valor_total?: string
}

app.post('/fatura', async (request, reply) => {
  const faturaBodySchema = z.object({
    numero_cliente: z.string(),
    mes_referencia: z.string(),
    data_vencimento: z.string(),
    energia_eletrica_quantidade: z.string(),
    energia_eletrica_preco_unitario: z.string(),
    energia_eletrica_valor: z.string(),
    energia_injetada_quantidade: z.string(),
    energia_injetada_preco_unitario: z.string(),
    energia_injetada_valor: z.string(),
    energia_sICMS_quantidade: z.string(),
    energia_sICMS_preco_unitario: z.string(),
    energia_sICMS_valor: z.string(),
    contrib_ilum_publica_municipal: z.string(),
    valor_total: z.string(),
  })

  const faturaBody = faturaBodySchema.parse(request.body)

  const faturaExistente = await prisma.fatura.findFirst({
    where: {
      numero_cliente: faturaBody.numero_cliente,
      mes_referencia: faturaBody.mes_referencia,
    },
  })

  if (faturaExistente) {
    return reply.status(409).send()
  }

  await prisma.fatura.create({
    data: {
      numero_cliente: faturaBody.numero_cliente,
      mes_referencia: faturaBody.mes_referencia,
      data_vencimento: faturaBody.data_vencimento,
      energia_eletrica_quantidade: faturaBody.energia_eletrica_quantidade,
      energia_eletrica_preco_unitario:
        faturaBody.energia_eletrica_preco_unitario,
      energia_eletrica_valor: faturaBody.energia_eletrica_valor,
      energia_injetada_quantidade: faturaBody.energia_injetada_quantidade,
      energia_injetada_preco_unitario:
        faturaBody.energia_injetada_preco_unitario,
      energia_injetada_valor: faturaBody.energia_injetada_valor,
      energia_sICMS_quantidade: faturaBody.energia_sICMS_quantidade,
      energia_sICMS_preco_unitario: faturaBody.energia_sICMS_preco_unitario,
      energia_sICMS_valor: faturaBody.energia_sICMS_valor,
      contrib_ilum_publica_municipal: faturaBody.contrib_ilum_publica_municipal,
      valor_total: faturaBody.valor_total,
    },
  })

  return reply.status(201).send()
})

// Rota com filtros
app.get('/fatura', async (request, reply) => {
  const {
    numero_cliente,
    mes_referencia,
    data_vencimento,
    energia_eletrica_quantidade,
    energia_eletrica_preco_unitario,
    energia_eletrica_valor,
    energia_injetada_quantidade,
    energia_injetada_preco_unitario,
    energia_injetada_valor,
    energia_sICMS_quantidade,
    energia_sICMS_preco_unitario,
    energia_sICMS_valor,
    contrib_ilum_publica_municipal,
    valor_total,
  } = request.query as FaturaQuery

  // Defina filtros padrão para a consulta
  const filters: any = {}

  // Verifique se os filtros foram passados e, se sim, adicione-os ao objeto de filtros
  if (numero_cliente) {
    filters.numero_cliente = numero_cliente
  }
  if (mes_referencia) {
    filters.mes_referencia = mes_referencia
  }
  if (data_vencimento) {
    filters.data_vencimento = data_vencimento
  }
  if (energia_eletrica_quantidade) {
    filters.energia_eletrica_quantidade = energia_eletrica_quantidade
  }
  // ... E assim por diante para todos os campos que você deseja filtrar ...

  // Consulta o banco de dados usando os filtros
  const faturas = await prisma.fatura.findMany({
    where: filters,
  })

  return reply.send(faturas)
})

// rota deletar fatura
app.delete('/fatura/:id', async (request, reply) => {
  const { id } = request.params

  await prisma.fatura.delete({
    where: {
      id: Number(id),
    },
  })

  return reply.send()
})

app.get('/grafico', async (request, reply) => {
  const faturas = await prisma.fatura.findMany({
    select: {
      mes_referencia: true,
      energia_eletrica_quantidade: true,
      valor_total: true,
    },
  })

  return reply.send(faturas)
})
