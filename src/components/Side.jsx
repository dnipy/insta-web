import instaICON from '../assets/instaICON.jpg'


export const Side = ()=>{
    return(
        <div className="side">
            <div className="main-side">
                <div class="row">
                    <div className="icon-avatar col-4">
                        
                    </div>
                    <div className="col-6  al-cen ">
                        <div>
                            <h3>dnipy</h3>
                            <p style={{color:'#555'}}>pick THE best FUCK rest</p>
                        </div>
                    </div>
                    <div className="col-2 al-cen">
                        <h6>
                            <a href="#">switch</a>
                        </h6>
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col-8">
                        <h3 style={{color:'#555'}}>suggestions for you</h3>
                    </div> 
                    <div className="col-3 al-cen">
                        <a href="#">
                            <h6>
                                see all    
                            </h6>    
                        </a>  
                    </div>   
                </div>
                <FakeUser uname='shayan_shat'/>
                <FakeUser uname='amir_w23'/>
                <FakeUser uname='atena.hr'/>
                <FakeUser uname='xxtenx89'/>
                <FakeUser uname='abbas_buazar'/>
            </div>
        </div>
    )
}


const FakeUser = ({uname})=>{
    return(
        <div className="row ">
                    <div className="col-9 row">
                        <div className="mmbrICON col-3">
                            <img src={instaICON} alt="fsdfa" height={60} width={60} />
                        </div>
                        <div className=" col-9">
                            <h5>{uname}</h5>
                            <p style={{color:'#555'}}>describe about ,,,</p>
                        </div>
                    </div> 
                    <div className="col-3 al-cen">
                        <a href="#">
                            <h6>
                                FOLLOW  
                            </h6>    
                        </a>  
                    </div>   
                </div>
    )
}