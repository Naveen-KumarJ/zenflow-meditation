const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNavBar = document.getElementById('mobile-navbar');
const authButtons = document.getElementById('auth-buttons');
const mobileAuthButtons = document.getElementById('mobile-auth-buttons');
const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);

hamburgerMenu.addEventListener('click', () => {
  mobileNavBar.classList.toggle('hidden');
});

if (user) {
  authButtons.innerHTML = `<p class="text-white">Hi, <span class="font-semibold">${user.name}</span></p>
      <button class="logout-btn cursor-pointer font-semibold text-white px-4 py-1 rounded-full border border-white hover:bg-white hover:text-black transition">Logout</button>`;
    
    mobileAuthButtons.innerHTML = authButtons.innerHTML;

    document.querySelectorAll('.logout-btn').forEach(eachBtn=>eachBtn.addEventListener('click', () => {
      localStorage.removeItem("currentUser");
      window.location.reload();
    }));
} else {
  authButtons.innerHTML = `<button class="login-btn cursor-pointer font-bold px-4 py-1 bg-white text-black rounded-full">Log in</button>
                          <button class="signup-btn cursor-pointer font-bold px-4 py-1 border border-white text-white rounded-full">Sign up</button>`;
  mobileAuthButtons.innerHTML = authButtons.innerHTML;
}


document.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',(e)=>{
    if(e.target.innerText == "Sign up") window.location.href = 'signup.html';
    else if(!user){
      window.location.href = 'login.html';
      return;
    }
    if(e.target.id=='watch-video-btn') window.location.href = 'scenes.html';
    else if(e.target.id=='listen-now-btn') window.location.href = 'harmony.html';
    else if(e.target.id=='start-breathing-btn') window.location.href = 'relaxbreathe.html'
    else if(e.target.id=='hope-btn') window.location.href = 'hope.html'
    // console.log(e);
}))