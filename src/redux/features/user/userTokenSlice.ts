import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserToken {
    token: string;
}

const initialState: IUserToken = {
    token: '',
};
const userTokenAccessSlice = createSlice({
    name: 'userAccessToken',
    initialState,
    reducers: {
        addUserAccessToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        removeUserAccessToken: (state) => {
            state.token = '';
        },
    }
});

export const {  addUserAccessToken, removeUserAccessToken } = userTokenAccessSlice.actions;
export default userTokenAccessSlice.reducer;