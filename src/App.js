import React from "react"
import Header from "Header"
import Action from "Action"
import options from "./options"


class App extends React.Component {
  render() {
    const title="Todoo Application";
      const substitute="Todoos to focus on;" 
        return (
          <div>
            <Header titleData={title} subtitleData={subtitle} />
            <Action/>
            <options/>
            <Addition/>

          </div>
        );
  }
}
 


export default App;
