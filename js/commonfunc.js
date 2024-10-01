


function donate(btnttn, total, input,title,modal) {
    document.getElementById(btnttn).addEventListener('click', function(event) {
        event.preventDefault();


        const totaldonation = parseFloat(document.getElementById(total).innerText);
        const inputone = parseFloat(document.getElementById(input).value);
        const mybalance = parseFloat(document.getElementById("my-balance").innerText);
        // Check for invalid input
        if (inputone <= 0 || inputone > mybalance) {
            document.getElementById(modal).classList.add("hidden");
            alert('Invalid donation amount.');
            return;
        }
        else{
            document.getElementById(modal).classList.remove("hidden");
        }
        

        const newbalance = totaldonation + inputone;
        const updatedBalance = mybalance - inputone;

        document.getElementById(total).innerText = newbalance;
        document.getElementById("my-balance").innerText = updatedBalance;

        const titleText=document.getElementById(title).innerText;
        const date=new Date();
        document.getElementById("history-div").innerHTML += `
        <div class="w-10/12 h-[150px] mt-5  mx-auto border-2 border-gray-400">
        <div class="w-11/12 mx-auto mt-5">
        <p class="font-semibold text-lg">${inputone} Taka is Donated for ${titleText}</p>
            <div class="mt-5 bg-slate-200 rounded-3xl">
             <p class="p-2 py-2 text-sm">Date: ${date}</p>
        </div>
            
            </div>
            
        </div>
        `;
      
;
    });
}

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