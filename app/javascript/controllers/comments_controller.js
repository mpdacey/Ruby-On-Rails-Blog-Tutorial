import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    event.preventDefault();
    event.stopPropagation();
    const formID = event.params["form"];
    const form = document.getElementById(formID);
    form.classList.toggle("d-none");
    form.classList.toggle("mt-5");
    const commentBodyID = event.params["body"];
    const commentBody = document.getElementById(commentBodyID);
    commentBody.classList.toggle("d-none");
    const commentEditID = event.params["edit"];
    const commentEditButton = document.getElementById(commentEditID);
    this.toggleEditButton(commentEditButton);
  }

  toggleEditButton(editButton) {
    editButton.classList.toggle("btn-warning");
    editButton.classList.toggle("btn-secondary");
    if (editButton.classList.contains("btn-warning")) {
      editButton.innerText = "Edit";
    } else {
      editButton.innerText = "Cancel";
    }
  }
}
