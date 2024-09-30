

// function donate(btnttn,total,input){

//     document.getElementById(btnttn).addEventListener('click',function(event){

//         event.preventDefault();
    
//         const totaldonation=parseFloat(document.getElementById(total).innerText);
    
//         const inputone=parseFloat(document.getElementById(input).value);
        
//         const mybalance=parseFloat(document.getElementById("my-balance").innerText)-inputone;
    
//         const newbalance=totaldonation+inputone;
    
//         document.getElementById("total").innerText=newbalance;
    
//         document.getElementById("my-balance").innerText=mybalance;
    
//     });

// }


function donate(btnttn, total, input) {
    document.getElementById(btnttn).addEventListener('click', function(event) {
        event.preventDefault();

        const totaldonation = parseFloat(document.getElementById(total).innerText) || 0;
        const inputone = parseFloat(document.getElementById(input).value) || 0;
        const mybalance = parseFloat(document.getElementById("my-balance").innerText) || 0;

        // Check for invalid input
        if (inputone <= 0 || inputone > mybalance) {
            alert('Invalid donation amount.');
            return;
        }

        const newbalance = totaldonation + inputone;
        const updatedBalance = mybalance - inputone;

        document.getElementById(total).innerText = newbalance;
        document.getElementById("my-balance").innerText = updatedBalance;
    });
}

