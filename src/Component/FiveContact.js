
const FiveContact = (props) => {

const remove = (a) => {
        props.setContact((current) =>
          current.filter((e) => e.id !== a)
        );
      };
   

    return(
        <>
        {props.contacts.map((element,index)=> 
            <tr key={index}>
                <td><img width="50px" src={element.pictureUrl} alt="ContactPicture"/></td>
                <td>{element.name}</td>
                <td>{element.popularity.toFixed(2)}</td>
                <td>{element.wonOscar ? "🏆" : ""}</td>
                <td>{element.wonEmmy ? "🌟" : ""}</td>
                <td><button onClick={() => remove(element.id)}><span>Remove</span></button></td>
            </tr>
          )}
          </>
    )
}

export default FiveContact