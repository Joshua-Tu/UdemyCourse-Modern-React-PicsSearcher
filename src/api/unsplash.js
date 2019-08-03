import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID c7969a316d0085dcc7532e142a660d0b875f1124192c7b37e96bfdeb48063d4c"
  }
});
