export interface SearchUserInputs{
    username: string;
}

export interface SearchUsersData {
    searchUsers:Array<SearchedUser>
}

export interface SearchedUser{
    id:string,
    userName:string
}