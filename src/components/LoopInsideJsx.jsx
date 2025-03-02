
const LoopInsideJsx = () => {

    let items = ["Nangzai", "Sushil", "Joy", "Baron"]

    return (
        // Number - 03 
        <div>
            <ul>
                {/* {
                    items.map((item, index)=>( //if you use first bracket"()" then you do not need to use return.
                        <li key={index}>{item}</li>
                    ))
                } */}

                {
                    items.map((item, index)=>{ //if you use curly bracket"{}" or 2nd bracket then you need to use return.
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default LoopInsideJsx;