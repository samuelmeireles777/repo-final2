
   
    emailjs.init('8xfpz--fBS5n6LQgb'); 

    
    const formulario = document.getElementById("contatosend");

    
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const verificaremail = document.getElementById("emailcontato").value;
        const nome = document.getElementById("nomecontato").value;
        const mensagem = document.getElementById("mensagemconteudo").value;

        
        if (!nome || !verificaremail || !mensagem) {
            const confirmacao = document.getElementById("confirmacaomensagem");
            confirmacao.textContent = "Por favor, preencha todos os campos.";
            confirmacao.style.color = "red";
            return;
        }

        // Montar o objeto com os dados do formulário
        const formdata = {
            name: nome,
            email: verificaremail,
            message: mensagem,
        }

        // Enviar o e-mail usando EmailJS
        emailjs
            .send('service_rev18go', 'template_z20gsjj', formdata) // Substitua pelos seus IDs
            .then(function(response) {
                console.log('Mensagem enviada com sucesso!', response.status, response.text);
                const confirmacao = document.getElementById("confirmacaomensagem");
                confirmacao.textContent = "EMAIL ENVIADO COM SUCESSO!";
                confirmacao.style.color = "green";
                formulario.reset(); // Limpar o formulário após o envio
            })
            .catch(function(error) {
                console.error('Erro ao enviar o e-mail:', error);
                const confirmacao = document.getElementById("confirmacaomensagem");
                confirmacao.textContent = "Erro ao enviar a mensagem. Tente novamente.";
                confirmacao.style.color = "red";
            });
    });
