function Title() {
  let name = "Paras";
    return(
      <div>
        <h1>I am the title !</h1>;
        <h3>This is Description for the Project</h3>
        {/* <h1>2 * 2 = { 2 * 2 }</h1> */}
        <h1>Hi , {name.toUpperCase()}</h1>
      </div>
    );
  }

export default Title;