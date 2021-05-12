const viewAboutApplication = () =>{
    appContainer.classList.add("full__container")
    const aboutContent = (`
        <div class="about__container">
            <div>
                <h1>About the project</h1>
                <p>This project is designed and developed by <strong class="author">Ayodele Samuel Adebao (unclebigbay)</strong></p>
                <p>
                    This project is intended to be an educational material for <strong class="strong__words">myself</strong> and 
                    also to <strong class="strong__words">anyone</strong> who is interested in learn learning with or through it.

                    Kindly note that the payment gateway integrated in this project is not fake, 
                    be mindful while testing with real <strong class="strong__words">ATM</strong>.
                    You can proceed to make real payment if you wish to support me through it.
                </p>
                <section class="social__icons">
                    <a href="https://twitter.com/unclebigbay143"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://unclebigbay.hashnode.dev/"><i class="fas fa-hashtag"></i></a>
                    <a href="https://www.linkedin.com/in/ayodele-samuel-ayodele-55902819a/"><i class="fab fa-linkedin"></i></a>
                    <div><i></i></div>
                </section>
            </div>
        </div>
    `)
    appContainer.innerHTML = aboutContent;
};