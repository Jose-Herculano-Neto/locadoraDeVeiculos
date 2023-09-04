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

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayVeiculos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_veiculos = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayVeiculos[i].id;
            td_veiculos.innerText = this.arrayVeiculos[i].nomeVeiculo;
            td_valor.innerText = this.arrayVeiculos[i].preco;
            

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';            

            let imgApagar = document.createElement('img');
            imgApagar.src = 'img/apagar.png';
            imgApagar.setAttribute("onclick", "veiculo.deletar("+ this.arrayVeiculos[i].id +")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgApagar);

        }
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
        document.getElementById('veiculo').value = '';
        document.getElementById('preco').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayVeiculos.length; i++) {
            if(this.arrayVeiculos[i].id == id) {
                this.arrayVeiculos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
        
    }
}

var veiculo = new Veiculo();