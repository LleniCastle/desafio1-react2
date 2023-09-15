import { Container } from "react-bootstrap";

export default () => {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100 ">
            <div>
                <h1 className="pt-5 text-center">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
                <h6 className="text-center">El lugar de los pasteles felices</h6>
                <p className="text-center display-1">🎂</p>
            </div>
        </Container>
    );
}
