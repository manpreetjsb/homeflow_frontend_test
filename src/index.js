import "./styles.scss";

const rootDiv = document.querySelector("#app");
rootDiv.innerHTML = `<input type='text' id="search" placeholder="M14 5JE, BN1" /><input id="btn" type="button" value="Search" />`;

var submitButton = document.getElementById("btn");

function submitBtnFunction() {
  let searchText = document.getElementById("search").value;
  submitSearch(searchText);
}

submitButton.addEventListener("click", submitBtnFunction);

const submitSearch = (searchText) => {
  fetch("/api/properties?location=brighton")
    .then((response) => response.json())
    .then((json) => {
      const data = json.result.properties.elements;
      if (searchText) {
        let newData = data.filter((item) =>
          item.postcode.includes(searchText.toUpperCase())
        );
        console.log(newData.length);
        show(newData);
      } else {
        show(data);
      }

      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      document.querySelector("#app").innerHTML =
        "<p>Something went wrong. Check the console for details.</p>";
    });
};

function show(data) {
  let tab = `<p><table><tr>
          <th>Image</th>
          <th>Price</th>
          <th>Property Type</th>
          <th>Description</th>
         </tr>`;

  for (let r of data) {
    tab += `<tr style="background: #d6d6d6;"> 
    <td><img src="http://mr0.homeflow.co.uk/${r.photos[0]}" /></td> 
    <td>${r.price} </td>
    <td>${r.property_type}</td>
    <td>${r.short_description} <p>${r.postcode}</p></td>          
  </tr>`;
  }
  tab += `</table></p>`;

  rootDiv.innerHTML += tab;
}
