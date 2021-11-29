let postlayout = document.getElementById('post-layout')

function getposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        let html = "";

        localStorage.setItem("data", JSON.stringify(data))
        data.forEach(e => {
            html += `
            <div class="col-md-4 mb-3">
                <div class="card" style = "border: 4px solid red; background-color:  #FAF9F6">
                    <div class="card-body" style="height: 250px;">
                        <div class="d-flex justify-content-end">
                        <h5 class="mx-2 fw-bold text-danger">${e.id}</h5>
                        </div>

                        <h5 class="post-title mb-4">${e.title}</h5>
                        <p class="post-body">${e.body}</p>
                    </div>
                    <div class="text-center pt-1 pb-2">
                        <button id="click" onclick="pagePost(event)" class="btn btn-danger" data-id=${e.id}>VIEW POST</button>
                    </div>
                </div>
            </div>
            `
            postlayout.innerHTML =  html;

        });
    })
}


function pagePost(e) {
    let dataId = e.target.getAttribute("data-id")
    window.location = `./display.html?id=${dataId}`
}
getposts();
