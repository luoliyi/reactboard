import React,{Component} from 'react'
import BoardInput from './BoardInput'
import BoardShow from './BoardShow'
export default class BoardParent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        this.getChildVal = this.getChildVal.bind(this)
        this.delOneById = this.delOneById.bind(this)
    }

    // 新增
    getChildVal(val){
        const id = Date.now();
        this.setState({
            lists: this.state.lists.concat({
                id: id,
                text: val
            })
        })
    }

    // 单删
    delOneById(id) {
        let data = this.state.lists;
        this.setState({
            lists: data.filter((item, index) => {
                if (item.id !== id) {
                    return item;
                }
            })
        })
    }

    render() {
        return (
            <div>
                <BoardShow lists={this.state.lists} delOneById={this.delOneById} count={this.state.lists.length} />
                <BoardInput getChildVal={this.getChildVal} />
            </div>
        );
    }

    componentDidMount() {
    }

}
