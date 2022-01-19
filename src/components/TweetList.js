import React from "react";
import { Card, Button} from 'react-bootstrap';

// Redux
import { useSelector } from "react-redux";

const TweetList = () => {
    // en nuestro estado, primero entramos a tweets y a tweets
    const tweets = useSelector(state => state.tweets.tweets)

    return (
        tweets.map((t) => {
            return (
                <Tweet key={t.id} tweet={t}/>
            )
        })
    )

}

function Tweet(props) {
    const {tweet} = props;

    return (
        <Card className="mb-3 mt-3" >
            <Card.Body>
                <Card.Title>{tweet.name}</Card.Title>
                <Card.Text>{tweet.tweet}</Card.Text>
                <Button variant="danger">Eliminar Tweet</Button>
            </Card.Body>
            
        </Card>
    )
}

export default TweetList