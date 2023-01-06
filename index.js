import axios from "axios";

const ENDPOINT = "http://localhost:3000/api/event";

class Trakker {
  #apiKey;

  constructor(api_key) {
    this.#apiKey = api_key;
  }

  initialize() {
    const _this = this;
    const apiCall = (e) => {
      axios.post(ENDPOINT, {
        api_key: _this.#apiKey,
        event_type: e,
      });
    };

    window.addEventListener("load", () => {
      apiCall("page_view");
    });

    window.addEventListener("error", () => {
      apiCall("error");
    });

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((b) =>
      b.addEventListener("click", () => {
        apiCall("click");
      })
    );

    const allAnchors = document.querySelectorAll("button");
    allAnchors.forEach((b) =>
      b.addEventListener("click", () => {
        apiCall("link_click");
      })
    );
  }
}

export default Trakker;
