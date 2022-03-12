import phoneIMG from '../../assets/phoneIMG.png'
import appStore from '../../assets/app-store.png'
import googlePlay from '../../assets/google-play.png'



export default function SinnUp() {
    return(
        <div className='justify-content-center align-item-center row signup'>
            <div className="signin-form col-lg-4 col-md-12">
                    <div className="form-style">
                        <h1>instagram</h1>
                        <form>
                            <input placeholder='email , phoneNumber' type="text"  />
                            <input placeholder='full name' type="text"  />
                            <input placeholder='username' type="text"  />
                            <input placeholder='password' type="text"  />
                            <button>login</button>
                        </form>

                    </div>
                    <div className="bottom-text-index">
                        <p>have account? <a href="#">Sing In</a></p>
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
    )
}