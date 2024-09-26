function dynamicDate() {
    const day = new Date().getFullYear();
    document.getElementById("foot").innerHTML = "Copyright &copy " + day + " Rodney Takunda Madondo" ;
}
let projects = [
    {
        id:1,
        img:"./images/signup.jpg",
        title:"Newsletter Sign-up form",
        desc:`Responsive HTML/CSS layout, designs obtained from frontendmentor.Utilizing HTML5 and CSS3 (SCSS) and Vanilla JavaScript for form validation and dynamic image source switching.`,
        livelink:"https://rodneytakundamadondo.github.io/Newsletter-sign-up-form-with-success-message/",
        github:"https://github.com/RodneyTakundaMadondo/Newsletter-sign-up-form-with-success-message.git"
    },
    {
        id:2,
        img:"./images/fourfeature.jpg",
        title:"Four-card-feature-section",
        desc:`Responsive HTML/CSS layout, designs obtained from frontendmentor.Utilizing HTML5 and CSS3 (SCSS)`,
        livelink:"https://rodneytakundamadondo.github.io/Four-card-feature-section/",
        github:"https://github.com/RodneyTakundaMadondo/Four-card-feature-section.git"
    },
    {
        id:3,
        img:"./images/manage-landing.png",
        title:"Manage landing page",
        desc:`Responsive HTML/CSS layout, designs obtained from frontendmentor.Utilizing HTML5 and CSS3 (SCSS)`,
        livelink:"https://rodneytakundamadondo.github.io/Manage-Landing-Page-Master/",
        github:"https://github.com/RodneyTakundaMadondo/Manage-Landing-Page-Master.git"
    },
    {
        id:4,
        img:"./images/e-com.png",
        title:"E Commerce Product Page",
        desc:`Responsive HTML/CSS layout, designs obtained from frontendmentor.Utilizing HTML5 and CSS3 (SCSS)`,
        livelink:"https://rodneytakundamadondo.github.io/E-commerce-product-page/",
        github:"https://github.com/RodneyTakundaMadondo/E-commerce-product-page.git"
    }
]

let projectContainer  = document.querySelector(".projects__container");

window.addEventListener("DOMContentLoaded", ()=>{
    let mappedArray = projects.map((item)=>{
        return `
        <div class="projects__project-container " >
                    <div class="project">
                        <div class="project__image">
                            <img src="${item.img}" alt="Screenshot of project">
                        </div>
                        <h3 class="project__heading fc">${item.title}</h3>
                        <p class="project__description fcp">
                           ${item.desc}
                        </p>
                        <div class="button__container">

                            <a class="project__live-btn fc" target="_blank" href="${item.livelink}">Live Preview</a>
                            <a class="project__git-btn fc" target="_blank" href="${item.github}">Github</a>
                        </div>
                    </div>
                </div>
        
        `
    }).join("");
    projectContainer.innerHTML = mappedArray;
})