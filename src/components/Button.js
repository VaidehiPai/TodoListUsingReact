// Path: src/components/Button.js

function Button(props) {
    switch (props.color) {
      case 'green': { 
        return (
          <button
            style={{ background: 'white', color: 'green',borderRadius:5,border:'1px solid green',alignContent:'center',width:'100px',height:'30px' }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      case 'red': { 
        return (
          <button
            style={{ background: 'white', color: 'red',borderRadius:5,border:'1px solid red',width:'100px',height:'30px'  }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      default: {
        return <button onClick={props.onClick}>{props.children}</button>;
      }
    }
}
  
  
export default Button;
