export const getParamsAndUsername = async (payload)=> {
    const transactionType = payload.params.type;
    return{
        username: payload.userNameId,
        type: transactionType === "income" ? "income" : "expense",
    }
}