import { API_URL } from "../app/(home)/page";

async function getMovie() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    throw new Error('something broke...');
    // const response = await  fetch(API_URL);
    // const json = await  response.json();
    // return json;
}

export default async function MoveInfo({id} : {id:string}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}