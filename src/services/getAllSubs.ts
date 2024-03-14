import fs from "fs";
import {Sub, SubsResponseFromApi} from '../components/types.d';
import subsData from '../informacion.json'
export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    return Promise.resolve(subsData);
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
    return apiResponse.map(subFromApi => {
        const {
        months: subMonths,
        profileUrl: avatar,
        nick,
        description,
        sexo
        } = subFromApi

        return {
        nick, 
        description,
        avatar,
        subMonths,
        sexo
        }
    })
}