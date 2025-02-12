interface LoginParams{
    email:string;
    password:string;
}

export const handleLogin=async({email,password}:LoginParams)=>{
    try{
        const res = await Promise.resolve({ success: true, user: { email, token: "fake_token_123" } });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (res.success) {
           // localStorage.setItem("user", JSON.stringify(res.user));
            return { success: true, message: "Login successful", token: res.user.token };
        } else {
            return { success: false, message: "Invalid credentials" };
        }
    }
    catch(error){
        return { success: false, message: "Something went wrong. Please try again later." };
    }
}
