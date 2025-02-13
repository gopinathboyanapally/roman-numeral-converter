import { getQueryNumeral } from '../handlers/queryHandler.mjs';

describe('query the roman numeral', () => {
    it('should send the 200 response with the correct output', async () => {
        const mockRequest = {
            query: {
                query: '123'
            }
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
            
        };
        await getQueryNumeral(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.send).toHaveBeenCalledWith({
            input: '123',
            output: 'CXXIII'
        });
    });

    it('should send the 200 response with the correct output', async () => {
        const mockRequest = {
            query: {}
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
            
        };
        await getQueryNumeral(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
            error: 'The number shouldn\'t be empty.'
        });
    });

    it('should send the 400 response with the an error', async () => {
        const mockRequest = {
            query: {}
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
            
        };
        await getQueryNumeral(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
            error: 'The number shouldn\'t be empty.'
        });
    });

    it('should send the 400 response with the an error', async () => {
        const mockRequest = {
            query: {
                query: 'test_string'
            }
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
            
        };
        await getQueryNumeral(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.send).toHaveBeenCalledWith({
            error: 'Please enter a valid number in the range of 1-3999.'
        });
    });
});