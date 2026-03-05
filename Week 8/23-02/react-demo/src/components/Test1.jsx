function Test1(props)
{
    // { message1: "", message2: ""}
    

    return(        
        <div className="bg-amber-400 p-10 m-5">
            <p className="text-3xl">{props.messages.message1}</p>
            <p className="text-3xl">{props.messages.message2}</p>
        </div>
    )
}

export default Test1