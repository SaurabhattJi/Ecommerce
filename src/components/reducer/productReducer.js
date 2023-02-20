const productReducer =(state,action)=>{

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem)=>{    
               return curElem.featured === true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData,
            }
    
        default:
            return state;
            
    }
};
export default productReducer;