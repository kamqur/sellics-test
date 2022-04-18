import axios from "axios";

const {REACT_APP_ACCESS_KEY} = process.env

const getRandomImage = () => {
    return  axios.get(
        `https://api.unsplash.com/photos/random/?client_id=${REACT_APP_ACCESS_KEY}`
      );
}

export {getRandomImage};
