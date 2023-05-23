import '../css/styles.css'

function Home() {

    return (


<div class="contain">

    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" styles={{backgroundcolor: 'rgba(195, 245, 239, 0.141)'}}>
        <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
            <i class="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
        </a>
        <a href="/profile" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-user w3-xxlarge"></i>
            <p>PROFILE</p>
        </a>
        <a href="#photos" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-eye w3-xxlarge"></i>
            <p>SIGN OUT</p>
        </a>
        <a href="/home" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-envelope w3-xxlarge"></i>
            <p>REGISTER</p>
        </a>
    </nav>

    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div class="w3-bar w3-blue w3-opacity w3-hover-opacity-on w3-center w3-small">
            <a href="#" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>HOME</a>
            <a href="/profile" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>PROFILE</a>
            <a href="#photos" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>SIGN OUT</a>
            <a href="/home" class="w3-bar-item w3-button" styles={{width:'25% !important'}}>REGISTER</a>
        </div>
    </div>

<div class="w3-padding-large" id="main">
    <header class="w3-container w3-padding-32 w3-center w3-blue" id="home">
        
        <h1 class="w3-jumbo"><b>SupportED</b></h1>
        <p>Education Support Website</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </header>

    <div class="w3-content w3-justify w3-text-black w3-padding-32" styles={{texitAlign:"center"}} id="about">
        <hr styles={{width: '250px'}} class="w3-opacity"/>
        <p>Education Is the key to personal and societal
            development. And the rural area education can be challenging
            due to various factors such as limited resources, lack of access
            to quality education, and inadequate infrastructure. One of the
            main challenges in rural education is the shortage of qualified
            teachers. The rural area education web app is a platform
            designed to provide educational resources and support to
            students in rural area. The web app aim to bridge the gap in
            educational opportunities between urban and rural areas, and
            provide equal access to quality education for all. The study
            examines the effectiveness of the app's features, student login,
            register mentor login,register,articles,books and scholarship.
            Overall, this all things help to increase education. And
            education is crucial for personal growth, societal development,
            and economic prosperity. It is an investment in the future of
            individuals, communities, and nations.
        </p>
    
        <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">11+</span><br/>
                    Partners
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">55+</span><br/>
                    Books & Articles
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">89+</span><br/>
                    Happy students
            </div>
            <div class="w3-quarter w3-section">
                <span class="w3-xlarge">15+</span><br/>
                    Mentors
            </div>
        </div>
    </div>

    <div class="w3-padding-32 w3-content w3-text-black" id="contact">
        <h2 class="w3-text-black">Contact Us</h2>
        <hr styles="width:200px" class="w3-opacity"/>

        <div class="w3-section">
        <p><i class="fa fa-map-marker fa-fw w3-text-black w3-xxlarge w3-margin-right"></i> Kandy, SL</p>
        <p><i class="fa fa-phone fa-fw w3-text-black w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
        <p><i class="fa fa-envelope fa-fw w3-text-black w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
        </div><br/>
    </div>
    </div>
</div>

    )
}

export default Home;