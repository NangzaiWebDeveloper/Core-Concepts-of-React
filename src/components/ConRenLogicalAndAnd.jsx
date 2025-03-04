

const ConRenLogicalAndAnd = () => {

    let isLogIn = true;

    return (
        <div>
            {isLogIn && <button>Logout</button>}
        </div>
    );
};

export default ConRenLogicalAndAnd;