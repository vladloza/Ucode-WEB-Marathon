const images = ["assets/images/Terminator1.jpeg", "assets/images/Terminator2.jpeg", "assets/images/Terminator3.jpeg"];
const films = [
    ["The Terminator", "October 26, 1984", "The Terminator is a 1984 American science fiction film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose son will one day save mankind from extinction by a hostile artificial intelligence in a post-apocalyptic future. Michael Biehn plays Kyle Reese, a soldier sent back in time to protect Sarah. The screenplay is credited to Cameron and producer Gale Anne Hurd, while co-writer William Wisher Jr. received a credit for additional dialogue. Executive producers John Daly and Derek Gibson of Hemdale Film Corporation were instrumental in financing and production.", ["Arnold Schwarzenegger", "Michael Biehn", "Linda Hamilton", "Paul Winfield"]],
    ["Terminator 2: Judgment Day", "July 3, 1991", "Terminator 2: Judgment Day is the 1991 sequel to the original Terminator film and was released by TriStar Pictures. It was co-written, directed, and produced by James Cameron and stars Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick, and Joe Morton. After machines fail to prevent John Connor from being born, they try again in 1995, this time attempting to terminate him as a child by using a more advanced Terminator, the T-1000. As before, John sends back a protector for his younger self, a reprogrammed Terminator, who is a doppelgänger to the one from the previous film. After years of preparing for the future war, Sarah decides to use the same tactics the machines used on her: preventing Skynet from being invented by destroying Cyberdyne Systems before they create it. It was released on July 3, 1991, to critical acclaim and grossed $523.7 million worldwide. It also won several Academy Awards, one most notably for its then-cutting-edge computer animation. The film was remastered for 3D and re-released in August 2017.",["Arnold Schwarzenegger", "Linda Hamilton", "Robert Patrick"]],
    ["Terminator 3: Rise of the Machines", "July 2, 2003", "Terminator 3: Rise of the Machines, released by Warner Bros. Pictures in North America and Columbia TriStar Film Distributors internationally, is the 2003 sequel to Terminator 2 and is written by John Brancato, Michael Ferris, directed by Jonathan Mostow and starring Arnold Schwarzenegger, Nick Stahl, Claire Danes and Kristanna Loken. As a result of the destruction of Cyberdyne at the end of Terminator 2, the Skynet takeover has been postponed, not averted. In an attempt to ensure a victory by the machines, a new Terminator, the T-X, is sent back to terminate the lives of as many of John Connor's future lieutenants as is possible, including his future wife Kate Brewster, and also John himself. Kate's father, General Robert Brewster (David Andrews), who is supervising Skynet's development, is also targeted for termination by the T-X. After Connor's future self is terminated by a doppelgänger of his previous protector, Kate reprograms it and sends it back to save them both from the T-X. It was released on July 2, 2003 to generally favorable reviews and grossed $433.4 million worldwide.",["Arnold Schwarzenegger", "Nick Stahl", "Claire Danes", "Kristanna Loken"]]
];
const title = document.getElementById('film-title');
const date = document.getElementById('date');
const actors = document.getElementById('actors');
const description = document.getElementById('description');
const currentImage = document.getElementsByTagName('img')[0];
const currentFilm = document.getElementsByClassName('film-name');
function chooseFilm(index) {
    title.innerHTML = films[index][0];
    for (i of currentFilm){
        i.classList.remove('chosen');
    }
    currentFilm[index].classList.add('chosen');
    date.innerHTML = films[index][1];
    currentImage.setAttribute('src', images[index]);
    document.getElementById('actors').innerHTML = '';
    for(i of films[index][3]){
        const actor = document.createElement('div');
        actor.setAttribute('class', 'actor');
        actor.innerHTML = i;
        document.getElementById('actors').append(actor);
    }
    description.innerHTML = films[index][2];
}
chooseFilm(0);
document.getElementsByClassName('film-name')[0].onclick = () => chooseFilm(0);
document.getElementsByClassName('film-name')[1].onclick = () => chooseFilm(1);
document.getElementsByClassName('film-name')[2].onclick = () => chooseFilm(2);