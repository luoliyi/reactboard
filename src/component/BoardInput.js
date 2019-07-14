import React,{Component} from 'react'
export default class BoardInput extends Component{
    constructor(props) {
        super(props);
        this.state={
            val:''
        }
        this.onTxtChange=this.onTxtChange.bind(this)
        this.sendToPar=this.sendToPar.bind(this)
    }
    onTxtChange(e){
        let val=e.target.value
        this.setState({
            val:val
        })
    }
    sendToPar() {
        if (this.state.val !== '')
            this.props.getChildVal(this.state.val)
    }

    render() {
        let styl={
            color:'#368',
            border:'none',
            padding:3
        }
        return (
            <div>
                    <h3>留下评论</h3>
                <input style={styl} type='text' onChange={this.onTxtChange}  value={this.state.val}/>
                <button onClick={this.sendToPar}>send</button>
            </div>
        );
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

}
