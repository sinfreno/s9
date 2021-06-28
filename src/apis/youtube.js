import axios from 'axios';

const KEY='[AIzaSyA1WthT99doR_wKx24hp5ZH5sQ5Wqz5V7Q]'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:5,
        key: KEY
    }
})