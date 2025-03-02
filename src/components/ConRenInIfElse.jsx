// Conditional rendering....

// EX : 01
// It is good for application,

const LoginStatusBtn =(status)=>{//here we set our condition
    if(status){
        return <button>LogIn Btn</button>
    }
    else{
        return <button>LogOut Btn</button>
    }
}

const ConRenInIfElse = () => {
    return (
        <div>
            <h3>LogIn Button</h3>
            {LoginStatusBtn(false)} 
        </div>
    )            
    };
    
    export default ConRenInIfElse;





// EX : 02 
// It is not good for application, code is too long sometimes code is run slow

// const ConRenInIfElse = () => {

// const status = true;

//     if(status == true){
//         return (
//             <div>
//                 <h2>logIn button </h2>
//                 <button>logIn</button>
//             </div>
//         );
//     }
//     else{
//         return (
//             <div>
//                 <h2>logOut button </h2>
//                 <button>logOut</button>
//             </div>
//         )
//     }
// };

// export default ConRenInIfElse;