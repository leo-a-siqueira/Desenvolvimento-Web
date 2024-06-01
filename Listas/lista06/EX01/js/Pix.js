var pagador = {
    nome: 'Fulano',
    cpf: '441.010.710-04',
    chave_pix: 'fulano.056@gmail.com',
    historico_tracacao: [
        {
            tipo_trasacao: 'pagar',
            data_transacao: '25/08/2024',
            valor_tranferencia: '500,55',
            descricao_pagamento: 'pagamento de aluguel'
        },
        {
            tipo_trasacao: 'pagar',
            data_transacao: '10/09/2024',
            valor_tranferencia: '200,00',
            descricao_pagamento: 'pagametno da internet'
        },
        {
            tipo_trasacao: 'pagar',
            data_transacao: '29/10/2024',
            valor_tranferencia: '21000,00',
            descricao_pagamento: 'entrada do new fiesta'
        }
    ]
}

var recebedor = {
    nome: 'Master Veículos',
    cnpj: '83.534.750/0001-70',
    chave_pix: 'contato@masterveiculos.com.br',
    historico_tracacao: [
        {
            tipo_trasacao: 'receber',
            data: '02/08/2024',
            valor_tranferencia: '8000,00',
            descricao_pagamento: 'pagamento Fiat Argo'
        }
    ]
}