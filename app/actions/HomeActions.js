import alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getTwoCharactersSuccess',
            'getTwoCharactersFail',
            'voteFail'
        )
    }

    getTwoCharacters() {
        $.ajax({ url: '/api/character' })
            .done((data) => {
                this.actions.getTwoCharactersSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
            });
    }

    vote(winner, loser) {
        $.ajax({
            type: 'PUT',
            url: '/api/character',
            data: {
                winner: winner,
                loser: loser
            }
        })
            .done(() => {
                this.actions.getTwoCharacters();
            })
            .fail((jqXhr) => {
                this.actions.voteFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(HomeActions);