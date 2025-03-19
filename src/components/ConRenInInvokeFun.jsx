
const ConRenInInvokeFun = () => {

    let status = true

    return (
        <div>
            {(()=>{
                if(status == true){
                    return <button>Logout</button>
                }
                else{
                    return <button>Login</button>
                }
            })()}
        </div>
    );
};

export default ConRenInInvokeFun;



