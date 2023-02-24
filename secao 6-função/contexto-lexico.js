const valor = 'global'

function minhaFun(){
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFun()
}
exec()