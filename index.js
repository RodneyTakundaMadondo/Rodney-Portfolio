function dynamicDate() {
    const day = new Date().getFullYear();
    document.getElementById("foot").innerHTML = "Copyright &copy " + day + " Rodney Takunda Madondo" ;
}