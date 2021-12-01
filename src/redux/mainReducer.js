let initialState = {};

fetch("https://api.pexels.com/v1/search?query=people",{
        headers: {
          Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
        }
      })
         .then(resp => {
           return resp.json()
         })
         .then(data => {
           console.log(data.photos)
         })



const mainReducer = (state = initialState, action) => {
    
    

    return state;
}

export default mainReducer;