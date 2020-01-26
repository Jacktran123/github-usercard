/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
.get('https://api.github.com/users/Jacktran123')
.then( response => {
  console.log(response);
  let cardcomponent2=cardcomponent(response.data);
  parentDivCard.appendChild(cardcomponent2);
});

const friendsArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell' ];

friendsArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response);
      let cardcomponent3=cardcomponent(response.data);
      parentDivCard.appendChild(cardcomponent3);
    });
    
    
});


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


    
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:*/
const parentDivCard=document.querySelector('.cards');

 function cardcomponent(obj){
  let divcard=document.createElement('div');
  divcard.classList.add('card');

  let imgcard=document.createElement('img');
  imgcard.src= obj.avatar_url;

  let divinfocard=document.createElement('div');
  divinfocard.classList.add('card-info');

  let h3card=document.createElement('h3');
  h3card.classList.add('name')
  h3card.textContent= `${obj.name}`;


  let pcard1=document.createElement('p');
  pcard1.classList.add('username');
  pcard1.textContent= `${obj.login}`;

  let plocation=document.createElement('p')
  plocation.textContent=`${obj.location}`;

  let pfile=document.createElement('p');
  pfile.textContent= `Profile :`;
  
  let afile=document.createElement('a');
  afile.href= `${obj.html_url}`;
  afile.textContent=  `${obj.html_url}`;

  let pcard2=document.createElement('p');
  pcard2.textContent= `Followers : ${obj.followers}`;

  let pcard3=document.createElement('p');
  pcard3.textContent= `Following : ${obj.following}`;

  let pcard4= document.createElement('p')
  pcard4.textContent= ` Bio : ${obj.bio}`;

  divcard.appendChild(imgcard);
  divcard.appendChild(divinfocard);
  divinfocard.appendChild(h3card);
  divinfocard.appendChild(pcard1);
  divinfocard.appendChild(plocation);
  divinfocard.appendChild(pfile);
  pfile.appendChild(afile);
  divinfocard.appendChild(pcard2);
  divinfocard.appendChild(pcard3);
  divinfocard.appendChild(pcard4);
  

  return divcard;

}
      
/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
