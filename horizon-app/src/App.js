
import './App.css';

function App() {
  return (

    <div>
      <nav class="navbar1">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">RESTORE OFFICES</a>
          </div>
          <div class="icon">
            <img src="./officeimages/th (3).jpg" className="icon1" />
            <img src="officeimages/th (5).jpg" class="icon1" />
          </div>
          
            <ul class="nav navbar-nav navbar-right">
              <li><a href="index.html">ABOUT US</a></li>
            
            </ul>
        </div>
      </nav>
    
    

      <div class="container-fluid">
      <div class="row">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
  
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="officeimages/campaign-creators-gMsnXqILjp4-unsplash.jpg"alt="corneroffice" />
        <div class="carousel-caption">
        </div>
      </div>
      <div class="item">
        <img src="officeimages/nick-fewings-jBmNAt2p8-s-unsplash.jpg" alt="" />
        <div class="carousel-caption">
        </div>
      </div>
    </div>
  
 
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

 </div>
</div>
      




<div class="container ">
  <div class="row US">
    <h3 class="text-center">PLANS</h3>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" className="pic1" />
        <div class="caption">
          <h3>VIRTUAL OFFICES</h3>
          <p>Our virtual offices allow your business to get our location 
              address, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/toa-heftiba-FV3GConVSss-unsplash.jpg" alt="..." />
        <div class="caption">
          <h3>SERVICED OFFICES</h3>
          <p>Our customised offices offer a great location for your business 
            and you office to suit your preferences.Also, you become a member of our community with
            benefits such as access to our meeting rooms. 
          </p>
    </div>
    </div>
    </div>
    

    <div class="col-md-3">
        <div class="thumbnail">
          <img src="officeimages/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg" alt="..." />
          <div class="caption">
            <h3>CONFERENCE ROOM</h3>
            <p>Our serviced offices offer a great location for your business 
                and we provide services such as internet,utilities and others from our partners.
                Also you become a memeber of our community with benefits such as access to our meeting rooms.
            </p>
         </div>
         </div>
      </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="officeimages/damir-kopezhanov-luseu9GtYzM1-unsplash.jpg" alt="..." className="pic1" />
        <div class="caption">
          <h3>MEETING ROOM</h3>
          <p>Our meeting rooms offer a great location for your meeting with your clients or business partners 
            We provide presentations equipments and coffee. Also you become a member of our community with benefits
             such as access to our meeting rooms.
          </p>
        </div>
      </div>
    </div>
   </div>
  </div>


    <div className="container-fluid">
      <div class="footer">
        <div class="row">
         <div class="col-md-12">
            <div class="col-md-4">
                <h4>VISIT US</h4>
                <h6>Accra,Ghana</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo enim nihil, facere veniam iste
               </p>
            </div>
            <div class="col-md-4">
                <h4>CONTACT US</h4>
                <p>
                    +000 0000 000 000
                </p>
            </div>
            <div class="col-md-4">
                <h4>VISIT OUR WEBSITE</h4>
                <p>www.restore.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  );
};

export default App;
