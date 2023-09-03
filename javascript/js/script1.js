class Veiculo {

    constructor() {
        this.id = 1;
        this.arrayVeiculos = [];
    }

    salvar() {
        let veiculo = this.lerDados();

        if(this.validarCampos(veiculo)) {
            this.adicionar(veiculo);
        }

        console.log(this.arrayVeiculos);
    }

    adicionar(veiculo){
        this.arrayVeiculos.push(veiculo);
        this.id++;
    }

    lerDados() {
        let veiculo = {}

        veiculo.id = this.id;
        veiculo.nomeVeiculo = document.getElementById('veiculo').value;
        veiculo.preco = document.getElementById('preco').value;

        return veiculo;
    }

    validarCampos(veiculo) {
        let msg = '';

        if(veiculo.nomeVeiculo == ''){
            msg += '- Informe o nome do Veículo \n';
        }

        if(veiculo.preco == '') {
            msg += '- Informe o Preço do Veículo \n';
        }
        
        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }

    cancelar() {
        
    }
}

var veiculo = new Veiculo()