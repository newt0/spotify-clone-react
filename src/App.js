import React, { useState, useEffect } from "react";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      console.log("user>>>", user);
    });
    console.log("_token>>>", _token);
  }, [token]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
