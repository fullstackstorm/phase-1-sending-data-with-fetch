function submitData(name, email) {
  const newBody = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newBody),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((data) => appendIdToDOM(data))
    .catch((error) => appendErrorToDOM(error.message));
}

function appendIdToDOM(data) {
  const newElement = document.createElement("p");
  const newContent = document.createTextNode(data.id);
  newElement.appendChild(newContent);
  document.body.appendChild(newElement);
}

function appendErrorToDOM(error) {
  const newElement = document.createElement("p");
  const newContent = document.createTextNode(error);
  newElement.appendChild(newContent);
  document.body.appendChild(newElement);
}
