import "./card.css"


const Card = () => {
    return (<>
        <center>
                <br/>
                <br/>
                
            
            <h1>Move The Mouse Over This Card</h1>
            <br/><br/>
            
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="https://static.vecteezy.com/system/resources/previews/008/957/306/non_2x/avatar-of-a-young-man-in-a-cap-illustration-in-flat-style-vector.jpg" 
                  alt="Avatar" width="400px" height="400px"/>
                  <h2>Hi, I’m Mr-Anbarasu-AN</h2>
                </div>
                <div class="flip-card-back"><br/>
                    <img src="https://cdn3.iconfinder.com/data/icons/users/100/user_male_1-512.png" 
                    alt="Avatar" width="200px" height="200px"/>
                  <h1>My Bio...!!!</h1> 
                  <p>I'm doing Photo Editing,<br/>
                     Logo Designing & Programming<br/>
                    and I learning Full stack Development.<br/><br/>
                    </p>
                    
                    <h2>Just you can Try This...!!!</h2>
                </div>
              </div>
            </div>
        </center>
         </>
       );
     };
export default Card;