import phoneIMG from '../../assets/phoneIMG.png'
import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'


export default function IndexReg() {
    return(
        <div className="center-responsive">
            <div className="signin-page row">
                <div className="signin-img  col-lg-4 col-md-12 mb-md-5">
                    <img src={phoneIMG} alt=""  width='100%' />
                </div>
                <div className="signin-form col-lg-8 col-md-12">
                    <div className="form-style">
                        <h1>instagram</h1>
                        <form>
                        
                            <input placeholder='username , email , phoneNumber' type="text"  />
                            <input placeholder='password' type="text"  />
                            <button>login</button>
                        </form>

                        <a href="#">forgot password?</a>
                    </div>
                    <div className="bottom-text-index">
                        <p>dont have account? <a href="#">Sing Up</a></p>
                    </div>
                    <p>get the app</p>
                    <div className="get-app">
                        <div>
                            <img src={appStore} alt="" />
                        </div>
                        <div>
                            <img src={googlePlay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}