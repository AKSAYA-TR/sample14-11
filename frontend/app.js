function handleLogin()
{
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const error=document.getElementById('error')

    const loginData=[
        (username:"cristiano",password:"pass123"),
        (username:"virat",password:"123pass"),
        (username:"username",password:"password"),
    ]

    const isValid= loginData.some((user)=>user.username===username && user.password===password)
    if(isValid)(
        window.location.href='login.html'
        error.innerText="login successful";
    )
    else(
        error.innerText="Invalid credentials";
    )
}