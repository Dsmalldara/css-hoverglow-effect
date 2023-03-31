const container = document.getElementById("light-container")
const light = document.getElementById("light")

const animationOptions = {
    duration: 5000,
    iterations: 1
}

container.onmouseover = () => {
    console.log("Mouse on")
    light.style.display = "block"
    container.onmousemove = (event) => {
        console.log(event.offsetY)
        light.animate({
            top: event.offsetY.toString()+"px"
        }, animationOptions)
    }
}

container.onmouseleave = () => {
    light.style.display = "none"
}