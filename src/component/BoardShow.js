import React,{Component} from 'react'
export default class BoardShow extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.delOneById = this.delOneById.bind(this)
    }
    delOneById(id) {
        this.props.delOneById(id)
    }

    render() {
        let data = this.props.lists || []
        return (
            <div>
                <h3>评论列表</h3>
                <ul style={{listStyle:'none'}}>
                    {
                        data.map((item,index)=>{
                            return(
                                <li key={index}>{item.text}
                                    <span style={{color:'red'}} onClick={()=>this.delOneById(item.id)}>x</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <span>已有{this.props.count}条评论</span>
            </div>
        );
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //console.log(nextProps)
    }

}
