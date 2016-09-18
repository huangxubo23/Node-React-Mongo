import alt from '../alt';

class AddCharacterActions {
    constructor() {
        this.generateActions(
            'addCharacterSuccess',
            'addCharactersFail',
            'updateName',
            'update Gender',
            'invaildName',
            'InvalidGender'
        )
    }

    addCharacter(name, gender) {
        $.ajax({
            type: 'POST',
            url: '/api/cbaracters',
            data: { name: name, gender: gender }
        })
            .done((data) => {
                this.actions.addCharacterSuccess(data.message);
            })
            .fail((jqxhr) => {
                this.actions.addCharacterFail(jqxhr.response.message);
            });
    }
}

export default alt.createActions(AddCharacterActions);