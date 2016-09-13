import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateOnlineUsers',          //当Socket.IO事件更新时设置在线用户数
            'updateAjaxAnimation',        //添加”fadeIn”或”fadeOut”类到加载指示器
            'updateSearchQuery',          //当使用键盘时设置搜索请求
            'getCharacterCountSuccess',
            'getCharacterCountFail',
            'findCharacterSuccess',
            'findCharacterFail'
        );
    }
    
    //根据名称查找角色
    findCharacter(payload) {
        $.ajax({
            url: '/api/characters/search',
            data: { name: payload.searchQuery }
        })
            .done((data) => {
                assign(payload, data);
                this.actions.findCharacterSuccess(payload);
            })
            .fail(() => {
                this.actions.findCharacterFail(payload);
            })
    }
    
    //从服务器获取总角色数
    getCharacterCount() {
        $.ajax({ url: '/api/characters/count' })
            .done((data) => {
                this.actions.getCharacterCountSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getCharacterCountFail(jqXhr);
            });
    }
}

export default alt.createActions(NavbarActions);