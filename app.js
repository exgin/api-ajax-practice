const $searchVal = $('#searchInput'); // good practice to make jQuery variables start with a $
const $resultsDiv = $('#results');
const $delete = $('#delete');

$('#searchBtn').on('click', function(e) {
  e.preventDefault();

  getData();
});

// doing anything with the api data, pass in res
function makeGif(res) {
  let results = res.data.length;
  if (results) {
    let randomGif = Math.floor(Math.random() * results);
    let $newImg = $('<img>', { class: 'col-md-6', src: res.data[randomGif].url });
    $resultsDiv.append($newImg);
  }
}

async function getData() {
  let valueSearched = $searchVal.val();
  $searchVal.val('');

  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: { q: valueSearched, api_key: 'mRI58yx89DnnbGaDvUmr9oObLRhltmwT' }
  });
  console.log(res);

  makeGif(res.data);
}

function removeGif() {
  $delete.on('click', function(e) {
    $resultsDiv.empty();
  });
}
removeGif();
