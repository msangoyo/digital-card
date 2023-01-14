import React from "react"

function MainContent() {
    return (
        <main className="wrapper">
            <div className="container">
                <div className="pic-container">
                    <img src="img1.jpg" className="profpic"></img>
                </div>
                <div className="main-content">
                
                <div className="contact-container">
                    <p className="contact-name">Mark Angelo Sangoyo</p>
                    <p className="contact-occ">Frontend Developer</p>
                    <a href="#" className="contact-email">marksangoyo@website.com</a><br></br>
                    <button href="gmail.com"className="contact-button"><i class="bi bi-envelope"></i>
                    Email</button>
                </div>
                <div className="info-container">
                    <p className="info-container-about">About</p>
                    <p className="info-container-about-cont">I'm an aspiring developer who's not passionate about learning about programming. Loves to create schedules for the day but ends up not following them. Always rush things, then end up regretting it in the end.  </p>
                    <p className="info-container-interests">Interest</p>
                    <p className="info-container-interests-cont">Loves to sleep but can't sleep. Plays alot of online games. Not a coffee lover but I enjoy drinking coffee. A slave of dumbbells and back workout. Jack-of-no-trades</p>
                </div>

                <div className="icons-container">
                    <button><i class="bi bi-twitter"></i></button>
                    <button><i class="bi bi-facebook"></i></button>
                    <button><i class="bi bi-instagram"></i></button>
                    <button><i class="bi bi-linkedin"></i></button>
                    <button><i class="bi bi-github"></i></button>
                </div>
                

                </div>
            </div>
        </main>
    )
}

export default MainContent;