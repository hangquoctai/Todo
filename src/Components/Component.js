import React , {Component} from 'react';
import './Component.css';
import checkmart from '../img/no-check.svg';
import deletes from '../img/delete.svg';
import checked from '../img/checked.svg';

class Todo extends Component {
    render(){
        const {item, onClick}=this.props;
        let className='TodoItem';
        let url=checkmart;
        if(item.isComplete==true){
            className +=' TodoItem-Complete';
            url=checked;
        }
        return( 
            <div className={className}>
                <img onClick={onClick} src={url}/>
                <p>{item.title}</p>
                <img onClick={this.DeleteItem} src={deletes}/>
            </div>
        );
    }
}

export default Todo;