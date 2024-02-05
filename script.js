console.log('%cFLOOD, SPAM ou SCAM será ignorado!', 'color: red; font-size: 16px; font-weight: bold;');

  // Discord - SPAM ou Flood ignorado

  function enviarFormulario() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var emailContato = document.getElementById('emailContato').value;
    var url = document.getElementById('url').value;
    var mensagem = document.getElementById('mensagem').value;
    var sistemaOperacional = document.getElementById('sistemaOperacional').value;
    var tipoURL = document.getElementById('tipoURL').value;
    var arquivo = document.getElementById('arquivo').files[0];

    // Verificar se os campos obrigatórios estão vazios
    if (nomeCompleto === '' || emailContato === '' || url === '' || mensagem === '' || sistemaOperacional === '' || tipoURL === '' || arquivo === undefined) {
        alert('Todos os campos são obrigatórios. Preencha-os corretamente.');
        return;
    }

    // Verificar se a mensagem não está vazia
    if (mensagem.trim() === '') {
        alert('A mensagem não pode estar vazia. Preencha-a corretamente.');
        return;
    }

    // Criar objeto JSON com todas as informações
    var dados = {
        content: `Nome Completo: ${nomeCompleto}\nEmail de Contato: ${emailContato}\nURL: ${url}\nMensagem: ${mensagem}\nSistema Operacional: ${sistemaOperacional}\nTipo de URL: ${tipoURL}`,
    };

    // Adicionar o arquivo ao objeto FormData
    var formData = new FormData();
    formData.append('file', arquivo);

    // Adicionar as informações do formulário como um campo 'payload_json'
    formData.append('payload_json', JSON.stringify(dados));

    var requestOptions = {
        method: 'POST',
        body: formData,
    };

    var webhookURL = 'https://discord.com/api/webhooks/1197529126836391946/IYQNdtmDnCZ9M3xvXeH2NiCGhLzW8s4FBe5PVGxGxwrSqkOikMcWzwpfMI0j4o00Mt2d';

    fetch(webhookURL, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do webhook:', data);
            alert('Formulário enviado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar para o webhook:', error);
            alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
        });

    document.getElementById('srdpForm').reset();
}
