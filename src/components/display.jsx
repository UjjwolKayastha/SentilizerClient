import React, { Component } from 'react'
import tableau from 'tableau-api';

class Display extends Component {
    initTableau(){
        const vizUrl = "https://public.tableau.com/views/TESLATWEETSENTIMENTANALYSIS/Dashboard1?:display_count=y&:origin=viz_share_link&:embed=true";
        //options
        const options = {
            hideTabs:true,
            width:"1200px",
            height:"1000px",
            onFirstInteractive:()=>{
                const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
                const options = {
                    ignoreAliases: false,
                    ignoreSelection: false,
                    includeAllColumns: false
                };
            }
    }
    let viz = new window.tableau.Viz(this.container, vizUrl, options);
        this.setState({
            viz:viz
        })
}
constructor(props) {
    super(props);
    this.state  = {viz:{}};
}
    render() {
        return (
            <div ref={c => (this.container = c)}
            style={{position:'fit'}}
            >
                
            </div>
        )
    }
    componentDidMount(){
        this.initTableau();
    }
}


export default Display;