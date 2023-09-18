export const TextComponent = (props) => {
    const {h1,label,p,id}=props

  if (props.h1) {
    return <h1>{h1}</h1>;
  } else if(props.p) {
    return <p>{p}</p>;
  } else if(props.label) {
    return <label htmlfor="hi">{label}</label>;
  }
  else if(props.id) {
    return <label id={id} htmlfor="hi">{label}</label>;
  }
  else {
    return <p>Error from TextComponent</p>
  }
};
