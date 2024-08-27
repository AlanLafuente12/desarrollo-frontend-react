const LandingPage = () => {
    return (
        <>

            <div className="header">
                Modulo 7: <strong>DESARROLLO FRONTEND CON REACTJS</strong>
            </div>

            <div className="container-landing">
                <h1 className="section-title">
                    <b>Bienvenido</b>
                </h1>
                <p className="section-text">Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>

                
                <h1 className="section-title">
                    <b>Temas Cubiertos</b>
                </h1>

                <div className="topics">
                    <div className="topic-item">Componentes funcionales y de clase</div>
                    <div className="topic-item">Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></div>
                    <div className="topic-item">Creación de <strong>custom hooks</strong> como <strong>useForm</strong></div>
                    <div className="topic-item">Gestión de variables de estado con <strong>useState</strong></div>
                    <div className="topic-item">Gestión de estado global con <strong>Redux</strong></div>
                    <div className="topic-item">Integración de <strong>Redux</strong> con <strong>React</strong></div>
                    <div className="topic-item">Manejo de <strong>Formularios</strong> en <strong>React</strong></div>
                    <div className="topic-item">Publicando nuestra <strong>Pagina</strong> con <strong>GitHub Pages</strong></div>
                </div>

                <h1 className="section-title">
                    <b>Recursos Adicionales</b>
                </h1>

                <div className="content-maqueta">
                    <p className="section-text">Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
                </div>
            </div>

            <div className="footer">
                © 2024 Modulo 7. USIP.
            </div>

        </>
    );
}
export default LandingPage;