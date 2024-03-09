import React, {useState} from "react";

function Image(){

    const [file,setFile]=useState();
    function handleChange(e){
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        
    }

    return(
        <div className="Image">
            <h2>Resim Ekleyiniz:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file}/>

        </div>
    )
}

export default Image;


