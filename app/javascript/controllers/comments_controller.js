import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log("Got here");
    event.preventDefault();
    event.stopPropagation();
    const formID = event.params["form"];
    const form = document.getElementById(formID);
    form.classList.toggle("d-none");
    const commentBodyID = event.params["body"];
    const commentBody = document.getElementById(commentBodyID);
    commentBody.classList.toggle("d-none");
  }
}
