import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function () {
    const navigate = useNavigate();
    const { cardId } = useParams();

    const [card, setCard] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:9999/cards/${cardId}`)
            .then((response) => response.json())
            .then((data) => setCard(data));
    }, [photoId]);

    const clickHandler = () => {
        fetch(`http://127.0.0.1:9999/cards/${cardId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.status === 202) {
                navigate("/cards");
            }
        });
    };

    return (
        <Container>
            <Row className="m-3">
                <Col>
                    <div className="card-container">
                        <img src={card.url} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button onClick={clickHandler}>Delete</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
