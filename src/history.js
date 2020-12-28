import {createBrowserHistory} from 'history';
const history=createBrowserHistory({basename:'/WebsiteReact'});
history.listen(_ => {
    window.scrollTo(0, 0)  
})
export default history;