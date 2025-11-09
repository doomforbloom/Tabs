let tabs = document.querySelectorAll("li");
let content = document.getElementById("content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        contentChange(tab.id);
    })
})

function contentChange(tabId)
{
    let tabClicked = document.getElementById(tabId);
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    tabClicked.classList.add("active");

    content.innerHTML = tabId + " Tab content to be displayed here.";
}