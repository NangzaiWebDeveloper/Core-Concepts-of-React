

const ConRenInSwitchStatement = () => {
    const isLoggedIn = true;

    switch(isLoggedIn){ //switch statement
        case true:
            return <button>Logged Out</button>
        case false:
            return <button>LogIn</button>
        default:
            return null;
    }
};

export default ConRenInSwitchStatement;