import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    onFindCharacterSuccess(payload) {
        payload.router.transitionTo('/characters/' + payload.characterId);
    }

    onFindCharacterFail(payload) {
        payload.searchForm.classList.add('shake');
        setTimeout(() => {
            payload.searchForm.classList.remove('shake');
        }, 1000);
    }

    onUpdateOnlineUsers(data) {
        this.onlineUsers = data.onlineUsers;
    }

    onUpdateAjaxAnimation(className) {
        //fadein or fadeout
        this.ajaxAnimationClass = className;
    }

    onUpdateSearchQuery(event) {
        //因为onChange方法返回一个event对象，所以这里使用event.target.value来获取输入框的值
        this.searchQuery = event.target.value;
    }

    onGetCharacterCountSuccess(data) {
        this.totalCharacters = data.count;
    }

    onGetCharacterCountFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(NavbarStore);