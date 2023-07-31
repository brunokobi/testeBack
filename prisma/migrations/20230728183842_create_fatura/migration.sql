-- CreateTable
CREATE TABLE "Fatura" (
    "id" SERIAL NOT NULL,
    "numero_cliente" TEXT NOT NULL,
    "mes_referencia" TEXT NOT NULL,
    "data_vencimento" TEXT NOT NULL,
    "energia_eletrica_quantidade" TEXT NOT NULL,
    "energia_eletrica_preco_unitario" TEXT NOT NULL,
    "energia_eletrica_valor" TEXT NOT NULL,
    "energia_injetada_quantidade" TEXT NOT NULL,
    "energia_injetada_preco_unitario" TEXT NOT NULL,
    "energia_injetada_valor" TEXT NOT NULL,
    "energia_sICMS_quantidade" TEXT NOT NULL,
    "energia_sICMS_preco_unitario" TEXT NOT NULL,
    "energia_sICMS_valor" TEXT NOT NULL,
    "contrib_ilum_publica_municipal" TEXT NOT NULL,
    "valor_total" TEXT NOT NULL,

    CONSTRAINT "Fatura_pkey" PRIMARY KEY ("id")
);
