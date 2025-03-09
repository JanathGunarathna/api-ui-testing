describe('API Testing: GET APIs', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    
    // Test to fetch all books
    it('Should fetch all books successfully', () => {
        cy.request({
            method: 'GET',
            url: baseUrl,
            auth: {
                username: 'admin', // Username for authentication
                password: 'password' // Password for authentication
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Validate status code
            expect(response.body).to.be.an('array'); // Validate response is an array
        });
    });

    // Test to fetch a book by ID
    it('Should fetch a specific book by ID successfully', () => {
        const bookId = 1; // Replace with a valid ID from your dataset
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: {
                username: 'admin', // Username for authentication
                password: 'password' // Password for authentication
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Validate status code
            expect(response.body).to.have.property('id', bookId); // Validate ID
            expect(response.body).to.have.property('title'); // Validate title exists
            expect(response.body).to.have.property('author'); // Validate author exists
        });
    });

    // Test for fetching a non-existing book
    it('Should return 404 for a non-existing book ID', () => {
        const invalidBookId = 999; // Replace with an ID that doesn't exist
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${invalidBookId}`,
            auth: {
                username: 'admin', // Username for authentication
                password: 'password' // Password for authentication
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx responses
        }).then((response) => {
            expect(response.status).to.eq(404); // Validate 404 status
            cy.log('Response Body:', response.body); // Log response for debugging
            expect(response.body).to.eq('Book not found');
        });
    });
});
