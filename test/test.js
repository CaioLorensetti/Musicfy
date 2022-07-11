const server = require('../src/app.js')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('User Endpoints', () => {

    it('GET /playlists-test should show all playlists', async () => {
        const res = await requestWithSupertest.get('/playlists-test');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        // expect(res.body).toHaveProperty('PlaylistId')
    })

})