import { configureStore, createSlice } from "@reduxjs/toolkit";
import { STOCK_LIST } from "./data";

const initialState = {
    stocks: STOCK_LIST,
    user: {
        funds: 10000,
        portfolio: []
    }
}

const stocksSlice = createSlice({
    name: 'stocks',
    initialState: initialState,
    reducers: {

        // assume the quantity is always 1
        buyStockFromMarket: (state, action) => {
            const stock = state.stocks.find(stock => stock.id === action.payload.id);
            const funds = state.user.funds;
            const price = stock.price;

            if (funds >= price) {
                state.user.funds = funds - price;
                // if the stock already there is portfolio, increase the quantity
                if (state.user.portfolio.some(stock => stock.id === action.payload.id)) {
                    state.user.portfolio = state.user.portfolio.map(stock => {
                        if (stock.id === action.payload.id) {
                            return { ...stock, quantity: stock.quantity + 1 };
                        }
                        return stock;
                    });
                } else {
                    state.user.portfolio.push({ ...stock, quantity: 1 });
                }
            } else {
                console.error('Insufficient funds');
            }
        },

        sellStockFromPortfolio: (state, action) => {
            const stock = state.user.portfolio.find(stock => stock.id === action.payload.id);
            const funds = state.user.funds;
            const price = stock.price;

            state.user.funds = funds + price;

            // if the stock is already there in portfolio, decrease the quantity
            if (stock.quantity > 1) {
                state.user.portfolio = state.user.portfolio.map(stock => {
                    if (stock.id === action.payload.id) {
                        return { ...stock, quantity: stock.quantity - 1 };
                    }
                    return stock;
                });
            } else {
                state.user.portfolio = state.user.portfolio.filter(stock => stock.id !== action.payload.id);
            }

        },
    }
});

const store = configureStore({
    reducer: stocksSlice.reducer
});

export const { buyStockFromMarket, sellStockFromPortfolio } = stocksSlice.actions;

export default store;