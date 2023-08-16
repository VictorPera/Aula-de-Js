function validarTelefone(telefone) {
    // Formato esperado: (0XX)9XXXX-XXXX
    const regex = /^\(\d{2}\)9\d{4}-\d{4}$/;
    return regex.test(telefone);
}

function validarCEP(cep) {
    // Formato esperado: XXXXX-XXX
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep);
}

function validarCPF(cpf) {
    // Formato esperado: XXX.XXX.XXX-XX
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

function validarFormulario() {
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const cpf = document.getElementById('cpf').value;

    if (!validarTelefone(telefone)) {
        alert('Telefone inválido! Use o formato (0XX)9XXXX-XXXX');
        return false;
    }

    if (endereco.trim() === '') {
        alert('Endereço é obrigatório!');
        return false;
    }

    if (!validarCEP(cep)) {
        alert('CEP inválido! Use o formato XXXXX-XXX');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido! Use o formato XXX.XXX.XXX-XX');
        return false;
    }

    return true;
}