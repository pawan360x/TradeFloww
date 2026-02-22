import axios from "axios";

const api = axios.create({baseURL:process.env.REACT_APP_SERVER, withCredentials:true}); 

export const verify = ()=>{
   return api.get("/auth/verify"); 
}

export const logout = ()=>{
   return api.get("/auth/logout"); 
}

export const newOrder = async (data)=>{
  api.post("/orders/newOrder",data); 
  await getOrders(); 
}

export const getFunds = ()=>{
   return api.get("/portfolio/funds/data"); 
}

export const getAllHoldings = ()=>{
   return api.get("/portfolio/holdings/data"); 
}

export const getOrders = ()=>{
   return api.get("/orders/data"); 
}

export const getPositions = ()=>{
   return api.get("/portfolio/positions/data"); 
}

export const getNifty =() =>{
    return api.get("/market/nifty"); 
}

export const getWatchlist =() =>{
    return api.get("/market/watchlist/data"); 
}
