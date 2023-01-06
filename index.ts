import axios from "axios";

const ENDPOINT = "http://localhost:3000/api/event";

export default class Trakker {
  #apiKey: string;

  constructor(api_key: string) {
    this.#apiKey = api_key;
  }

  initialize() {
    const _this = this;
    const apiCall = (e: string) => {
      axios.post(ENDPOINT, {
        api_key: _this.#apiKey,
        event_type: e,
      });
    };

    window.addEventListener("load", (e) => {
      if (!localStorage.getItem("visited")) {
        localStorage.setItem("visited", "true");
        apiCall("first_visit");
      }

      if (!document.referrer.includes(location.origin))
        apiCall("session_start");

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

    const allAnchors = document.querySelectorAll("a[href]");
    allAnchors.forEach((b) =>
      b.addEventListener("click", () => {
        apiCall("link_click");
      })
    );
  }
}
