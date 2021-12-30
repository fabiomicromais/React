const repositoryName = '{conteudo da variavel dentro do html usa } '

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <li>
                    <strong>{repositoryName } </strong>
                    <p>descrição do repositorio</p>
                    <a href="#">link do repositorio</a>
                </li>
                <li>
                    <strong>Nome do repositorio</strong>
                    <p>descrição do repositorio</p>
                    <a href="#">link do repositorio</a>
                </li>
                <li>
                    <strong>Nome do repositorio</strong>
                    <p>descrição do repositorio</p>
                    <a href="#">link do repositorio</a>
                </li>
            </ul>
        </section>

    );
}