async function loadUser(){
    const response = await fetch("namaste/bank.user.json");
    console.log(response)
}
document.addEventListener("DOMContentLoaded", async () =>{
    let user = [];
    try {
        user =  await loadUser();
    }
    catch (e){
        console.log("error" );
        console.log(e);
    }
    console.log(user);
});