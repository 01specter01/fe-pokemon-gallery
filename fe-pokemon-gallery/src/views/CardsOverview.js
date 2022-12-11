import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import CardsPreview from "../components/CardsPreview";

export default function () {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:9999/photos")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <Container>
            <h2 className="card-title">All Cards</h2>
            <Row>
                {cards.map((p, i) => (
                    <CardsPreview key={i} card={p} />
                ))}
            </Row>
        </Container>
    );
}
