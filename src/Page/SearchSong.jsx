import React, { useState, useEffect } from "react";
import NavBar from "../Component/NavBar";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function SearchSong() {
  const [artist, setArtist] = useState("drake");
  const [song, setSong] = useState("God's plan");

  const handleSubmit = (event) => {
    event.preventDefault();
    setArtist(event.target.Artist.value);
    setSong(event.target.Song.value);
    console.log(artist);
    console.log(song);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/searchtrack.php?s=${artist}&t=${song}`
      )
      .then((response) => console.log(response.data));
  });
  return (
    <Container>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Label>Song</Form.Label>
        <Form.Control id="Song" type="text" placeholder="Enter Song" />
        <Form.Label>Artist</Form.Label>
        <Form.Control
          id="Artist"
          type="text"
          placeholder="Enter Artist's name"
        />
        <Button type="Submit" href={`/Artist-Song/${artist}/${song}`}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchSong;
