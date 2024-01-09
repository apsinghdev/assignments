// creare a wrapper component

function WrapperApp(){
    return (
      <div>
        <WrapperComponent>hi</WrapperComponent>
        <WrapperApp>
            <button>click on this</button>
        </WrapperApp>
        <WrapperApp>
            <p>we love our earth</p>
        </WrapperApp>
      </div>
    );
    
}

function WrapperComponent({children}){
    return(
        <div style={{padding: 10, margin: 10, border: "dotted black 1px" }}>
            {children}
        </div>
    )
}

export default WrapperApp;