import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


//tem que colocar no estado o tipo -> <aqui dentro o tipo>
//  usestate<Repository>  -> repository é um array
//  <repository[]>
export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);

    //quando mudar a variavel o useefect dispara a funcao e quando quer executar
    //quando a variavel repositories mudar ele dispara useefect dependencias
    // se [] vai executar uma uncia vez quando o componente for execibido em tela
    useEffect(() => { 
        fetch('https://api.github.com/users/fabiomicromais/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
//        .then(data => console.log(data))
    }, [repositories]);

    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {
                    //map()
                 //map retorna algo //para cada repositorio retorne ()   
                 // map(repository => ()) ou
                 // map(repository => <direto o html > )
                  //repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} /> )
                 //repositories.map(repository => (<RepositoryItem key={repository.name} repository={repository} /> ))
                
                repositories.map(repository => {
                    return <RepositoryItem key={repository.name}
                                    repository={repository} />
                                 } 
                   )}
            </ul>
        </section>

    );
}