import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            users: [],
            buses: [],
            tickets: [],
            prices: [],
            stops: [],
            places: [],
            murals: [],
            date_intervals: [],
            hour_intervals: [],
            tour_schedules: [],
            tours: [],
            schedules: [],
            companies: [],
            ticket_types: [],
            place_types: [],
            purchases: [],
            narratives: [],
            bracelets: [],
            tour_places: [],
            place_images: [],
            activations: [],
            tour_stops: [],
            images: [],
            data: {}
        },
        //modification of values
        mutations: {
            /**
            destroySession(state, payload){
                state.userInfo = []
            },
             */
            storeUsers(state,payload){
                state.users = payload.users
            },
            storeBuses(state,payload){
                state.buses = payload.buses
            },
            storeTickets(state,payload){
                state.tickets = payload.tickets
            },
            storePrices(state,payload){
                state.prices = payload.prices
            },
            storeStops(state,payload){
                state.stops = payload.stops
            },
            storePlaces(state,payload){
                state.places = payload.places
            },
            storeMurals(state,payload){
                state.murals = payload.murals
            },
            storeDate_intervals(state, payload){
                state.date_intervals = payload.date_intervals
            },
            storeHour_intervals(state, payload){
                state.hour_intervals = payload.hour_intervals
            },
            storeTour_schedules(state, payload){
                state.tour_schedules = payload.tour_schedules
            },
            storeTours(state, payload){
                state.tours = payload.tours
            },
            storeSchedules(state, payload){
                state.schedules = payload.schedules
            },
            storeCompanies(state, payload){
                state.companies = payload.companies
            },
            storeTicket_types(state, payload){
                state.ticket_types = payload.ticket_types
            },
            storePlace_types(state, payload){
                state.place_types = payload.place_types
            },
            storePurchases(state, payload){
                state.purchases = payload.purchases
            },
            storeNarratives(state, payload){
                state.narratives = payload.narratives
            },
            storeBracelets(state, payload){
                state.bracelets = payload.bracelets
            },
            storeTour_places(state, payload){
                state.tour_places = payload.tour_places
            },
            storePlace_images(state, payload){
                state.place_images = payload.place_images
            },
            storeActivations(state, payload){
                state.activations = payload.activations
            },
            storeTour_stops(state, payload){
                state.tour_stops = payload.tour_stops
            },
            storeImages(state, payload){
                state.images = payload.images
            }
        },
        getters: {
            /*
            getToken(state){
                return token;
            }

            getShoppingCartProduct(state,id){
                return state.shoppingCart[id];
            }
            */
        }
    })
}

export default createStore


//Get: store.state.THING 
//set:  store.commit('functionInMutation', payload) <-- payload should be object with all params
/**
 * also valid: 
  store.commit({
  type: 'setToken',
  token: 'algo'
})& */