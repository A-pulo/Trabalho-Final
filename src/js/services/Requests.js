import Funcionario from '../models/Funcionario';

class Request {
    constructor(){}
    //Não deu certo :/
    post(Funcionario) {
        var xhttp = new XMLHttpRequest();
        var employee = {
            name: Funcionario.nome ,
            salary: Funcionario.salario ,
            age: Funcionario.idade ,
            profile_image: Funcionario.imagem
        };
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log(response);
            }
        };
        xhttp.open("POST", "http://rest-api-employees.jmborges.site/api/v1/create", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(employee));
        console.log(JSON.stringify(employee));
    }

    get() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log (response.data)
                return response.data;
            }
        };
        xhttp.open("GET", "http://rest-api-employees.jmborges.site/api/v1/employees", true);
        xhttp.send();
    }

    get(Funcionario) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = Object.values(JSON.parse(this.responseText));
                return response.data;
            }
        };
        xhttp.open("GET", "http://rest-api-employees.jmborges.site/api/v1/employee/"+Funcionario.id, true);
        xhttp.send();
    }

    put(Funcionario){
        var xhttp = new XMLHttpRequest();
        var employee = {
            name: Funcionario.nome ,
            salary: Funcionario.salario ,
            age: Funcionario.idade ,
            profile_image: Funcionario.imagem
        };
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log(response.data);
            }
        };
        xhttp.open("PUT", "http://rest-api-employees.jmborges.site/api/v1/update/"+Funcionario.id, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(employee));
        console.log(JSON.stringify(employee));
    }

    delete(Funcionario){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                console.log(response.data);
            }
        };
        xhttp.open("DELETE", "http://rest-api-employees.jmborges.site/api/v1/delete/"+Funcionario.id, true);
        xhttp.send();
    }
}

export default Request;