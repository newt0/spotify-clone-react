import React, { useEffect } from "react";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
// import { DataLayer } from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // const [DataLayer, dispatch] = useDataLayerValue();
  // {user} === Datalayer.user

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
          // user: DataLayer.user,
        });
      });
    }

    // console.log("_token>>>", _token);
  }, [user, token, dispatch]);

  console.log("user from DataLayer>>>", user);
  console.log("token from DataLayer>>>", token);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
