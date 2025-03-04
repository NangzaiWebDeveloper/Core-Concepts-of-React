
const ConRenInTernary = () => {

    let mark = 70;

    return (
        <div>
            {
                mark>=80?
                <h1>Brilliant Result</h1>
                :
                <h1>Avarage Result</h1>
            }
        </div>
    );
};

export default ConRenInTernary;