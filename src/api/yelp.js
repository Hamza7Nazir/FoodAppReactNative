import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer X4F_us9W_DobxgdRvHLD_ZrLLkzv6aBzfZ4u7_bIUjrp83LI8WQR6kZJaENunkPdMFqzXCMCVeBpZzMj4q7xrq_9U0QQcifll00r0K_WDaQ_e-hu8wdyUyfJL5HhX3Yx'
    }
});