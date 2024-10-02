
function clkgreen(btngreen,btngray){
    document.getElementById(btngreen).addEventListener('click',function(event){

        document.getElementById(btngreen).classList.add('bg-arrow');
        
        document.getElementById(btngray).classList.remove('bg-arrow');

    
    })
}

function clkgray(btngray,btngreen){
    document.getElementById(btngray).addEventListener('click',function(event){

        document.getElementById(btngray).classList.add('bg-arrow');
        
        document.getElementById(btngreen).classList.remove('bg-arrow');

    
    })
}


function  showElementById(id,page){

    document.getElementById(id).addEventListener('click',function(event){
        event.preventDefault();
    
        
        document.getElementById("donation-button-page").classList.add("hidden");
        document.getElementById("history-button-page").classList.add("hidden");
       
        document.getElementById(page).classList.remove("hidden");
    })

}

function donate(btnttn, total, input, title, modal) {
    document.getElementById(btnttn).addEventListener('click', function(event) {
        event.preventDefault();

        const totaldonation = parseInt(document.getElementById(total).innerText);
        const inputValue = document.getElementById(input).value.trim();
        const inputone = parseInt(inputValue);
        const mybalance = parseInt(document.getElementById("my-balance").innerText);

        if (inputValue === "" || isNaN(inputone) || inputone <= 0 || inputone > mybalance) {
            alert('Invalid donation amount. Please enter a valid number greater than 0 and within your balance.');
            document.getElementById(modal).classList.add("hidden");
            window.location.href="index.html";
            return;
        }

        document.getElementById(modal).classList.remove("hidden");

        const newbalance = totaldonation + inputone;
        const updatedBalance = mybalance - inputone;

        document.getElementById(total).innerText = newbalance;
        document.getElementById("my-balance").innerText = updatedBalance;

        const titleText = document.getElementById(title).innerText;
        const date = new Date().toLocaleString();

        document.getElementById("history-div").innerHTML += `
        <div class="abcd">
            <div class="w-10/12 h-[150px] mt-5 mx-auto border-2 border-gray-400">
                <div class="w-11/12 mx-auto mt-5">
                    <p class="font-semibold text-lg">${inputone} Taka is Donated for ${titleText}</p>
                    <div class="mt-5 bg-slate-200 rounded-3xl">
                        <p class="p-2 py-2 text-sm">Date: ${date}</p>
                    </div>
                </div>
            </div>  
        </div>`;
    });
}