export default class MdLobbyConstants {

    public static lobbyTypes: 
        { 
            EXPO: string, 
            SESSIONS: string, 
            SPONSOR: string 
        } = {
            EXPO: 'expo',
            SESSIONS: 'sessions',
            SPONSOR: 'sponsor'
    };
    
    public static lobbySubTypes: 
    {
        FIVE: string,
        NINE: string,
        THIRTY: string
    } = {
        FIVE: 'five',
        NINE: 'nine',
        THIRTY: 'thirty'
    };

}