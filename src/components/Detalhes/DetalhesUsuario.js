import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

function DetalhesUsuario() {

    const { codigo } = useParams();
    const [usuario, setUsuario] = useState()

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${codigo}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if(dados.data) {
                setUsuario({
                    id: dados.data.id,
                    nome: dados.data.first_name,
                    sobrenome: dados.data.last_name,
                    email: dados.data.email,
                    foto: dados.data.avatar
                })
            }
        })
    }, [codigo/*dependência do id, pois deve ser re-renderizado sempre que o id mudar*/])

    if(usuario !== undefined) {
        return <>
            {/* {console.log("Agora achou o usuario")} */}
            <h1>{usuario.nome} {usuario.sobrenome}</h1>
            <img src={usuario.foto} alt={usuario.nome}/>
            <p>{usuario.email}</p>
            <Link to="/usuarios">Voltar</Link>
        </>
    }

    return <>
        {/* {console.log("Está imprimindo não encontrado")} */}
        <h1>ID: {codigo}</h1>
        <p>Usuario não encontrado!</p>
        <Link to="/usuarios">Voltar</Link>
    </>
}

export default DetalhesUsuario