
function Prologin(){
return( <>
<div className="show1">
  <div className="page1">
    <div className="wrapper">
    <div class="title"><span>PRO Login</span>
    <div className="i"><svg xmlns="http://www.w3.org/2000/svg" height="1.7rem" viewBox="0 -960 960 960" width="1.7rem" fill="#EFEFEF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
</div>
  <form action="#">
    <div className="input_div">
      <div class="row">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email or Phone" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" required />
      </div>
      </div>
      
      <div class="pass"><a href="#">Forgot password?</a></div>
      <button className="btn">Login</button>
      <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
    </form>
    </div>
  </div>
</div>
</>)
}
export default Prologin