const panels = document.querySelectorAll(".panel")
// querySelectorAll puts all the panels into a node list almost like an array.
panels.forEach((panel) => {
 panel.addEventListener("click", () => {
    removeActiveClasses()
    panel.classList.add("active")
 })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove("active")
    })
}