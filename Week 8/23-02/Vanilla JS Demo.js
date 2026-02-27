// User Interaction

// Handling Elements
    // Read Element
    // querySelector() - to read any element of HTML through JS
    let element = document.querySelector('#hd')
    let button = document.querySelector("button")

    // Attach Event Handler
    // element - Object contains all the functions to manipulate the element

    button.addEventListener('click',()=>{
        element.textContent = "Hello"
        element.style.color = "Red"
        element.style.fontSize= "4rem"
    })

    // Read all elements of the form
    let form = document.querySelector('form')
    let user = document.querySelector('#un')
    let pass = document.querySelector('#pwd')
    let submit = document.querySelector('#sb')

    // Add form submit event listener to button

    submit.addEventListener("click",(e)=>{
        // Stop Auto Page Reloading
        e.preventDefault()
        // Read Values of Input elements
        let username = user.value
        let password = pass.value
        console.log({username,password})
    })

    // to create child classes dynamically

    let createChild = document.querySelector(".child")
    let parent = document.querySelector('.parent')

    createChild.addEventListener("click",()=>{
        // Create new Para element
        let newElement = document.createElement('p')
        // Add Text Content
        newElement.textContent = "Child"
        // Append to parent
        parent.appendChild(newElement)
    })