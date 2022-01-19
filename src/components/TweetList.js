import React from "react";
import { Card, Button} from 'react-bootstrap';


// Redux
import { useSelector, useDispatch } from "react-redux";
import {deleteTweetAction} from '../actions/tweetsAction'

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
    const dispatch = useDispatch();

    // eliminar tweets del localStorage
    const deleteTweet = id => dispatch(deleteTweetAction(id));

    return (
        <Card className="mb-3 mt-3" >
            <Card.Body>
                <Card.Title>{tweet.name}</Card.Title>
                <Card.Text>{tweet.tweet}</Card.Text>
                <Button variant="danger" onClick={() => deleteTweet(tweet.id)} >Eliminar Tweet</Button>
            </Card.Body>
            
        </Card>
    )
}

export default TweetList