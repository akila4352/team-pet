import './index.css'
const Login =()=>{ 
    return(
      <div>
          <body>
   <div class="container-fluid bg-dark text-light py-3">
       <header class="text-center">
           <h1 class="display-6">Welcome to our page</h1>
       </header>
   </div>
   <section class="container my-2 bg-dark w-50 text-light p-2">
    <form class="row g-3 p-3">
      
           
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
       
        <div class="col-12">
          <button type="submit" class="btn btn-primary">LOg in</button>
        </div>
      </form>
   </section>
  </body>
           
      </div>
    )
  }
  export default Login;