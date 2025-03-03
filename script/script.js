document.getElementById("blog").addEventListener("click", 
    function(event){
        event.preventDefault();
        window.location.href="./blog.html"

    }
)

document.getElementById("today-date").innerText = new Date().toDateString();

const colors = ['red', 'blue', 'black', 'purple', 'yellow', 'cyan'];
document.getElementById("color-btn").addEventListener("click", function(){
    document.body.style.backgroundColor = colors(Math.floor(Math.random()*colors.length));
})

let buttons = document.getElementsByClassName("completed");
let navCountElement = document.getElementById("nav-count");
let taskCountElement = document.getElementById("task-count");
let navCount = parseInt(navCountElement.innerText);
let taskCount = parseInt(taskCountElement.innerText);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        event.preventDefault();
        alert("Board updated successfully")
        
        document.getElementById("last-btn").addEventListener("click", function(){
            alert("Congrates!!! You have completed all the current task")
        })
        
        if( taskCount > 0){
            taskCount--;
            taskCountElement.innerText = taskCount;
        }

        navCount++;
        navCountElement.innerText = navCount;

        let CurrentTime = new Date().toLocaleTimeString();
    

        let textContainer = document.getElementById("fixed-text");

        let newDiv = document.createElement("div");
        newDiv.classList.add("p-2", "rounded-md", "mt-2", "bg-[#F4F7FF]");

        let newText = document.createElement("p");
        newText.innerText = `You have completed the task Fix Mobile  Button issue at ${CurrentTime}`;
        newDiv.append(newText);
        textContainer.appendChild(newDiv);

        document.getElementById("clear-btn").addEventListener("click", () => {
            document.getElementById("fixed-text").innerHTML = "";
        })

        this.disabled = true;

    }
    )
}


