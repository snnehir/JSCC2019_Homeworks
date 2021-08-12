const CustomerService = require("./customer-service")
const MovieService = require("./movie-service")

class TicketService {
    async buyTicket(customer, movie){
        customer.movies.push(movie)
        movie.viewers.push(customer)
        await movie.save()
        await customer.save()
    }
}

module.exports = new TicketService()