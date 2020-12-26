import React from 'react';
//import '../../css/PageTitle.css'
//import '../../css/main.css'
import Content from './Content'
import abc from '../../../src/a3.jpg'
import '../../css/OurTeam.css'

class OurTeam extends React.Component{
    render(){
        return(
            
                <div class="App">

<section>
      <div className="container">
        
          <Content 
          header={"Our Team"} 
          content={"We pride ourselves on providing superior service but you don't just have to take our word for it."}
          />
        
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <div className="team-member style4">
              <div className="avatar">
                <img src={abc} width="100"/>
              </div>
              <div className="info">
                <div className="name">
                  <a href="https://www.linkedin.com/in/suprithahs" target="_blank">Supritha Harishankar</a>
                </div>
                <div className="option">President
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member style4">
              <div className="avatar">
                <img src="../images/team/member-2.png" width="100"/>
              </div>
              <div className="info">
                <div className="name">
                  <a href="https://www.linkedin.com/in/kartik-nayak-2b120313b" target="_blank">Kartik Nayak</a>
                </div>
                <div className="option">Vice President Education
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member style4">
              <div className="avatar">
                <img src="images/team/member-2.png" width="100"/>
              </div>
              <div className="info">
                <div className="name">
                  <a href="https://www.linkedin.com/in/dwijab" target="_blank">Dwija Bagwe</a>
                </div>
                <div className="option">
                  Assosiate Vice President Education
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member style4">
              <div className="avatar">
                <img src="images/team/member-2.png" width="100"/>
              </div>
              <div className="info">
                <div className="name">
                  <a href="https://www.linkedin.com/in/harsha-dsouza-1254221a9/" target="_blank">Harsha DSouza</a>
                </div>
                <div className="option">Vice President Membership
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="team-member style4">
              <div className="avatar">
                <img src="images/team/member-2.png" width="100"/>
              </div>
              <div className="info">
                <div className="name">
                  <a href="https://www.linkedin.com/in/kruthika-ksudhama-a1b4291a9" target="_blank">Kruthika Sudhama</a>
                </div>
                <div className="option">
                  Assosicate Vice President Membership
                </div>
              </div>
            </div>
            </div>
      </div>
      </div>
      </section>
      <script src="./js/script.js"></script>

                </div>
           
        );
    }
}
export default OurTeam;