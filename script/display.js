function getItem(id) {
    let local_data = JSON.parse(localStorage.getItem("data"))

    let copied_data = local_data.find(function(inti) {
        return inti.id === id;
    });

    return copied_data;
}
function singlePost() {
    const selectId = parseInt(new URLSearchParams(window.location.search).get('id'));
    console.log("selectId:", selectId);
    let item = getItem(selectId);

    document.querySelector(".numb_post").textContent = item.id;
    document.querySelector(".post-title").textContent = item.title;
    document.querySelector(".post-body").textContent = item.body

}

singlePost()
