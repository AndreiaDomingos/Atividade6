class Estudante{

constructor(nome,email,RA,curso,disciplinas){
this.nome = nome
this.email = email
this.RA = RA
this.curso = curso
this.disciplinas = disciplinas
}

primeiraDisciplina(){
return this.disciplinas[0]

}
ultimaDisciplina(){
return this.disciplinas[this.disciplinas.length-1]
}

}

let estudante1 = new Estudante("Andreia","andreia.@fatec.com",10502323023,"ADS",["A","B","C"])
let estudante2 = new Estudante("Ana","ana@fatec.com",10502323021,"GE",["E","F","M"])

console.log(estudante1.primeiraDisciplina(),estudante1.ultimaDisciplina())
console.log(estudante2.primeiraDisciplina(),estudante2.ultimaDisciplina())
