let services = {
    ControleAcesso: {
        title: 'Controle de acesso',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    },
    SistemaMonitoramento: {
        title: 'Sistema de Monitoramento',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    },
    RedesCabeadasWireless: {
        title: 'Redes Cabeadas e Wireless',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    },
    Automação: {
        title: 'Automação',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    },
    Informática: {
        title: 'Informática',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    },
    Serviço6: {
        title: 'Serviço 6',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure tempora, dolor fuga nemo deserunt error pariatur debitis beatae'
    }
}

function modal(service) {
    let title = document.getElementById('title-modal')
    let text = document.getElementsByClassName('texts-modal')
    console.log(services[service])

    title.innerText = services[service]['title']
    text[0].innerText = services[service]['text']
}
