function CadastroArray(){
    let alunos = [
        {
            "matricula": "13454",
            "nome": "Nicholas Pietro",
            "dt_nasc": "07/11/2006",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "14446",
            "nome": "Gabriel Duarte",
            "dt_nasc": "08/10/2007",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "14433",
            "nome": "Breno Vaz",
            "dt_nasc": "12/06/2005",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "12335",
            "nome": "Ruan Cauan",
            "dt_nasc": "08/01/2005",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "13306",
            "nome": "Agatha Cristiny",
            "dt_nasc": "27/03/2007",
            "curso": "Informática",
            "genero": "Feminino"
        }
    ];

    let cadastro = {
        "matricula": document.getElementById("matricula").value ,
        "nome": document.getElementById("nome").value ,
        "dt_nasc": document.getElementById("dt_nasc").value ,
        "curso": document.getElementById("curso").value ,
        "genero": document.getElementById("genero").value 
    }

    alunos.push(cadastro);

    let filterGenero = alunos.filter(cadastro => cadastro.genero == "Feminino");
    console.log(filterGenero);

    let filterCursoESExo = alunos.filter(cadastro => cadastro.curso == "Informática" && cadastro.genero == "Masculino");
    console.log(filterCursoESExo);

    let filterMatricula = alunos.filter(cadastro => cadastro.matricula > 100);
    console.log(filterMatricula);
}