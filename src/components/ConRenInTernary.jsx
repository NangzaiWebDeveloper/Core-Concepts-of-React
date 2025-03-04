
const ConRenInTernary = () => {

    let status = true;

    return (
        <div>
            {
                status?
                <h1>Logout</h1>
                :
                <h1>Login</h1>
            }
        </div>
    );
};

export default ConRenInTernary;