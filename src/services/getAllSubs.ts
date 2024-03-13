import axios from "axios";
import {Sub, SubsResponseFromApi} from '../types';

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    const response = await axios
      .get('http://localhost:3001');
    return response.data
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
    return apiResponse.map(subFromApi => {
        const {
        months: subMonths,
        profileUrl: avatar,
        nick,
        description
        } = subFromApi

        return {
        nick, 
        description,
        avatar,
        subMonths
        }
    })
}