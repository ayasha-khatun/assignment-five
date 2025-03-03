document.getElementById("blog").addEventListener("click", 
    function(event){
        event.preventDefault();
        window.location.href="./blog.html"

    }
)

document.getElementById("today-date").innerText = new Date().toDateString();

const colors = ['red', 'blue', 'black', 'purple', 'yellow', 'cyan', '#F4F7FF'];
document.getElementById("color-btn").addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
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
        
        if( taskCount > 0){
            taskCount--;
            taskCountElement.innerText = taskCount;
        }

        navCount++;
        navCountElement.innerText = navCount;
        let CurrentTime = new Date().toLocaleTimeString();

        let titleTask = this.closest(".card-body").querySelector("h2").innerText;
    

        let textContainer = document.getElementById("fixed-text");

        let newDiv = document.createElement("div");
        newDiv.classList.add("p-2", "rounded-md", "mt-2", "bg-[#F4F7FF]");

        let newText = document.createElement("p");
        newText.innerText = `You have completed the task "${titleTask}" at ${CurrentTime}`;
        newDiv.append(newText);
        textContainer.appendChild(newDiv);

        document.getElementById("clear-btn").addEventListener("click", () => {
            document.getElementById("fixed-text").innerHTML = "";
        })

        this.disabled = true;


        let allDisabled = true;
        for(let j = 0; j < buttons.length; j++){
            if(!buttons[j].disabled){
                allDisabled = false;
        }
        }
        if(allDisabled){
            alert("Congrates!!! You have completed all the current task")
        }

    }
    )
}


