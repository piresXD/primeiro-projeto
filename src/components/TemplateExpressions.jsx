const TemplateExpressions = () => {
   let nome = "Meu nome"
   let aluno = {
    nome:"Lil Peter",
    turma:"c",
    ano:"2"
   }

    return( 
        <div>
            <h1>Olá {nome} </h1>
            <h2>o aluno {aluno.nome} está no {aluno.ano}° ano,na turma {aluno.turma}</h2>
        </div>     
   )
}

export default TemplateExpressions

